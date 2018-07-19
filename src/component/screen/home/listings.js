// @flow
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-material-ui'

type Props = {
    navigation: {
        navigate: *
    }
}

type State = {
    message: string
}

export default class Listings extends React.Component<Props, State> {
    state = {
        message: 'Listings'
    }

    handleClick = () => {
        this.setState({
            message: 'Listings are cool!'
        })
    }

    render() {
        const { message } = this.state

        return (
            <View style={styles.container}>
                <Text>{message}</Text>
                <Button primary={true} text="Boom!" onPress={this.handleClick} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
