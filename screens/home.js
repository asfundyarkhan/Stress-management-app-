import React from 'react'
import { SafeAreaView, StyleSheet, Text, View,Image} from 'react-native'
import Tabs from '../components/nav/tabs';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <Image style={{height:130,width:110,alignItems:'center',justifyContent:'center',left:130}}
           source={require('../assets/Stresslogo.png')} />
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Hello</Text>
                <Text style={styles.text_footer1}>How's your day?</Text>
            </View>
         
        </SafeAreaView>
    )
}

export default  Home;
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
        backgroundColor:'white',
      //   backgroundColor:"#fff8dc",
       // backgroundColor:"#1B1D2C",
        borderTopLeftRadius:50,
        borderTopRightRadius:300,
        paddingVertical:30,
        paddingHorizontal:20
    },
    text_footer:{
        color:'#05375a',
        fontWeight:'bold',
        fontSize:30,
    },
    text_footer1:{
        color:'#05375a',
        fontSize:18,
      },
})
