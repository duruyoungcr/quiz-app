import { useContext, useEffect, useState } from 'react'
import { View } from 'react-native'
import { Button, Text } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { QuizContext } from '../../context/quizContext'
import AnswerOption from '../AnswerOption'
import styles from './styles'
import _ from 'lodash'


const Question = (props) => {
    const { question, incorrect_answers, correct_answer, difficulty } = props.question
    const { handleNext, handleScore } = useContext(QuizContext)
    const [answers, setAnswers] = useState([])
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState()
    useEffect(() => {
        createAnswersArray(incorrect_answers, correct_answer)
    }, [incorrect_answers])
    const createAnswersArray = (incorrect_answers, correct_answer) => {
        let index = Math.round(Math.random() * incorrect_answers?.length + 1)
        let copyOfIncorrectAnswers = [...incorrect_answers]
        copyOfIncorrectAnswers.splice(index - 1, 0, correct_answer)
        setAnswers(copyOfIncorrectAnswers)
    }
    const submitAnswer = (index) => {
        setSelectedAnswerIndex(`${index}`)
        calculateScore(index)
        setTimeout(() => {
            setSelectedAnswerIndex()
            handleNext();
        }, 2000);
    }
    const calculateScore = (index) => {
        answers[index] === correct_answer && handleScore()
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{_.unescape(question)}</Text>
            <View style={styles.answers}>
                {answers && answers?.map((answer, index) => (
                    <AnswerOption
                        key={index}
                        answer={answer}
                        correct_answer={correct_answer}
                        selectedAnswerIndex={selectedAnswerIndex}
                        submitAnswer={submitAnswer}
                        index={index}
                    />
                ))}
            </View>
            <View>
                <Text style={tw`capitalize italic`} h5><Text style={styles.subTitle}>Difficulty:</Text> {difficulty}</Text>
            </View>
        </View>

    )
}

export default Question