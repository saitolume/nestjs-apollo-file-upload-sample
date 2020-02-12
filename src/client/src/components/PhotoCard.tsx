import React from 'react'
import { Card, CardMedia, Typography } from '@material-ui/core'
import styled from 'styled-components'
import { Photo } from '../graphql/types'

type Props = {
  className?: string
  photo: Photo
}

const PhotoCard: React.FC<Props> = ({ className, photo }) => (
  <Wrapper className={className}>
    <CardImage image={photo.url} />
    <Name>{photo.name}</Name>
  </Wrapper>
)

const Wrapper = styled(Card)`
  width: 280px;
`

const CardImage = styled(CardMedia)`
  height: 180px;
`

const Name = styled(Typography)`
  padding: 8px 16px;
`

export default PhotoCard
