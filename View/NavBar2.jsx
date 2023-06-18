import { Image,Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Home from './Assets/home.png';
import HomeI from './Assets/homei.png';
import SearchI from './Assets/searchi.png';
import Search from './Assets/search.png';
import Chart from './Assets/chart.png';
import ChartI from './Assets/charti.png';
import Clock from './Assets/clock.png';
import ClockI from './Assets/clk.png';
import User from './Assets/user.png';
import UserI from './Assets/useri.png';





const NavBar2 = () => {
  const [select,setSelected] = useState('Home')
  const FadeInView = props => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  
    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
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
          <View style={styles.IconContainer}>
        <Image style={styles.homeicon} source={props.img}/>
        <Text style={styles.IconText}>{props.title}</Text>

      </View>
        ):(
          <View style={styles.IconContainerInactive}>
                        <TouchableOpacity onPress={()=>{setSelected(props.title)}}>
                        <Image style={styles.homeicon} source={props.imgi}/>

                        </TouchableOpacity>


      </View>
        )
      }

      </View>
     
    )
  }

  return (
    <View style={styles.NavBar}>
      <NavIcon title='Home' img={Home} imgi={HomeI}/>
      <NavIcon title='Explore' img={Search} imgi={SearchI}/>
      <NavIcon title='Stats' img={Chart} imgi={ChartI}/>
      <NavIcon title='History' img={Clock} imgi={ClockI}/>
      <NavIcon title='Account' img={User} imgi={UserI}/>


    </View>
  )
}

export default NavBar2

const styles = StyleSheet.create({
    NavBar:{
        backgroundColor:'#1E1F24',
        width:'100%',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingBottom:30,
        paddingHorizontal:25,
        paddingTop:10,
        height:100,

    },
    homeicon:{
      width:26,
      height:26,

    },
    homeiconActive:{
      width:25,
      height:25,

    },
    IconContainer:{
      paddingVertical:10,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      gap:5,
      borderTopColor:'#9F86FB',
      transition: 'all 1.9s ease',
      borderTopWidth:3,
      marginTop:-12


    },
    IconText:{
      color:'#9F87FD',
      fontWeight:500,
      fontSize:14
    },
    IconContainerInactive:{
      paddingVertical:10,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      transition: 'all 0.9s ease',
      marginTop:-10,

    }
    
})