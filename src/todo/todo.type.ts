import { Field, ObjectType } from '@nestjs/graphql';
import { Todo } from '@prisma/client';

@ObjectType()
export class ApiTodo implements Omit<Todo, 'id'> {
  @Field()
  public todoId: string;

  @Field()
  public title: string;

  @Field(() => Boolean)
  public completed: boolean;
}
