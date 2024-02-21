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
  name: string;
  messages: string[];
}

interface State {
  chats: chat[];
  // displayNewChat: boolean;
  currentChatId: number;
  displaySidebar: boolean;
}

interface Props {}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      chats: [],
      // displayNewChat: false,
      currentChatId: 0,
      displaySidebar: true,
    };
  }

  addNewChat = () => {
    const newChatId = Date.now();
    this.setState((prevState) => ({
      chats: [{ id: newChatId, name: `${newChatId}`, messages: [] }, ...prevState.chats],
      currentChatId: newChatId,
    }), () => {
      console.log('Chat added');
      console.log(this.state);
    });
  }

  toggleSidebar = () => {
    this.setState((prevState) => ({
      displaySidebar: !prevState.displaySidebar,
    }), () => {
      console.log('Sidebar toggled');
      console.log(this.state);
    });
  }

  handleChatNameChange = (chatId: number, newName: string) => {
    this.setState((prevState) => ({
      chats: prevState.chats.map((chat) =>
        chat.id === chatId ? { ...chat, name: newName } : chat
      ),
    }));
  }

  render() {
    return (
      <>
        <Navbar />
        <MainContainer>
          {this.state.displaySidebar &&
            <Sidebar 
              onToggleSidebar={this.toggleSidebar} 
              onAddNewChat={this.addNewChat} 
              chats={this.state.chats}
              onChatNameChange={this.handleChatNameChange}
            />
          }
          <Chat />
        </MainContainer>
      </>
    )
  }
}

export default App;