import { Dimensions, Platform } from "react-native";

//Screen Constatnts
const SCREEN_HEIGHT = 812;
const SCREEN_WIDTH = 375;

const { height, width, fontScale } = Dimensions.get("window");
console.log("@@@@=>hello", height,width)
/**
 * Function to scale a value based on the size of the screen size and the original
 * size used on the design.
 */
export default function (units = 1) {
  return (width / SCREEN_WIDTH) * units;
}

const verticalScale = (size: number) => (height / SCREEN_HEIGHT) * size;
const horizontalScale = (size: number) => (width / SCREEN_WIDTH) * size;
const ScaledFont = (size: number) => (size / fontScale);

export { verticalScale, ScaledFont, horizontalScale };

