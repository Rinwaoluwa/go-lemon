import createStorage from 'typed-async-storage';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';

const schema = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    token: PropTypes.string,
};

export const storage = createStorage({
    name: 'data', // name must be unique for every storage
    schema: schema,
    AsyncStorage,
});

const loggedInSchema = {
    isLoggedIn: PropTypes.bool,
}

export const isLoggedIn = createStorage({
    name: "auth",
    schema: loggedInSchema,
    AsyncStorage,
})