import * as React from 'react';
import { Button , View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { Card } from '@rneui/themed';
import { StackActions } from '@react-navigation/native';


export function StartScreen({navigation}) {
    return (
        <View style={{  flex:1, justifyContent:"center", }}>
            <Card containerStyle = {style.main}>
                
                    <Text style = {style.CardTitle}>Genema</Text>
                

                {buttonyes("PRESS TO START",() => navigation.navigate('GameScreen'))} 
                {buttonyes("ADMIN",() => navigation.navigate('GameScreen'))} 

            </Card>
        </View>

    );
}



const style = StyleSheet.create({
    main:{
        position: "relative",
        borderRadius: 15,
        

        
    },

    CardTitle:{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15,
        margin:10,
    },

    Button: {
        backgroundColor: "#1111",
        borderRadius: 5,
        alignItems: "center",
        margin: 10,
        padding: 10    
    },


})




function buttonyes(text,func) {
    return <TouchableOpacity style={style.Button}
        onPress={func}>
        <Text>{text}</Text>
    </TouchableOpacity>;
}
// export function StartScreen({navigation}) {
//     return (
//         <View style = {style.container}>

//             {/* <View style={style.container}> */}
//                 <Card>
//                     <Card.Title>Genius</Card.Title>
                    
//                     <TouchableOpacity style = {style.Button} 
//                         onPress={() => navigation.navigate('GameScreen')}>
//                         <Text>START</Text>
//                     </TouchableOpacity> 
//                 </Card>
//             {/* </View> */}
            
//         </View>

//     );
// }




// const style =StyleSheet.create({
//     Title:{
//         textAlign: "center",
//         fontSize: 70,
//         fontWeight: "bold",
//         marginBottom: 20,
//     },

//     container:{
//         alignContent: "center",
//         flex: 1,
        
//     },
    
//     Button:{
//         alignItems: "center",
//         backgroundColor: '#1111',
//         padding: 10,
//         borderRadius: 30,
//     },
   
// });
    