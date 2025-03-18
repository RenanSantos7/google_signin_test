import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

interface PageContainerProps {
    children: ReactNode;
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;

export default function PageContainer(props: PageContainerProps) {
    const insets = useSafeAreaInsets();

    return (
        <Container style={{ marginTop: insets.top }}>
            {props.children}
        </Container>
    );
};