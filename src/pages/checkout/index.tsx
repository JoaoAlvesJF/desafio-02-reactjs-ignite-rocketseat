import { CheckoutOrderForm } from "./components/checkoutOrderForm";
import { SelectedCoffees } from "./components/selectedCoffees";
import { CheckoutContainer } from "./styles";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().min(8, "Informe o CEP"),
  street: zod.string().min(8, "Informe o Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(8, "Informe o Bairro"),
  city: zod.string().min(5, "Informe a Cidade"),
  uf: zod.string().min(2, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type OrderData = zod.infer<typeof checkoutFormValidationSchema>;

type ConfirmOrderFormData = OrderData;


export function Checkout () {

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  });

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();
  const { cleanCart } = useCart();

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/orderConfirmed", {
      state: data,
    });
    cleanCart();
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
        <CheckoutOrderForm />
        <SelectedCoffees />
      </CheckoutContainer>
    </FormProvider>
  )
}