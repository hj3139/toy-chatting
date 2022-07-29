import {
  ButtonHTMLAttributes,
  forwardRef,
  HTMLAttributes,
  RefObject
} from 'react';

import { StyledDefaultButton } from './styles';

interface DefaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: RefObject<HTMLButtonElement>;
}

export const DefaultButton = forwardRef((props: DefaultButtonProps) => {
  const { children, ref, ...rest } = props;

  return (
    <StyledDefaultButton ref={ref} {...rest}>
      {children}
    </StyledDefaultButton>
  );
});
