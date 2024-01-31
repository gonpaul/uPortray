import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: var(--ash-brown, #59473f);
  flex-grow: 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 13px 20px 36px 20px;
  justify-content: space-between;

  @media (max-width: 991px) {
    max-width: 100%;
    padding-left: 20px;
  }
`;

const Logo = styled.img`
  align-self: end;
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 40px;
  max-width: 100%;
`;

const SkillContainer = styled.div`
  border-radius: 40px;
  background-color: var(--morris-room-grey, #a59a8c);
  align-items: center;
  justify-content: center;
  align-self: start;
  display: flex;
  margin-top: 19px;
  width: 170px;
  flex-direction: column;
  padding: 18px 60px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const SkillGroup = styled.div`
  display: flex;
  gap: 22px;
`;

const SkillLogo = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  max-width: 100%;
`;

const SkillText = styled.div`
  color: var(--light-grey, #ecebe9);
  align-self: center;
  margin: auto 0;
  font: 600 15px/100% Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-seri;
`;

const ActionLogo = styled.img`
  aspect-ratio: 1.21;
  object-fit: contain;
  object-position: center;
  width: 23px;
  max-width: 100%;
`;

const ActionText = styled.div`
  color: var(--light-grey, #ecebe9);
  flex-grow: 1;
  font: 600 18px Plus Jakarta Sans, sans-serif;
`;

const SidebarHead = styled.div`
  display: flex;
  flex-direction: column;
`;

const SidebarTail = styled.div`
  display: flex;
  flex-direction: column;
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarHead>
        <Logo
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/05ad417835b74e111a95b50b9a35eca585d84d0e3989e328675e821837c43986?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/05ad417835b74e111a95b50b9a35eca585d84d0e3989e328675e821837c43986?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/05ad417835b74e111a95b50b9a35eca585d84d0e3989e328675e821837c43986?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/05ad417835b74e111a95b50b9a35eca585d84d0e3989e328675e821837c43986?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/05ad417835b74e111a95b50b9a35eca585d84d0e3989e328675e821837c43986?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/05ad417835b74e111a95b50b9a35eca585d84d0e3989e328675e821837c43986?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/05ad417835b74e111a95b50b9a35eca585d84d0e3989e328675e821837c43986?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/05ad417835b74e111a95b50b9a35eca585d84d0e3989e328675e821837c43986?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&"/>
        <SkillContainer>
          <SkillGroup>
            <SkillLogo
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbf4b4dd7c0f6b27c541ad94c72fab20b913520841552621e0c45e4d06a86154?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&"
            />
            <SkillText>New Skill</SkillText>
          </SkillGroup>
        </SkillContainer>
      </SidebarHead>

      <SidebarTail>
        <SkillContainer>
          <SkillGroup>
            <ActionLogo
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cb15b44e2ce2969c1623333dbede78a4b4761d0b418442b3090edc038dc93192?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb15b44e2ce2969c1623333dbede78a4b4761d0b418442b3090edc038dc93192?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb15b44e2ce2969c1623333dbede78a4b4761d0b418442b3090edc038dc93192?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb15b44e2ce2969c1623333dbede78a4b4761d0b418442b3090edc038dc93192?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb15b44e2ce2969c1623333dbede78a4b4761d0b418442b3090edc038dc93192?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb15b44e2ce2969c1623333dbede78a4b4761d0b418442b3090edc038dc93192?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb15b44e2ce2969c1623333dbede78a4b4761d0b418442b3090edc038dc93192?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb15b44e2ce2969c1623333dbede78a4b4761d0b418442b3090edc038dc93192?apiKey=ccb9befcdd13446b89118ba9f6c19fb6&"/>
            <ActionText>SETTINGS</ActionText>
          </SkillGroup>
        </SkillContainer>
      </SidebarTail>
    </SidebarWrapper>
  );
};

export default Sidebar;
