import { useState, useEffect } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { formatPathSegment } from '@_utils/helpers';

type Project = {
  title: string;
  image: string;
};

const fintProjectByTitle = (
  title: string | undefined,
  projectsData: Project[],
) => {
  return projectsData.find(
    project => formatPathSegment(project.title) === title,
  );
};

const findProjectIndex = (currentProject: Project, projectsData: Project[]) => {
  return projectsData.findIndex(
    project => project.title === currentProject.title,
  );
};

const handleProjectnavigation = (
  newProject: Project,
  navigate: NavigateFunction,
) => {
  const formattedSegment = formatPathSegment(newProject.title);
  navigate(`/project/${formattedSegment}`, { replace: true });
};

export default function useProject(
  id: string | undefined,
  projectsData: Project[],
  navigate: NavigateFunction,
) {
  const initialProject =
    fintProjectByTitle(id, projectsData) || projectsData[0];
  const [currentProject, setCurrentProject] = useState(initialProject);

  useEffect(() => {
    const matchingProject = fintProjectByTitle(id, projectsData);
    if (matchingProject) {
      setCurrentProject(matchingProject);
    }
  }, [id, projectsData]);

  const handleSlideChange = (swiper: any) => {
    const selectedProject = projectsData[swiper.activeIndex];
    setCurrentProject(selectedProject);
    handleProjectnavigation(selectedProject, navigate);
  };

  const initialSlideIndex = findProjectIndex(currentProject, projectsData);

  return { currentProject, handleSlideChange, initialSlideIndex };
}
