/**
 * Created by khongyan on 16/6/21.
 */
import React from 'react';

const TodayHeader = ( props ) => {

  console.log(props);

  return (
    <p className="time">{ props.title }</p>
  )
};

export default TodayHeader;