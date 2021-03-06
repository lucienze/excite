import React from 'react';
import styled from 'styled-components';
import { Typography, Container, Box } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';
import ScrollAnimation from 'react-animate-on-scroll';


const HeroStyled = styled.section`
  display: flex;
  padding-top: 128px;
  padding-bottom: 64px;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  background-color: ${pink[100]};
  background-image: url('/img/flashlight.png');
  background-position: 95% center;
  background-size: auto 400px;
  background-repeat: no-repeat;
`;

const Why = () => (
  <HeroStyled>
    <Container fixed>
      <ScrollAnimation
        animateIn="shake"
        initiallyVisible={true}
        duration={1}
        animateOnce
      >
        <Typography variant="h2" color="error" gutterBottom>
          Почему мы?
        </Typography>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeInLeft"
        delay={500}
        duration={0.5}
        animateOnce
      >
        <Typography variant="h4" color="primary" gutterBottom>
          <Box fontWeight="fontWeightRegular">
            В нашей команде лучшие практики <br />
            веб-разработки и дизайна.
          </Box>
        </Typography>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeInLeft"
        delay={600}
        duration={0.5}
        animateOnce
      >
        <Typography variant="h4" color="primary" gutterBottom>
          <Box fontWeight="fontWeightRegular">
            Средний возраст сотрудников - 22 года. <br />
            И все стрельцы! Только такие ребята знают, <br />
            что сегодня в тренде!
          </Box>
        </Typography>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeInLeft"
        delay={700}
        duration={0.5}
        animateOnce
      >
        <Typography variant="h4" color="primary">
          <Box fontWeight="fontWeightRegular">
            <ul>
              <li>Качественный сайт за 5 дней</li>
              <li>Уникальный современный дизайн</li>
              <li>Собственная технология</li>
              <li>Последующая поддержка сайта</li>
            </ul>
          </Box>
        </Typography>
      </ScrollAnimation>
    </Container>
  </HeroStyled>
);

export default Why;