import React from 'react';
import {Text,View,Image,StyleSheet, TextInput,ImageBackground} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

//class based

export default class feelings extends React.Component{

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          backgroundColor: "#FFF",
          height: "100%",
          flexDirection: "column",
          alighnItems: "center",
          flex: 0.8,
          justifyContent: "center",
          flex: 1,
        }}
      >
        <View
       
       style={{
         marginHorizontal: 55,
         alignItems: "center",
         justifyContent: "center",
         marginTop: 30,
         backgroundColor: "#00BF63",
         paddingVertical: 10,
         borderRadius: 23,
       }}
     > 
       <Text onPress={() => navigate("choiceF")}
         style={{
           color: "white",
           fontFamily: "SemiBold",
         }}
       >
         Sad
       </Text>
     </View>
     <View
       
       style={{
         marginHorizontal: 55,
         alignItems: "center",
         justifyContent: "center",
         marginTop: 30,
         backgroundColor: "#00BF63",
         paddingVertical: 10,
         borderRadius: 23,
       }}
     > 
       <Text onPress={() => navigate("choiceF")}
         style={{
           color: "white",
           fontFamily: "SemiBold",
         }}
       >
         Anxious
       </Text>
     </View>
     <View
       
          style={{
            marginHorizontal: 55,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            backgroundColor: "#00BF63",
            paddingVertical: 10,
            borderRadius: 23,
          }}
        > 
          <Text onPress={() => navigate("choiceF")}
            style={{
              color: "white",
              fontFamily: "SemiBold",
            }}
          >
            Depressed
          </Text>
        </View>
        <View
       
          style={{
            marginHorizontal: 55,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            backgroundColor: "#00BF63",
            paddingVertical: 10,
            borderRadius: 23,
          }}
        > 
          <Text onPress={() => navigate("choiceF")}
            style={{
              color: "white",
              fontFamily: "SemiBold",
            }}
          >
            Lonely
          </Text>
        </View>
        <View
       
          style={{
            marginHorizontal: 55,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            backgroundColor: "#00BF63",
            paddingVertical: 10,
            borderRadius: 23,
          }}
        > 
          <Text onPress={() => navigate("choiceF")}
            style={{
              color: "white",
              fontFamily: "SemiBold",
            }}
          >
            Nervous
          </Text>
        </View>

        <View
        style={{
            flex:0.4,
         alignItems: "center",
         flexDirection:"row",
         justifyContent: "center",
       }}>
        <View
       
       style={{
         marginHorizontal: 15,
         alignItems: "center",
         justifyContent: "center",
         marginTop: 30,
         backgroundColor: "red",
         paddingVertical: 10,
         borderRadius: 16,
         paddingHorizontal:30,
       }}
     > 
       <Text onPress={() => navigate("choiceF")}
         style={{
           color: "white",
           fontFamily: "SemiBold",
         }}
       >
         Back
       </Text>
     </View>
     
        </View>
       
      </View>
    );
}
}

