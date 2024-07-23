import React from 'react';
import styled from 'styled-components';

interface ProjectLinkProps {
  project: {
    summaryLinkLabel: string | null; // 수정
    internalPage: boolean;
    path: string;
    siteURL: string;
    name: string;
  };
}

export default function ProjectLink({ project }: ProjectLinkProps) {
  return (
    <Link
      aria-label={project.summaryLinkLabel || undefined}
      target={!project.internalPage ? '_blank' : undefined}
      rel={!project.internalPage ? 'noopener noreferrer' : undefined}
      href={project.internalPage ? project.path : project.siteURL}
    >
      {project.name} project summary.
    </Link>
  );
}

const Link = styled.a`
  /* Positioning */
  position: absolute;
  top: 0;
  left: 0;

  /* Dimensions */
  width: 100%;
  height: 80%;

  /* Styling */
  background-color: transparent;
  text-indent: -9999px;

  /* Overflow handling */
  overflow: hidden;

  /* Transition effect */
  transition: none;

  /* Z-index */
  z-index: 0;
`;
