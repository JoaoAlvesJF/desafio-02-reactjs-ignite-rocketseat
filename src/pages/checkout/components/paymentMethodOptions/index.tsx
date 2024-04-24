import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { ContentContainer, PaymentMethodContainer } from "./styles";


type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};

// export function PaymentMethodInput () {
//   return (
//     <PaymentMethodContainer>
//       <CreditCard size={16} />
//       Cartão de crédito
//     </PaymentMethodContainer>
//   );
// }

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  );
});