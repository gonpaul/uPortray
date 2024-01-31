import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar.tsx";
import Chat from "./Chat.tsx";

const Container = styled.div`
  width: 100%;
  gap: 0px;
  display: flex;
  flex-direction: row;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

function MainPage() {
  return (
    <Container>
      <Sidebar />
      <Chat />
    </Container>
  );
}

export default MainPage;