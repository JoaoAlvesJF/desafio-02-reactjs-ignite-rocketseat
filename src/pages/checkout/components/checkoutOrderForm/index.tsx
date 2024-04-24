import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { TitleText } from "../../../../components/typography";
import { SectionTitle } from "../sectionTitle";
import { CheckoutOrderFormContainer, FormSectionContainer } from "./styles";
import { useTheme } from "styled-components";
import { AddressForm } from "./AddressForm";
import { PaymentMethodOptions } from "./paymentMethodOptions";

export function CheckoutOrderForm(){
  const { colors } = useTheme();

  return(
    <CheckoutOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle 
          title="Endereço de Entrega" 
          subtitle="Informe o endereço onde deseja receber seu pedido" 
          icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]}/>}
        />
        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle 
          title="Pagamento" 
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar" 
          icon={<CurrencyDollar size={22} color={colors["brand-purple"]}/>}
        />
        <PaymentMethodOptions />
      </FormSectionContainer>

    </CheckoutOrderFormContainer>
  )
}