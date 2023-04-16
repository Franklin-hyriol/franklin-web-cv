import React from 'react';
import styled from 'styled-components';

function Profile() {
    return (
        <Container>
            <div className="title">PROFIL</div>
            <p>
                Un passionné d'informatique. Je suis attentif, j'apprends vite et j'aime les
                nouveaux défis. Je travaille souvent seul mais j'avoue que travailler en
                équipe c'est plus rapide et génère de plus beaux travaux. Cela dit, travailler
                seul ou en équipe je suis toujours partant.
            </p>
        </Container>
    )
}

export default Profile;

const Container = styled.div`
    margin-top: 8px;

    p{
        font-size: var(--text-font-size);
        color: ${props => props.theme.textOffColor};
    }
`;