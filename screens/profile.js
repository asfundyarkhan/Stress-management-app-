import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import StyleButton from '../components/StyleButton';
import * as Animatable from 'react-native-animatable';
import { signOut } from 'firebase/auth';
import { Avatar, } from 'react-native-paper'
import authentication from '../components/firebase';



const Profile = ({navigation}) => {

 const SignOutUser=() =>{
   signOut(authentication)
   .then((re)=>{
     console.log(re)
    navigation.reset({
      index: 0,
      routes: [{ name: 'login' }],
    });
   })
   .catch((err)=>{
    console.warn(err)
   })
 }

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
         <Text style={styles.text_header}>User Profile</Text>
         </View>
         <Animatable.View
            animation="fadeInUpBig"
             style={styles.footer}>
        <TouchableOpacity>
          <View style={{flexDirection:'column', marginTop:5,alignItems:'center'}}>
              <Avatar.Image
                  source={require('./../assets/_92A2045.jpeg')}
                  size={80}
              />
           

          </View>
          </TouchableOpacity>
          <Text style={styles.text_footer}>Full Name:</Text>
          <Text style={styles.text_footer}>Hamza Shafiq</Text>
          <Text style={styles.text_footer}>Email:</Text>
          <Text style={styles.text_footer}>something88@gmail.com</Text>
          <Text style={styles.text_footer}>Password:</Text>
          <Text style={styles.text_footer}>********</Text>
          <Text style={styles.text_footer}>Gender:</Text>
          <Text style={styles.text_footer}>Male</Text>
          <View style={styles.button}>  
          <StyleButton 
            type="primary"
            content={"Logout"}
            onPress ={SignOutUser}
          />
          </View>
     </Animatable.View>
     </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container:{
    flex:1,
   backgroundColor:"#4E4DEB",
 },
 header:{
     flex:0.2,
    justifyContent:'flex-end',
     paddingHorizontal:20,
     paddingBottom:50,
 },
 footer:{
     flex:3,
    backgroundColor:"#fff8dc",
   //  backgroundColor:"#1B1D2C",
     borderTopLeftRadius:30,
     borderTopRightRadius:20,
     paddingVertical:30,
     paddingHorizontal:20
 },
 text_header:{
     top:50,
     textAlignVertical:'bottom',
     justifyContent:'flex-end',
     color:'#ffff',
     fontWeight:'bold',
     fontSize:30,
 },
 text_footer:{
     marginTop:10,
   color:'#05375a',
   fontSize:18,
 },
 button:{
  alignItems:'center',
  marginTop:50,
},
});
