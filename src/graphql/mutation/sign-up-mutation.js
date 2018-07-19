import environment from 'environment'
import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
    mutation signUpMutation($input: signUpMutationInput!) {
        signUp(input: $input) {
            payload {
                user {
                    firstName
                    lastName
                    email
                    businessId
                    createdAt
                }
                token
            }
        }
    }
`

export default (credentials, callback) => {
    commitMutation(environment, {
        mutation,
        onError: (error) => {
            callback(null, error)
        },
        updater: (store, { signUp }) => {
            callback(signUp, null)
        },
        variables: { input: { payload: credentials } }
    })
}
