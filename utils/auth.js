import {AsyncStorage} from 'react-native';

let user = null;
const STORAGE_KEY = '$$USER';
export const auth = {
    async bootstrap () {
        return auth.loadUser()
    },

    async saveToken(token) {
        user = {token};
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    },

    async loadUser() {
        const savedUser = await AsyncStorage.getItem(STORAGE_KEY) || 'null';
        user = JSON.parse(savedUser);
    },
    getToken() {
        return user && user.token
    },
    isLoggedIn() {
        return !!auth.getToken()
    },
    logout() {
        auth.setToken(null)
    }
};
