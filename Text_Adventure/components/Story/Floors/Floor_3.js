import { View, Text } from 'react-native';
import { commonStyles } from '../../Factor/Styles';
import Bottom_nav2 from '../../Factor/Bottom_nav/Bottom_nav2';

export default function Floor_3({ navigation }) {
  return (
    <View style={commonStyles.container}> <View style={commonStyles.text_area}>
      <Text style={commonStyles.text_style}>{`
      ${String.raw` You have gone upstairs and you see in front of you...  `}
      ${String.raw` Another door, the stairs going up and another paper... `}
      ${String.raw`  ____________________________________________________  `} 
      ${String.raw` |       3  |                        |__________|     | `} 
      ${String.raw` |     3    |  3  3  3  3  3  3  3   |__________|  3  | `} 
      ${String.raw` |   3  /|  |                        |__________|     | `} 
      ${String.raw` | 3   / |  |_______________________ |__________| ____| `}
      ${String.raw` |    / 3| /                         |__________|     | `} 
      ${String.raw` |    | *|/                          |__________|     | `} 
      ${String.raw` |    |  /  ___     _______          |__________|     | `} 
      ${String.raw` |    | /  /&$/    /       \         |__________|     | `} 
      ${String.raw` |    |/  /__/         ___ /      ___|__________|___  | `} 
      ${String.raw` |    /                    \     |   |__________|   | | `} 
      ${String.raw` |   /             \_______/     |___|__________|___| | `} 
      ${String.raw` |  /                                                 | `} 
      ${String.raw` | /                                                  | `} 
      ${String.raw` |/___________________________________________________| `} 
      `}</Text>
      <View style={commonStyles.floor_style}>
        <Bottom_nav2 navigation={navigation} linku={'Paper_4'} home={'Home_8'} verb={'read the paper...'}/>
      </View>
    </View> </View>
  );
}
