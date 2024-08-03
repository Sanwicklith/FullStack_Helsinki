

const Notification = ({ message }) => {
  const baseStyle = {
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    margin: 20,
  };

  const notificationStyle = {
    ...baseStyle,
    color: 'green',
    // backgroundColor: '#333',
  };

  const notificationStyleRed = {
    ...baseStyle,
    color: 'red',
    // backgroundColor: '#333',
  };

  const styling = message && (message.includes('deleted') || message.includes('removed')) ? notificationStyleRed : notificationStyle;

  return (
    <div>
      {message && <div style={styling}>{message}</div>}
    </div>
  );
};

export default Notification;
