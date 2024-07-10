import React from 'react';
import { router } from './providers';
import { RouterProvider } from "react-router-dom";
import "./styles/index.scss";
import { TonConnectUIProvider } from '@tonconnect/ui-react';

export const App: React.FC = () => {
  return (
    <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
      <RouterProvider router={router} />
    </TonConnectUIProvider>
  )
}
