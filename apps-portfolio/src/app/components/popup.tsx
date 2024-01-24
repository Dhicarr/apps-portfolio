import React, { ReactNode } from "react";
import Icon from '@mdi/react';
import { mdiCloseBoxOutline } from '@mdi/js';

interface PopupProps {
  blurHandler:()=>void
}

const Popup = ({blurHandler}:PopupProps): JSX.Element => {
  return (
    <main className="fixed -translate-x-1/2 -translate-y-1/2 inset-1/2 w-4/5 h-4/5 bg-white bg-opacity-50 z-10 rounded-lg">
      <div className="justify-end flex">
        <button onClick={blurHandler}>
          <Icon path={mdiCloseBoxOutline} size={2} />
        </button>
      </div>
    </main>
  );
}

export default Popup
