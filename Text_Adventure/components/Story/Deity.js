import { View, Text } from 'react-native';
import { commonStyles } from '../Factor/Styles';
import Bottom_nav2 from '../Factor/Bottom_nav/Bottom_nav2';

export default function Deity({ navigation }) {
  return (
    <View style={commonStyles.container}> <View style={commonStyles.text_area}>
      <Text style={commonStyles.text_style}>{`
      ${String.raw` You waited patienly for something to happen...          `}
      ${String.raw` eventually you saw a body forming next to you...        `}
      ${String.raw` The body took the form of a human and is asking you...  `}
      ${String.raw` to give him the wish so it can be fulfilled...          `}
      ${String.raw`     _______                _____                 ____   `}
      ${String.raw`              ________        _____      ________        `} 
      ${String.raw`    ______                                      ______   `}
      ${String.raw`             _____    ____________    ________           `}
      ${String.raw`     ____            |\          /|                      `}
      ${String.raw`          ___________| \________/ |__________            `}
      ${String.raw`         /           | |        | |          \           `}
      ${String.raw`        /            | |        | |           \          `}
      ${String.raw`       /             | |        | |            \         `}
      ${String.raw`      /              | |        | |             \        `}
      ${String.raw`     /     _____      \|________|/      _/^\_    \       `}
      ${String.raw`    /     /&%$@/         _______        /0 0\     \      `}
      ${String.raw`   /     /___ /         |TELL ME| <----- -|-       \     `}
      ${String.raw`  /                      -------         / \        \    `}
      `}</Text>
      <View style={{right: 24, bottom: 7}}>
        <Bottom_nav2 navigation={navigation} linku={'Wish'} home={'Home_12'} verb={'tell him your wish...'}/>
      </View>
    </View> </View>
  );
}
