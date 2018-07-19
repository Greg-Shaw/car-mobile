import * as React from 'react'
// import signUpMutation from '../../../graphql/mutation/sign-up-mutation'
// import Grid from '@material-ui/core/Grid'
// import TextField from '@material-ui/core/TextField'
// import Button from '@material-ui/core/Button'
// import Page from 'component/core/page'
// import { withRouter } from 'found'
import { Text } from 'react-native'
class SignUp extends React.Component {
    // state = {
    //     error: null,
    //     form: {
    //         email: null,
    //         firstName: null,
    //         lastName: null,
    //         password: null
    //     },
    //     success: null
    // }
    //
    // handleSubmit = (event) => {
    //     event.preventDefault()
    //
    //     signUpMutation(this.state.form, this.handleResponse)
    // }
    //
    // handleChange = ({ target: { value, name } }) => {
    //     this.setState((prevState) => ({ form: { ...prevState.form, [name]: value } }))
    // }
    //
    // handleResponse = (data, error) => {
    //     if (error) {
    //         this.setState({ error: 'An error has occurred.', success: null })
    //     } else {
    //         this.props.router.replace('/business')
    //     }
    // }

    render() {
        // const { error, success } = this.state

        return (
            <Text>Signup</Text>
            // <Page>
            //     <Grid container={true} justify="center" alignItems="center" className="container">
            //         <form className="form" onSubmit={this.handleSubmit}>
            //             <TextField
            //                 className="input"
            //                 required={true}
            //                 placeholder="First Name"
            //                 fullWidth={true}
            //                 name="firstName"
            //                 onChange={this.handleChange}
            //             />
            //             <TextField
            //                 className="input"
            //                 required={true}
            //                 placeholder="Last Name"
            //                 fullWidth={true}
            //                 name="lastName"
            //                 onChange={this.handleChange}
            //             />
            //             <TextField
            //                 className="input"
            //                 required={true}
            //                 placeholder="Email"
            //                 fullWidth={true}
            //                 name="email"
            //                 onChange={this.handleChange}
            //             />
            //             <TextField
            //                 className="input"
            //                 required={true}
            //                 placeholder="Password"
            //                 fullWidth={true}
            //                 name="password"
            //                 type="password"
            //                 onChange={this.handleChange}
            //             />
            //             <div className="button-group">
            //                 <Button type="submit" variant="contained" color="primary">
            //                     Signup
            //                 </Button>
            //             </div>
            //             {error && <p className="error">{error}</p>}
            //             {success && <p className="success">{success}</p>}
            //         </form>
            //     </Grid>
            // </Page>
        )
    }
}

export default SignUp
