import { Intro } from "./components/intro";
import { OurCoffees } from "./components/ourCoffees";
import { HomeContainer } from "./style";

export function Home() {
  return (
  <HomeContainer>
    <Intro />
    <OurCoffees />
    
  </HomeContainer>
  ) 
}