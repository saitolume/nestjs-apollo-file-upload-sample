import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { GraphQLUpload, FileUpload } from 'graphql-upload'
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

  @Mutation(returns => Boolean)
  async addPhoto(
    @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload
  ): Promise<Photo> {
    const url = await this.storageService.upload(file)
    const photo = await this.photoService.create({ name: '', description: '', url })
    return photo
  }
}
