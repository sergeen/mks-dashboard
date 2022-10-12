import Colors from "./Colors";

const Theme = {
  darkTheme: {
    overlay: Colors.primary.overlayBlack,
    pageBg: Colors.dark.veryDarkBlueBg,
    topBgPattern: Colors.dark.veryDarkBlueTopBgPattern,
    topModalBgPattern: Colors.dark.veryDarkBlueTopBgPattern,
    modalBg: Colors.dark.darkDesaturatedBlueCardBg,
    positive: Colors.primary.limeGreen,
    negative: Colors.primary.brightRed,
    defaultText: Colors.primary.white,
    lightText: Colors.primary.white,
  },
  lightTheme: {
    overlay: Colors.primary.overlayBlack,
    pageBg: Colors.primary.white,
    topBgPattern: Colors.light.veryPaleBlueTopBgPattern,
    topModalBgPattern: Colors.light.veryPaleBlueTopBgPattern,
    modalBg: Colors.primary.white,
    positive: Colors.primary.limeGreen,
    negative: Colors.primary.brightRed,
    defaultText: Colors.light.veryDarkBlueText,
    lightText: Colors.neutral.darkGrey,
  },
};

export default Theme;
