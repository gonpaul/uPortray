import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar.tsx";

const Container = styled.div`
  width: 100%;
  gap: 0px;
  display: flex;
  flex-direction: row;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const MessageContainer = styled.div`
  justify-content: center;
  align-items: center;
  background-color: var(--morris-room-grey, #a59a8c);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 48px 60px 48px 0;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const MessageInput = styled.div`
  display: flex;
  gap: 13px;
  width: 60%;
  margin: 850px auto 0;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const MessageText = styled.div`
  color: var(--ash-brown, #59473f);
  align-self: center;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  font: 600 14px/100% Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const MessageLogo = styled.img`
  aspect-ratio: 5;
  object-fit: contain;
  object-position: center;
  width: 25px;
  fill: #4a5568;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
`;

const BadgeLogo = styled.img`
  aspect-ratio: 1.45;
  object-fit: contain;
  object-position: center;
  width: 71px;
  max-width: 100%;
`;



function MyComponent() {
  return (
    <Container>
      <Sidebar />
      <MessageContainer>
        <MessageInput>
          <MessageText>Send a message...</MessageText>
          <MessageLogo
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0750a3167f9e147e60c16207ec8a2c4c6711f2445662345c05e279281731857d?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&"
          />
          <BadgeLogo
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/74fa0312d453a8f4ba01528beb43d7ce37eed46ece0d6f94575b0d3c8361386e?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&"
          />
        </MessageInput>
      </MessageContainer>
    </Container>
  );
}

export default MyComponent;