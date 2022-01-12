import { injectable } from "inversify";
import axios, { AxiosResponse } from 'axios';
import "reflect-metadata";

@injectable()
export class TodoClient {
  getAllTodos = async () => {
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    return result.data;
  }
}