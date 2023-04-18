import { Component } from "solid-js";

import { useAppContext } from "@store";

export const Alert: Component = () => {
  const [state, _] = useAppContext();

  return (
    <>
      <div class={`alert ${state.log.alert.display}`} role='alert'>
        {state.log.alert.message}
      </div>
    </>
  );
};
