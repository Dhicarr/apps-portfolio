"use client";
import React, { ReactNode } from "react";
//@ts-ignore
import SlideButton from 'react-slide-button';
import { useState } from 'react';



const SlideButtonWrapper = (): JSX.Element => {
  const [reset, setReset] = useState(0);
  return (
    <main className="mx-10">
      <SlideButton
                mainText=""
                overlayText=""
                overlayClassList="custom-width"
                classList="mainText"
                caretClassList="custom-caret-list"
                reset={reset}
                caret={<p style={{ color: "white" }}>Pay With Wallet</p>}
                customCaretWidth={180}
                onSlideDone={() => {
                  console.log("Done!")
                }}
              />
    </main>
  );
}

export default SlideButtonWrapper
