import { Injectable } from '@nestjs/common';
import { CreateTodoArgs, DeleteTodoArgs, UpdateTodoArgs } from './todo.args';
import { PrismaService } from '../services/prisma/prisma.service';
import { generateRandomString } from './todo.utils';
import { Todo } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private readonly prismaService: PrismaService) {}

  public create(createTodoInput: CreateTodoArgs): Promise<Todo> {
    return this.prismaService.todo.create({
      data: {
        completed: false,
        todoId: generateRandomString(),
        title: createTodoInput.title,
      },
    });
  }

  public findAll() {
    return this.prismaService.todo.findMany();
  }

  public async update(args: UpdateTodoArgs) {
    const todo = await this.prismaService.todo.findUniqueOrThrow({
      where: {
        todoId: args.todoId,
      },
    });
    return this.prismaService.todo.update({
      where: {
        todoId: todo.todoId,
      },
      data: {
        title: args.title,
      },
    });
  }

  public async remove(args: DeleteTodoArgs) {
    const todo = await this.prismaService.todo.findUniqueOrThrow({
      where: {
        todoId: args.todoId,
      },
    });
    return this.prismaService.todo.delete({
      where: {
        todoId: todo.todoId,
      },
    });
  }
}
