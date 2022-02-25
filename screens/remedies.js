import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';




const Remedies = () => {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.header}>
         <Text style={styles.text_header}>Remedies</Text>
         </View>
         <Animatable.View
            animation="fadeInUpBig"
             style={styles.footer}>
             <ScrollView >
                 <Text style={styles.text_footer}> Count Backward </Text>
               <View style={styles.styleView}>
                 <Text>   When worries are running rampant, try slowly counting to 10 and 
                      then back again to calm down.
                       It’s harder to freak out about an upcoming exam or job interview 
                      when you’re busy remembering what number comes before seven
                 </Text>
               </View>
                 <Text style={styles.text_footer}>Stretch</Text>
               <View style={styles.styleView}>
                 <Text>   Standing up for a quick stretch can relieve muscle tension and
                           help you relax during a stressful workday. 
                          Try a shoulder roll-out or a chest-opening stretch right from the desk chair.
                 </Text>
               </View>
                 <Text style={styles.text_footer}> Squeeze a Stress Ball</Text>
               <View style={styles.styleView}>
                 <Text>  On days when you want to strangle a coworker, your roommate, 
                 or the driver in the next lane, squeeze a stress ball instead. It’s an easy, portable,
                  and  non-violent way to relieve tension.
                 </Text>
               </View>
                 <Text style={styles.text_footer}>  Chew Gum</Text>
               <View style={styles.styleView}>
                 <Text>  A stick of gum is a surprisingly quick and easy way to beat stress.
                  No matter the flavor, 
                 just a few minutes of chewing can actually reduce anxiety and lower cortisol levels.     
                 </Text>
               </View>
                 <Text style={styles.text_footer}> Drip Cold Water On Your Wrists</Text>
               <View style={styles.styleView}>
                 <Text>  When stress hits, head for the bathroom and drop some cold water on your wrists and
                  behind your earlobes. There are major arteries right underneath the skin,
                  so cooling these areas can help calm the whole body.   
                 </Text>
               </View>
                 <Text style={styles.text_footer}> Breathe</Text>
               <View style={styles.styleView}>
                 <Text> Slow deep Breathe can help lower blood pressure and heart rate. 
                 Try pranayama breathing, a yogic method that involves breathing through one nostril at a time 
                 to relieve anxiety.
                  The technique is supposed to work the same way as acupuncture, balancing the mind and body.   
                 </Text>
               </View>
                 <Text style={styles.text_footer}> </Text>
               <View style={styles.styleView}>
                 <Text>When you’re feeling overwhelmed or having trouble concentrating,
                  go for a quick stroll around the block. 
                  You’ll get the benefits of alone time, physical activity,
                   and a few minutes to gather your thoughts.

   
                 </Text>
               </View>
             </ScrollView>
             </Animatable.View>
     
    </SafeAreaView>
  );
};

export default Remedies;

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
   fontSize:20,
   fontWeight: "bold"
 },
 button:{
  alignItems:'center',
  marginTop:50,
},
styleView:{
  backgroundColor:'#4E4DEB', 
borderRadius:15,
justifyContent:'center',
alignContent:'center', 
width:'100%',
},
head:{ fontSize: 20,fontWeight: "bold"},
});
