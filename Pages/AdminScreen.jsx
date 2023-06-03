import * as React from 'react';
import { Button , View,Text,StyleSheet, TouchableOpacity,TextInput,ScrollView} from 'react-native';
import { Card } from '@rneui/themed';
import {pb} from "../Plugins/pocketbase"


export function AdminScreen({navigation}) {
    const [load,setLoad] = React.useState(false);
    const [q,setq] = React.useState(false);
    const [q1,setq1] = React.useState("");
    const [q2,setq2] = React.useState("");
    const [q3,setq3] = React.useState("");
    const [q4,setq4] = React.useState("");
    const [qq,setqq] = React.useState(-1);
    const [board,setBoard] = React.useState([]);
    React.useEffect(() => {
        pb.collection('leaderboard').getFullList({
            sort: '-created',
        })
        .then(setBoard).finally( () =>setLoad(true));
    });
    return (
        <ScrollView>
            <View >
            
                {load && board.map((bo) =>boardentry(bo) ) }
            </View>
            <View>
                <TextInput placeholder='question' onChangeText={setq}></TextInput>
                <TextInput placeholder='choice1' onChangeText={setq1}></TextInput>
                <TextInput placeholder='choice2' onChangeText={setq2}></TextInput>
                <TextInput placeholder='choice3' onChangeText={setq3}></TextInput>
                <TextInput placeholder='choice4' onChangeText={setq4}></TextInput>
                <TextInput placeholder='correct choice' onChangeText={setqq}></TextInput>
                <Button title="add" onPress={() => {
                    
                    const data = {
                        "title": q,
                        "content": {
                            "choice": [
                              q1,
                              q2,
                              q3,
                              q4
                            ],
                            "correct": qq-1
                          }
                    };

                  pb.collection('question').create(data)}}></Button>
            </View>
        </ScrollView>

    );
}


function boardentry(entry) {


    return (

        <><Button style={style.delbutton} title="X" onPress={() => {pb.collection('leaderboard').delete(entry.id) } }></Button><Text>name:{entry.name}, score:{entry.score}</Text></>
    )
}

const style= StyleSheet.create({
    delbutton:{
        width:30
    }
})