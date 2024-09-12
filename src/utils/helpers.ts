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

/** 주어진 이름을 하이픈으로 변환하는 함수 */
export function hyphenateName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[!$%^&*()_+|~=`{}[\]:";'<>?,./]/gi, '');
}

/** 프로젝트 데이터를 포맷팅하는 함수 */
export function formatProjectData() {
  return projectsData.map(project => ({
    ...project,
    summaryLinkLabel: project.internalPage
      ? null
      : `${project.name} live demo.`,
    siteURL: project.siteName ? `https://${project.siteName}` : '#',
    path: `/project/${hyphenateName(project.name)}`,
  }));
}

/** 주소창에 "-"이 있을 시 띄어쓰기 및 다음 글자를 대문자로 나타내주는 함수 */
export function formatPathSegment(segment: string): string {
  return segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
}
