import React,{useState, useEffect} from "react";
import Container from '../components/Container';
import Contents from '../components/Contents';
import Button from '../components/Button';
import styled from 'styled-components/native';
import AsyncStorage from "@react-native-community/async-storage";

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

    useEffect(() => {
        AsyncStorage.getItem('list')
            .then(data => {
                if (data !== null) {
                    setList(JSON.parse(data))
                }
            })
    }, [])

    return (
        <Container>
            <Contents>
                {list.map((item) => {
                    return (
                        <ListItem 
                            key={item.date} 
                            onPress={() => navigation.navigate('Detail')}>
                            <Label>{item.date}</Label>
                        </ListItem>
                    )
                })}
                {/* <ListItem onPress={() => navigation.navigate('Detail')}>
                    <Label>2020-07-01</Label>
                </ListItem>
                <ListItem>
                    <Label>2020-07-02</Label>
                </ListItem>
                <ListItem>
                    <Label>2020-07-04</Label>
                </ListItem> */}
            </Contents>
            <Button onPress={() => navigation.navigate('Form')}>새 일기 작성</Button>
        </Container>
    )
}

export default List;