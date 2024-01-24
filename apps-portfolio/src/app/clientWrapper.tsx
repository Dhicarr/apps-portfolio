"use client";
import AppButton from "./components/appButton";
import React, { ReactNode } from "react";
import { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiAccountTie, mdiHeadDotsHorizontal , mdiBriefcaseVariant, mdiLightbulbGroup} from '@mdi/js';

const name="rounded-2xl hover:scale-110 ease-in-out duration-300 "
const names=[name+"bg-sky-500", name+"bg-lime-500", name+"bg-teal-500", name+"bg-violet-500"]

interface ClientWrapperProps {
  blurHandler: () => void;
}

const ClientWrapper = ({blurHandler}: ClientWrapperProps): JSX.Element => {
  
  return(
    <div className="flex flex-wrap py-4 justify-evenly md:justify-start">
      <AppButton name="About Me" icon={<Icon className={names[0]} path={mdiAccountTie} size={3} />} blurHandler={blurHandler}/>
      <AppButton name="Skills" icon={<Icon className={names[1]} path={mdiHeadDotsHorizontal} size={3} />} blurHandler={blurHandler}/>
      <AppButton name="Experience" icon={<Icon className={names[2]} path={mdiBriefcaseVariant} size={3} />} blurHandler={blurHandler}/>
      <AppButton name="Projects" icon={<Icon className={names[3]} path={mdiLightbulbGroup} size={3} />} blurHandler={blurHandler}/>
    </div>
  )
}

export default ClientWrapper
