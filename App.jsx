/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './View/Home';
import NavBar from './View/NavBar';
import NavBar2 from './View/NavBar2';
import NavBar3 from './View/NavBar3';
import NavBar4 from './View/NavBar4';




function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectStyle,setSelectedStyle] =  useState('1')

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#121416" : Colors.lighter , flex:1
  };

  const NavView = (props) =>{
    if (selectStyle=='1')
    return(
      <NavBar/>
    )
    else if (selectStyle=='2')
    return(
      <NavBar2/>
    )
    else if (selectStyle=='3')
    return(
      <NavBar3/>
    )
    else if (selectStyle=='4')
    return(
      <NavBar4/>
    )
  }

  const Selector = (props) =>{

    return(

<View style={{paddingLeft:20}}>
  {
    selectStyle == props.id ? (
      <View >

  <View style={{flexDirection:'row',alignItems:'center',marginTop:10,gap:20}}>
    
  <Text style={styles.SelectTxt}>{props.name}</Text>

  <TouchableOpacity style={styles.SelectBtn}>
  <View style={styles.SelectedBtn}></View>

  </TouchableOpacity>
  </View>

  </View>
    ):(
      <View >

  <View style={{flexDirection:'row',alignItems:'center',marginTop:10,gap:20}}>
    
  <Text style={styles.SelectTxt}>{props.name}</Text>

  <TouchableOpacity onPress={()=> setSelectedStyle(props.id)} style={styles.SelectBtn}>

  </TouchableOpacity>
  </View>

  </View>
    )
  }

</View>
    )
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{paddingTop:40}}>
        <Text style={{color:'#fff',padding:20,fontSize:40}}>
          Custom Bottom Navigation Bar
        </Text>
        <Text style={{color:'#fff',paddingHorizontal:20,fontSize:14,marginTop:-10}}>
         Please select navigation bar style in below
        </Text>
        <View style={{marginTop:20}}>
      <Selector name='Style 1' id='1'>

      </Selector>
      <Selector name='Style 2' id='2'/>
      <Selector name='Style 3' id='3'/>
      <Selector name='Style 4' id='4'/>
      </View>

      </View>
      

     <View style={styles.NavBar}>

      <NavView/>
     
     </View>
     <View style={{position:'absolute',bottom:150,alignSelf:'center',padding:20,gap:10 }}>
     <Text style={{color:'#676C74',textAlign:'center'}}>
         All components created using react native component. Not used any 3rd party plugin or npm package
        </Text>
        <Text style={{color:'#fff',textAlign:'center',fontSize:16}}>
Developed By Dinith Perera </Text>

<Text onPress={() => {Linking.openURL('https://github.com/direx99')}} style={{color:'#676C74',textAlign:'center'}}>
https://github.com/direx99</Text>

     </View>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  NavBar:{
    position:'absolute',
    left:0,
    right:0,
    bottom:0

  },
  SelectTxt:{
    fontSize:20,
    color:'#fff'
  },
  SelectBtn:{
    width:20,
    height:20,
    backgroundColor:'#676B74',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'

  },
  SelectedBtn:{
    backgroundColor:'#9F86FB',
    width:15,
    height:15,
    borderRadius:15,
  }
 
});

export default App;
