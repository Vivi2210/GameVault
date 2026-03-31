import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f3e5f5',
    },
    card: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#ab5eab',
        borderRadius: 12,
        elevation: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#fff',
    },
    description: {
        fontSize: 14,
        color: '#ede7f6',
        marginBottom: 12,
    },
    counter: {
        fontSize: 12,
        color: '#fff',
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#6a1b9a',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default styles;

