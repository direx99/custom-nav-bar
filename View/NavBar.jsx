import { Image,Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import homeicon from './Assets/home.png';

const NavBar = () => {
  const [select,setSelected] = useState('Home')
  const FadeInView = props => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  
    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]);
  
    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim, // Bind opacity to animated value
        }}>
        {props.children}
      </Animated.View>
    );
  };

  const NavIcon = (props)=> {



    return(
      <View>
      {
        select == props.title ? (
          <FadeInView style={styles.IconContainer}>
        <Image style={styles.homeicon} source={homeicon}/>
        <Text style={styles.IconText}>{props.title}</Text>

      </FadeInView>
        ):(
          <FadeInView style={styles.IconContainerInactive}>
                        <TouchableOpacity onPress={()=>{setSelected(props.title)}}>
                        <Image style={styles.homeicon} source={homeicon}/>

                        </TouchableOpacity>


      </FadeInView>
        )
      }

      </View>
     
    )
  }

  return (
    <View style={styles.NavBar}>
      <NavIcon title='Home'/>
      <NavIcon title='Explore'/>
      <NavIcon title='Stats'/>
      <NavIcon title='History'/>
      <NavIcon title='Account'/>


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
      height:30,

    },
    homeiconActive:{
      width:25,
      height:25,

    },
    IconContainer:{
      backgroundColor:'#2C2B3E',
      padding:10,
      paddingHorizontal:15,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      gap:5,
      borderRadius:30,
      transition: 'all 1.9s ease',


    },
    IconText:{
      color:'#9F87FD',
      fontWeight:500,
      fontSize:16
    },
    IconContainerInactive:{
      padding:10,
      paddingHorizontal:15,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      borderRadius:30,
      transition: 'all 0.9s ease',

    }
    
})