import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
//class based

export default class Register extends React.Component{

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
              }}
            >
              Creat Account
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 50,
                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2,
              }}
            >
              <TextInput
                placeholder="Username"
                placeholderTextColor="#00716F"
                style={{ paddingHorizontal: 10 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 15,
                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2,
              }}
            >
              <TextInput
                secureTextEntry
                placeholder="Phone Number"
                placeholderTextColor="#00716F"
                style={{ paddingHorizontal: 10 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 15,
                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2,
              }}
            >
              <TextInput
                secureTextEntry
                placeholder="Email"
                placeholderTextColor="#00716F"
                style={{ paddingHorizontal: 10 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 15,
                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2,
              }}
            >
              <TextInput
                secureTextEntry
                placeholder="Password"
                placeholderTextColor="#00716F"
                style={{ paddingHorizontal: 10 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 15,
                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2,
              }}
            >
              <TextInput
                secureTextEntry
                placeholder="Confirm Password"
                placeholderTextColor="#00716F"
                style={{ paddingHorizontal: 10 }}
              />
            </View>
            <Text
              style={{
                fontFamily: "SemiBold",
                marginHorizontal: 55,
                textAlign: "center",
                marginTop: 5,
                opacity: 0.4,
              }}
            >
              Password must be atleast 8 characters
            </Text>

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
              <Text
                onPress={() => navigate("Login")}
                style={{
                  color: "white",
                  fontFamily: "SemiBold",
                }}
              >
                Register
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
              Already have an account?
              <Text
                onPress={() => navigate("Login")}
                style={{
                  alignSelf: "center",
                  color: "#00BF63",
                  fontFamily: "SemiBold",
                  paddingVertical: 30,
                }}
              >
                {" "}
                Login
              </Text>
            </Text>
          </View>
        );
    }
}
