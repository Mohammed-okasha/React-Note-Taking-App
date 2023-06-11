import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/Error";
import HomePage from "../pages/Home";
import NewPage from "../pages/New";
import NoteDetailsPage from "../pages/Details";
import EditPage from "../pages/Edit";

const routerConfig = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "new", element: <NewPage /> },
      {
        path: ":noteId",
        children: [
          { index: true, element: <NoteDetailsPage /> },
          { path: "edit", element: <EditPage /> },
        ],
      },
    ],
  },
]);

const BrowserRouterProvider = () => {
  return <RouterProvider router={routerConfig} />;
};

export default BrowserRouterProvider;
