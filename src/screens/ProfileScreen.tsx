import React, { useMemo, useRef, useState } from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Layout from '../design-system/components/Layout';
import {Text} from '../design-system/components/text';
import { useAppDispatch, useAppSelector } from '../utils/redux/hooks';
import { clear, isLoggedIn, storage } from '../utils/localStorage';
import { setIsAuthenticated } from '../utils/redux/slices/auth-tracker';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import TextInput from '../design-system/components/TextInput';
import { Button, DualButton } from '../design-system/components/button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { updateProfile } from '../utils/redux/slices/profile';

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
};

function ProfileScreen() {
    const [isLoading, setIsLoading]= useState(false);
    const {firstName, lastName, email} = useAppSelector(state => state.profile);
    const dispatch = useAppDispatch();

    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ["25%","50%"], []);

    const {
        control,
        handleSubmit,
        formState: {errors},
        reset,
      } = useForm<FormValues>({
        defaultValues: {
          firstName: '',
          lastName: '',
          email: "",
        },
        mode: 'onSubmit',
    })

    const open = () => {
        bottomSheetRef.current?.expand();
    };

    const submit: SubmitHandler<FormValues> = async (data) => {
        if(!data.firstName && !data.lastName && !data.email) return;

        setIsLoading(true);
        const email = await storage.get("email");
        const firstName = await storage.get("firstName");
        const lastName = await storage.get("lastName");

        await storage.set("email", data.email);
        await storage.set("firstName", data.firstName);
        await storage.set("lastName", data.lastName);
        console.log("stored data", email, firstName, lastName)
        // if a user does not update their other details we want that to remain as before
        dispatch(updateProfile(
            {
                email: !data.email ? email : data.email,
                firstName: !data.firstName ? firstName : data.firstName,
                lastName: !data.lastName ? lastName : data.lastName,
            }
        ));

        reset();
        bottomSheetRef.current?.close();
        setIsLoading(false);
    };
    const close = () => {
        bottomSheetRef.current?.close();
    }

    async function handleLogout() {
        clear("firstName");
        clear("lastName");
        clear("email");
        clear("password");
        clear("isLoggedIn");
        dispatch(setIsAuthenticated(false))
    }

    return (
        <Layout>
            <View style={styles.root}>
            <View style={styles.container}>
                <Text color="blue" variant="body-semibold">Name</Text>
                <Text style={styles.userData}>{`${firstName} ${lastName}`}</Text>
            </View>

            <View style={styles.container}>
                <Text>Email Address</Text>
                <Text style={styles.userData}>{email}</Text>
            </View>
            <TouchableOpacity style={styles.logout} onPress={handleLogout}>
                <View style={styles.button}>
                    <Text style={styles.text}>Logout</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.editProfile}>
                <Button title="edit" borderRadius={500} onPress={open} />
            </View>

            <BottomSheet
                index={1}
                snapPoints={snapPoints}
                ref={bottomSheetRef}
                enablePanDownToClose={true}
                backdropComponent={() => <View />}
            >
                <BottomSheetView>
                    <View style={styles.bottomSheetContainer}>
                        <TextInput
                            control={control}
                            label="First Name"
                            placeholder="First Name"
                            error={errors.firstName?.message}
                            name="firstName"
                        />
                        <TextInput
                            control={control}
                            label="Last Name"
                            placeholder="Last Name"
                            error={errors.lastName?.message}
                            name="lastName"
                        />
                        <TextInput
                            control={control}
                            label="Email"
                            placeholder="Email"
                            error={errors.email?.message}
                            name="email"
                        />
                        <DualButton firstButton={{onPress: close}} secondButton={{onPress: handleSubmit(submit), disabled: isLoading}}  />
                    </View>
                </BottomSheetView>
            </BottomSheet>
            </View>
        </Layout>
    )
};

const styles = StyleSheet.create({
    root: {
        paddingTop: 20,
        flex: 1
    },
    container: {
        marginHorizontal: 15,
        marginVertical: 10,
        marginBottom: 20,
    },
    userData: {
        opacity: 0.5,
        marginHorizontal: 5,
    },
    button: {
        marginHorizontal: 18,
        borderRadius: 64,
        borderColor: "#061D37",
        borderWidth: 1,
        width:  100,
        padding: 10,
    },
    text: {
        textAlign: "center",
    },
    logout: {
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop:80,
    },
    bottomSheetContainer: {
        padding: 20,
    },
    editProfile: {
        width: 60,
        position: "absolute",
        bottom: 40,
        right: 20,
    }
})

export default ProfileScreen;