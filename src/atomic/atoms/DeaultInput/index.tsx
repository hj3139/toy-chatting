// base
import { HTMLAttributes, InputHTMLAttributes } from 'react';

// style
import { StyledDefaultInput } from './style';

type DefaultInputProps = InputHTMLAttributes<HTMLInputElement>;

export const DefaultInput = (props: DefaultInputProps) => {
  const { type } = props;
  return <StyledDefaultInput type={type || 'text'} {...props} />;
};
