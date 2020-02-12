import { IsNotEmpty } from 'class-validator'
import { Field, InputType } from 'type-graphql'

@InputType()
export class AddPhotoInput {
  @IsNotEmpty()
  @Field()
  readonly name: string
}
