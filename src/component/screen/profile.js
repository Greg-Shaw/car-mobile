import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class ProfileScreen extends React.Component {
    state = {
        message: 'Profiles'
    }

    handleClick = () => {
        this.setState({
            message: 'Profiles are cool!'
        })
    }

    render() {
        const { message } = this.state

        return (
            <View style={styles.container}>
                <Text>{message}</Text>
                <Button title="Boom!" onPress={this.handleClick} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
