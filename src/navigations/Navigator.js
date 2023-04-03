import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Selection from "../screens/Selection";
import choiceF from "../screens/choiceF";
import feelings from "../screens/feelings";
import chat from "../screens/chat";
import contacts from "../screens/contacts";

const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Selection:{screen:Selection},Login:{screen:Login},Register:{screen:Register},choiceF:{screen:choiceF},feelings:{screen:feelings},
    contacts:{screen:contacts},chat:{screen:chat},  
},
{
    defaultNavigationOptions : stackNavigatorOptions
}  
);
export default createAppContainer(AppNavigator);