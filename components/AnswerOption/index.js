import { TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-elements'
import styles from './styles'

const AnswerOption = ({ answer, correct_answer, submitAnswer, index, selectedAnswerIndex }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => submitAnswer(index)}>
            <Text>{answer}</Text>
            {selectedAnswerIndex && (Number(selectedAnswerIndex) === index || answer === correct_answer) &&
                <Text style={answer === correct_answer ? styles.correct : styles.incorrect}>
                    {answer === correct_answer ? 'Correct Answer' : 'Wrong Answer'}
                </Text>
            }
        </TouchableOpacity>
    )
}

export default AnswerOption