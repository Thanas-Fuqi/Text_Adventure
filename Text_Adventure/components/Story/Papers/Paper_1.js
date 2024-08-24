import { View, Text } from 'react-native';
import { commonStyles } from '../../Factor/Styles';
import Bottom_nav2 from '../../Factor/Bottom_nav/Bottom_nav2';

export default function Paper_1({ navigation }) {
  return (
    <View style={commonStyles.container}> <View style={commonStyles.text_area}>
      <Text style={commonStyles.text_style}>{`
      ${String.raw`     You took a look at the paper...                    `}
      ${String.raw`     And you are thinking of what to do now...          `}     
      ${String.raw`      ____________________________________________      `}
      ${String.raw`     |                                            |     `}
      ${String.raw`     |           TAKE  PART  AT  THIS!            |     `}
      ${String.raw`     |                                            |     `}
      ${String.raw`     | The first person to climb the tower will   |     `}
      ${String.raw`     | get one wish of his/hers fulfilled         |     `}
      ${String.raw`     |                                            |     `}
      ${String.raw`     | Go to the tower and participate            |     `}
      ${String.raw`     | You have nothing to lose and a lot to gain |     `}
      ${String.raw`     |                                            |     `}
      ${String.raw`     | The tower is at the fields of corn...      |     `}
      ${String.raw`     |                                            |     `}
      ${String.raw`     | DO NOT LOSE THIS OPPORTUNITY!              |     `}
      ${String.raw`     |____________________________________________|     `}
      ${String.raw`                                                        `}
      `}</Text>
      <View style={{bottom: 6}}>
        <Bottom_nav2 navigation={navigation} linku={'Tower'} home={'Home_2'} verb={'continue...'}/>
      </View>
    </View> </View>
  );
}
