import { Injectable } from '@nestjs/common'
import * as AWS from 'aws-sdk'
import { FileUpload } from 'graphql-upload'

const { AWS_REGION, AWS_S3_BUCKET_NAME } = process.env

AWS.config.update({ region: AWS_REGION })

@Injectable()
export class StorageService {
  private s3: AWS.S3

  constructor() {
    this.s3 = new AWS.S3({ apiVersion: '2006-03-01' })
  }

  async upload({ createReadStream, filename }: FileUpload): Promise<string> {
    const stream = createReadStream()
    const result = await this.s3
      .upload({ Bucket: AWS_S3_BUCKET_NAME!, Key: filename, Body: stream })
      .promise()
    return result.Location
  }
}
