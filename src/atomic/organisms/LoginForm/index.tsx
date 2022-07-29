// style component
import { useEffect, useRef } from 'react';
import {
  StyledLoginFormContainer,
  StyledLoginFormInput,
  StyledLoginFormSignupButton,
  StyledLoginFormLoginButton
} from './style';

export const LoginForm = () => {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  }, []);
  return (
    <StyledLoginFormContainer>
      <StyledLoginFormInput placeholder='계정' />
      <StyledLoginFormInput placeholder='비밀번호' type='password' />
      <StyledLoginFormLoginButton type='button' ref={ref}>
        로그인
      </StyledLoginFormLoginButton>
      <StyledLoginFormSignupButton>회원가입</StyledLoginFormSignupButton>
    </StyledLoginFormContainer>
  );
};
