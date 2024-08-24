import { View, Text } from 'react-native'; 
import { commonStyles } from '../../Factor/Styles';
import Bottom_nav1 from '../../Factor/Bottom_nav/Bottom_nav1';                
                          
export default function Room_2({ navigation }) {
  return (
    <View style={commonStyles.container}> 
      <View style={commonStyles.text_area}>
        <Text style={commonStyles.text_style}>
{`
  ${String.raw` Blinded by the power and wrath you went inside...        `}
  ${String.raw` You feel a force taking you over...                      `}
  ${String.raw`  _____________________________________________________   `}
  ${String.raw` |         |  \( )/   \( )/   \( )/   \( )/  |         |  `}
  ${String.raw` |  \( )/  |   _|_     _|_     _|_     _|_   |  \( )/  |  `}
  ${String.raw` |   _|_   |  (_|     (_|     (_|     (_|    |   _|_   |  `}
  ${String.raw` |  (_|    |_________________________________|  (_|    |  `}
  ${String.raw` |        /         ______________            \        |  `}
  ${String.raw` |       /  0     /       /\       \      0    \       |  `}
  ${String.raw` |      /  )-(  /        /  \        \   )-(    \      |  `}
  ${String.raw` |     /    0  |_______ /____\_______ |   0      \     |  `}
  ${String.raw` |    /        |       /      \       |           \    |  `}
  ${String.raw` |   /    0    |      /        \      |     0      \   |  `}
  ${String.raw` |  /    )-(    \    /          \    /     )-(      \  |  `}
  ${String.raw` | /      0       \ /____________\ /        0        \ |  `}
  ${String.raw` |/___________________________________________________\|  `}
  ${String.raw` You were send to the fifth circle of hell...             `}
  ${String.raw` Guarded by PHLEGYAS to make you suffer for the choice... `}
`}
        </Text>
        <View style={commonStyles.room_style}>
          <Bottom_nav1 navigation={navigation} linku={'Hell_2'} verb={'continue. . . (There is no other way. . .)'} />
        </View>
      </View> 
    </View>
  );
}
       