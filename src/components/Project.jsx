import React from 'react';
import styled from 'styled-components';

function Project() {
    return (
        <Container>
            <div className="title">PROJETS SCOLAIRES</div>
            <Wrapper>
                <Item>
                    <div className="project">
                        <div className="name">Itsaka</div>
                        <div className="techno">
                            <span>HTML</span>
                            <span>CSS</span>
                        </div>
                        <div className="desc">
                            <p>Ce projet été a l'époque où j'apprenais le CSS flexbox.
                                C'est un simple site de vente de chaussures faite en HTML CSS.</p>
                        </div>
                        <div className="btn">
                            <a href="https://franklin-hyriol.github.io/itsaka/" target="_blank" rel="noopener noreferrer">Github</a>
                            <a href="https://github.com/Franklin-hyriol/itsaka" target="_blank" rel="noopener noreferrer">Demo</a>
                        </div>
                    </div>

                    <div className="project">
                        <div className="name">Mesupres</div>
                        <div className="techno">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Javascript</span>
                        </div>
                        <div className="desc">
                            <p>On m'a demandé de faire mieux que <a href="http://www.mesupres.edu.mg/" target="_blank" rel="noopener noreferrer">http://www.mesupres.edu.mg</a> et c'est ce que j'ai fait.</p>
                        </div>
                        <div className="btn">
                            <a href="https://hei-franklin.github.io/Mesupres-hei/" target="_blank" rel="noopener noreferrer">Github</a>
                            <a href="https://github.com/HEI-Franklin/Mesupres-hei" target="_blank" rel="noopener noreferrer">Demo</a>
                        </div>
                    </div>
                </Item>

                <Item>
                    <div className="project">
                        <div className="name">Unsplash Clone</div>
                        <div className="techno">
                            <span>ReactJS</span>
                            <span>Unsplash API</span>
                        </div>
                        <div className="desc">
                            <p>Juste un clone d'Unsplash. Le but était de reproduire le scroll infini qu'on en arrive en bas de la page.</p>
                        </div>
                        <div className="btn">
                            <a href="https://github.com/Franklin-hyriol/unsplashClone" target="_blank" rel="noopener noreferrer">Github</a>
                            <a href="https://unsplash-react-clone.netlify.app/" target="_blank" rel="noopener noreferrer">Demo</a>
                        </div>
                    </div>

                    <div className="project">
                        <div className="name">Twitch Clone</div>
                        <div className="techno">
                            <span>ReactJS</span>
                            <span>Twitch API</span>
                        </div>
                        <div className="desc">
                            <p>Il s'agit d'un simple clone du site Twitch Streaming à l'aide de l'API publique Twitch.</p>
                        </div>
                        <div className="btn">
                            <a href="https://github.com/Franklin-hyriol/TwitchCloneReact" target="_blank" rel="noopener noreferrer">Github</a>
                            <a href="https://twitchclonereact.netlify.app/" target="_blank" rel="noopener noreferrer">Demo</a>
                        </div>
                    </div>
                </Item>

                <Item>
                    <div className="project">
                        <div className="name">Tetris</div>
                        <div className="techno">
                            <span>ReactJS</span>
                            <span>Custom Hooks</span>
                        </div>
                        <div className="desc">
                            <p>Les customs hook en React était en vogue et je voulais l'essayer avec un projet amusant.</p>
                        </div>
                        <div className="btn">
                            <a href="https://github.com/Franklin-hyriol/react-tetris" target="_blank" rel="noopener noreferrer">Github</a>
                            <a href="https://react-game-tetris.netlify.app/" target="_blank" rel="noopener noreferrer">Demo</a>
                        </div>
                    </div>

                    <div className="project">
                        <div className="name">Portfolio</div>
                        <div className="techno">
                            <span>ReactJS</span>
                            <span>Animation</span>
                            <span>Theme</span>
                        </div>
                        <div className="desc">
                            <p>Il s'agit de mon portfolio que j'avais prévu de vous présenter lors de l'entretien. Malheureusement, j'ai eu tellement d'ambition que je n'ai pas eu le temps de le terminer.</p>
                        </div>
                        <div className="btn">
                            <a href="https://github.com/Franklin-hyriol/FranklinHyriol" target="_blank" rel="noopener noreferrer">Github</a>
                            <a href="https://franklinhyriol.netlify.app/" target="_blank" rel="noopener noreferrer">Demo</a>
                        </div>
                    </div>
                </Item>
            </Wrapper>
        </Container>
    )
}

export default Project;

const Container = styled.div`
    margin-top: 30px;
    color: ${props => props.theme.textOffColor};
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Item = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-around;

    .project{
        flex-basis: 45%;
        border-radius: 10px;
        padding: 5px 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        transition: 1s;

        &:hover{
           box-shadow: ${props => props.theme.boxShadow} 2px 3px 6px;
        }

        .name{
            text-decoration: underline;
            font-size: calc(var(--text-font-size) + 0.05rem);
            font-weight: 500;
        }

        .techno{
            span:not(last-child){
                margin-left: 10px;
            }

            span{
                display: inline-block;
                font-size: var(--text-font-techno);
                font-weight: bold;
                padding: 1px 4px;
                background-color: ${props => props.theme.textColor};
                color: ${props => props.theme.bgColor};
            }
        }

        .desc{
            font-size: var(--text-font-size);
            align-self: flex-start;

            a{
                color: ${props => props.theme.textOffColor};
            }
        }

        .btn{
            margin-top: 5px;
            a{
                display: inline-block;
                margin: 0px 15px;
                padding: 2px 10px;
                font-size: calc(var(--text-font-size) - 0.1rem);
                border-radius: 5px;
                font-weight: 600;
                text-decoration: none;

                &:hover{
                    transform: scale(1.1);
                }
            }

            a:first-child {
                color: ${props => props.theme.bgColor};
                background-color: ${props => props.theme.textColor};
            }

            a:last-child {
                color: ${props => props.theme.textColor};
                background-color: ${props => props.theme.navBgColor};
            }

        }

    }
`;