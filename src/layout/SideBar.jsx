import React from 'react'
import styled from 'styled-components';
import { BsMoonStarsFill, BsFillSunFill, BsDownload } from 'react-icons/bs';
import Avatar from '../components/Avatar';
import InfoPerso from '../components/InfoPerso';
import Skills from '../components/Skills';

function SideBar({ curentTheme, toggleTheme }) {

    const handleDownload = () => {
        window.open('./files/Franklin Hyriol - CV.pdf', '_blank');
    }

    return (
        <Container>
            <Wrapper>
                <div className="custom">
                    <div onClick={() => toggleTheme(curentTheme)}>
                        {curentTheme === 'light' ? <BsMoonStarsFill className='moon' /> : <BsFillSunFill className='sun' />}
                    </div>

                    <div onClick={() => handleDownload()} >
                        <BsDownload /> PDF
                    </div>
                </div>

                <Avatar theme={curentTheme} />

                <InfoPerso />

                <Skills />
            </Wrapper>
        </Container>
    )
}

export default SideBar;

const Container = styled.div`
    flex-basis: 30%;
    background-color: ${props => props.theme.navBgColor};

    @media screen and (max-width: 1150px){
        min-width: 350px;
    }
`;

const Wrapper = styled.div`
    width: 90%;
    margin: auto;
    color: ${props => props.theme.textColor};

    .custom{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 15px;

        div:first-child{
            cursor: pointer;

            svg {
                fill: ${props => props.theme.textColor};
            }
        }

        div:last-child{
            cursor: pointer;
            padding: 2px;
            font-size: calc(var(--text-font-size) - 0.2rem);
            font-weight: 600;
            border: 1px solid ${props => props.theme.textColor};

            &:hover {
                svg {
                    animation: upDown infinite 1s linear;
                }

                @keyframes upDown {
                    from {
                        transform: translateY(-2px);
                    }

                    to{
                        transform: translateY(2px);
                    }
                }
            }
        }
    }
`;