import { createReducer } from '@reduxjs/toolkit'
import { fetchTodos, toggleTodo } from './todos.actions'
import { TodosState } from './todos.interfaces'

const initialState: TodosState = {
  isFetching: false,
  fetchError: null,
  items: [],
}

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchTodos.started, (state, action) => ({
      ...state,
      isFetching: true,
      items: [],
    }))
    .addCase(fetchTodos.completed, (state, action) => ({
      ...state,
      isFetching: false,
      items: action.payload,
    }))
    .addCase(fetchTodos.failed, (state, action) => ({
      ...state,
      fetchError: action.payload,
    }))
    .addCase(toggleTodo, (state, action) => {
      const index = state.items.findIndex((x) => x.id === action.payload.id)
      const items = [
        ...state.items.slice(0, index),
        {
          ...action.payload,
          done: !action.payload.done,
        },
        ...state.items.slice(index + 1),
      ]

      return {
        ...state,
        items,
      }
    })
})
