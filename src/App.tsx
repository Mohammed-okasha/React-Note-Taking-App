import BrowserRouterProvider from "./router/RouterProvider";
import Theme from "./theme/Theme";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Theme>
        <BrowserRouterProvider />
      </Theme>
    </>
  );
}

export default App;
