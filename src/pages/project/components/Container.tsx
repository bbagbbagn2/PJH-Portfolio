import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { ProjectContainer } from '@_components/MainContainer';
import TitleWrapper from './components/TitleWrapper';
import DescriptionWrapper from './components/DescriptionWrapper';
import { formatPathSegment } from '@_utils/helpers';
import { projectsData } from '../data/projectData';

export default function Container() {
  const [currentProject, setCurrentProject] = useState(projectsData[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;

    setCurrentProject(projectsData[currentIndex]);
  };

  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.title === id);

  const formattedSegment = project
    ? formatPathSegment(currentProject.title)
    : '';

  return (
    <ProjectContainer>
      <div>
        {/* project title */}
        <TitleWrapper
          title={formattedSegment}
          desc={currentProject.category + ' Project'}
        />
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
        >
          {projectsData.map((project, index) => {
            return (
              <SwiperSlide key={index}>
                {/* Image */}
                <img src={project.images} />
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
