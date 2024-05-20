import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Layout from '../design-system/components/Layout';
import {Text} from '../design-system/components/text';
import { useAppDispatch, useAppSelector } from '../utils/redux/hooks';
import { isLoggedIn, storage } from '../utils/localStorage';
import { setIsAuthenticated } from '../utils/redux/slices/auth-tracker';

function ProfileScreen() {
    const {firstName, lastName, email} = useAppSelector(state => state.profile);
    const dispatch = useAppDispatch();

    async function handleLogout() {
        await isLoggedIn.set("isLoggedIn", false);
        storage.clear();
        dispatch(setIsAuthenticated(false))
    }

    return (
        <Layout>
            <View style={styles.container}>
                <Text color="blue" variant="body-semibold">Name</Text>
                <Text style={styles.userData}>{`${firstName} ${lastName}`}</Text>
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
                <Text style={styles.userData}>{email}</Text>
            </View>
            {/* Button */}
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.text}>update</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logout} onPress={handleLogout}>
                <View style={styles.button}>
                    <Text style={styles.text}>Logout</Text>
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
    },
    logout: {
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop:80,
    }
})

export default ProfileScreen;