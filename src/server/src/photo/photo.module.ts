import { Module } from '@nestjs/common'
import { PhotoResolver } from './photo.resolver'
import { PhotoService } from './photo.service'
import { StorageModule } from '../storage/storage.module'

@Module({
  imports: [StorageModule],
  providers: [PhotoResolver, PhotoService]
})
export class PhotoModule {}
