import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import {yupResolver} from '@hookform/resolvers/yup';
import {Button} from '../design-system/components/button';
import Layout from '../design-system/components/Layout';
import TextInput from '../design-system/components/TextInput';
import type {AuthStackScreenProps} from '../routes/types/auth-stack';
import {Box} from '../design-system/components/box/box';
import {Text} from '../design-system/components/text';

function ProfileScreen() {
    return (
        <Layout>
            <Box backgroundColor="warm" height={100} paddingTop={50} paddingHorizontal={20}>
                <Text color="blue" variant="heading-2">Personal Information</Text>
            </Box>
            <View style={styles.container}>
                <Text color="blue" variant="body-semibold">Name</Text>
                <Text style={styles.userData}>Rinwa Odejobi</Text>
            </View>
            {/* Button */}
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.text}>update</Text>
                </View>
            </TouchableOpacity>


            <View style={styles.container}>
                <Text>Phone Number</Text>
                <Text style={styles.userData}>07089258625</Text>
            </View>
            {/* Button */}
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.text}>update</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.container}>
                <Text>Email Address</Text>
                <Text style={styles.userData}>peterodejobi9@gmail.com</Text>
            </View>
            {/* Button */}
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.text}>update</Text>
                </View>
            </TouchableOpacity>
        </Layout>
    )
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 10,
    },
    userData: {
        opacity: 0.5,
        marginHorizontal: 5,
    },
    button: {
        marginHorizontal: 18,
        marginBottom: 20,
        borderRadius: 64,
        borderColor: "#061D37",
        borderWidth: 1,
        width:  100,
        padding: 10,
    },
    text: {
        textAlign: "center",
    }
})

export default ProfileScreen;