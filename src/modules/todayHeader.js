/**
 * Created by khongyan on 16/6/21.
 */
import React from 'react';

require('zepto');

const TodayHeader = ( props ) => {

  return (
    <p className="time">{ props.title }</p>
  )
};

export default TodayHeader;