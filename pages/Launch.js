import React, { useState, useEffect } from "react";
import { View, Text} from "react-native";
import RoundButton from '../components/RoundButton';
import styled from 'styled-components/native';
import style from '../utils/styleUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';
import { ThemeProvider, Button } from 'react-native-elements';
// 구조 분해 할당, Destructouring Assignment
function Launch({ navigation }) {
    const [list, setList] = useState([]);

    const load = async () => {
        const data = await AsyncStorage.getItem('list');
        // console.log(data);

        if(data !== null){
            setList (JSON.parse(data));
        }
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // load();
        });
        // load();
        return unsubscribe;
    }, [navigation])



    return (
        <Container>
            <LaunchContents>
                <View style={{ paddingTop : 40 }}>
                    <Label>어서와 000,</Label>
                    <Label style={{  fontSize : 30 }}>오늘의{'\n'}기분은 어때?</Label>
                </View>
                <View>
                    <Button onPress={() => navigation.navigate('Form')} title="일기 쓰러 갈래"
                        buttonStyle={{ backgroundColor: style.subPink, marginBottom : 20, paddingVertical: 20, borderRadius: 50 }}
                        titleStyle={{color : style.darkPink }}></Button>
                    <Button onPress={() => navigation.navigate('List')} title="일기 목록 볼래" type="outline"
                        buttonStyle={{ borderColor: style.darkPink, marginBottom : 20, paddingVertical: 20, borderRadius: 50 }}
                        titleStyle={{color : style.darkPink }}
                    ></Button>
                    {/* <RoundButton onPress={() => navigation.navigate('Form')} style={{ marginBottom : 30 }}>일기 쓰러 갈래</RoundButton>
                    <RoundButton onPress={() => navigation.navigate('List')}>일기 목록 볼래</RoundButton> */}
                </View>
            </LaunchContents>
        </Container>
    )
}

const Container = styled.View`
    flex : 1;
    paddingTop : 20px;
    paddingBottom : 20px;
    background-color : ${style.pink};
`;
const LaunchContents = styled.View`
    flex: 1;
    justify-content : space-between; 
    padding : 20px;
`;

const ListItem = styled.TouchableOpacity`
    width: 100%;
    padding: 12px 0;
`;

const ListHeader = styled.View`
    width: 100%;
    align-items : flex-end;
`;

const Label = styled.Text`
    font-size : 18px;
`;


export default Launch;