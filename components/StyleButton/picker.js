import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

const GenderPicker = () => {
  const [selectedValue, setSelectedValue] = useState("Male");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Male" value="Male"  itemStyle={{color:'#5375a'}}/>
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Others" value="Others" />
      </Picker>
    </View>
  );
}

export default GenderPicker;
const styles = StyleSheet.create({
  container: {
    flex: 1,
   paddingLeft:15,
   // alignItems: "center",
    color:'#05375a'
  }
});
