import { Module } from '@nestjs/common'
import { StorageService } from './storage.service'

@Module({
  exports: [StorageService],
  providers: [StorageService]
})
export class StorageModule {}
