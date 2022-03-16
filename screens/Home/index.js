import React, { useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native'
import { Button, Text } from 'react-native-elements'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({})
    useEffect(() => {
        fetchUser()
        return () => {
            fetchUser()
        }
    }, [])

    const fetchUser = async () => {
        let user = JSON.parse(await AsyncStorage.getItem('user')) || {};
        user !== null ? setUser(user) : navigation.navigate('Login')
    }

    const handleLogout = async () => {
        setLoading(true)
        AsyncStorage.removeItem('user')
        setTimeout(() => {
            setLoading(false)
            navigation.navigate('Login')
        }, 2000);
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title} h1>Welcome! {user.name}</Text>
            <View style={styles.quizDetails}>
                <Text style={styles.subTitle} h4>Here are details of the quiz available to you:</Text>
                <Text style={styles.detail} h5><Text style={styles.subTitle}>Category:</Text> Vehicles</Text>
                <Text style={styles.detail} h5><Text style={styles.subTitle}>Difficulty:</Text> Easy, Medium, Hard</Text>
            </View>
            <View style={styles.actionsContainer}>
                <Button
                    title='Start Quiz'
                    buttonStyle={styles.actionBtn}
                    onPress={() => navigation.navigate('Quiz')}
                />
                <Text style={{ textAlign: 'center', fontSize: 18, marginVertical: 10 }}>or</Text>
                <Button
                    title='Logout'
                    buttonStyle={styles.actionBtn}
                    type='outline'
                    onPress={handleLogout}
                    loading={loading}
                />
            </View>
        </SafeAreaView>
    )
}

export default Home

