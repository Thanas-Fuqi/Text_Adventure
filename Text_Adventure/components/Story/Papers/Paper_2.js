import { View, Text } from 'react-native';
import { commonStyles } from '../../Factor/Styles';
import Bottom_nav3 from '../../Factor/Bottom_nav/Bottom_nav3';

export default function Paper_2({ navigation }) {
  return (
    <View style={commonStyles.container}> <View style={commonStyles.text_area}>
      <Text style={commonStyles.text_style}>{`
      ${String.raw`     You took a look at the paper...                    `}
      ${String.raw`     And you are thinking of what to do now...          `}     
      ${String.raw`      ____________________________________________      `}
      ${String.raw`     |                                            |     `}
      ${String.raw`     |           WHO CARES FOR A WISH!            |     `}
      ${String.raw`     |                                            |     `}
      ${String.raw`     | Inside of this door is a mountain of gold, |     `}
      ${String.raw`     | is so much that you could even by a world  |     `}
      ${String.raw`     |                                            |     `}
      ${String.raw`     | Why to go to the top when you can buy      |     `}
      ${String.raw`     | anything that you wish?                    |     `}
      ${String.raw`     |                                            |     `}
      ${String.raw`     | I say endless wishes better than one!      |     `}
      ${String.raw`     |                                            |     `}
      ${String.raw`     | DO NOT LOSE THIS OPPORTUNITY!              |     `}
      ${String.raw`     |____________________________________________|     `}
      `}</Text>
      <View style={commonStyles.paper_style}>
        <Bottom_nav3 navigation={navigation} linku={'Floor_2'} linku2={'Room_1'} home={'Home_5'}/>
      </View>
    </View> </View>
  );
}
