import React from 'react';
import styled from 'styled-components';

export default function Icondb() {
    return (
        <Layout>
            <Container>
            <HeadingBox>
                <Heading>ICON_DB</Heading>
            </HeadingBox>
            <p>ICON_DB는 아이콘을 사용하려는 사람들을 위한 무료 배포 플랫폼입니다. 저희는 다른 아이콘 배포 웹사이트의 차이점을 둬야 했습니다.</p>
            <p>위의 차이점을 실행하기 위해 저희는 svg 파일을 이용해 즉석으로 아이콘을 변경할 수 있는 기능을 구축하였습니다.</p>
            <p>아이콘 웹사이트의 목적에 맞도로 아이콘 리스트 크게 보이도록 디자인 하였습니다.</p>
            <p>전체적인 웹사이트의 UI를 디자인하고, 소셜 로그인 및 다운로드 / 업로드 기능을 Axios를 통하여 백엔드와의 연결을 구축하였습니다. 성능과 효율성에 주의를 기울이면서 해당 기능을 구현하는 것은 시간이 걸렸습니다. 팀원과의 갈등 또한 있었지만, 결국에는 안정적이고 완성도 있는 프로젝트를 개발할 수 있었습니다.</p>
            <p>해당 프로젝트는 React, style-components, JavaScript, Node.js, MySQL 등과 같은 여러 기술을 사용하였습니다. 저는 디자인부터 기획 및 구현에 이르기까지 다양한 부분에서 작업할 수 있는 경험을 얻었습니다.</p>
            <p>React를 활용한 첫 프로젝트였기 때문에 다양한 기술에 대해 많은 공부를 하였고 많은 피드백을 얻었습니다.</p>
            </Container>
        </Layout>
    );
}

const Layout = styled.main`
    background: #1A1E23;
`;

const Container = styled.div`
    margin-top: calc((4.375rem * 1.2));
    padding: 0 8%;
    max-width: 1400px;
    display: block;
`;

const HeadingBox = styled.header`
    margin-top: 1.2375rem;
    margin-bottom: 4.375rem;
    position: relative;
    text-align: center;
`;

const Heading = styled.h1`
    margin: 1.3rem 0;
    font-size: 1.802em;
    color: #FFF;
`;