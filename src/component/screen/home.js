import React from 'react'
import { shape, func } from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-material-ui'
import Navigation from 'component/common/navigation'

export default class HomeScreen extends React.Component {
    static propTypes = {
        navigation: shape({
            navigate: func
        })
    }

    state = {
        message: 'Cars'
    }

    handleClick = () => {
        this.setState({
            message: 'Cars are cool!'
        })
    }

    render() {
        const { message } = this.state

        return (
            <View style={styles.container}>
                <Text>{message}</Text>
                <Button primary={true} text="Boom!" onPress={this.handleClick} />
                <Navigation navigation={this.props.navigation} />
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
