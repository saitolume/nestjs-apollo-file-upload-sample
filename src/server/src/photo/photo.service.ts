import { Injectable } from '@nestjs/common'
import { Photo } from './photo'

@Injectable()
export class PhotoService {
  photos: Photo[] = []

  async findAll(): Promise<Photo[]> {
    return this.photos
  }

  async create(attributes: Omit<Photo, 'id'>): Promise<Photo> {
    const photo = { id: '', ...attributes }
    this.photos = [...this.photos, photo]
    return photo
  }
}
