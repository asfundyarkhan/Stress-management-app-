import React from 'react'
import { SafeAreaView, StyleSheet, Text,TouchableOpacity, View ,TextInput,ScrollView} from 'react-native'
import { Avatar, BottomNavigation, } from 'react-native-paper'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import StyleButton from '../components/StyleButton';
import * as Animatable from 'react-native-animatable';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import GenderPicker from '../components/StyleButton/picker'

import { createUserWithEmailAndPassword } from 'firebase/auth';
import authentication from '../components/firebase'




const Register = ({navigation}) => {

   const RegisterUser =() =>{
       createUserWithEmailAndPassword(authentication,data.email,data.password)
       .then((re)=>{
           console.log(re);
           navigation.navigate('login')
       })
       .catch((re)=>{
           console.warn(re);
       })
   }
    const [data,setData]= React.useState({
        email:'',
        password:'',
        name:'',
        check_textInputChange: false,
        check_textInputNameChange: false,
        secureTextEntry:true
    });
    const textInputChange=(val)=>{
        if(val.length !== 0){
            setData({
                ...data,
                email:val,
                check_textInputChange:true
            })
        }
        else{
            setData({
                ...data,
                email:val,
                check_textInputChange:false
            })
        }
    }
    const textInputNameChange=(val)=>{
        if(val.length !== 0){
            setData({
                ...data,
                name:val,
                check_textInputNameChange:true
            })
        }
        else{
            setData({
                ...data,
                name:val,
                check_textInputNameChange:false
            })
        }
    }

    const handlePasswordChange=(val)=>{
        setData({
            ...data,
            password:val,
            
        })
    }
    const updateSecureTextEntry =() =>{
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    return (
       <SafeAreaView style={styles.container}>
         <View style={styles.header}>
         <Text style={styles.text_header}>Register Yourself</Text>
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

             <Text style={styles.text_footer}>Full Name</Text>
             <View style={styles.action}>
                  <FontAwesome
                 name="user-o"
                 color="#05375a"
                 size={20}
                /> 
               
                <TextInput
                    placeholder='Your Full name'
                    style={styles.textInput}
                    autoCapitalize='none'
                    onChangeText={(val) =>textInputNameChange(val)}
                />
                {data.check_textInputNameChange ?
                <Animatable.View  animation="bounceIn">
                <Feather
                    name='check-circle'
                    color="green"
                    size={20}
                />
                </Animatable.View>
                : null}
             </View>

             <Text style={styles.text_footer}>Email</Text>
             <View style={styles.action}>
             <MaterialIcons name="email" size={20} color="#05375a" />
                <TextInput
                    placeholder='Your Email address'
                    style={styles.textInput}
                     value={data.email}
                    autoCapitalize='none'
                    onChangeText={(val) =>textInputChange(val)}
                />
                {data.check_textInputChange ?
                <Animatable.View  animation="bounceIn">
                <Feather
                    name='check-circle'
                    color="green"
                    size={20}
                />
                </Animatable.View>
                : null}
             </View>

             <Text style={[styles.text_footer,
            { marginTop:20}]}>Password</Text>
             <View style={styles.action}>
                 <FontAwesome
                 name="lock"
                 color="#05375a"
                 size={20}
                />
                <TextInput
                    placeholder='Your Password'
                    value={data.password}
                    secureTextEntry={data.secureTextEntry? true:false}
                    style={styles.textInput}
                    autoCapitalize='none'
                    onChangeText={(val) =>handlePasswordChange(val)}
                />
                <TouchableOpacity
                onPress={updateSecureTextEntry}
                >
                {data.secureTextEntry ?
                <Feather
                    name='eye-off'
                    color="grey"
                    size={20}
                /> :
                <Feather
                    name='eye'
                    color="grey"
                    size={20}
                />
                }
                </TouchableOpacity>
             </View>
             <Text style={[styles.text_footer,
            { marginTop:20}]}> Confirm Password</Text>
             <View style={styles.action}>
                 <FontAwesome
                 name="lock"
                 color="#05375a"
                 size={20}
                />
                <TextInput
                    placeholder=' Confirm Your Password'
                    secureTextEntry={data.secureTextEntry? true:false}
                    style={styles.textInput}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    onChangeText={(val) =>handlePasswordChange(val)}
                />
                <TouchableOpacity
                onPress={updateSecureTextEntry}
                >
                {data.secureTextEntry ?
                <Feather
                    name='eye-off'
                    color="grey"
                    size={20}
                /> :
                <Feather
                    name='eye'
                    color="grey"
                    size={20}
                />
                }
                </TouchableOpacity>
             </View>
             <Text style={styles.text_footer}>Contact Number</Text>
             <View style={styles.action}>
             <Foundation name="telephone" size={20} color="#05375a" />
                <TextInput
                    placeholder='Your Contact Number'
                    style={styles.textInput}
                    autoCapitalize='none'
                    
                />
               
             </View>
             <Text style={styles.text_footer}>Gender</Text>
             <View style={styles.action, {flexDirection:'row'}}>

               <GenderPicker/>
             </View>

            
 
             <View style={styles.button}>
                 <StyleButton type="primary"
                    content={"Sign Up"}
                //     onPress ={() => {
                //     console.warn(data.email,data.password),
                //  //   navigation.navigate('login')
                //  {RegisterUser}
                //      }}
                onPress={RegisterUser}

                     />
             </View>

         </Animatable.View>
              </SafeAreaView>
    )
}

export default Register

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
     action:{
         flexDirection:'row',
         marginTop:10,
         borderBottomWidth:1,
         borderBottomColor:'#f2f2f2',
         paddingBottom:5,
     },
     textInput:{
         flex:1,
         paddingLeft:10,
         color:'#05375a',
     },
      button:{
          alignItems:'center',
          marginTop:50,
      },
      signIn:{
          width:'100%',
          height:50,
          justifyContent:'center',
          alignItems:'center',
          borderRadius:10,
      },
      textSign:{
          fontSize:18,
          fontWeight:'bold',
      },
      panelHeader:{
          alignItems:'center',
      },
      panelHandle:{
          width:40,
          height:8,
          borderRadius:4,
          backgroundColor:"#ffff" ,
          marginBottom:10
      },
      panelTitle:{},
      header1:{
          backgroundColor:"#ffffffff",
          shadowColor:"#33333333",
          shadowOffset:{width :-1 ,height:-3},
          shadowRadius:2,
          shadowOpacity:0.4,
          paddingTop:20,
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
      }

})
