import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 40,
        flex: 1,
        backgroundColor: 'black'
    },

    input: {
        padding: 20,
        marginHorizontal: 20,
        marginTop: 15,
        borderRadius: 7,
        backgroundColor: '#333',
        fontSize: 18
    },

    button: {
        alignItems: "center",
        padding: 13,
        marginHorizontal: 20,
        marginTop: 30,
        marginBottom: 20,
        borderRadius: 7,
        borderWidth: 1.8,
        borderColor: '#888'
    },

    buttonText: {
        fontSize: 20,
        color: 'white'
    },

    arrowIcon: {
        width: 20,
        height: 20,
        tintColor: "#fff",
        marginHorizontal: 20
    },

    logo: {
        width: 120,
        height: 30
    },

    topWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30
    },

    text: {
        textAlign: "center",
        marginVertical: 15,
        color: '#666'
    },

    mediumText: {
        textAlign: "center",
        marginVertical: 15,
        fontSize: 16,
        color: '#aaa'
    },

    biggerText: {
        textAlign: "center",
        marginVertical: 15,
        fontSize: 17,
        color: 'white'
    }
})