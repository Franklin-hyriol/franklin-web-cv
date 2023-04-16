import React from 'react'
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

function Skills() {
    return (
        <Container>
            <HardSkills>
                <div className="title">COMPÉTENCES</div>
                <div className='skill'>
                    <div className="techno">HTML / CSS</div>
                    <div className="stars">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                    </div>
                </div>
                <div className='skill'>
                    <div className="techno">Javascript</div>
                    <div className="stars">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStar />
                        <BsStar />
                    </div>
                </div>
                <div className='skill'>
                    <div className="techno">React JS/TS</div>
                    <div className="stars">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStar />
                        <BsStar />
                    </div>
                </div>
                <div className='skill'>
                    <div className="techno">Algorithme</div>
                    <div className="stars">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStar />
                        <BsStar />
                    </div>
                </div>
            </HardSkills>

            <Tolls>
                <div className="title">OUTILS</div>
                <div>Github, Jira, Figma, Netlify, AWS</div>
            </Tolls>

            <Language>
                <div className="title">LANGUES</div>

                <div className='language'>
                    <div>Malagasy</div>
                    <div>Langue maternelle</div>
                </div>

                <div className="language">
                    <div>Français</div>
                    <div >Deuxième langue</div>
                </div>

                <div className="language">
                    <div>Anglais</div>
                    <div >Écoute / Lecture</div>
                </div>

            </Language>

            <Hobbies>
                <div className="title">PASSION</div>
                <div>Astronomie, Film, Documentaire, Arduino</div>
            </Hobbies>
        </Container>
    )
}

export default Skills;

const Container = styled.div`
    margin-top: 40px;

    .title {
        font-size: var(--title-font-size);
        font-weight: 500;
        letter-spacing: 1px;
        margin-bottom: 10px;
        color: ${props => props.theme.textColor};
    }
`;

const HardSkills = styled.div`
    .skill {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        color: ${props => props.theme.textOffColor};
        font-size: var(--text-font-size);

        svg {
            fill: ${props => props.theme.textColor};
            margin-left: 1px;
        }
    }
`;

const Tolls = styled.div`
    margin-top: 40px;

    div:last-child{
        color: ${props => props.theme.textOffColor};
        font-size: var(--text-font-size);
    }
`;

const Language = styled.div`
     margin-top: 40px;

     .language {
        display: flex;
        margin-top: 5px;
        color: ${props => props.theme.textOffColor};
        font-size: var(--text-font-size);

        div:first-child{
            flex-basis: 60%;
        }

        div:last-child{
            flex-basis: 40%;
        }
     }
`;

const Hobbies = styled.div`
    margin-top: 40px;
    
    div:last-child{
        color: ${props => props.theme.textOffColor};
        font-size: var(--text-font-size);
    }
`;