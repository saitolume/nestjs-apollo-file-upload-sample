import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Upload: any,
};

export type AddPhotoInput = {
  name: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  addPhoto: Photo,
};


export type MutationAddPhotoArgs = {
  input: AddPhotoInput,
  file: Scalars['Upload']
};

export type Photo = {
   __typename?: 'Photo',
  id: Scalars['ID'],
  name: Scalars['String'],
  url: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  photos: Array<Photo>,
};


export type AddPhotoMutationVariables = {
  file: Scalars['Upload'],
  input: AddPhotoInput
};


export type AddPhotoMutation = (
  { __typename?: 'Mutation' }
  & { addPhoto: (
    { __typename?: 'Photo' }
    & Pick<Photo, 'id' | 'name' | 'url'>
  ) }
);

export type PostsQueryVariables = {};


export type PostsQuery = (
  { __typename?: 'Query' }
  & { photos: Array<(
    { __typename?: 'Photo' }
    & Pick<Photo, 'id' | 'name' | 'url'>
  )> }
);


export const AddPhotoDocument = gql`
    mutation AddPhoto($file: Upload!, $input: AddPhotoInput!) {
  addPhoto(file: $file, input: $input) {
    id
    name
    url
  }
}
    `;
export type AddPhotoMutationFn = ApolloReactCommon.MutationFunction<AddPhotoMutation, AddPhotoMutationVariables>;
export type AddPhotoMutationResult = ApolloReactCommon.MutationResult<AddPhotoMutation>;
export type AddPhotoMutationOptions = ApolloReactCommon.BaseMutationOptions<AddPhotoMutation, AddPhotoMutationVariables>;
export const PostsDocument = gql`
    query Posts {
  photos {
    id
    name
    url
  }
}
    `;
export type PostsQueryResult = ApolloReactCommon.QueryResult<PostsQuery, PostsQueryVariables>;