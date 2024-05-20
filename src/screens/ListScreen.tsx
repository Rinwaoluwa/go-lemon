import React, {useRef, useMemo, useCallback} from 'react';
import {StyleSheet,View,ScrollView, Pressable, Modal} from 'react-native';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Button, DualButton} from '../design-system/components/button';
import Layout from '../design-system/components/Layout';
import TextInput from '../design-system/components/TextInput';
import type {AuthStackScreenProps} from '../routes/types/auth-stack';
import {Box} from '../design-system/components/box/box';
import {Text} from '../design-system/components/text';
import Icon from '../assets/icons/icon';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';


type FormValues = {
    title: string;
    details: string;
  };

function ListScreen() {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ["25%","50%"], [])

    const {
        control,
        handleSubmit,
        formState: {errors},
      } = useForm<FormValues>({
        defaultValues: {
          title: '',
          details: '',
        },
        mode: 'onSubmit',
    })
      const handleOpenSheet = () => {
        bottomSheetRef.current?.expand();
      };

      const renderBackdrop = () => useCallback(() => (
          <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} />
      ), []);

      const handleOnSubmit = () => {
        bottomSheetRef.current?.close();
    }
    const handleCancel = () => {
          bottomSheetRef.current?.close();
    }

    return (
        <>
            <Layout>
                <View style={styles.header}>
                    <Box backgroundColor="warm" height={120} paddingTop={60} paddingHorizontal={8} style={styles.box}>
                        <Text color="black" variant="heading-2">Lists</Text>
                        <Icon name='bell'/>
                    </Box>
                </View>
            <ScrollView style={styles.container}>
                <Text color="grey1" variant="heading-2">Welcome, Rinwa 💚</Text>
                <Text color="grey2" variant="body-semibold">
                    Every GoMango experience starts with a List.
                    Lists help you shop smartly.
                </Text>

            </ScrollView>

            <Button title="+" borderRadius={500} style={styles.addToList} onPress={handleOpenSheet} />

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
                                // error={errors.email?.message}
                            name="title"
                        />
                        <TextInput
                            control={control}
                            label="Details"
                            placeholder="Details"
                            // error={errors.email?.message}
                            name="details"
                            multiline={true}
                            minHeight={100}
                            />
                        <DualButton firstButton={{onPress: handleCancel}} secondButton={{onPress: handleOnSubmit}}  />
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
    },
    header: {
        padding: 8,
        width: "100%",
    },
    box: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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