import { View, Text } from 'react-native'; 
import { commonStyles } from '../../Factor/Styles';
import Bottom_nav1 from '../../Factor/Bottom_nav/Bottom_nav1';                
                          
export default function Room_1({ navigation }) {
  return (
    <View style={commonStyles.container}> 
      <View style={commonStyles.text_area}>
        <Text style={commonStyles.text_style}>
{`
  ${String.raw` Blinded by the greed and the money you went inside...   `}
  ${String.raw` You feel a force taking you over...                     `}
  ${String.raw`  _____________________________________________________  `}
  ${String.raw` |         |  \( )/   \( )/   \( )/   \( )/  |         | `}
  ${String.raw` |  \( )/  |   -|-     -|-     -|-     -|-   |  \( )/  | `}
  ${String.raw` |   -|-   |    |       |       |       |    |   -|-   | `}
  ${String.raw` |    |    |_________________________________|    |    | `}
  ${String.raw` |        /   _       ______________      _   \        | `}
  ${String.raw` |       /   |_)    /       /\       \   (_|   \       | `}
  ${String.raw` |      /    |_   /        /  \        \  _|    \      | `}
  ${String.raw` |     /         |_______ /____\_______ |        \     | `}
  ${String.raw` |    /   _      |       /      \       |    _    \    | `}
  ${String.raw` |   /   |_)     |      /        \      |   (_|    \   | `}
  ${String.raw` |  /    |_       \    /          \    /     _|     \  | `}
  ${String.raw` | /                \ /____________\ /               \ | `}
  ${String.raw` |/___________________________________________________\| `}
  ${String.raw` You were send to the fourth circle of hell...           `}
  ${String.raw` Guarded by PLUTO to make you suffer for your choices... `}
`}
        </Text>
        <View style={commonStyles.room_style}>
          <Bottom_nav1 navigation={navigation} linku={'Hell_1'} verb={'continue. . . (There is no other way. . .)'} />
        </View>
      </View> 
    </View>
  );
}
       