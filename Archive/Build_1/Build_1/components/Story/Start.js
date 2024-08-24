import { View, Text } from 'react-native';
import { commonStyles } from '../Factor/Styles';
import Bottom_nav1 from '../Factor/Bottom_nav/Bottom_nav1';

export default function Start({ navigation }) {
  return (
    <View style={commonStyles.container}> 
      <View style={{...commonStyles.text_area, height: 265}}>
        <Text style={commonStyles.text_style}>
{`
      ${String.raw`               GAME  BY  @nasiol        `}
      ${String.raw`                                        `}
      ${String.raw`  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ `}
      ${String.raw`  ░▒▄▀▀▀▄░▒▀▀█▀▀░▒█▀▀▀█░▒█▀▀▀▄░▒▀▀█▀▀░░ `}
      ${String.raw`  ░▒█░░░░░░░░█░░░▒█░░░█░▒█░░░█░░░░█░░░░ `}
      ${String.raw`  ░▒▀▄▄▄░░░░░█░░░▒█▀▀▀█░▒█▄▄▄▀░░░░█░░░░ `}
      ${String.raw`  ░░░░░░█░░░░█░░░▒█░░░█░▒█▀▄░░░░░░█░░░░ `}
      ${String.raw`  ░▒▀▄▄▄▀░░░░█░░░▒█░░░█░▒█░░▀▄░░░░█░░░░ `}
      ${String.raw`  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ `}
      ${String.raw`                                        `}
`}
        </Text>
        <View style={{bottom: 5, left: 5}}>
          <Bottom_nav1 navigation={navigation} linku={'Forest'} verb={'Start !'}/>
        </View>
      </View> 
    </View>
  );
}
