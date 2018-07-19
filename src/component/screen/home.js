import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class HomeScreen extends React.Component {
	state = {
	    message: 'Cars'
	}

	handleClick = () => {
	    this.setState({
	        message: 'Cars are cool!'
	    })
	}

	render() {
	    const { navigate } = this.props.navigation
	    const { message } = this.state

	    return (
	        <View style={styles.container}>
	            <Text>{message}</Text>
	            <Button title="Boom!" onPress={this.handleClick} />
	            <Button title="Profile" onPress={() => navigate('Profile')} />
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
