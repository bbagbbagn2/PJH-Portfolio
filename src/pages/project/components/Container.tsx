import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProjectContainer } from '@_components/MainContainer';
import { formatPathSegment } from '@_utils/helpers';
import { projectsData } from '../data/projectData';
import useProject from '../hooks/useProject';
import TitleWrapper from './components/TitleWrapper';
import ImageWrapper from './components/ImageWrapper';
import DescriptionWrapper from './components/DescriptionWrapper';

export default function Container() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { currentProject } = useProject(id, projectsData, navigate);

  return (
    <ProjectContainer>
      {/* project title */}
      <TitleWrapper
        title={formatPathSegment(currentProject.title)}
        desc={`${currentProject.date}`}
      />
      {currentProject.images?.[0] && (
        <ImageWrapper image={currentProject.images[0]} />
      )}
      {/* project description */}
      <DescriptionWrapper
        summaries={currentProject.summaries}
        features={currentProject.features}
        background={currentProject.background}
        stack={currentProject.stack}
      />
    </ProjectContainer>
  );
}
