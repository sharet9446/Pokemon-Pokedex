import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  return (
    <HomeDivOut>
      <Container>
        <PokemonLogo src="../image/pokemon_logo.svg" alt="Pokemon Logo" />
        <HomeDivIn>
          <HomeLink to="/dex">포켓몬 도감 시작하기</HomeLink>
        </HomeDivIn>
      </Container>
    </HomeDivOut>
  );
}

export default Home;

const HomeDivOut = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  background-color: wheat;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const HomeDivIn = styled.div`
  border-radius: 100px;
  padding: 5px 5px;
  background: linear-gradient(145deg, #f3e2c7, #d6bea5);
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1),
    -6px -6px 14px rgba(255, 255, 255, 0.6);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.15),
      -6px -6px 14px rgba(255, 255, 255, 0.7);
  }
`;

const PokemonLogo = styled.img`
  min-width: 500px;
  width: 0%;
  height: auto;
`;

const HomeLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 16px 50px;
  font-size: 22px;
  font-weight: bold;
  color: white;
  background: linear-gradient(180deg, #bb7a3b, #8b5a2b);
  border-radius: 50px;
  border: none;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.15),
    -2px -2px 6px rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(180deg, #d08b4e, #a0522d);
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.2),
      -3px -3px 8px rgba(255, 255, 255, 0.5);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1),
      -2px -2px 6px rgba(255, 255, 255, 0.4);
  }
`;
