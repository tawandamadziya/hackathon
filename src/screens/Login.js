import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";

export default class Login extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          flexDirection: "column",
          backgroundColor: "#FFF",
          height: "100%",
          justifyContent: "center",
          alighnItems: "center",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#FFF",
            // height: "100%",
            justifyContent: "center",
            alighnItems: "center",

            // flex: 1,
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../images/enlight croped logo 1.png")}
            style={{
              flexDirection: "center",
              width: "100px",
              height: "85px",
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "SemiBold",
            alignSelf: "center",
            flex: 0.2,
          }}
        >
          Login
        </Text>

        <Text
          style={{
            fontFamily: "SemiBold",
            marginHorizontal: 55,
            textAlign: "center",
            marginTop: 5,
            opacity: 0.4,
          }}
        >
          Welcome back! please enter your details
        </Text>

        <Text
          style={{
            flexDirection: "row",
            fontFamily: "SemiBold",
            marginHorizontal: 55,
            // textAlign:'center',
            // bottom: "80px",
            marginTop: 30,
            opacity: 0.4,
          }}
        >
          Username
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 30,
            paddingHorizontal: 10,
            borderColor: "#00716F",
            borderRadius: 13,
            paddingVertical: 2,
          }}
        >
          {/* <Icon name="user" color="#00716F" size={24}/> */}
          <TextInput style={{ paddingHorizontal: 10 }} />
        </View>

        <Text
          style={{
            flexDirection: "row",
            fontFamily: "SemiBold",
            marginHorizontal: 55,
            // textAlign:'center',
            marginTop: 30,
            opacity: 0.4,
          }}
        >
          Password
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 15,
            paddingHorizontal: 10,
            borderColor: "#00716F",
            borderRadius: 13,
            paddingVertical: 2,
          }}
        >
          <TextInput style={{ paddingHorizontal: 10 }} />
        </View>

        {/* <View style={{
            marginHorizontal: 55,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            backgroundColor: "#00716F",
            paddingVertical: 10,
            borderRadius: 23,
          }}>
          <checkbox value={false} color="black" />
          <StatusBar style="auto" />
          <Text
            style={{
              color: "black",
              fontFamily: "SemiBold",
            }}
          >
            Remember me
          </Text>
        </View> */}

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
            Login
          </Text>
        </View>

        <View
          style={{
            marginHorizontal: 55,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            borderWidth: 2,
            backgroundColor: "#FFF",
            paddingVertical: 10,
            borderRadius: 23,
            borderColor: "black",
          }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: "SemiBold",
            }}
          >
            <Icon name="google" color="#00BF63" size={20} /> Sign in with Google
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "SemiBold",
            marginHorizontal: 55,
            textAlign: "center",
            marginTop: 5,
            paddingVertical: 30,
          }}
        >
          Don't have an account?
          <Text
            onPress={() => navigate("Register")}
            style={{
              alignSelf: "center",
              color: "#00BF63",
              fontFamily: "SemiBold",
              paddingVertical: 30,
            }}
          >
            {" "}
            Sign Up
          </Text>
        </Text>
      </View>
    );
  }
}
