import * as React from 'react'
// import loginMutation from '../../../graphql/mutation/login-mutation'
// import Grid from '@material-ui/core/Grid'
// import TextField from '@material-ui/core/TextField'
// import Button from '@material-ui/core/Button'
// import { withRouter } from 'found'
// import Page from 'component/core/page'
import { Text } from 'react-native'

class Login extends React.Component {
    // state = {
    //     error: null,
    //     form: {
    //         email: null,
    //         password: null
    //     }
    // }
    //
    // handleSubmit = (event) => {
    //     event.preventDefault()
    //
    //     loginMutation(this.state.form, this.handleResponse)
    // }
    //
    // handleSignup = () => {
    //     const { router } = this.props
    //
    //     router.replace('/signup')
    // }
    //
    // handleChange = ({ target: { value, name } }) => {
    //     this.setState((prevState) => ({ form: { ...prevState.form, [name]: value } }))
    // }
    //
    // handleResponse = (data, error) => {
    //     if (error) {
    //         this.setState({ error: 'An error has occurred.' })
    //     }
    // }

    render() {
        // const { errosr } = this.state

        return (
            <Text>Login</Text>
            // <Page>
            //     <Grid container={true} justify="center" alignItems="center" className="container">
            //         <form className="form" onSubmit={this.handleSubmit}>
            //             <TextField
            //                 required={true}
            //                 className="input"
            //                 placeholder="Email"
            //                 fullWidth={true}
            //                 name="email"
            //                 onChange={this.handleChange}
            //             />
            //             <TextField
            //                 required={true}
            //                 className="input"
            //                 placeholder="Password"
            //                 fullWidth={true}
            //                 name="password"
            //                 type="password"
            //                 onChange={this.handleChange}
            //             />
            //             <div className="button-group">
            //                 <Button onClick={this.handleSignup}>Signup</Button>
            //                 <Button type="submit" variant="contained" color="primary">
            //                     Login
            //                 </Button>
            //             </div>
            //             {error && <p className="error">{error}</p>}
            //         </form>
            //     </Grid>
            // </Page>
        )
    }
}

export default Login
