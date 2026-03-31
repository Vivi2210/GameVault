import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeb1c6'
    },
    content: {
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 8
    },
    header: {
        marginBottom: 20
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333'
    },
    headerSubtitle: {
        fontSize: 10,
        color: '#666',
    },
    addButton: {
        backgroundColor: '#de95ae',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        marginBottom: 10,

    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
        marginVertical: 4,
    },
    cardPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#e91e63',
    },
});

export default styles;