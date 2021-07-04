import React , { useState, useEffect } from "react";
import Container from '../components/Container';
import styled from 'styled-components/native';
import Contents from "../components/Contents";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Text = styled.Text`
    font-size: 20px;
    line-height: 28px;
`
const DateWrapper = styled.View`
    padding: 10px 0;
    align-items : flex-end;
`
const DateText = styled.Text`
    font-size: 14px;
`

function Detail({ navigation, route }) {

    const [item, setItem] = useState('');


    useEffect(() => {
        AsyncStorage.getItem('list').then(data => {
            const list = JSON.parse(data);
            
            const diary = list.find(element => element.date === route.params.item.date )
            setItem( diary );
        })

        navigation.setOptions({ title : route.params.item.title });

    }, [])

    return (
        <Container>
            <Contents>
                <DateWrapper>
                    <DateText>{item.date}</DateText>
                </DateWrapper>
                
                <Text>{item.contents}</Text>
            </Contents>
        </Container>
    )

}

export default Detail;