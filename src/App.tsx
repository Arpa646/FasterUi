
import "./index.css";


import router from "./router/index.tsx";
import { Toaster } from "sonner";
import { RouterProvider } from "react-router-dom";
const App = () => {

  return (
    <>
      <Toaster position="top-center" />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
