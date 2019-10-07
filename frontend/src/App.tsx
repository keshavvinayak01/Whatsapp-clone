import React from 'react';
import { BrowserRouter, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import ChatRoomScreen from './Components/ChatRoomScreen';
import ChatsListScreen from './Components/ChatsListScreen';
import AnimatedSwitch from './Components/AnimatedSwitch';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<AnimatedSwitch>
				<Route exact path="/chats" component={ChatsListScreen} />
				<Route exact path="/chats/:chatId"
				component={({ match } : RouteComponentProps<{ chatId : string }>) => (
					<ChatRoomScreen chatId={ match.params.chatId } />
				)} />
			</AnimatedSwitch>
			<Route exact path="/" render={redirectToChats} />
		</BrowserRouter>
	);
}

const redirectToChats = () => <Redirect to="chats" />

export default App;
