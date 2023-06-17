import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import homeicon from './Assets/home.png';

const NavBar = () => {


  const NavIcon = ()=> {
    return(
<View style={styles.IconContainer}>
        <Image style={styles.homeicon} source={homeicon}/>
        <Text style={styles.IconText}>Home</Text>

      </View>
     
    )
  }

  return (
    <View style={styles.NavBar}>
      <NavIcon/>
      <NavIcon/>
      <NavIcon/>


    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
    NavBar:{
        backgroundColor:'#1E1F24',
        width:'100%',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingBottom:30,
        paddingHorizontal:15,
        paddingTop:10
    },
    homeicon:{
      width:30,
      height:30
    },
    IconContainer:{
      backgroundColor:'#2C2B3E',
      padding:10,
      paddingHorizontal:15,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      gap:10,
      borderRadius:30

    },
    IconText:{
      color:'#9F87FD',
      fontWeight:500,
      fontSize:16
    }
})