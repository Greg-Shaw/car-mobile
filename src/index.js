import { createStackNavigator } from 'react-navigation'
import Home from './component/screen/home'
import Login from './component/screen/auth/login'
import Signup from './component/screen/auth/signup'

export default createStackNavigator(
    {
        Login: { screen: Login, navigationOptions: { title: 'Login' } },
        Signup: { screen: Signup, navigationOptions: { title: 'Signup' } },
        Home: { screen: Home }
    },
    {
        initialRouteName: 'Login'
    }
)
