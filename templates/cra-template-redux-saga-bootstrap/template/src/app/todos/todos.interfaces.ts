export interface Todo {
  id: number
  description: string
  done: boolean
}

export interface TodosState {
  isFetching: boolean
  fetchError: Error | null
  items: Todo[]
}
