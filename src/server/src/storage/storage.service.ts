import { Injectable } from '@nestjs/common'
import { FileUpload } from 'graphql-upload'
import { createWriteStream } from 'fs'
import { resolve } from 'path'

@Injectable()
export class StorageService {
  async upload({ createReadStream, filename }: FileUpload): Promise<string> {
    const readSteam = createReadStream()
    const location = resolve('upload', filename)
    const writeStream = createWriteStream(location, 'utf8')

    readSteam.pipe(writeStream)

    return location
  }
}
