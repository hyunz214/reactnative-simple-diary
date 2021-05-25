import React from "react";
import { Text } from 'react-native';
import Container from '../components/Container';
import Contents from '../components/Contents';
import Button from '../components/Button';


function Form({navigation}) {
    return (
        <Container>
            <Contents>
                <Text> Form </Text>
            </Contents>
            <Button onPress={ () => navigation.goBack()}> 저장 </Button>
        </Container>
    )

}

export default Form;