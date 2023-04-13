import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../src/store";
import { Provider } from "react-redux";

import { Layout } from "../src/components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
