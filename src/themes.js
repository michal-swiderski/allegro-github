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

export const themeLight = merge(common, light);

