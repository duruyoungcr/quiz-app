import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native'



const Register = ({ navigation }) => {
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
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

    const handleRegister = async () => {
        setLoading(true)
        try {
            if (password !== confirmPassword) {
                alert('Password mismatch')
                setLoading(false)
            }
            else {
                let users = JSON.parse(await AsyncStorage.getItem('users')) || [];
                let existingUser = await users?.filter(user => user.email.toLowerCase() === email.toLowerCase()) || []
                if (existingUser.length > 0) {
                    alert('Email already in use')
                    setLoading(false)
                }
                else {
                    const user = { email, password, name };
                    users.push(user)
                    AsyncStorage.setItem('users', JSON.stringify(users))
                    AsyncStorage.setItem('user', JSON.stringify(user))
                    setTimeout(() => {
                        navigation.navigate('Home')
                        setLoading(false)
                    }, 2000);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light' animated={true} />
            <ScrollView style={styles.form}>
                <Text style={styles.title} h1>QUIZZO</Text>
                <View style={styles.inputContainer}>
                    <Input
                        type="text"
                        placeholder='Enter full name'
                        value={name}
                        autoFocus
                        onChangeText={(text) => setName(text)}
                        required
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        type="email"
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
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        type="password"
                        placeholder='Confirm your password'
                        value={confirmPassword}
                        onChangeText={(text) => setConfirmPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
                <View style={styles.actionsContainer}>
                    <Button
                        title='Register'
                        buttonStyle={styles.actionBtn}
                        onPress={handleRegister}
                        loading={loading}
                        disabled={!name || !email || !password || !confirmPassword}
                    />
                    <Text style={{ textAlign: 'center', fontSize: 18, marginVertical: 10 }}>or</Text>
                    <Button
                        title='Login'
                        buttonStyle={styles.actionBtn}
                        type='outline'
                        onPress={() => navigation.navigate('Login')}
                    />
                </View>
                <View style={{ height: 10 }}></View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Register


