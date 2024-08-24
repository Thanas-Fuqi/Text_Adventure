import { View, Text } from 'react-native';
import { commonStyles } from '../Factor/Styles';
import Bottom_nav2 from '../Factor/Bottom_nav/Bottom_nav2';

export default function Forest({ navigation }) {
  return (
    <View style={commonStyles.container}> 
      <View style={commonStyles.text_area}>
        <Text style={commonStyles.text_style}>
{`
  ${String.raw` You were walking through the forest and then...         `}
  ${String.raw` You saw a tree that had a paper on it...                `}
  ${String.raw`          _____                                          `}
  ${String.raw`         /     \____                                     `}
  ${String.raw`         \  ...     \                _____    ____       `}
  ${String.raw`     ____/     ...  /__             / ... \  /    \      `}
  ${String.raw`    /  ....  ...   ... \            \     /  \ .. /      `}
  ${String.raw`    \_____       ______/         ___/  .. \__/    \      `}
  ${String.raw`          |     |               /  ....  .... ...  \     `}
  ${String.raw`          |     |               \______         ___/     `}
  ${String.raw`          |     |                      |       |         `}
  ${String.raw`          |     |                      |  ___  |         `}
  ${String.raw`          |     |                      | |#$%| |         `}
  ${String.raw`   ______/       \________             | |___| |         `}
  ${String.raw` ~~~~~~~~~~~~~~~~~~~~~~~~~~~           |       |         `}
  ${String.raw`                               _______/         \______  `}
  ${String.raw`                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ `}
`}
        </Text>
        <View style={{right: 6, bottom: 8}}>
          <Bottom_nav2 navigation={navigation} linku={'Paper_1'} home={'Home_1'} verb={'continue . . .'}/>
        </View>
      </View> 
    </View>
  );
}
