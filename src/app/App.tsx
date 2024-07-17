import React from 'react';
import { router } from './providers';
import { RouterProvider } from "react-router-dom";
import "./styles/index.scss";

export const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  )
}
