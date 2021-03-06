
import React from 'react';
import {View,Text,Image,StatusBar} from 'react-native';
import { Input,Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { firebase } from '@react-native-firebase/auth';



 class App extends React.Component {
    constructor() {
      super();
    }
    componentDidMount(){
      var user = firebase.auth().currentUser;

if (user) {
  this.props.navigation.navigate('Main')
} else {
  // No user is signed in.
}
     
     
    }
    Pressed(){
      firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        //console.log(errorMessage)
        // ...
      });
      var user = firebase.auth().currentUser;

      if (user) {
        this.props.navigation.navigate('Main')
      } else {
        // No user is signed in.
      }
    }
    render() {
    //  console.log(this.state)
        return (
            <View style={{flex:1,justifyContent: 'center',backgroundColor:'#212121',alignItems:"center",padding:30}}>
  <StatusBar backgroundColor="black" barStyle="light-content" />

 <Image
           style={{width: 200, height: 200}}

          source={require('../assets/logo.png')}
        />

          <Input
          onChangeText={(e) => this.setState({username:e}) }
          containerStyle={{marginTop:10}}
          leftIcon={{ type: 'font-awesome', name: 'user',color:'white' }} 
          placeholder='UserName'
          inputStyle={{color:'white'}}
          placeholderTextColor="white" 

          />
          <Input
          onChangeText={(e) => this.setState({password:e}) }
          containerStyle={{marginTop:10}}
            placeholder='Password'
            leftIcon={{ type: 'font-awesome', name: 'key',color:'white' }} 
            placeholderTextColor="white" 

          />
          <Button containerStyle={{marginTop:30}}
          buttonStyle={{backgroundColor:'#FF3171',paddingLeft:30,paddingRight:30}}

          title="Login"
          onPress={() => this.Pressed()}
        />
        <Text style={{color:'white',marginTop:30}}>
          or Register right away!
        </Text>
   </View>
        )}
}


export default withNavigation(App);

