import React from 'react';
import styled from 'styled-components';
import Profile from '../components/Profile';
import Formation from '../components/Formation';
import XPro from '../components/XPro';
import Project from '../components/Project';

function Content() {
    return (
        <Container>
            <Wrapper>
                <Profile />

                <Formation />

                <XPro />

                <Project />
            </Wrapper>
        </Container>
    )
}

export default Content;


const Container = styled.div`
    flex-basis: 70%;
    margin-bottom: 30px;
    background-color: ${props => props.theme.bgColor};
`;

const Wrapper = styled.div`
    width: 90%;
    margin: auto;

    .title {
        font-size: var(--title-font-size);
        font-weight: 500;
        letter-spacing: 1px;
        margin-bottom: 10px;
        color: ${props => props.theme.textColor};
    }
`;