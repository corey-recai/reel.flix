import { type Component, type JSX, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

type Alert = { message: string; display: string };

type ProviderComponent = Component<{
  children: JSX.Element;
}>;

type AppStore = [
  {
    auth: { jwtToken: string };
    log: { alert: Alert };
  },
  {
    login?: (jwtToken: string) => void;
    logout?: () => void;
    setAlert?: ({ message, display }: Alert) => void;
    clearAlert?: () => void;
  }
];

const AppContext = createContext<AppStore>([
  {
    auth: { jwtToken: "" },
    log: { alert: { message: "", display: "d-none" } },
  },
  {},
]);

export const Provider: ProviderComponent = props => {
  const [state, setState] = createStore({
      auth: { jwtToken: "" },
      log: { alert: { message: "hello", display: "d-none" } },
    }),
    store: AppStore = [
      state,
      {
        login(jwtToken: string) {
          setState("auth", () => ({ jwtToken }));
        },
        logout() {
          setState("auth", () => ({ jwtToken: "" }));
        },
        setAlert({ message, display }: Alert) {
          setState("log", () => ({ alert: { message, display } }));
        },
        clearAlert() {
          setState("log", () => ({
            alert: { message: "", display: "d-none" },
          }));
        },
      },
    ];

  return (
    <AppContext.Provider value={store}>{props.children}</AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
