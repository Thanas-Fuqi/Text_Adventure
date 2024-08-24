import { View, Text } from 'react-native';
import { commonStyles } from '../../Factor/Styles';
import Bottom_nav2 from '../../Factor/Bottom_nav/Bottom_nav2';

export default function RoofTop({ navigation }) {
  return (
    <View style={commonStyles.container}> <View style={commonStyles.text_area}>
      <Text style={commonStyles.text_style}>{`
      ${String.raw` You finaly arrived at the rooftop...                   `} 
      ${String.raw` You see around and all you are able to see...          `}
      ${String.raw` is a rusty hammer in a stone pedestal and a paper...   `}
      ${String.raw`     _______                _____                 ____  `}
      ${String.raw`              ________     /    /\       ________       `}  
      ${String.raw`    ______                /____/_/              ______  `}
      ${String.raw`             _____    ____\//___/_    ________          `}
      ${String.raw`     ____            |\   //     /|                     `}
      ${String.raw`          ___________| \________/ |__________           `}
      ${String.raw`         /           | |        | |          \          `}
      ${String.raw`        /            | |        | |           \         `}
      ${String.raw`       /             | |        | |            \        `}
      ${String.raw`      /              | |        | |             \       `}
      ${String.raw`     /     _____      \|________|/               \      `}
      ${String.raw`    /     /&%$@/                                  \     `}
      ${String.raw`   /     /___ /                                    \    `}
      ${String.raw`  /                                                 \   `}
      `}</Text>
      <View style={commonStyles.floor_style}>
        <Bottom_nav2 navigation={navigation} linku={'Paper_5'} home={'Home_10'} verb={'read the paper...'}/>
      </View>
    </View> </View>
  );
}
