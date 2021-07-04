import React , { useState, useEffect } from "react";
import Container from '../components/Container';
import styled from 'styled-components/native';
import Contents from "../components/Contents";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Text = styled.Text`
    font-size: 20px;
    line-height: 28px;
`

function Detail({ navigation, route }) {

    

    const [text, setText] = useState('');


    useEffect(() => {
        AsyncStorage.getItem('list').then(data => {
            const list = JSON.parse(data);
            const diary = list.find(element => element.date === route.params.item.date )
            setText( diary.text )
        })

        navigation.setOptions({ title : route.params.item.date });

    }, [])

    return (
        <Container>
            <Contents>
                <Text>{text}</Text>
            </Contents>
        </Container>
    )

}

export default Detail;