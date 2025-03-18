import { ActivityIndicator, Text, View } from 'react-native';
import styled from 'styled-components/native';

import { useAuthContext } from '../context/authContext';

const Container = styled.View`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 2;
    background-color: #00000067;
`;

export default function Loading() {
    const { loading } = useAuthContext();

    if (loading) return (
        <Container>
            <ActivityIndicator
                size={80}
                color='#fff'
            />
        </Container>
    );
};
