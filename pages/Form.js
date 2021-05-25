import React from "react";
import { Text } from 'react-native';
import Container from '../components/Container';
import Contents from '../components/Contents';
import Button from '../components/Button';
import styled from 'styled-components/native';

const Label = styled.Text`
    font-size : 20px;
    font-weight : bold;
    margin-bottom: 12px;
`

const Input = styled.TextInput`
    width : 100%;
    border : 2px solid #e5e5e5;
    padding : 8px;
    font-size : 20px;
    margin-bottom: 12px;
`


function Form({navigation}) {
    return (
        <Container>
            <Contents>
                <Label> 날짜 </Label>
                <Input></Input>
                <Label> 내용 </Label>
                <Input multiline={true} style={{ height : 200 }}></Input>
            </Contents>
            <Button onPress={ () => navigation.goBack()}> 저장 </Button>
        </Container>
    )

}

export default Form;