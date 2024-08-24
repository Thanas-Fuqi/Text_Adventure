import { View, Text } from 'react-native';
import { commonStyles } from '../Factor/Styles';
import Bottom_nav1 from '../Factor/Bottom_nav/Bottom_nav1';

function HellTemplate({ navigation, text1, text2, text3 }) {
  return (
    <View style={commonStyles.container}> <View style={{...commonStyles.text_area, bottom: 30}}>
      <Text style={commonStyles.text_style}>{`
      ${String.raw`                                                       `}
      ${String.raw` You know that you have commited a sin good for you... `}
      ${String.raw` But it will do to you no good that you know now...    `}
      ${String.raw` For blood and gore the following is restricted...     `}
      ${String.raw`        ____      ____       ____     _____            `}
      ${String.raw`       /    \    /    \     |    \   |                 `}
      ${String.raw`      |         |      |    |____/   |_____            `}
      ${String.raw`      |   ___   |      |    |   \    |                 `}
      ${String.raw`       \____/    \ __ /     |    \   |_____            `}
      ${String.raw`                      __                          __   `}
      ${String.raw` \   /\   /    /\    |  \   |\    /  ||  |\   /  /  \  `}
      ${String.raw` \  /  \  /   /  \   |__/   | \   /  ||  | \  /  |     `}
      ${String.raw` \  /  \  /   /__\   |  \   |  \  /  ||  | \  /  |  __ `}
      ${String.raw`  \/    \/    /  \   |  \   |   \/   ||  |  \/   \___/ `} `}</Text> 

      <Text style={commonStyles.text_style}>{`
      ${text1}
      ${text2}
      ${text3}
      `}</Text>

      <View style={{bottom: 7, left: 5}}>
        <Bottom_nav1 navigation={navigation} linku={'Start'} verb={'ReStart'} />
      </View>
    </View> </View>
  );
}

function Hell_1({ navigation }) {
  return ( <HellTemplate navigation={navigation}
    text1="You will for eternity push a large, rolling weight..." 
    text2="with your chest and crash it into someone guilty..."
    text3="of the opposing sin from the other side of the circle..."
  />);
}

function Hell_2({ navigation }) {
  return ( <HellTemplate navigation={navigation}
    text1="You will tear, rend, bite, and scratch..." 
    text2="in an epic bare-knuckle brawl with the others there..."
    text3="and even yourself for eternity..."
  />);
}

function Hell_3({ navigation }) {
  return ( <HellTemplate navigation={navigation} 
    text1="You will be forced to wallow in disgusting..." 
    text2="smelling mud and be constantly pelted..."
    text3="by the endless rain, sleet, snow, and hail..."
  />);
}

export { Hell_1, Hell_2, Hell_3 };
