import express, { Request, Response } from "express";
import { container } from "../inversify.config";
import { Todo } from "../todos/model/ITodo";
import { TodoClient } from "../todos/service/TodoClient";
import { TYPES } from "../types";
import { ApiManager } from "./ApiManager";

export const apiRouter = express.Router();

let apiManager: ApiManager = new ApiManager(container.get<TodoClient>(TYPES.TodoClient));

apiRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: Todo[] = await apiManager.fetchData();

    res.status(200).send(items);
  } catch (e) {
    res.status(500).send(e);
  }
});