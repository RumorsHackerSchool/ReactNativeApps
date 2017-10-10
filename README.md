# ReactNativeApps
react native testing apps for learning purposes 
__________________________________________________

This projects is for learning purposes about React Native
opend by Guy Zwerdling

commands: <br />
git clone https://github.com/RumorsHackerSchool/ReactNativeApps.git <br/>
cd ReactNativeApps/\<app\> <br>
react-native start
<br/>
<br/>
on other terminal in the same location: <br/>
react-native run-android

Guy Zwerdling - testing projects:
-----------------------------------------
Albums - this app show some albums of Tylor Swift, in this app I am using JSON (using https) to collect the data about the albums and display them to the users. There is also a button to buy the album which is a link to amazon store.

Auth - this app is login section for users using firebase. I setup meny component for flexible using, I also const with style properties, if we setup the style for every TAG we need to write style={styles.styleName}, in my case my component was full in style const so I setup as follow:<br>
const { inputStyle, labelStyle, containerStyle } = styles;<br>
and on every TAG I specified only the style name<br>
style={containerStyle}<br>
![alt text](https://github.com/RumorsHackerSchool/ReactNativeApps/blob/master/img/ezgif-4-49d35d01c8.gif)
