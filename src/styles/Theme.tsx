import Colors from "./Colors";

const Theme = {
  darkTheme: {
    overlay: Colors.primary.black,
    pageBg: Colors.dark.veryDarkBlueBg,
    topBgPattern: Colors.dark.veryDarkBlueTopBgPattern,
    topModalBgPattern: Colors.dark.veryDarkBlueTopBgPattern,
    modalBg: Colors.dark.darkDesaturatedBlueCardBg,
  },
  lightTheme: {
    overlay: Colors.primary.black,
    pageBg: Colors.primary.white,
    topBgPattern: Colors.light.veryPaleBlueTopBgPattern,
    topModalBgPattern: Colors.light.veryPaleBlueTopBgPattern,
    modalBg: Colors.primary.white,
  },
};

export default Theme;
