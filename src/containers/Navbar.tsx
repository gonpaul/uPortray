// import React from "react";
import styled from "styled-components";

const MainComponent = () => {
  return (
    <MainContainer>
      <Header>
          <Logo>uPortray</Logo>
          <SearchBar>Search files...</SearchBar>
      </Header>

      <NavSection>
        <FoldersTitle>Folders</FoldersTitle>
        <Image loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/175e73da1e653dc1b5cba0eb11dd7696e425cc302652b2d69499b8cac0fdfdf2?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/175e73da1e653dc1b5cba0eb11dd7696e425cc302652b2d69499b8cac0fdfdf2?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/175e73da1e653dc1b5cba0eb11dd7696e425cc302652b2d69499b8cac0fdfdf2?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/175e73da1e653dc1b5cba0eb11dd7696e425cc302652b2d69499b8cac0fdfdf2?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/175e73da1e653dc1b5cba0eb11dd7696e425cc302652b2d69499b8cac0fdfdf2?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/175e73da1e653dc1b5cba0eb11dd7696e425cc302652b2d69499b8cac0fdfdf2?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/175e73da1e653dc1b5cba0eb11dd7696e425cc302652b2d69499b8cac0fdfdf2?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/175e73da1e653dc1b5cba0eb11dd7696e425cc302652b2d69499b8cac0fdfdf2?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&"/>
        <Circle />
      </NavSection>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background-color: var(--ash-brown, #59473f);
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: 70px;
  padding: 10px;
  
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding-left: 20px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Logo = styled.div`
  color: var(--light-grey, #ecebe9);
  flex-grow: 1;
  flex-basis: auto;
  width: 300px;
  text-align: center;
  margin: auto;
  font: 700 26px/100% Poppins, sans-serif;
`;

const SearchBar = styled.div`
  color: var(--light-grey, #ecebe9);
  white-space: nowrap;
  border-radius: 15px;
  background-color: rgba(165, 154, 140, 1);
  justify-content: center;
  padding: 20px;
  font: 16px/100% "Georgia", serif;
  
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const NavSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const FoldersTitle = styled.div`
  color: var(--light-grey, #ecebe9);
  flex-grow: 1;
  flex-basis: 0%;
  font-size: 18px;
  margin: auto 0;
  font: 600 18px/100% Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
`;

const Image = styled.img`
  aspect-ratio: 0.96;
  object-fit: contain;
  object-position: center;
  width: 50px;
  align-self: start;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 1);
`;

export default MainComponent;