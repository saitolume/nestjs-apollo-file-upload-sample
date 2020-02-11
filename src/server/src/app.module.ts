import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { StorageModule } from './storage/storage.module'
import { PhotoModule } from './photo/photo.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/schema.graphql',
      context: ({ req }) => ({ req }),
      uploads: {
        maxFileSize: 10000000,
        maxFiles: 1
      }
    }),
    PhotoModule,
    StorageModule
  ]
})
export class AppModule {}
