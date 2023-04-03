import React from 'react';
import {Text,View,Image,StyleSheet, TextInput,ImageBackground, TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class chat extends React.Component{
render(){
  const { navigate } = this.props.navigation;
const Task=(props)=>{
    return(
        <View style={styles.item}>
           <View style={styles.itemLeft}>  
             <TouchableOpacity style={styles.square}></TouchableOpacity>
             <Text style={styles.itemText}>{props.text}</Text>  
          </View>
          <View style={styles.circular}></View>
        </View>
    )
}

const styles=StyleSheet.create({
    circular:{
        width:12,
        height:12,
        borderColor:'#55BCF6',
        borderWidth:2,
        borderRadius:5,
    },
    itemText:{
        maxWidth:'80%',
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    square:{
        width:24,
        height:24,
        backgroundColor:'#55BCF6',
        opacity:0.4,
        borderRadius:5,
        marginRight:15,
    },
    item:{
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
    },
});
}
}