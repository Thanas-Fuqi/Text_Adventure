import { StyleSheet } from 'react-native';

const palette = {
  'full': 'black',
  'blank': 'white'
};

const commonStyles = StyleSheet.create({
  container: {
    top: 22,
    width: 844,
    height: 390,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.full,
  },
  text_area: {
    width: 522,
    height: 360,
    borderWidth: 1,
    color: palette.blank,
    borderColor: palette.blank,
  },
  text_style: {
    color: palette.blank, 
    fontFamily: 'monospace',
  },
  floor_style: {
    bottom: 3,
    right: 16,
  },
  paper_style: {
    bottom: 10,
  },
  room_style: {
    left: 7,
    bottom: 8,
  },
});

export { commonStyles, palette };
