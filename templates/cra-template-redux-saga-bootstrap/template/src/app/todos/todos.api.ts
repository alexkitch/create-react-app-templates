import { of } from 'rxjs'
import { axiosRequest } from '../../utils/axios-utils'
import { Todo } from './todos.interfaces'

const SAMPLE_TODOS: Todo[] = [
  {
    id: 0,
    description: 'Water the plants',
    done: false,
  },
  {
    id: 1,
    description: 'Feed the cat',
    done: false,
  },
  {
    id: 2,
    description: 'Turn off the lights',
    done: false,
  },
]

export const ideasApi = {
  getFromApi: () => axiosRequest<Todo[]>('GET', 'https://my-api.com/todos'),
  getSampleData: () => of(SAMPLE_TODOS).toPromise(),
}
