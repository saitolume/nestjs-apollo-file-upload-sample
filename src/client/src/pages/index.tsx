import React, { useState } from 'react'
import { Button, Container, TextField, Typography } from '@material-ui/core'
import { CloudUpload } from '@material-ui/icons'
import styled from 'styled-components'
import PhotoCard from '../components/PhotoCard'
import { usePhoto } from '../hooks/usePhoto'

interface Target extends EventTarget {
  files: FileList
}

const Index: React.FC = () => {
  const { photos, addPhoto } = usePhoto()
  const [name, setName] = useState('')
  const [file, setFile] = useState<File>()
  const [src, setSrc] = useState('')

  const selectImage = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = async event => {
      const file = (event.target as Target).files[0]
      setFile(file)
      const reader = new FileReader()
      reader.onload = () => setSrc(reader.result as string)
      reader.readAsDataURL(file)
    }
    input.click()
  }

  const uploadPhoto = async (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    if (!file) return
    await addPhoto({ file, name })
    setName('')
    setSrc('')
    setFile(undefined)
  }

  return (
    <Container maxWidth="md">
      <Form onSubmit={uploadPhoto}>
        <FlexBox>
          <ImageField src={src} onClick={selectImage} tabIndex={0}>
            {!src && <ImageFieldLabel>Select your image</ImageFieldLabel>}
          </ImageField>
          <RightColumn>
            <TextField
              type="text"
              label="Name"
              value={name}
              onChange={event => setName(event.target.value)}
              variant="outlined"
            />
            <UploadButton
              variant="contained"
              color="default"
              startIcon={<CloudUpload />}
              onClick={() => uploadPhoto()}>
              Upload
            </UploadButton>
          </RightColumn>
        </FlexBox>
      </Form>
      <PhotoList>
        {photos.map((photo, index) => (
          <PhotoCard key={index} photo={photo} />
        ))}
      </PhotoList>
    </Container>
  )
}

const Form = styled.form`
  border-bottom: 1px solid #ddd;
  margin: 48px 0;
  padding-bottom: 48px;
  width: 100%;
  height: 180px;
`

const FlexBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 312px);
  height: 100%;
`

const ImageField = styled.div<{ src?: string }>`
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  border: solid 1px #bbb;
  cursor: pointer;
  display: flex;
  margin-right: 32px;
  width: 280px;
  height: 180px;
  &:hover {
    border: solid 1px #000;
  }
  &:focus {
    border: solid 1px #1a237e;
    outline: none;
  }
`

const ImageFieldLabel = styled(Typography)`
  color: #777;
  margin: auto;
`

const UploadButton = styled(Button)`
  padding: 12px;
`

const PhotoList = styled.div`
  display: grid;
  justify-content: space-between;
  grid-row-gap: 32px;
  grid-template-columns: repeat(auto-fill, 280px);
`

export default Index
