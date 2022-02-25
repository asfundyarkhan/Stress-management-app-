import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Image , View } from 'react-native';
import StyleButton from './../components/StyleButton';
import * as Animatable from 'react-native-animatable';

 //const imag=require('./../assets/login.png')
export default function Start({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
        <ImageBackground source={require('./../assets/login.png')}
        // source={imag}
        resizeMode="cover" 
        style={styles.image}>
         <View style={{flex:2, alignItems:'center',justifyContent:'center',bottom:50}}>
         <Image style={{height:200,width:180}}
           source={require('./../assets/Stresslogo.png')}
         />
         </View>
        <Animatable.View style={{justifyContent:'flex-end',alignItems:'flex-end', bottom:30}}
        animation="fadeInUpBig"
        >
        <StyleButton  type="primary"
         content={"Get Started"}
         onPress ={() => { 
           navigation.navigate('login')}}
        />
        </Animatable.View>

        
        </ImageBackground>
        
        
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
   
    // alignItems: 'center',
    //  justifyContent: 'center',
    },
    image :{
        flex:1,
       justifyContent:'center',
       //alignItems:'center',
    },
  });
  
