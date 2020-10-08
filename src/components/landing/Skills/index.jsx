import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Matt and I’m a Full Stack engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            My passion for code came when I was just 15 years old. I started by making mods for the popular game
            Minecraft. Since then my passion has branched into all areas of development. I love tackling tricky problems
            and algorithms and creating fun, unique applications from front to back.
          </p>
          <Button as={AnchorLink} href="#contact">
            Contact me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
