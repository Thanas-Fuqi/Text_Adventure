import { View, Text } from 'react-native';
import { commonStyles } from '../../Factor/Styles';
import Bottom_nav2 from '../../Factor/Bottom_nav/Bottom_nav2';

export default function Floor_2({ navigation }) {
  return (
    <View style={commonStyles.container}> 
      <View style={commonStyles.text_area}>
        <Text style={commonStyles.text_style}>
{`
  ${String.raw` You have gone upstairs and you see in front of you...  `}
  ${String.raw` Another door and the stairs going up...                `}
  ${String.raw` Wait there is also another letter in the ground...     `}
  ${String.raw`  ____________________________________________________  `} 
  ${String.raw` |       2 |                         |__________|     | `} 
  ${String.raw` |     2   |   2  2  2  2  2  2  2   |__________|  2  | `} 
  ${String.raw` |   2 /|  |                         |__________|     | `} 
  ${String.raw` | 2  / |  |________________________ |__________| ____| `}
  ${String.raw` |   / 2| /                          |__________|     | `} 
  ${String.raw` |   | *|/            ______         |__________|     | `} 
  ${String.raw` |   |  /    ___     /      \        |__________|     | `} 
  ${String.raw` |   | /    /#%/     \     /         |__________|     | `} 
  ${String.raw` |   |/    /__/          /         __|__________|___  | `} 
  ${String.raw` |   /                 /         |   |__________|   | | `} 
  ${String.raw` |  /                /_______    |___|__________|___| | `} 
  ${String.raw` | /                                                  | `} 
  ${String.raw` |/___________________________________________________| `} 
`}
        </Text>
        <View style={commonStyles.floor_style}>
          <Bottom_nav2 navigation={navigation} linku={'Paper_3'} home={'Home_6'} verb={'read the paper...'}/>
        </View>
      </View> 
    </View>
  );
}
