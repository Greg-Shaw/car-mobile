import { createStackNavigator } from 'react-navigation'
import Home from './component/screen/home'
import Profile from './component/screen/profile'
import Login from './component/screen/login'
import Signup from './component/screen/signup'

export default createStackNavigator(
    {
        Home: { screen: Home, navigationOptions: { title: 'Home' } },
        Profile: { screen: Profile, navigationOptions: { title: 'Profile' } },
        Login: { screen: Login, navigationOptions: { title: 'Login' } },
        Signup: { screen: Signup, navigationOptions: { title: 'Signup' } }
    },
    {
        initialRouteName: 'Home'
    }
)
