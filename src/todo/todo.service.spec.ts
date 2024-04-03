import { TodoService } from './todo.service';
import { getTestingModuleForProvider } from '../services/utils/test.utils';
import { createPrismaServiceMock } from '../services/prisma/prisma.mock';
import { PrismaService } from '../services/prisma/prisma.service';

describe('TodoService', () => {
  let service: TodoService;
  let prismaSevice: PrismaService;

  beforeAll(async () => {
    const wrappedModule = await getTestingModuleForProvider(
      TodoService,
      [],
      [createPrismaServiceMock()],
    );

    service = wrappedModule.provider;
    prismaSevice = wrappedModule.module.get(PrismaService);
  });

  it('should create a todo', () => {
    const createTodoInput = { title: 'Test' };
    const spy = jest.spyOn(prismaSevice.todo, 'create');
    service.create(createTodoInput);
    expect(spy).toHaveBeenCalledWith({
      data: {
        completed: false,
        todoId: expect.any(String),
        title: createTodoInput.title,
      },
    });
  });
});
