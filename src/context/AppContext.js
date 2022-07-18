import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';

const AuthReducer = (state, action) => {

    switch (action.type) {

        case 'signin':
            return { ...state, user: action.payload.user, token: action.payload.token }

        case 'reset_context':
            return { ...state, user: {}, token: null }
        default:
            return state;
    }
}

const signin = dispatch => async () => {
    dispatch({ type: 'signin', payload: { user: { name: '', email: '' } } })
}

const tryLocalSignin = dispatch => async ({ navigation }) => {
    dispatch({ type: 'reset_context' })
    const data = await AsyncStorage.getItem('@GENUINE_KUNGA');
    const user = JSON.parse(data)

    if (data) {
        dispatch({ type: 'signin', payload: { user, token: user.token } })
        navigation.navigate("MainScreen")
    } else {
        navigation.navigate("SigninScreen")
    }
}

export const { Context, Provider } = createDataContext(AuthReducer, { signin, tryLocalSignin }, { user: {}, token: null })