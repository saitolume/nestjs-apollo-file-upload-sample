import gql from 'graphql-tag'

export const ADD_POST_MUTATION = gql`
  mutation AddPhoto($file: Upload!, $input: AddPhotoInput!) {
    addPhoto(file: $file, input: $input) {
      id
      name
      url
    }
  }
`
