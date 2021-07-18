import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {
  state = {
    flipResult: 'head',
  };
  FlipACoin() {
    const random = Math.floor(Math.random() * 2) + 1;
    if (random == 1) {
      this.setState({
        flipResult: 'head',
      });
    } else {
      this.setState({
        flipResult: 'tail',
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 50,
          }}>
          FLIP A COIN
        </Text>
        {this.state.flipResult == 'head' ? (
          <>
            <Text>Its a Head.</Text>
            <Image
              style={styles.img}
              source={require('./assets/head.PNG')}></Image>
          </>
        ) : (
          <>
            <Text>Its a Tail.</Text>
            <Image
              style={styles.img}
              source={require('./assets/tail.PNG')}></Image>
          </>
        )}

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.FlipACoin();
          }}>
          <Text> Press to Flip </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  btn: {
    backgroundColor: 'yellow',
    padding: 20,
    margin: 5,
    borderRadius: 5,
  },
  img: {
    height: 150,
    width: 150,
  },
});
