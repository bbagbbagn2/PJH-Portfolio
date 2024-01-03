import React from 'react';

import Layout from './Layout';
import PostContainer from './Paragraph';

export default function Drinkable() {
    const paragraphs = [
        "Block Smith는 Block Smith의 프론트엔드 개발자로, 과제 전형 시에 개발하였던 웹사이트입니다.",

        "해당 프로젝트는 NextJS, TypeScript, style-components, prisma와 같은 기술을 사용하였습니다.",

        "해당 프로젝트를 진행하며 처음 사용화였던 Next.JS 및 prisma에 대해 공부 할 수 있었습니다.",
    ];

    return (
        <Layout>
            <PostContainer paragraph={paragraphs} />
        </Layout>
    );
}