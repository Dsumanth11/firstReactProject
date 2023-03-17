const Notification = (props) => {
  //  Write your code here.
  const { src, message, color } = props;
  return (
    <div style={{ backgroundColor: color }} className="notificationMessage">
      <img src={src} className="IconSize"/>
      <div className="paraStyling">
        <p>{message}</p>
      </div>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="main-Container">
    <div className="box-Container">
      <h1>Notifications</h1>
      <Notification
        color="#0b69ff"
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"/>
      <Notification
        color="#2dca73"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"/>
      <Notification
        color="#ffb800"
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"/>
      <Notification
        color="#ff0b37"
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Danger Message"/>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
