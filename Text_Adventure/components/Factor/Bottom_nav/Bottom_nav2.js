import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { palette } from '../Styles';

function Nav({ link, text, text1, img, num, navigation }){
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{color: palette.blank}}>{text}{text1}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(link)}>
        <Image style={{...styles.arrow_icon, right: num}} source={img}/>
      </TouchableOpacity>
    </View>
  );
}

export default function Bottom_nav2({ navigation, linku, home, verb }){
  return (
    <View style={{flexDirection: 'row', left: 17, top: 5}}>
      <Nav 
        num={15} 
        text1={verb}
        link={linku} 
        navigation={navigation}
        text={'     Press the arrow to '}
        img={require('../../../assets/Continue_Arrow.png')} 
      />

      <Nav
        num={20} 
        link={home} 
        navigation={navigation}
        text={'     Press home to go Home'} 
        img={require('../../../assets/Home_icon.png')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  arrow_icon: {
    width: 70,
    height: 20,
    resizeMode: 'contain',
  }
});
