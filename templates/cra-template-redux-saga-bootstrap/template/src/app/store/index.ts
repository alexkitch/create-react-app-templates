import {
  getDefaultMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { TodosState } from '../todos/todos.interfaces'
import { reducer as todosReducer } from '../todos/todos.reducers'
import { rootSagas } from './rootSagas'

export interface AppState {
  todos: TodosState
}

const reducer = combineReducers({
  todos: todosReducer,
})

const sagaMiddleware = createSagaMiddleware()

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

const store = configureStore({ reducer, middleware })

rootSagas.forEach((saga) => sagaMiddleware.run(saga))

export default store
