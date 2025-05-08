import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { ProjectContainer } from '@_components/MainContainer';
import TitleWrapper from './components/TitleWrapper';
import ImageWrapper from './components/ImageWrapper';
import DescriptionWrapper from './components/DescriptionWrapper';
import { formatPathSegment } from '@_utils/helpers';
import { projectsData } from '../data/projectData';
import useProject from '../hooks/useProject';

export default function Container() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { currentProject, handleSlideChange, initialSlideIndex } = useProject(
    id,
    projectsData,
    navigate,
  );

  return (
    <ProjectContainer>
      {/* project title */}
      <TitleWrapper
        title={formatPathSegment(currentProject.title)}
        desc={`${currentProject.date}`}
      />
      {projectsData.some((project) => project.images) && (
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          initialSlide={initialSlideIndex}
        >
          {projectsData.map((project, index) => {
            return (
              <SwiperSlide key={index}>
                {project.images && (
                  <ImageWrapper src={project.images} alt={project.title} />
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
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
