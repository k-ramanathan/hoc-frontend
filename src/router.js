import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/common/Layout";
import Vendors from "./components/vendors/Vendors";
import CreateVendor from "./components/vendors/CreateVendor";

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Layout />}>
    <Route path="vendor" element={<Vendors />} />
    <Route path="vendor/create" element={<CreateVendor />} />
  </Route>)
);
