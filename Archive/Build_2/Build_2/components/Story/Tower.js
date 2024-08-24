import { View, Text } from 'react-native';
import { commonStyles } from '../Factor/Styles';
import Bottom_nav2 from '../Factor/Bottom_nav/Bottom_nav2';

export default function Tower({ navigation }) {
  return (
    <View style={commonStyles.container}> 
      <View style={commonStyles.text_area}>
        <Text style={commonStyles.text_style}>
{`
  ${String.raw` You went to the fields and you saw the tower...         `}
  ${String.raw`     ------     ---            /\         -----          `}
  ${String.raw`       -----                  /~~\          -------      `}
  ${String.raw`                    ----     /~~~~\                      `}
  ${String.raw`    ------                  /~~~~~~\  ----       -----   `}
  ${String.raw`                           /~~~~~~~~\                    `}
  ${String.raw`            -----         /~~~~~~~~~~\        -----      `}
  ${String.raw`                         /~~~~~~~~~~~~\                  `}
  ${String.raw`                        [  _____       ]                 `}
  ${String.raw`                        [  |-|-|       ]                 `}
  ${String.raw`                        [  '''''       ]                 `}
  ${String.raw`                        [       _____  ]                 `}
  ${String.raw`                        [       |-|-|  ]                 `}
  ${String.raw`                        [       '''''  ]                 `}
  ${String.raw`          ___           [      ____    ]                 `}
  ${String.raw`         /0 0\          [     | <> |   ]                 `}
  ${String.raw`          -|-           [     |   *|   ]                 `}
  ${String.raw`          / \           [_____|____|___]                 `}
  ${String.raw` ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ `}
`}
        </Text>
        <View style={{bottom: 25}}>
          <Bottom_nav2 navigation={navigation} linku={'Floor_1'} home={'Home_3'} verb={'continue . . .'}/>
        </View>
      </View> 
    </View>
  );
}
