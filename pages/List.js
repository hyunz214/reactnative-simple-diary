import React, { useState, useEffect } from "react";
import { View, Text} from "react-native";
import Container from '../components/Container';
import Contents from '../components/Contents';
import Button from '../components/Button';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';

const ListItem = styled.TouchableOpacity`
    width: 100%;
    padding: 12px 0;
`;

const ListHeader = styled.View`
    width: 100%;
    align-items : flex-end;
`;

const RemoveButton = styled.TouchableOpacity`
    padding : 4px ; 
    border: 1px solid red ;
    border-radius : 4px;
`;

const Label = styled.Text`
    font-size : 18px;
    
`;
const DateLabel = styled.Text`
    font-size : 14px;

`;
// 구조 분해 할당, Destructouring Assignment
function List({ navigation }) {
    const [list, setList] = useState([]);
    const [onRemove, setOnRemove] = useState(false);
    const [removeIndex, setRemoveIndex] = useState('');

    const load = async () => {
        const data = await AsyncStorage.getItem('list');
        // console.log(data);

        if(data !== null){
            setList (JSON.parse(data));
        }
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            load();
        });
        // load();
        return unsubscribe;
    }, [navigation])


    const removeList = (index) => {
        console.log( 'remove this ---> ', index );

        
        if(index === 'all'){
            alert('전체를 삭제하시겠습니까?')
            let emptyList = [];
            AsyncStorage.setItem('list', JSON.stringify(emptyList));
            
        }else{
            const removeDiary = list.filter(element => element.date !== index );
            AsyncStorage.setItem('list', JSON.stringify(removeDiary));

        }
        load();
    }

    return (
        <Container>
            <Contents>
                <ListHeader>
                    <RemoveButton  onPress={() => removeList('all')}>
                        <Label style={{ color : 'red'}}>전체 삭제</Label>
                    </RemoveButton>
                </ListHeader>
                { _.sortBy(list, 'date').reverse().map((item, index) => {
                    return (
                        <ListItem
                            key={index}
                            onPress={() => navigation.navigate('Detail', { item : item })}
                            style={{flexDirection: 'row', justifyContent: 'space-between' }}
                            >
                            <View>
                                <Label>{item.title}</Label>
                                <DateLabel>{item.date}</DateLabel>
                            </View>
                            <RemoveButton onPress={() => removeList(item.date)}>
                                <Label style={{ color : 'red'}}>삭제</Label>
                            </RemoveButton>
                            {/* {onRemove && 
                                
                            } */}
                        </ListItem>
                    )
                })}
            </Contents>
            <Button onPress={() => navigation.navigate('Form')}>새 일기 작성</Button>
        </Container>
    )
}

export default List;