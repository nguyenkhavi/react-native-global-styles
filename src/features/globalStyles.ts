// import React from "react";
import { TextStyle } from 'react-native'

//global.config.ts
const fontSizeMap = {
  fs12: 12,
  fs14: 14,
  titleSize: 16,
  fs18: 18,
}
const fontWeightMap = {
  fw500: '500',
  fw600: '600',
}

type TStyleName = `${keyof typeof fontSizeMap | ''}${
  | keyof typeof fontWeightMap
  | ''}`
type TGlobalStyles = {
  [key in TStyleName]+?: TextStyle
}

export const globalTextStyles: TGlobalStyles = Object.keys(
  fontSizeMap
).reduce<TGlobalStyles>((acc, fs) => {
  Object.keys(fontWeightMap).map((fw) => {
    const styleName = `${fs}${fw}` as TStyleName
    acc[styleName] = {
      fontSize: fontSizeMap[fs],
      fontWeight: fontWeightMap[fw],
    }
  }, {})
  return acc
}, {})
