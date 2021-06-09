import React, { useState, useEffect } from "react";
import Container from '../components/Container';
import Contents from '../components/Contents';
import Button from '../components/Button';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListItem = styled.TouchableOpacity`
    width: 100%;
    padding: 12px 0;
    
`;

const Label = styled.Text`
    font-size : 20px;
`;
// 구조 분해 할당, Destructouring Assignment
function List({ navigation }) {
    const [list, setList] = useState([]);

    const load = async () => {
        const date = await AsyncStorage.getItem('list');
        if(data !== null){
            setList (JSON.parse(data));
        }
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            load();
        });

        load();

        return unsubscribe;
    }, [navigation])

    return (
        <Container>
            <Contents>
                {list.map((item, index) => {
                    return (
                        <ListItem
                            key={index}
                            onPress={() => navigation.navigate('Detail')}>
                            <Label>{item.date}</Label>
                        </ListItem>
                    )
                })}
            </Contents>
            <Button onPress={() => navigation.navigate('Form')}>새 일기 작성</Button>
        </Container>
    )
}

export default List;