import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 40,
        flex: 1,
        backgroundColor: 'black'
    },

    arrowIcon: {
        width: 20,
        height: 20,
        tintColor: "#fff",
        marginHorizontal: 20
    },

    lupaIcon: {
        width: 30,
        height: 30,
        tintColor: "#fff",
        marginHorizontal: 20
    },

    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },

    topWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },

    leftWrapper: {
        flexDirection: "row",
        alignItems: "center"
    },

    myList: {
        flex: 1,
        justifyContent: "center"
    },

    myListImage: {
        width: 112,
        height: 160,
        margin: 4,
        borderRadius: 5
    }
})