import { connect } from 'react-redux'
import { pushContent } from '../reducers/filterReducer'

const FilterComponent = ({pushContent}) => {
    const handleChange = (event) => {
        // input-field value is in variable event.target.value
      pushContent(event.target.value)
    }
    const style = {
        marginBottom: 10
    }
    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {
    pushContent,
}

export const Filter = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterComponent)