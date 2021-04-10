import { createAction } from '@reduxjs/toolkit'
import { Todo } from './todos.interfaces'

export const fetchTodos = {
  trigger: createAction('fetchTodos/trigger'),
  started: createAction('fetchTodos/started'),
  completed: createAction<Todo[]>('fetchTodos/completed'),
  failed: createAction<Error>('fetchTodos/failed'),
}

export const toggleTodo = createAction<Todo>('toggleTodo')
