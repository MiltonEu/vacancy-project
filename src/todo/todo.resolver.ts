import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { ApiTodo } from './todo.type';
import { CreateTodoArgs, DeleteTodoArgs, UpdateTodoArgs } from './todo.args';

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Mutation(() => ApiTodo)
  createTodo(@Args('createTodoArgs') createTodoArgs: CreateTodoArgs) {
    return this.todoService.create(createTodoArgs);
  }

  @Query(() => [ApiTodo])
  findAll() {
    return this.todoService.findAll();
  }

  @Mutation(() => ApiTodo)
  updateTodo(@Args('updateTodoArgs') updateTodoArgs: UpdateTodoArgs) {
    return this.todoService.update(updateTodoArgs);
  }

  @Mutation(() => ApiTodo)
  removeTodo(@Args('deleteTodoArgs') deleteTodoArgs: DeleteTodoArgs) {
    return this.todoService.remove(deleteTodoArgs);
  }
}
