import React from 'react'
import { shape, func } from 'prop-types'
import { StyleSheet, View, Button } from 'react-native'

export default class Navigation extends React.Component {
    static propTypes = {
        navigation: shape({
            navigate: func
        })
    }

    handleNavigate = (destination) => () => {
        const { navigate } = this.props.navigation

        navigate(destination)
    }

    render() {
        return (
            <View style={styles.navigation}>
                <Button title="Home" onPress={this.handleNavigate('Home')} />
                <Button title="Profile" onPress={this.handleNavigate('Profile')} />
                <Button title="Login" onPress={this.handleNavigate('Login')} />
                <Button title="Signup" onPress={this.handleNavigate('Signup')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navigation: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 60,
        width: '100%',
        backgroundColor: 'silver'
    }
})
