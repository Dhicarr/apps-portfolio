"use client";
import React, { ReactNode } from "react";
import { useState, useEffect } from 'react';
import moment from "moment";
const Time = (): JSX.Element => {
  const [time, setTime] = useState(new Date());

  useEffect(
    () => {
      const intervalId = setInterval(() => {
      
        setTime(new Date());
      }, 6000);
      return () => {
        clearInterval(intervalId)
      }
    } 
  )

  return(
    <div>
      <p>{moment(time).format('h:mm')}</p>
    </div>
  )
}

export default Time
