import React from 'react';


const InputField = (props) => {

  return (
    <div>
      <input type="text"
        onChange={props.change}
        placeholder={props.place}
        name={props.name}
      />
    </div>
  )
}

export default InputField
