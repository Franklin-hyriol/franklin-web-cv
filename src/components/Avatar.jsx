import React from 'react'
import styled from 'styled-components';
import LightImage from './../assets/profile-light.png';
import DarkImage from './../assets/profile-dark.png';

function Avatar({ theme }) {

    return (
        <Container>
            <div className="image">
                <img src={theme === 'light' ? LightImage : DarkImage} alt="Franklin Hyriol" />
            </div>

            <div className="name">
                Franklin Hyriol
            </div>

            <div className="job">
                Développeur Front-end
            </div>
        </Container>
    )
}

export default Avatar;


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;


    img {
        width: 84px;
        height: 84px;
        border-radius: 50%;
    }

    .name {
        margin-top: 5px;
        font-size: var(--name-font-size);
        font-weight: 600;
        color: ${props => props.theme.textColor};
    }

    .job{
        margin-top: 3px;
        font-size: calc(var(--text-font-size) + 0.05rem);
        color: ${props => props.theme.textOffColor};
    }
`;