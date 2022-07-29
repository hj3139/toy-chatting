// atomic
import { LoginForm } from 'atomic';

// style component
import { StyledHomeContainer, StyledHomeLogo } from './style';
import Logo from 'assets/images/logo.png';

const Home = () => {
  return (
    <StyledHomeContainer>
      <StyledHomeLogo src={Logo.src} width={200} height={200} />
      <LoginForm />
    </StyledHomeContainer>
  );
};

export default Home;
