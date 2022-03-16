import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        marginBottom: 10,
        borderRadius: 8,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderStyle: 'solid',
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    subTitle: {
        fontWeight: '500',
        marginBottom: 8
    },
    correct: {
        fontWeight: '500',
        color: 'green'
    },
    incorrect: {
        fontWeight: '500',
        color: 'red'
    }

})


export default styles