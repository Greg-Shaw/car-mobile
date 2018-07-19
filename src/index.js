import { createStackNavigator } from 'react-navigation'
import Home from './component/screen/home'
import Profile from './component/screen/profile'

export default createStackNavigator({
    Home: { screen: Home },
    Profile: { screen: Profile }
})
