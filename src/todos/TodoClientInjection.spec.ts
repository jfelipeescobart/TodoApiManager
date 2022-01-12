import { container } from "../inversify.config";
import { TYPES } from "../types";
import { TodoClient } from "./service/TodoClient";

  /*
   * Jest unit test for TodoClient injection
   */
describe('Todos', () => {
    let instance= container.get<TodoClient>(TYPES.TodoClient);

    it('should get all todos in the injected mock client', async () => {
        expect(instance).toBeInstanceOf(TodoClient);
        const todos = await instance.getAllTodos();
        expect(todos).toBeDefined();
        expect(todos.length).toEqual(100);
    });

    
    
});

