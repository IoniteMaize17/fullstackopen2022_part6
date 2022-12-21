import { connect } from 'react-redux'
import { createAnecDote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteFormComponent = ({createAnecDote, setNotification}) => {
    const handleSubmitForm = (event) => {
      event.preventDefault();
      const content = event.target.content.value
      event.target.content.value = ''
      createAnecDote(content)
      setNotification(`new anecdote '${content}'`, 10)
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={handleSubmitForm}>
                <div><input name="content" /></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {
    createAnecDote,
    setNotification
}

export const AnecdoteForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteFormComponent)