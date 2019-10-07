import React from 'react';
import ChatsNavbar from './ChatsNavbar';
import ChatsList from './ChatsList';
import styled from 'styled-components';
import { History } from 'history';

interface ChatsListScreenProps {
    history : History;
}

const Container = styled.div`
    height : 100vh;
`;
const ChatsListScreen : React.FC<ChatsListScreenProps> = ({ history }) => (
    <Container>
        <ChatsNavbar />
        <ChatsList history={history} />
    </Container>
);

export default ChatsListScreen;