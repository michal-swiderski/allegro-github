import {merge} from 'lodash';

const common = {
  spacing: {
    padding: 16
  },
  colors: {
    primary: '#ff5a00',
    primaryLight: '#ff7b33',
    link: '#58a6ff'
  }
}

const light = {
  colors : {
    background : '#fff',
    textColorPrimary: '#24292e',
    textColorSecondary: '#586069',
    borderGray: 'lightgray'
  }
}

const dark = {
  colors : {
    background : '#0d1117',
    textColorPrimary: '#c9d1d9',
    textColorSecondary: '#c9d1d9',
    borderGray: 'lightgray'
  }
}

export const lightTheme = merge({}, common, light);
export const darkTheme = merge({}, common, dark);

