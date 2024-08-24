import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { commonStyles, palette } from '../Factor/Styles';
import { useState } from 'react';

export default function Forest({ navigation }) {
  const [wish, setWish] = useState('');
  const [answers, setAnswers] = useState([]);

  return (
    <View style={commonStyles.container}> 
      <View style={{...commonStyles.text_area, justifyContent: 'center'}}>
        <View style={{alignItems: 'center'}}>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.font_s}>Tell me your wish >>> </Text>

            <TextInput 
              placeholder={'. . . . .'} 
              placeholderTextColor={palette.blank}
              onChangeText={(text) => setWish(text)}
              style={{...styles.input, ...styles.font_s}}
            />
          </View>

          <TouchableOpacity style={styles.submit_button} onPress={() => {
            const keywords = ['nothing', 'i want nothing'];
            if (keywords.some(keyword => wish.toLowerCase().includes(keyword))) {
              navigation.navigate('Home_13');
            } else {
              setAnswers([...answers, "I can not do that, try another wish!"]);
          }}}> 

            <Text style={styles.font_s}>Submit</Text>
          </TouchableOpacity>

          <View style={styles.box}>
            <Text style={{...styles.font_s, marginTop: 5, marginLeft: 10}}>Answer :</Text>

            <ScrollView style={styles.answer_box}>
              {answers.map((answer) => (
                <Text style={{...styles.font_s}}>{answer}</Text>
              ))}
            </ScrollView>
          </View>
        </View>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  font_s: {
    fontSize: 19,
    ...commonStyles.text_style,
  },
  input: {
    height: 25,
    width: 180,
    paddingLeft: 3,
    backgroundColor: 'grey',
  },
  submit_button: {
    width: 80, 
    height: 25, 
    marginTop: 20,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: 'grey', 
    justifyContent: 'center',
  },
  box: {
    width: 450, 
    height: 180, 
    marginTop: 25,
    borderWidth: 1, 
    borderColor: 'white',
  },
  answer_box: {
    marginTop: 5,
    fontSize: 18,
    marginLeft: 7,
    marginRight: 7,
    marginBottom: 5,
    ...commonStyles.text_style, 
  }
});
