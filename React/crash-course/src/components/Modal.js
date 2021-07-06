function Modal(props) {
  function cancelHandler() {
    props.cancel();
  }
  function confirmHandler() {
    //   it can be any name you after prop
    props.confirm();
  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
