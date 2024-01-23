import React, { ReactNode } from "react";

interface AppButtonProps {
  name: String;
  icon: ReactNode;
}

const AppButton = ({name, icon }:AppButtonProps): JSX.Element => {
  return (
    <main className="mx-10">
      <div className="flex justify-center">
        {icon}
      </div>
      <div className="select-none text-center">{name}</div>
    </main>
  );
}

export default AppButton
