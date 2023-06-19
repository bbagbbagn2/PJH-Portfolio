import React from 'react';
import styled from 'styled-components';

export default function Profile(): JSX.Element {
    return (
        <ProfileContainer>
            <ProfileWrapper>
                <TitleWrapper>
                    <ProfileTitle>
                        I<ProfileTitleColor>'</ProfileTitleColor>M A
                    </ProfileTitle>
                    <ProfileTitle>
                        FRONT<ProfileTitleColor>-</ProfileTitleColor>END
                    </ProfileTitle>
                    <ProfileTitle>
                        DEVELOPER<ProfileTitleColor>.</ProfileTitleColor>
                    </ProfileTitle>
                </TitleWrapper>
                <div>
                    <IntroduceTitle>
                        가능성을을 개발하는 개발자, 박지훈입니다.
                    </IntroduceTitle>
                </div>
            </ProfileWrapper>
        </ProfileContainer>
    );
}

const ProfileContainer = styled.div`
    width: 100%;
    height: 1088px;
    min-height: 1088px;
    display: grid;
    place-items: center;
    place-content: center;
`;

const ProfileWrapper = styled.div`
    display: grid;
    width: 100%;
`;

const ProfileTitle = styled.h1`
    margin: 0;
    font-size: 65px;
    color: #FFFFFF;
`;
const ProfileTitleColor = styled.span`
    font-size: 65px;
    color: #98FB98;
`;

const TitleWrapper = styled.div`
    display: inline-block;
    margin-bottom: 50px;
`;

const IntroduceTitle = styled.h5`
    margin: 0;
    line-height: 1.8em;
    text-align: center;
    font-size: 24px;
    color: #FFFFFF;
`;