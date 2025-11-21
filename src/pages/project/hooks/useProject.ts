import { useState, useEffect } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { hyphenateName } from '@_utils/helpers';
import { ResponsiveImage } from '../data/projectData';

interface Stack {
  name: string;
}

interface Summary {
  name: string;
}

type Project = {
  number?: string;
  category: string;
  date?: string;
  title: string;
  summaries?: Summary[];
  features?: string[];
  images: ResponsiveImage[] | null;
  background: string[];
  stack: Stack[];
  live?: string;
  github?: string;
};

const findProjectByTitle = (
  title: string | undefined,
  projectsData: Project[],
): Project | undefined => {
  return projectsData.find((project) => hyphenateName(project.title) === title);
};

const navigateToProject = (project: Project, navigate: NavigateFunction) => {
  const formattedSegment = hyphenateName(project.title);
  navigate(`/project/${formattedSegment}`, { replace: true });
};

export default function useProject(
  id: string | undefined,
  projectsData: Project[],
  navigate: NavigateFunction,
) {
  const initialProject =
    findProjectByTitle(id, projectsData) || projectsData[0];
  const [currentProject, setCurrentProject] = useState(initialProject);

  useEffect(() => {
    const matchingProject = findProjectByTitle(id, projectsData);
    if (matchingProject) {
      setCurrentProject(matchingProject);
    }
  }, [id, projectsData]);

  const selectProject = (project: Project) => {
    setCurrentProject(project);
    navigateToProject(project, navigate);
  };

  return { currentProject, selectProject };
}
