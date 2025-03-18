import { useAuthContext } from '../../context/authContext';
import { Button, ButtonTxt, Card, NormalText, Photo, Title } from './styles';
import PageContainer from '../../components/PageContainer';

export default function Home() {
	const { currentUser } = useAuthContext();

	return (
		<PageContainer>
			<Card>
                <Photo
                    source={{ uri: currentUser?.photo }}
                />

                <Title>{currentUser?.name}</Title>
                <NormalText>{currentUser?.email}</NormalText>
            </Card>
            
            <Button>
                <ButtonTxt>Sair</ButtonTxt>
            </Button>
		</PageContainer>
	);
}
