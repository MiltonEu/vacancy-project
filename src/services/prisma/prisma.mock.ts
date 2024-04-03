import { Provider } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { createMock } from '@golevelup/ts-jest';
import { mockTodo } from '../../todo/todo.mock';
function createPrismaTableMock(entity: object) {
  return {
    findMany: jest.fn(() => Promise.resolve([entity])),
    create: jest.fn(() => Promise.resolve(entity)),
    update: jest.fn(() => Promise.resolve(entity)),
    delete: jest.fn(() => Promise.resolve(entity)),
    findUniqueOrThrow: jest.fn(() => Promise.resolve(entity)),
  };
}

export function createPrismaServiceMock(): Provider {
  return {
    provide: PrismaService,
    useFactory: () =>
      createMock<PrismaService>({
        todo: createPrismaTableMock(mockTodo),
      }),
  };
}
