import { View, Text } from 'react-native'; 
import { commonStyles } from '../../Factor/Styles';
import Bottom_nav1 from '../../Factor/Bottom_nav/Bottom_nav1';                
                          
export default function Room_3({ navigation }) {
  return (
    <View style={commonStyles.container}> <View style={commonStyles.text_area}>
      <Text style={commonStyles.text_style}>{`
      ${String.raw` Blinded by the food and gluttony you went inside...      `}
      ${String.raw` You feel a force taking you over...                      `}
      ${String.raw`  _____________________________________________________   `}
      ${String.raw` |         |  \( )/   \( )/   \( )/   \( )/  |         |  `}
      ${String.raw` |  \( )/  |   _|_     _|_     _|_     _|_   |  \( )/  |  `}
      ${String.raw` |   _|_   |    |       |       |       |    |   _|_   |  `}
      ${String.raw` |    |    |_________________________________|    |    |  `}
      ${String.raw` |        / __      ______________        __  \        |  `}
      ${String.raw` |       / (__    /       /\       \      __)  \       |  `}
      ${String.raw` |      /   |_  /        /  \        \   _|     \      |  `}
      ${String.raw` |     /    <) |_______ /____\_______ |  (>      \     |  `}
      ${String.raw` |    /  __    |       /      \       |   __      \    |  `}
      ${String.raw` |   /  (__    |      /        \      |   __)      \   |  `}
      ${String.raw` |  /    |_     \    /          \    /   _|         \  |  `}
      ${String.raw` | /      <)      \ /____________\ /     (>          \ |  `}
      ${String.raw` |/___________________________________________________\|  `}
      ${String.raw` You were send to the third circle of hell...             `}
      ${String.raw` Guarded by CERBERUS to make you suffer for the choice... `}
      `}</Text>
      <View style={commonStyles.room_style}>
        <Bottom_nav1 navigation={navigation} linku={'Hell_3'} verb={'continue. . . (There is no other way. . .)'} />
      </View>
    </View> </View>
  );
}
       