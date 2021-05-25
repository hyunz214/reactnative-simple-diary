import React from "react";
import { Text } from 'react-native';
import Container from '../components/Container';
import Contents from '../components/Contents';
import Button from '../components/Button';


// 구조 분해 할당, Destructouring Assignment
function List({ navigation }) {
    return (
        <Container>
            <Contents>
                <Text>목록 표시</Text>
            </Contents>
            <Button onPress={() => navigation.navigate('Form')}>새 일기 작성</Button>
        </Container>
    )
}

export default List;