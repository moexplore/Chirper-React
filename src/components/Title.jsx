import React from "react";
import '../Styles/Title.css'

const Title = (props) => {
  return (
    <div>
        <h1 className = 'title' style = {{display: 'flex', justifyContent: 'center', color: 'blue'}}>{props.title}</h1>
    </div>
  );
};

export default Title;