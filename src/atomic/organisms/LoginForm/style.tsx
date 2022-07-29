import { DefaultButton, DefaultInput } from 'atomic/atoms';
import styled from 'styled-components';

export const StyledLoginFormContainer = styled.form`
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const StyledLoginFormInput = styled(DefaultInput)`
  margin: 5px 0;
`;

export const StyledLoginFormSignupButton = styled(DefaultButton)`
  background-image: linear-gradient(
    to right,
    #ed6ea0,
    #ec8c69,
    #f7186a,
    #fbb03b
  );
  box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);
  margin-top: 5px;
`;

export const StyledLoginFormLoginButton = styled(DefaultButton)`
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;

  :before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  :active {
    color: #000;
  }
  :hover:before {
    opacity: 1;
  }
  :active:after {
    background: transparent;
  }
  :after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
