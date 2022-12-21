import { useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

export const Anecdote = ({data}) => {
    const dispatch = useDispatch()
  
    const vote = () => {
      dispatch(voteAnecdote(data))
      dispatch(setNotification(`you voted '${data.content}'`, 10))
    }
    return (
        <div>
          <div>
            {data.content}
          </div>
          <div>
            has {data.votes}
            <button onClick={() => vote()}>vote</button>
          </div>
        </div>
    )
}