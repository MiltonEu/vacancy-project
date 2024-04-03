import { ArgsType, Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTodoArgs {
  @Field()
  title: string;
}

@InputType()
export class UpdateTodoArgs {
  @Field()
  todoId: string;

  @Field()
  title: string;
}

@InputType()
export class DeleteTodoArgs {
  @Field()
  todoId: string;
}
