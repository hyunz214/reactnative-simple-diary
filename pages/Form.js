import React from "react";
import { Text } from 'react-native';
import Container from '../components/Container';
import Contents from '../components/Contents';
import Button from '../components/Button';
import styled from 'styled-components/native';
import { useState } from "react";
import AsyncStorage from '@react-native-community/async-storage'

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


function Form({ navigation }) {
    
    const [date, setDate] = useState('');
    const [text, setText] = useState('');

    const store = async () => {
        if( date === '') return;
        if( text === '') return;

        let list = await AsyncStorage.getItem('list');

        if (list === null) {
            list [];
        }
        else {
            list = JSON.parse( list ); //다시 json 형태로 바꿈 
        }

        list.push(
            {
                data, text
            }
        );

        AsyncStorage.setItem('list', JSON.stringify(list));
        
    }

    return (
        <Container>
            <Contents>
                <Label> 날짜 </Label>
                <Input 
                    placeholder={"YYYY-MM-DD 형식으로 입력하세요"}
                    value={date}
                    onChangeText={value => setDate(value)}
                />
                <Label> 내용 </Label>
                <Input 
                    multiline={true} 
                    style={{ height: 200 }}
                    value={text}
                    onChangeText={value => setText(value)}
                />
            </Contents>
            <Button onPress={ store }> 저장 </Button>
        </Container>
    )

}

export default Form;