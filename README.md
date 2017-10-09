# ReactNativeApps
react native testing apps for learning purposes 
__________________________________________________

This projects is for learning purposes about React Native
opend by Guy Zwerdling

commands: <br />
git clone https://github.com/RumorsHackerSchool/ReactNativeApps.git



Guy Zwerdling - testing projects:
-----------------------------------------
Albums - this app show some albums of Tylor Swift, in this app I am using JSON (using https) to collect the data about the albums and display them to the users. There is also a button to buy the album which is a link to amazon store.

Auth - this app is login section for users using firebase. I setup meny component for flexible using, I also const with style properties, if we setup the style for every TAG we need to write style={styles.styleName}, in my case my component was full in style const so I setup as follow:
const { inputStyle, labelStyle, containerStyle } = styles;
and on every TAG I specified only the style name
style={containerStyle}
