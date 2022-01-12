import { container } from "../inversify.config";
import { TYPES } from "../types";
import { TodoClient } from "./service/TodoClient";

/*
   * Jest unit test for TodoClient http mock response
   */
describe('Todos mock test', () => {

  beforeEach(() => {
    container.snapshot();
  });

  afterEach(() => {
    container.restore();
  });
  
  
  it('should receive mock todo list', async () => {
    let todoClientMock: TodoClient = {
      getAllTodos: async () => {
        return [{userId: 1, id: 1, title: "Test title", body: "Test body."}];
      }
    };
    container.unbind(TYPES.TodoClient);
    container.bind<TodoClient>(TYPES.TodoClient).toConstantValue(todoClientMock);
    let instance= container.get<TodoClient>(TYPES.TodoClient);
    const todos = await instance.getAllTodos();
    expect(todos).toBeDefined();
    expect(todos.length).toEqual(1);
  });
});
