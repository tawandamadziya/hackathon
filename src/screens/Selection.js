import React from 'react';
import {Text,View,Image,StyleSheet, TextInput,ImageBackground, Button} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

//class based

export default class Selection extends React.Component{

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
            flexDirection: "row",
            backgroundColor: "#FFF",
            // height: "100%",
            justifyContent: "center",
            alighnItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../images/opening.png")}
            style={{
              flexDirection: "center",
              width: "250px",
              height: "235px",
            }}
          />
          
        </View>
       <Button title="Continue"
               width="50px"
               color="#00716F" 
               onPress={() => navigate("Login")} 

        />
      </View>
    );
}
}

