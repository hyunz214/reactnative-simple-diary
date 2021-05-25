import React from "react";
import { Text, View, Button } from 'react-native';
import Container from '../components/Container';

function Detail({navigation}) {
    return (
        <Container>
            <Text>
                Detail
            </Text>
            <Button 
                title="목록으로" onPress={ () => navigation.goBack()}></Button>
        </Container>
    )

}

export default Detail;