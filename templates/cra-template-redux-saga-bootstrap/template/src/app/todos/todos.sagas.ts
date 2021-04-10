import { SagaIterator } from '@redux-saga/types'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { fetchTodos } from './todos.actions'
import { ideasApi } from './todos.api'
import { Todo } from './todos.interfaces'

export function* watchForFetchTodosTrigger(): SagaIterator {
  yield takeLatest(fetchTodos.trigger, handleFetchTodos)
}

function* handleFetchTodos(action: unknown): SagaIterator {
  yield put(fetchTodos.started())
  try {
    const response: Todo[] = yield call(ideasApi.getSampleData)
    yield delay(1000)
    yield put(fetchTodos.completed(response))
  } catch (e) {
    yield put(fetchTodos.failed(e))
  }
}
