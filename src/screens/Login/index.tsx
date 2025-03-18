import { Button, ButtonTxt, Container, GoogleLogo } from './styles';

export default function Login() {
    return (
        <Container>
            <Button>
                <GoogleLogo />
                <ButtonTxt>Login com Google</ButtonTxt>
           </Button>
        </Container>
    );
};