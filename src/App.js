import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import RouteLayout from "./pages/RootLayout";
import ErrorPage from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Product /> },
      { path: "/products/:productId", element: <ProductDetail /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
