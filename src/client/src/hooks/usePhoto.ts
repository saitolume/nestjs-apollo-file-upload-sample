import { useMutation, useQuery } from '@apollo/react-hooks'
import { POSTS_QUERY } from '../graphql/queries/posts'
import { ADD_POST_MUTATION } from '../graphql/mutations/addPhoto'
import { PostsQuery, AddPhotoInput, AddPhotoMutation, MutationAddPhotoArgs } from '../graphql/types'

export const usePhoto = () => {
  const { data } = useQuery<PostsQuery>(POSTS_QUERY)
  const [mutateAddPhoto] = useMutation<AddPhotoMutation, MutationAddPhotoArgs>(ADD_POST_MUTATION, {
    awaitRefetchQueries: true,
    refetchQueries: [{ query: POSTS_QUERY }]
  })

  const addPhoto = async ({ file, name }: { file: File } & AddPhotoInput) => {
    await mutateAddPhoto({
      variables: {
        file,
        input: { name }
      }
    })
  }

  return {
    photos: data?.photos ?? [],
    addPhoto
  }
}
