import { connect } from 'react-redux'

export const NotificationComponent = ({notification}) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 10
  }

  if (notification.message) {
    return (
      <div style={style}>
        { notification.message }
      </div>
    )
  }
  return null
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  }
}

export const Notification = connect(mapStateToProps)(NotificationComponent)