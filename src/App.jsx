import { useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LayOutOne from "./LayOut/LayOutOne";
import Home from "./Pages/Home";

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayOutOne />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  );
}

export default App;
