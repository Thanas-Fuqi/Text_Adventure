import { View, Text } from 'react-native';
import { commonStyles } from '../../Factor/Styles';
import Bottom_nav2 from '../../Factor/Bottom_nav/Bottom_nav2';

export default function Paper_5({ navigation }) {
  return (
    <View style={commonStyles.container}> <View style={commonStyles.text_area}>
      <Text style={commonStyles.text_style}>{`
      ${String.raw`     You took a look at the paper...                    `}
      ${String.raw`     And you are thinking of what to do now...          `}     
      ${String.raw`      ____________________________________________      `}
      ${String.raw`     |                                            |     `}
      ${String.raw`     |               CONGRATULATIONS              |     `}
      ${String.raw`     |                                            |     `}
      ${String.raw`     | For climbing to the top you have proven... |     `}
      ${String.raw`     | worthy of taking the ancient treasure...   |     `}
      ${String.raw`     | of this tower, namely that hammer...       |     `}
      ${String.raw`     |                                            |     `}
      ${String.raw`     | To activate the power of that hammer...    |     `}
      ${String.raw`     | you need to keep it at your hands...       |     `}
      ${String.raw`     | and wait for the diety to come and to...   |     `}
      ${String.raw`     | fulfill the wish you desire...             |     `}
      ${String.raw`     |                                   CONGRATS |     `}
      ${String.raw`     |____________________________________________|     `}
      `}</Text>
      <View style={{top: 12, left: 15}}>
        <Bottom_nav2 navigation={navigation} linku={'Deity'} home={'Home_11'} verb={'wait...'}/>
      </View>
    </View> </View>
  );
}
