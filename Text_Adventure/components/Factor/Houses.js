import { View, Text } from 'react-native';
import { commonStyles } from '../Factor/Styles';
import Bottom_nav1 from '../Factor/Bottom_nav/Bottom_nav1';

function HomeTemplate({ navigation, text1, text2="You went on your road and finally ended up home..." }) {
  return (
    <View style={commonStyles.container}> <View style={commonStyles.text_area}>
      <Text style={commonStyles.text_style}>{`
      ${text1}
      ${text2}
      `}</Text> <View style={{bottom: 30}}>

      <Text style={commonStyles.text_style}>{`
      ${String.raw`      __________              ______                     `}
      ${String.raw`                                            _________    `}
      ${String.raw`              ___________            ___________         `}
      ${String.raw`      _______                   /\         ___           `}
      ${String.raw`                               /~~\                      `}
      ${String.raw`                              /~~~~\                     `}
      ${String.raw`            _______          /~~~~~~\                    `}
      ${String.raw`       .-> |Goodbye|        /~~~~~~~~\                   `}
      ${String.raw`      /     -------        /~~~~~~~~~~\                  `}
      ${String.raw`      \                   /~~~~~~~~~~~~\                 `}
      ${String.raw`       /                 [  ___    ___  ]                `}
      ${String.raw`       \  ___            [ |_|_|  |_|_| ]                `}
      ${String.raw`         /0 0\           [     ____     ]                `}
      ${String.raw`          -|-            [    | <> |    ]                `}
      ${String.raw`          / \            [____|____|____]                `}
      ${String.raw` ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ `}
      `}</Text>

      <View style={{bottom: 7, left: 5}}>
        <Bottom_nav1 navigation={navigation} linku={'Start'} verb={'ReStart'} />
      </View>
    </View> </View> </View>
  );
}

function Home_1({ navigation }) {
  return ( <HomeTemplate navigation={navigation} text2=""
    text1="Then you went on your road and finaly ended up home..." 
  />);
}

function Home_2({ navigation }) {
  return ( <HomeTemplate navigation={navigation}
    text1="You thought that the challenge had something off so..."
  />);
}

function Home_3({ navigation }) {
  return ( <HomeTemplate navigation={navigation}
    text1="You thought that the tower was too simple so..."
  />);
}

function Home_4({ navigation }) {
  return ( <HomeTemplate navigation={navigation}
    text1="The first floor was a bit to skechty so..."
  />);
}

function Home_5({ navigation }) {
  return ( <HomeTemplate navigation={navigation}
    text1="You felt an uneasy feeling so..."
  />);
}

function Home_6({ navigation }) {
  return ( <HomeTemplate navigation={navigation}
    text1="The second floor was a bit to skechty so..."
  />);
}

function Home_7({ navigation }) {
  return ( <HomeTemplate navigation={navigation}
    text1="You felt an uneasy feeling so..."
  />);
}

function Home_8({ navigation }) {
  return ( <HomeTemplate navigation={navigation}
    text1="The third floor was a bit to skechty so..."
  />);
}

function Home_9({ navigation }) {
  return ( <HomeTemplate navigation={navigation}
    text1="You felt an uneasy feeling so..."
  />);
}

function Home_10({ navigation }) {
  return ( <HomeTemplate navigation={navigation}
    text1="You thought that the challenge was a scam so..."
  />);
}

function Home_11({ navigation }) {
  return ( <HomeTemplate navigation={navigation}
    text1="You thought that the challenge was a scam so..."
  />);
}

function Home_12({ navigation }) {
  return ( <HomeTemplate navigation={navigation}
    text1="You for some reason did not belive him so..."
  />);
}

function Home_13({ navigation }) {
  return (
    <HomeTemplate navigation={navigation}
      text1="You really are something..."
      text2="Anyway now that yo want nothing you can go home..."
    />
  );
}

export { 
  Home_1, Home_2, Home_3, Home_4, Home_5, 
  Home_6, Home_7, Home_8, Home_9, Home_10, 
  Home_11, Home_12, Home_13 
};
