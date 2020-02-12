import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { GraphQLUpload, FileUpload } from 'graphql-upload'
import uuid from 'uuid/v4'
import { AddPhotoInput } from './inputs/add-photo.input'
import { Photo } from './photo'
import { PhotoService } from './photo.service'
import { StorageService } from '../storage/storage.service'

@Resolver(of => Photo)
export class PhotoResolver {
  constructor(
    private readonly photoService: PhotoService,
    private readonly storageService: StorageService
  ) {}

  @Query(returns => [Photo])
  async photos(): Promise<Photo[]> {
    return this.photoService.findAll()
  }

  @Mutation(returns => Photo)
  async addPhoto(
    @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload,
    @Args('input') { name }: AddPhotoInput
  ): Promise<Photo> {
    const ext = file.filename.match(/\.[a-z]+$/)
    const filename = `${uuid()}${ext}`
    const url = await this.storageService.upload({ ...file, filename })
    return await this.photoService.create({ name, url })
  }
}
