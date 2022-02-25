import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView, TextInput,TouchableOpacity} from 'react-native'
import * as Animatable from 'react-native-animatable';
//import LinearGradient  from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import StyleButton from '../components/StyleButton';
import  authentication  from '../components/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = ({navigation}) => {
     
    const [data,setData]= React.useState({
        email:'',
        password:'',
        check_textInputChange: false,
        secureTextEntry:true
    });

    const SignInUser =()=>{
        signInWithEmailAndPassword(authentication,data.email,data.password)
        .then((re)=>{
            navigation.navigate('Home2')
        })
        .catch((re)=>{
            console.warn(re);
        })
    }
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

    const handlePasswordChange=(val)=>{
        setData({
            ...data,
            password:val
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
            <Text style={styles.text_header}>Welcome!</Text>
         </View>
         
         
         <Animatable.View 
            animation="fadeInUpBig"   
             style={styles.footer}>
             <Text style={styles.text_footer}>Email</Text>
             <View style={styles.action}>
                 <FontAwesome 
                 name="user-o"
                 color="#05375a"
                 size={20}
                />
                <TextInput 
                    placeholder='Your Email address'
                    style={styles.textInput}
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
            { marginTop:35}]}>Password</Text>
             <View style={styles.action}>
                 <FontAwesome 
                 name="lock"
                 color="#05375a" 
                 size={20} 
                />
                <TextInput 
                    placeholder='Your Password'
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
             <View style={styles.button}>
                 <StyleButton
                     type="primary"
                     content={"Login"}
                     onPress ={SignInUser}
                 //  onPress ={()=>{navigation.navigate('Home2')}}
                     
                 />

                 <StyleButton type="primary"
                    content={"SignUp"}
                    onPress ={()=>{navigation.navigate('Register')}}
                    />
             </View>

         </Animatable.View>
        </SafeAreaView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container:{
       flex:1,
      backgroundColor:"#4E4DEB",
    },
    header:{
        flex:1,
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
        color:'#ffff',
        fontWeight:'bold',
        fontSize:30,
    },
    text_footer:{
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
     }

})

