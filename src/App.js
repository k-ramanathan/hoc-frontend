import "./assets/boxicons.css";
import "./assets/core.css";
import "./assets/theme-default.css";
import "./assets/demo.css";
import "./assets/style.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
