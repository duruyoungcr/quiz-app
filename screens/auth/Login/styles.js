import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        maxWidth: 600,
        marginHorizontal: 'auto',
        width: '100%',
    },
    form: {
        width: '100%',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 40,
        alignSelf: 'center',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        height: 54,
        paddingLeft: 20,
    },
    actionsContainer: {
        width: '100%',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    actionBtn: {
        height: 54,
        borderRadius: 8,
    }
})

export default styles