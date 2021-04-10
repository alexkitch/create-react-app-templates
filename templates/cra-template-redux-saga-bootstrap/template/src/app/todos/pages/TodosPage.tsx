import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

import { TodoItem } from '../components/TodoItem'
import { fetchTodos, toggleTodo } from '../todos.actions'
import { selectIsFetchingTodos, selectTodosItems } from '../todos.selectors'
import { Todo } from '../todos.interfaces'

export function TodosPage() {
  const dispatch = useDispatch()

  const todos = useSelector(selectTodosItems)
  const fetching = useSelector(selectIsFetchingTodos)

  useEffect(() => {
    dispatch(fetchTodos.trigger())
  }, [dispatch])

  function handleToggled(todo: Todo) {
    dispatch(toggleTodo(todo))
  }

  return (
    <div className="todos-page container pt-4 text-start">
      <div className="d-flex">
        <h2 className="flex-grow-1 my-auto">Todo List:</h2>
        <button
          type="button"
          disabled={fetching}
          className="btn btn-secondary"
          aria-label="Refresh"
          onClick={() => dispatch(fetchTodos.trigger())}
        >
          <FontAwesomeIcon icon={faSync} />
        </button>
      </div>
      <hr />
      {fetching && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {todos?.map((x) => (
        <TodoItem
          key={x.id}
          isDisabled={fetching}
          isDone={x.done}
          text={x.description}
          onToggle={async () => handleToggled(x)}
        ></TodoItem>
      ))}
    </div>
  )
}
