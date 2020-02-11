import { ClassTypeResolver } from 'type-graphql/dist/decorators/types'

declare module '@nestjs/graphql' {
  export function Resolver(typeFunc: ClassTypeResolver): any
}
