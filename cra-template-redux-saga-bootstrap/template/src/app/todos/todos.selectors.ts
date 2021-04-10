import { createSelector } from 'reselect'
import { AppState } from '../store'

const selectTodosState = createSelector(
  (state: AppState) => state.todos,
  (state) => state
)

export const selectTodosItems = createSelector(
  selectTodosState,
  (state) => state.items
)

export const selectIsFetchingTodos = createSelector(
  selectTodosState,
  (state) => state.isFetching
)
