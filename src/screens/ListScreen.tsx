import React, {useRef, useMemo, useState} from 'react';
import {StyleSheet,View,ScrollView,} from 'react-native';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Button, DualButton} from '../design-system/components/button';
import Layout from '../design-system/components/Layout';
import TextInput from '../design-system/components/TextInput';
import {Text} from '../design-system/components/text';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import ListItem from '../design-system/components/list-item';
import { useAppSelector } from '../utils/redux/hooks';


type FormValues = {
    title: string;
    description: string;
    index?: number;
};


function ListScreen() {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ["25%","50%"], []);
    const [listItem, setListItem] = useState<FormValues[]>([]);
    const {firstName} = useAppSelector(state => state.profile);

    const {control,
        handleSubmit,
        formState: {errors},
        reset,
      } = useForm<FormValues>({
        defaultValues: {
          title: '',
          description: '',
        },
        mode: 'onSubmit',
    })

    const open = () => {
        bottomSheetRef.current?.expand();
    };

    const submit: SubmitHandler<FormValues> = async (data) => {
        console.log("reached", data)
        if(!data.description || !data.title) {
            return;
        }

        setListItem(item => [...item, data]);
        reset();
        bottomSheetRef.current?.close();
    };
    const close = () => {
        bottomSheetRef.current?.close();
    }

    return (
        <>
            <Layout>
                <View style={styles.header}>
                </View>
            <ScrollView style={styles.container}>
                { listItem.length === 0 && (
                    <>
                        <Text color="grey1" variant="heading-2">Welcome, {firstName} 💚</Text>
                        <Text color="grey2" variant="body-semibold">
                            Every GoMango experience starts with a List.
                            Lists help you shop smartly.
                        </Text>
                    </>
                )}

                {listItem.map((item, index) => (
                    <ListItem key={index} index={index + 1} title={item.title} description={item.description} />
                ))}
            </ScrollView>

            <View style={styles.addToList}>
                <Button title="+" borderRadius={500} onPress={open} />
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
                            label="Title"
                            placeholder="Title"
                            error={errors.title?.message}
                            name="title"
                        />
                        <TextInput
                            control={control}
                            label="Description"
                            placeholder="description"
                            error={errors.description?.message}
                            name="description"
                            multiline={true}
                            minHeight={100}
                        />
                        <DualButton firstButton={{onPress: close}} secondButton={{onPress: handleSubmit(submit)}}  />
                    </View>
                </BottomSheetView>
            </BottomSheet>
            </Layout>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 20,
    },
    header: {
        padding: 8,
        width: "100%",
    },
    bottomSheetContainer: {
        padding: 20,
    },
    addToList: {
        width: 60,
        position: "absolute",
        bottom: 40,
        right: 20,
    }
});

export default ListScreen;