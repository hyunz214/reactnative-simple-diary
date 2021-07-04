import React from 'react';
import styled from 'styled-components/native';
import style from '../utils/styleUtils';

const Container = styled.TouchableOpacity`
    width: 100%;
    background : ${style.subPink};
    justify-content : center;
    align-items : center;
    padding: 20px;
    border-radius : 20px;
    box-shadow: 0px 3px 3px ${style.darkPink};
    margin-bottom : 20px;
`

const Label = styled.Text`
    font-size : 16px;
    font-weight : bold;
    color : ${style.darkPink}
`

function RoundButton(props) {
    return(
        <Container onPress={ props.onPress }>
            <Label>{props.children}</Label>
        </Container>

    )

}

export default RoundButton;
