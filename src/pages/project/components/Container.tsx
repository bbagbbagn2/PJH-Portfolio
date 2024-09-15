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

export default function Container() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const initialProject =
    projectsData.find(p => p.title === id) || projectsData[0];
  const [currentProject, setCurrentProject] = useState(initialProject);

  useEffect(() => {
    if (id) {
      const matchingProject = projectsData.find(p => p.title === id);
      if (matchingProject) {
        setCurrentProject(matchingProject);
      }
    }
  }, [id]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    const newProject = projectsData[currentIndex];

    setCurrentProject(newProject);

    const formattedSegment = formatPathSegment(newProject.title);
    navigate(`/project/${formattedSegment}`, { replace: true });
  };

  const initialSlideIndex = projectsData.findIndex(
    project => project.title === currentProject.title,
  );

  const formattedSegment = formatPathSegment(currentProject.title);

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
