import React from "react"
import { Text, View, StyleSheet } from "react-native"

const SignupScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text>Signup Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SignupScreen