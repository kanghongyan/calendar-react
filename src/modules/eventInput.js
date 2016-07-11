/**
 * Created by khongyan on 16/6/22.
 */
import React from 'react';

const InputModal = (props) => {

  let updateEvent = () => {
    var title = document.getElementById('title').value;
    var cont = document.getElementById('cont').value;

    props.handleUpdate(title);
  };

  console.log('ffd d s ')
  return(
    <div className="input-modal">
      <input type="text" placeholder="title" id="title"/>
      <input type="text" placeholder="content" id="cont"/>
      <button onClick={ updateEvent }>add</button>
    </div>
  )
};

export default InputModal;