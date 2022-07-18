import React, { useEffect, useContext } from "react"
import { View, ActivityIndicator, StyleSheet } from "react-native"
import { Context as AuthContext } from '../context/AppContext';
import { themes } from "../constants/grobalVariable"

const SplashScreen = ({ navigation }) => {
    const { tryLocalSignin } = useContext(AuthContext)

    useEffect(() => {
        tryLocalSignin({ navigation })
    }, [])

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={themes.BRIGHT} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SplashScreen