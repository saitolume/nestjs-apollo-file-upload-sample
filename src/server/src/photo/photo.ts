import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class Photo {
  @Field(type => ID)
  id: string

  @Field()
  name: string

  @Field()
  url: string
}
