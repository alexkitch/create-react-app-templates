import axios from 'axios'
import { from } from 'rxjs'
import { map, take } from 'rxjs/operators'

export const axiosRequest = <T>(method: string, url: string): Promise<T> =>
  from(axios.request({ url }))
    .pipe(
      map((x) => x.data),
      take(1)
    )
    .toPromise()
