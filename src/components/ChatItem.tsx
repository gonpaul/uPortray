import styled from 'styled-components';
import { useState } from 'react';



const ChatItemList = styled.div`
  border-radius: 20px;
  background-color: var(--ash-brown, #59473f);
  padding: 18px 60px;
  font-size: 18px;
  color: var(--light-grey, #ecebe9);

  &:hover {
    background-color: var(--morris-room-grey, #a59a8c);
  }
`;

interface Chat {
  id: number;
  name: string;
  messages: string[];
}

interface ChatItemProps {
  chat: Chat;
  onChatNameChange: (id: number, newName: string) => void;
}

const ChatItem: React.FC<ChatItemProps> = ({ chat, onChatNameChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [chatName, setChatName] = useState(chat.name);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChatName(event.target.value);
    onChatNameChange(chat.id, event.target.value);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <ChatItemList onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <input
          type="text"
          value={chatName}
          onChange={handleNameChange}
          onBlur={handleBlur}
        />
      ) : (
        <span>{chatName}</span>
      )}
    </ChatItemList>
  );
}

export default ChatItem;