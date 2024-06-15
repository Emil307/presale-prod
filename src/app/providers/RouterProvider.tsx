import {createBrowserRouter} from "react-router-dom";
import { Presale } from "../../pages/Presale";

export const router = createBrowserRouter([
    {
        element: <Presale/>,
        path: '/'
    }
]);
