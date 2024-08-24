import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { palette } from '../Styles';

export default function Bottom_nav1({ navigation, linku, verb}) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{color: palette.blank}}>     Press the arrow to {verb}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(linku)}>
        <Image style={styles.arrow_icon} source={require('../../../assets/Continue_Arrow.png')}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  arrow_icon: {
    bottom: 5,
    right: 20,
    width: 70,
    height: 30,
    resizeMode: 'contain',
  }
});
