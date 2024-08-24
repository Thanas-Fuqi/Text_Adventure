import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { palette } from '../Styles';

function Nav({ link, text, img, navigation }){
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{color: palette.blank}}>{text}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(link)}>
        <Image style={styles.arrow_icon} source={img}/>
      </TouchableOpacity>
    </View>
  );
}

export default function Bottom_nav3({ navigation, linku, linku2, home }){
  return (
    <View style={{alignItems: 'center', top: 10}}>
      <View style={{flexDirection: 'row', right: 10}}>
        <Nav 
          link={linku} 
          navigation={navigation}
          text={'     Press the arrow to go upstairs...'}
          img={require('../../../assets/Continue_Arrow.png')} 
        />

        <Nav
          link={linku2} 
          navigation={navigation}
          text={'     Press the arrow to open the door...'} 
          img={require('../../../assets/Continue_Arrow.png')} 
        />
      </View>

      <Nav
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
    width: 30,
    height: 20,
    resizeMode: 'contain',
  }
});
