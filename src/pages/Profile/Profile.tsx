import React from 'react';
import styled from 'styled-components';

export default function Profile(): JSX.Element {
    return (
        <ProfilePageSection>
            <ProfilePageBox>
                <TitleBox>
                    <h1>
                        <ProfilePageParagraph fontSize="65px">
                            I<ProfilePageSpan>'</ProfilePageSpan>M A
                            <br />
                            FRONT<ProfilePageSpan>-</ProfilePageSpan>END
                            <br />
                            DEVELOPER<ProfilePageSpan>.</ProfilePageSpan>
                        </ProfilePageParagraph>
                    </h1>
                </TitleBox>
                <div>
                    <h5>
                        <ProfilePageParagraph fontSize="24px" lineHeight="1.8em" textAlign="center">
                            가능성을을 개발하는 개발자, 박지훈입니다.
                        </ProfilePageParagraph>
                    </h5>
                </div>
            </ProfilePageBox>
        </ProfilePageSection>
    );
}

const ProfilePageSection = styled.section`
    width: 100%;
    height: 1088px;
    min-height: 1088px;
    display: grid;
    place-items: center;
    place-content: center;
`;

const ProfilePageBox = styled.div`
    display: grid;
    width: 100%;
`;

const ProfilePageParagraph = styled.p<{ fontSize?: string; lineHeight?: string; textAlign?: string; }>`
    margin: 0;
    color: #FFFFFF;

    font-size: ${props => props.fontSize || "65px"};
    line-height: ${props => props.lineHeight};
    text-align: ${props => props.textAlign};
`;

const ProfilePageSpan = styled.span`
    font-size: 65px;
    color: #98FB98;
`;

const TitleBox = styled.div`
    display: inline-block;
    margin-bottom: 50px;
`;
