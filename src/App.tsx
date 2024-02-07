import { Component } from 'react';
import Navbar from './containers/Navbar.tsx';
// import Action from './containers/Action.tsx';
import Chat from './containers/Chat.tsx';
import Sidebar from './containers/Sidebar.tsx';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  gap: 0px;
  display: flex;
  flex-direction: row;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

interface chat {
  id: number;
  messages: string[];
}

interface State {
  chats: chat[];
  displayNewChat: boolean;
  currentChatId: number;
}

interface Props {}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      chats: [],
      displayNewChat: false,
      currentChatId: 0,
    };
  }

  addNewChat = () => {
    const newChatId = Date.now();
    this.setState((prevState) => ({
      chats: [...prevState.chats, { id: newChatId, messages: [] }],
      currentChatId: newChatId,
    }), () => {
      console.log('Chat added');
      console.log(this.state);
    });
  }

  render() {
    return (
      <>
        <Navbar />
        <MainContainer>
          <Sidebar onAddNewChat={this.addNewChat}/>
          <Chat />
        </MainContainer>
      </>
    )
  }
}

export default App;