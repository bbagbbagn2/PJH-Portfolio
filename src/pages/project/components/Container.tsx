import React, { useState, useEffect } from 'react';
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
      <div>
        {/* project title */}
        <TitleWrapper
          title={formatPathSegment(currentProject.title)}
          desc={`${currentProject.category} Project`}
        />
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          initialSlide={initialSlideIndex}
        >
          {projectsData.map((project, index) => {
            return (
              <SwiperSlide key={index}>
                {/* Image */}
                <ImageWrapper src={project.images} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* project description */}
        <DescriptionWrapper description={currentProject.description} />
      </div>
    </ProjectContainer>
  );
}
