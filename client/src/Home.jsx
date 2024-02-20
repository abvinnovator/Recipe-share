import React from 'react';
import Wave from 'react-wavify';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
const Home = () => {
  const WaveContainer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: -5px;
    height: ${(props) => props.level + 'vh'};
    display: flex;
    z-index: -1;
    transform: rotate(180deg);
  `;

  const Header = styled.h1`
    text-align: center;
    margin-top: 5vh;
     font-family: "Protest Riot", sans-serif;
    color: #333;
    font-size: 3rem;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 576px) {
      font-size: 2rem;
    }
  `;

  const Subheader = styled.p`
    text-align: center;
     font-family: "Protest Riot", sans-serif;
    color: #666;
    font-size: 1.5rem;
    margin-bottom: 40px;
    line-height: 2;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }

    @media (max-width: 576px) {
      font-size: 1rem;
    }
  `;

  const WaveColor1 = "#ff8c42";
  const WaveColor2 = "#f8d800";
  const WaveColor3 = "#cda2ab";

  return (
    <>
      <Header>Discover Delicious Recipes</Header>
      <Subheader>Share your culinary creations with the world!</Subheader>
      <Subheader>Foodie Connect is a dynamic web application designed for food 
        enthusiasts to share, discover, and indulge in culinary experiences. With its user-friendly interface and 
        robust features, Foodie Connect serves as a social platform where users can freely create, explore, update, and delete 
        their recipes, fostering a vibrant community of passionate food lovers.<br />
   <Link to="/login"><button>Login</button></Link>     
<span class="button-gap"><Link to="/register"><button>Register</button></Link></span><br />
<Link to="/get" style={{ fontSize: "24px" }}>
    <button style={{ fontSize: "24px" }}>Browse all recipes</button>
</Link>

</Subheader>
      <div style={{ marginTop: "-200px" }}>
        <WaveContainer level={90}>
          <Wave
            fill={WaveColor1}
            paused={false}
            opacity="0.30"
            options={{
              height: 20,
              amplitude: 40,
              speed: 0.15,
              points: 10,
            }}
          />
        </WaveContainer>
        <WaveContainer level={90}>
          <Wave
            fill={WaveColor2}
            opacity="0.80"
            paused={false}
            options={{
              height: 60,
              amplitude: 30,
              speed: 0.2,
              points: 8,
            }}
          />
        </WaveContainer>
        <WaveContainer level={90}>
          <Wave
            fill={WaveColor3}
            paused={false}
            opacity="0.5"
            options={{
              height: 30,
              amplitude: 20,
              speed: 0.25,
              points: 6,
            }}
          />
        </WaveContainer>
      </div>
    </>
  );
};

export default Home;
