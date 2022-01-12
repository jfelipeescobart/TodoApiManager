import { TYPES } from "../types";
import { inject } from "inversify";
import { TodoClient } from "../todos/service/TodoClient";
import { IApiManager } from "./interface/IApiManager";

export class ApiManager implements IApiManager{  
  private todoClient: TodoClient;

  public constructor(@inject(TYPES.TodoClient) todoClient: TodoClient) {
    this.todoClient = todoClient;
  }

  public fetchData() {
    return this.todoClient.getAllTodos();
  }
}