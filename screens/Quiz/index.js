import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native'
import { Button, Text } from 'react-native-elements'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { QUESTIONS_URL } from '../../config/api';
import tw from 'tailwind-react-native-classnames';
import { QuizContext } from '../../context/quizContext';
import Question from '../../components/Question';


const Quiz = ({ navigation }) => {
    const [questions, setQuestions] = useState([])
    const [completed, setCompleted] = useState(false)
    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    useEffect(() => {
        fetchQuestions()
        return fetchQuestions
    }, [])

    const fetchQuestions = async () => {
        try {
            let response = await fetch(QUESTIONS_URL).then(response => response.json())
            setQuestions(response.results)
        } catch (error) {
            console.log(error);
        }
    }
    const handleNext = () => {
        index < (questions.length - 1) ? setIndex(index + 1) : setCompleted(true)
    }
    const handleScore = () => {
        setScore(score + 1)
    }
    const getScoreRemark = () => {
        if (score > 8) {
            return 'Good job! Excellent work.'
        }
        else if (score > 5) {
            return 'Nice try! Better luck next time.'
        }
        else {
            return 'Poor attempt! Do better.'
        }
    }
    if (questions.length < 1) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title} h1>Fetching questions...</Text>
            </SafeAreaView>
        )
    } else {
        return (
            <QuizContext.Provider value={{ questions, index, score, handleNext, handleScore }}>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.title} h1>Quiz</Text>
                    {completed ?
                        <View style={tw`text-center w-full flex justify-center items-center`}>
                            <Text style={tw`mb-4`} h2>Completed</Text>
                            <Text style={tw`mb-4`} h3>
                                <Text style={styles.subTitle}>Score:</Text>{' '}
                                {score * 10}/100
                            </Text>
                            <Text h4>{getScoreRemark()}</Text>
                        </View>
                        :
                        <>
                            <View style={tw`flex flex-row w-full justify-between items-center px-4 mb-4`}>
                                <Text style={styles.detail} h5>
                                    <Text style={styles.subTitle}>Question:</Text>{' '}
                                    {index + 1}/{questions.length}
                                </Text>
                                <Text style={styles.detail} h5>
                                    <Text style={styles.subTitle}>Score:</Text>{' '}
                                    {score * 10}/100
                                </Text>
                            </View>
                            <View style={styles.question}>
                                <Question question={questions[index]} />
                            </View>
                        </>
                    }
                    <View style={styles.actionsContainer}>
                        <Text style={{ marginVertical: 10 }}></Text>
                        <Button
                            title={completed ? 'Go Home' : 'Stop Quiz'}
                            buttonStyle={styles.actionBtn}
                            type={completed ? 'solid' : 'outline'}
                            onPress={() => navigation.navigate('Home')}
                        />
                    </View>
                </SafeAreaView>
            </QuizContext.Provider>
        )
    }
}

export default Quiz

