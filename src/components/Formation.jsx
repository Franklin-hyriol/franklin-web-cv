import React from 'react';
import styled from 'styled-components';

function Formation() {
    return (
        <Container>
            <div className="title">FORMATIONS</div>
            <div>
                <div className="school">
                    <div className="date">2022 - Á NOS JOURS</div>
                    <div>
                        <div className="name">Haute Ecole d'Informatique HEI</div>
                        <p>J'ai recherché une école pour réapprendre le web à partir de zéro et je ne regrette pas d'avoir choisi HEI.</p>
                    </div>
                </div>

                <div className="school">
                    <div className="date">2019 - 2020</div>
                    <div>
                        <div className="name">École digital Sayna</div>
                        <p>Sayna est l'endroit où mon amour pour le web a débuté. J'ai appris les rudiments de l'algorithmique et de la programmation.</p>
                    </div>
                </div>

                <div className="school">
                    <div className="date">2017 - 2020</div>
                    <div>
                        <div className="name">Université d'Antananarivo</div>
                        <p>J'ai étudié les mathématiques à l'Université d'Ankatso, mais on dirait que je n'étais pas assez motivé.</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Formation;

const Container = styled.div`
    margin-top: 35px;

    .school{
        display: flex;
        flex-direction: row;
        margin-top: 5px;
        font-size: var(--text-font-size);
        color: ${props => props.theme.textOffColor};

        div:first-child {
            flex-basis: 35%;
            font-size: calc(var(--text-font-size) + 0.05rem);
            font-weight: 500;
        }

        div:last-child {
            flex-basis: 65%;
        }

        @media screen and (max-width: 850px){
            flex-direction: column;
            justify-content: space-around;

            .date {
                margin-top: 20px;
                margin-bottom: 5px;
            }
        }
    }
`;
