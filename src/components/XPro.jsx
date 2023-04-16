import React from 'react';
import styled from 'styled-components';

function XPro() {
    return (
        <Container>
            <div className="title">EXPÉRIENCE PROFESSIONELLE</div>
            <div>
                <div className="societe">
                    <div className="date">19/10/2020 - Á NOS JOURS</div>
                    <div>
                        <div className="name">Pulse</div>
                        <p>Ma première expérience professionnelle, j'ai été recrutée comme Knowledge Analyst pour filtrer et alimenter la base de connaissances de Pulse.</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default XPro;


const Container = styled.div`
    margin-top: 35px;

    .societe{
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
