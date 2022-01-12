import { Container } from "inversify";
import { TodoClient } from "./todos/service/TodoClient";
import { TYPES } from "./types";

const container = new Container();
container.bind<TodoClient>(TYPES.TodoClient).to(TodoClient);

export {container};