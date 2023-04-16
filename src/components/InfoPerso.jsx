import React from 'react'
import styled from 'styled-components';

import { ImHome3, ImLocation2 } from 'react-icons/im';
import { BsFillTelephoneFill, BsCalendar2WeekFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

function InfoPerso() {
    return (
        <Container>
            <div>
                <ImHome3 /> <span>Ambohipo Cure Block 6 port 2B</span>
            </div>

            <div>
                <BsFillTelephoneFill /> <span>034 00 311 16</span>
            </div>

            <div>
                <MdEmail /> <span><a href="mailto:franklinrazafy@gmail.com">franklinrazafy@gmail.com</a></span>
            </div>

            <div>
                <BsCalendar2WeekFill /> <span>Date de naissance: 15 novembre 1996</span>
            </div>

            <div>
                <ImLocation2 /> <span>Lieu de naissance: Antananarivo</span>
            </div>
        </Container>
    )
}

export default InfoPerso;

const Container = styled.div`
    margin-top: 40px;

    div {
        margin-top: 5px;

        svg {
            fill: ${props => props.theme.textColor};
        }

        span {
            font-size: var(--text-font-size);
            margin-left: 20px;
            text-align: right;
            color: ${props => props.theme.textOffColor};
        }
    }

    div:nth-child(3){
        a {
            color: ${props => props.theme.textOffColor};
        }
    }
`;
