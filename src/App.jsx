import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFoundpage from "./pages/PageNotFoundpage";
import ProductProvider from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Routes>
        <Route index element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<PageNotFoundpage />} />
      </Routes>
    </ProductProvider>
  );
}

export default App;
