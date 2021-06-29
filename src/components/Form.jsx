import React from "react";

const Form = (props) => {
  return (
    <form>
      <div>
        <label htmlFor="">UserName</label>
        <input
          value={props.userNameValue}
          onChange={props.userNameFunction}
        ></input>
      </div>
      <div>
        <label htmlFor="">Chirp Message</label>
        <input value={props.msgValue} onChange={props.msgFunction}></input>
      </div>
      <button type="button" className="bg-primary" onClick={props.btnfunc}>
        Chirp Away!
      </button>
    </form>
  );
};

export default Form;
