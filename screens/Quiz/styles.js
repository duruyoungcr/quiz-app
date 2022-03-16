import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 600,
        marginHorizontal: 'auto',
        width: '100%',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        paddingVertical: 32,
    },
    quizDetails: {
        alignSelf: 'flex-start',
        paddingHorizontal: 16,
        paddingBottom: 32,
    },
    subTitle: {
        fontWeight: '500',
        marginBottom: 8
    },
    detail: {
        marginBottom: 8,
        fontSize: 18
    },
    questions: {
        marginHorizontal: 16
    },
    actionsContainer: {
        width: '100%',
        paddingHorizontal: 16,
        marginTop: 10,
    },
    btn: {
        height: 54,
        borderRadius: 8,
    },
    btnContainer: {
        borderRadius: 8,
    }
})


export default styles