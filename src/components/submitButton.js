import React from 'react';


const Button = (props) => (
  <button type={props.type} onClick={props.save}>
    {props.name}
  </button>
)


export default Button;
