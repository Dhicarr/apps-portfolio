import React, { ReactNode } from "react";
import { useState, useEffect } from 'react';
import moment from "moment";
import Icon from '@mdi/react';
import {mdiSignal, mdiWifi, mdiBattery50  } from '@mdi/js';

const TopBar = (): JSX.Element => {
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
    <div className="flex justify-between py-2 px-4 bg-white bg-opacity-20 rounded-full">
      <div><p>{moment(time).format('h:mm')}</p></div>
      <div className="flex">
        <Icon path={mdiSignal} size={1} />
        <Icon path={mdiWifi} size={1} />
        <Icon className="rotate-90" path={mdiBattery50} size={1} />
      </div>
    </div>
  )
}

export default TopBar
