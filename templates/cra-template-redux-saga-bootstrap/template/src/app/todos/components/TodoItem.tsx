import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo, faCheck } from '@fortawesome/free-solid-svg-icons'

interface PropTypes {
  text: string
  isDisabled: boolean
  isDone: boolean
  onToggle: () => {}
}

export const TodoItem = (props: PropTypes) => (
  <div className="d-flex m-2">
    <div className="btn-group" role="group" aria-label="Options">
      <button
        disabled={props.isDisabled}
        type="button"
        className="btn btn-primary"
        onClick={props.onToggle}
      >
        <FontAwesomeIcon icon={props.isDone ? faUndo : faCheck} />
      </button>
    </div>
    <div className="flex-grow-1 ms-3 my-auto">
      {props.isDone && <s>{props.text}</s>}
      {!props.isDone && props.text}
    </div>
  </div>
)
