import React, { ReactNode } from "react";

interface AppButtonProps {
  name: String;
  icon: ReactNode;
  blurHandler: () => void;
}

const AppButton = ({name, icon, blurHandler }:AppButtonProps): JSX.Element => {
  return (
    <main className="flex flex-col justify-center mx-2 my-4 w-24 md:mx-5 lg:mx-10">
      <button className="flex justify-center" onClick={blurHandler}>
        {icon}
      </button>
      <div className="select-none text-center">{name}</div>
    </main>
  );
}

export default AppButton
