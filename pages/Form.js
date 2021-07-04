import React, { useState, useEffect } from "react";
import { Text } from 'react-native';
import Container from '../components/Container';
import Contents from '../components/Contents';
import Button from '../components/Button';
import styled from 'styled-components/native';
import commonUtils from '../utils/commoUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';


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

    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    const onSaveStore = async () => {
    
        if (title === ''){
            alert('제목을 입력하세요.')
            return;
        }
        if (contents === ''){
            alert('내용을 입력하세요.')
            return;
        }

        let currentTime = new Date().format('yyyy-MM-dd HH:mm:ss');
        console.log(currentTime);

        let list = await AsyncStorage.getItem('list');

        console.log('list:::::::' , list);
        if (list === null) {
            list = [];
        } else {
            list = JSON.parse(list); //다시 json 형태로 바꿈 
        }
        // console.log(list)s;

        list.push({ date: currentTime, title, contents });

        AsyncStorage.setItem('list', JSON.stringify(list));
        navigation.goBack();
    }

    useEffect(() => {
        

    },[])



    return (
        <Container>
            <Contents>
                <Label> 제목 </Label>
                <Input
                    placeholder={"제목을 입력하세요"}
                    value={title}
                    onChangeText={value => setTitle(value)}
                />
                <Label> 내용 </Label>
                <Input
                    placeholder={"내용을 입력하세요"}
                    multiline={true}
                    style={{ height: 200 }}
                    value={contents}
                    onChangeText={value => setContents(value)}
                />
            </Contents>
            <Button onPress={onSaveStore}> 저장 </Button>
        </Container>
    )

}

export default Form;