import { View, Text } from 'react-native';
import { commonStyles } from '../../Factor/Styles';
import Bottom_nav2 from '../../Factor/Bottom_nav/Bottom_nav2';

export default function Floor_1({ navigation }) {
  return (
    <View style={commonStyles.container}> <View style={commonStyles.text_area}>
      <Text style={commonStyles.text_style}>{`
      ${String.raw`  You opened the door and...                            `} 
      ${String.raw`  You see a paper on the floor...                       `}
      ${String.raw`  ____________________________________________________  `}
      ${String.raw` |      1   |                        |__________|     | `}
      ${String.raw` |    1     |  1  1  1  1  1  1  1   |__________|  1  | `}
      ${String.raw` |  1   /|  |                        |__________|     | `}
      ${String.raw` |1    / |  |_______________________ |__________| ____| `}
      ${String.raw` |    /  | /                         |__________|     | `}
      ${String.raw` |    | *|/             /|           |__________|     | `}
      ${String.raw` |    |  /   ____      / |           |__________|     | `}
      ${String.raw` |    | /   /$$#/     /  |           |__________|     | `}
      ${String.raw` |    |/   /___/         |           |__________|     | `}
      ${String.raw` |    /                  |           |__________|     | `}
      ${String.raw` |   /              -----------                       | `}
      ${String.raw` |  /                                                 | `}
      ${String.raw` | /                                                  | `}
      ${String.raw` |/___________________________________________________| `}
      `}</Text>
      <View style={{right: 20}}>
        <Bottom_nav2 navigation={navigation} linku={'Paper_2'} home={'Home_4'} verb={'read the paper . . .'}/>
      </View>
    </View> </View>
  );
}
