import { useSelector } from 'react-redux'
import { Anecdote } from './Anecdote'

export const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)

    return  [...anecdotes].sort((a,b) => {
      return b.votes - a.votes
    }).filter(anecdote => anecdote.content.includes(filter.content)).map(anecdote =>
      <Anecdote key={anecdote.id} data={anecdote} />
    )
}