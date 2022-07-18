import React, { useState } from "react"
import { Text, View, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native"
import validator from 'validator';
import { themes } from "../constants/grobalVariable"
const SigninScreen = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validationError, setValidationError] = useState({
        email: false,
        password: false
    })
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSignin = () => {
        if (!validator.isEmail(email)) {
            setValidationError({ ...validationError, email: true })
            return;
        }

        if (password.length < 6) {
            setValidationError({ ...validationError, password: true })
            return;
        }


        fetch("")
        setEmail('')
        setPassword('')
        // setIsLoading(true)
        navigation.navigate("MainScreen")
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Signin</Text>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor={themes.PRIMARY}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={(value) => {
                        setValidationError({ ...validationError, email: false })
                        setEmail(value)
                    }}
                    style={[styles.textInput, { borderColor: (email.length !== 0 && !validator.isEmail(email)) || validationError.email ? 'red' : themes.PRIMARY }]}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor={themes.PRIMARY}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={password}
                    onChangeText={(value) => {
                        setValidationError({ ...validationError, password: false })
                        setPassword(value)
                    }}
                    style={[styles.textInput, { borderColor: (password.length !== 0 && password.length < 6) || validationError.password ? 'red' : themes.PRIMARY }]}
                />

                {
                    error ? <Text style={styles.error}>{error}</Text> : null
                }
                <TouchableOpacity>
                    <Text style={[styles.link, { fontWeight: 'normal' }]}>Forget your Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.submitButton} onPress={handleSignin}>
                    {
                        isLoading ? <ActivityIndicator size="small" color={themes.BRIGHT} /> : <Text style={styles.submitText}>Signin</Text>
                    }

                </TouchableOpacity>
            </View>

            <View style={styles.notMember}>
                <Text>Not a member ? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
                    <Text style={styles.link}>Signup Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: themes.PRIMARY,
        alignSelf: 'flex-start',
        marginBottom: 20
    },
    card: {
        width: '90%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 30,
        backgroundColor: themes.BRIGHT,
    },
    textInput: {
        borderColor: themes.PRIMARY,
        borderWidth: 1,
        width: '100%',
        borderRadius: 5,
        padding: 5,
        marginBottom: 20,
        color: themes.PRIMARY,
        fontSize: 16
    },
    error: {
        color: 'red',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    submitButton: {
        width: '100%',
        height: 40,
        backgroundColor: themes.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20
    },
    submitText: {
        color: themes.BRIGHT,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 18
    },
    notMember: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    link: {
        color: themes.PRIMARY,
        fontWeight: 'bold'
    }

})

export default SigninScreen