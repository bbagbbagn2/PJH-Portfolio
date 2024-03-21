import projectsData from '@_data/data';

interface SEOProperty {
  name: string;
  content: string;
}

function createSEOProps(
  name: string,
  content: string,
  exclude: number,
): SEOProperty[] {
  const payload: SEOProperty[] = [
    { name, content },
    { name: `og:${name}`, content },
    { name: `twitter:${name}`, content },
  ];

  return payload.slice(exclude);
}

export const createMeta = {
  titles: (name: string, content: string, exclude: number) =>
    createSEOProps('title', content, exclude),
  urls: (name: string, content: string, exclude: number) =>
    createSEOProps('url', content, exclude),
  images: (name: string, content: string, exclude: number) =>
    createSEOProps('image', content, exclude),
  descriptions: (name: string, content: string, exclude: number) =>
    createSEOProps('description', content, exclude),
};

export function hyphenateName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[!$%^&*()_+|~=`{}[\]:";'<>?,./]/gi, '');
}

export function formatprojectData() {
  return projectsData.map(project => ({
    ...project,
    summaryLinkLabel: project.internalPage
      ? null
      : project.name + ' live demo.',
    siteURL: project.siteName ? 'https://' + project.siteName : '#',
    path: '/project/' + hyphenateName(project.name),
  }));
}
