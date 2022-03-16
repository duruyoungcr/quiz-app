import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Splash = ({ navigation }) => {
    useEffect(() => {
        getUsers();
    }, [])
    const getUsers = async () => {
        try {
            const users = await AsyncStorage.getItem('users');
            const user = await AsyncStorage.getItem('user');
            if (users !== null) {
                user !== null ? navigation.navigate('Home') : navigation.navigate('Login')
            }
            else {
                navigation.navigate('Register')
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 600, letterSpacing: 4 }} h3>QUIZZO</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
})
