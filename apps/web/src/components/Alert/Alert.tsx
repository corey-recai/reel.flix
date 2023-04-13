import React from "react";
import { useSelector } from "react-redux";

import type { LogState } from "../../store/log";

import type { RootState } from "../../store";

export const Alert = () => {
  const { message, className } = useSelector(
    (state: RootState) => state.log.alert as LogState["alert"]
  );

  console.warn("Alert Message", message);
  console.warn("Alert className", className);
  return (
    <>
      <div className={`alert ${className}`} role='alert'>
        {message}
      </div>
    </>
  );
};
