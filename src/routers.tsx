import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Checkout } from "./pages/checkout";
import { DefaultLayout } from "./layouts/defaultLayout";
import { OrderConfirmed } from "./pages/orderConfirmed";

export function Router () {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderConfirmed" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  )
}