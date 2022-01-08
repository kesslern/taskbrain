export enum Background {
  Blue168 = "blue-168",
  Green168 = "green-168",
  Cyan168 = "cyan-168",
  Red168 = "red-168",
  Purple168 = "purple-168",
  Yellow168 = "yellow-168",
  White168 = "white-168",
  Orange168 = "orange-168",
  Blue255 = "blue-255",
  Green255 = "green-255",
  Cyan255 = "cyan-255",
  Red255 = "red-255",
  Purple255 = "purple-255",
  Yellow255 = "yellow-255",
  Orange255 = "orange-255",
  White = "white",
  Black = "black",
}

export enum Text {
  Blue168 = "blue-168-text",
  Green168 = "green-168-text",
  Cyan168 = "cyan-168-text",
  Red168 = "red-168-text",
  Purple168 = "purple-168-text",
  Yellow168 = "yellow-168-text",
  White168 = "white-168-text",
  Orange168 = "orange-168-text",
  Blue255 = "blue-255-text",
  Green255 = "green-255-text",
  Cyan255 = "cyan-255-text",
  Red255 = "red-255-text",
  Purple255 = "purple-255-text",
  Yellow255 = "yellow-255-text",
  Orange255 = "orange-255-text",
  White = "white-text",
  Black = "black-text",
}

export enum Border {
  Blue168 = "blue-168-border",
  Green168 = "green-168-border",
  Cyan168 = "cyan-168-border",
  Red168 = "red-168-border",
  Purple168 = "purple-168-border",
  Yellow168 = "yellow-168-border",
  White168 = "white-168-border",
  Orange168 = "orange-168-border",
  Blue255 = "blue-255-border",
  Green255 = "green-255-border",
  Cyan255 = "cyan-255-border",
  Red255 = "red-255-border",
  Purple255 = "purple-255-border",
  Yellow255 = "yellow-255-border",
  Orange255 = "orange-255-border",
  White = "white-border",
  Black = "black-border",
}

export enum Hover {
  Blue168 = "blue-168-hover",
  Green168 = "green-168-hover",
  Cyan168 = "cyan-168-hover",
  Red168 = "red-168-hover",
  Purple168 = "purple-168-hover",
  Yellow168 = "yellow-168-hover",
  White168 = "white-168-hover",
  Orange168 = "orange-168-hover",
  Blue255 = "blue-255-hover",
  Green255 = "green-255-hover",
  Cyan255 = "cyan-255-hover",
  Red255 = "red-255-hover",
  Purple255 = "purple-255-hover",
  Yellow255 = "yellow-255-hover",
  Orange255 = "orange-255-hover",
  White = "white-hover",
  Black = "black-hover",
}

export enum TextHover {
  Blue168 = "blue-168-text-hover",
  Green168 = "green-168-text-hover",
  Cyan168 = "cyan-168-text-hover",
  Red168 = "red-168-text-hover",
  Purple168 = "purple-168-text-hover",
  Yellow168 = "yellow-168-text-hover",
  White168 = "white-168-text-hover",
  Orange168 = "orange-168-text-hover",
  Blue255 = "blue-255-text-hover",
  Green255 = "green-255-text-hover",
  Cyan255 = "cyan-255-text-hover",
  Red255 = "red-255-text-hover",
  Purple255 = "purple-255-text-hover",
  Yellow255 = "yellow-255-text-hover",
  Orange255 = "orange-255-text-hover",
  White = "white-text-hover",
  Black = "black-text-hover",
}

export enum BorderHover {
  Blue168 = "blue-168-border-hover",
  Green168 = "green-168-border-hover",
  Cyan168 = "cyan-168-border-hover",
  Red168 = "red-168-border-hover",
  Purple168 = "purple-168-border-hover",
  Yellow168 = "yellow-168-border-hover",
  White168 = "white-168-border-hover",
  Orange168 = "orange-168-border-hover",
  Blue255 = "blue-255-border-hover",
  Green255 = "green-255-border-hover",
  Cyan255 = "cyan-255-border-hover",
  Red255 = "red-255-border-hover",
  Purple255 = "purple-255-border-hover",
  Yellow255 = "yellow-255-border-hover",
  Orange255 = "orange-255-border-hover",
  White = "white-border-hover",
  Black = "black-border-hover",
}

export enum Theme {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Danger = "danger",
  Warning = "warning",
  Info = "info",
}

export interface ColorProps {
  background?: Background;
  border?: Border;
  borderHover?: BorderHover;
  hover?: Hover;
  text?: Text;
  textHover?: TextHover;
}

export function toClasses(colors?: ColorProps): string {
  const classes = [];
  if (colors?.background) {
    classes.push(colors.background);
  }
  if (colors?.border) {
    classes.push(colors.border);
  }
  if (colors?.borderHover) {
    classes.push(colors.borderHover);
  }
  if (colors?.hover) {
    classes.push(colors.hover);
  }
  if (colors?.text) {
    classes.push(colors.text);
  }
  if (colors?.textHover) {
    classes.push(colors.textHover);
  }
  return classes.join(" ");
}

export default {
  toClasses,
  Background,
  Border,
  BorderHover,
  Hover,
  Text,
  TextHover,
  Theme,
};
