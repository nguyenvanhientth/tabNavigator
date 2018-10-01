import React,{Component} from 'react';
import { Button, Text, View,ActivityIndicator,AsyncStorage,StatusBar,StyleSheet,TextInput,Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


class HelpScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hay lien he vs chung toi neu ban can giup do!</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <Button
          title="Go to Signin"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

class signinScreen extends Component{
  static navigationOptions = {
    title: 'Pleass Signin!'
  };
  constructor(props){
    super(props);
    this.state = {text : ""};
  }
  render(){
    return(
      <View style = {{borderRadius: 20}}>
      <View style={{padding:35,backgroundColor: 'steelblue',marginTop:50}}>
        <TextInput
        style = {{height:50,backgroundColor:'#DDDDDD',borderRadius: 10}}
        placeholder="Tài khoản"
        onChangeText={(text) => this.setState({text})}
        />
        <TextInput
        style = {{height:50,marginTop: 10,backgroundColor:'#DDDDDD',borderRadius: 10}}
        placeholder="Mật khẩu"
        visible-password = "password"
        //onChangeText={(text) => this.setState({text})}
        />
       </View>
      <View style={{paddingBottom:30,justifyContent:'center',backgroundColor: 'steelblue',flexDirection:'row'}}>
        <View style={{justifyContent: 'space-between'}}>
          <Button style={{}}
            onPress={() => {
            Alert.alert('You tapped the button!');
              }
            }
            title="Đăng nhập"
          />
        </View>
        <View style={{justifyContent: 'space-between',marginLeft:30}}>
          <Button style={{}}
            onPress={() => {
            Alert.alert('You tapped the button!');
              }
            }
            title="Đăng ký"
          />
        </View>
      </View>
    </View>
    )
  }
}

class SettingsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Help"
          onPress={() => this.props.navigation.navigate('Help')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: { screen: signinScreen },
  Details: { screen: DetailsScreen },
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Help: { screen: HelpScreen },
});

export default createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }


         return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);
