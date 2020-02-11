import { Injectable } from '@nestjs/common'
import { uuid } from 'uuidv4'
import { Photo } from './photo'

@Injectable()
export class PhotoService {
  photos: Photo[] = []

  async findAll(): Promise<Photo[]> {
    return this.photos
  }

  async create(attributes: Omit<Photo, 'id'>): Promise<Photo> {
    const photo = { id: uuid(), ...attributes }
    this.photos = [...this.photos, photo]
    return photo
  }
}
