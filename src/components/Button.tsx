import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  href: string;
  target?: string;
  text: string;
};

export default function Button({ href, target, text }: ButtonProps) {
  return (
    <ProjectLink href={href} target={target}>
      <LinkBox>{text}</LinkBox>
    </ProjectLink>
  );
}

const ProjectLink = styled.a`
  /* Positioning */
  position: relative;

  /* Dimensions */
  min-width: 23.222em;

  /* Layout */
  display: inline-flex;

  /* Styling */
  background: transparent;
  font-size: 0.9em;
  font-weight: bold;
  text-transform: uppercase;

  /* Overflow handling */
  overflow: hidden;

  /* User Interation */
  user-select: none;

  /* White Space Handling */
  white-space: nowrap;

  :hover {
    div {
      color: #fff;
      border-color: rgb(60, 143, 221);
    }

    div::before {
      transform: translateX(0);
      background: #3c8fdd;
    }
  }
  div::before {
    /* Pseudo-element for an animated background effect */
    content: '';

    /* Positioning */
    position: absolute;
    top: -0.1em;
    bottom: 0;
    left: 0;
    right: 0;

    /* Dimensions */
    width: 100%;
    height: 108%;

    /* Styling */
    background: currentColor;
    pointer-events: none;

    /* Initial transformation */
    transform: translateX(-100%);

    /* Transition effect */
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);

    /* Z-index */
    z-index: -1;
  }
`;

const LinkBox = styled.div`
  /* Positioning */
  position: relative;
  padding: 1.25em 3em;

  /* Dimensions */
  width: 100%;

  /* Layout */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Styling */
  border: 1px solid currentColor;
  color: #3c8fdd;

  /* Z-index */
  z-index: 1;
`;
