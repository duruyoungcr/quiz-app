import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';



const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        checkLoginStatus();
    }, [])
    const checkLoginStatus = async () => {
        try {
            const user = await AsyncStorage.getItem('user');
            if (user !== null) {
                navigation.navigate('Home')
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleLogin = async () => {
        setLoading(true)
        try {
            let users = JSON.parse(await AsyncStorage.getItem('users')) || [];
            let existingUser = await users.filter(user => user.email.toLowerCase() === email.toLowerCase() && user.password === password)
            if (existingUser.length > 0) {
                AsyncStorage.setItem('user', JSON.stringify(existingUser[0]))
                setTimeout(() => {
                    setLoading(false)
                    navigation.navigate('Home')
                }, 2000);
            }
            else {
                setTimeout(() => {
                    setLoading(false)
                    alert('Incorrect email or password')
                }, 2000);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <View style={styles.form}>
                <StatusBar style='light' animated={true} />
                <Text style={styles.title} h1>QUIZZO</Text>
                <View style={styles.inputContainer}>
                    <Input
                        type="text"
                        placeholder='Enter email address'
                        value={email}
                        autoFocus
                        onChangeText={(text) => setEmail(text)}
                        required
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        type="password"
                        placeholder='Enter your password'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                        onSubmitEditing={handleLogin}
                    />
                </View>
                <View style={styles.actionsContainer}>
                    <Button
                        title='Login'
                        buttonStyle={styles.actionBtn}
                        onPress={handleLogin}
                        loading={loading}
                        disabled={!email || !password}
                    />
                    <Text style={{ textAlign: 'center', fontSize: 18, marginVertical: 10 }}>or</Text>
                    <Button
                        title='Register'
                        buttonStyle={styles.actionBtn}
                        type='outline'
                        onPress={() => navigation.navigate('Register')}
                    />
                </View>
                <View style={{ height: 10 }}></View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login

