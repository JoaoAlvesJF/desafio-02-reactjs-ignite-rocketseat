import { Header } from "../../components/header";
import { LayoutContainer } from "./styles";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}