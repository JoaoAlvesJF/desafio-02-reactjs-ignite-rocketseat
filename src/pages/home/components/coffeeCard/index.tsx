import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles"

import { RegularText, TitleText } from "../../../../components/typography"
import { QuantityInput } from "../../../../components/quantityInput"
import { ShoppingCart } from "phosphor-react"
import { formatMoney } from "../../../../utils/formatMoney"
import { useCart } from "../../../../hooks/useCart"
import { useState } from "react"
//import { useState } from "react"

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({coffee}: CoffeeProps){
  const { addCoffeeToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  function handleAddToCart(){
    const coffeeToAdd = {
      ...coffee, quantity,
    }

    addCoffeeToCart(coffeeToAdd)
  }

  const formattedPrice = formatMoney(coffee.price);
  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} />

      <Tags>
      {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>
        {coffee.name}
      </Name>

      <Description>
        {coffee.description}
      </Description>

      <CardFooter>
        <div>
          <RegularText size="s" >R$</RegularText>
          <TitleText size="m" color="text" as="strong">{formattedPrice}</TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput 
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill"/>
          </button>
        </AddCartWrapper>

      </CardFooter>
    </CoffeeCardContainer>
  )
}