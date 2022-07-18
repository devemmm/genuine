import React from "react"
import { Text, View, TouchableOpacity, StyleSheet } from "react-native"
import { themes } from "../constants/grobalVariable"
const AccountScreen = ({ navigation }) => {
    const handleSignout = () => {
        navigation.navigate("SigninScreen")
    }
    return (
        <View style={styles.container}>
            <Text>Account Screen</Text>
            <TouchableOpacity onPress={handleSignout} style={styles.button}>
                <Text style={styles.btnText}>Sign out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: themes.PRIMARY,
        width: 150,
        height: 40,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    btnText: {
        color: themes.BRIGHT,
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    }
})

export default AccountScreen