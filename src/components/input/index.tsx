import { InputHTMLAttributes, forwardRef } from "react";
import { InputStyleContainer, InputStyled, InputWrapper, RightText } from "./styles";
import { RegularText } from "../typography";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
};


// export function Input({ ...props }: InputProps) {
//   return(
//     <InputStyleContainer {...props}/>
//   )
// }

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, rightText, className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled ref={ref} {...props} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    );
  }
);