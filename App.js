import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { GoogleSignin, GoogleSigninButton } from "react-native-google-signin";

export default class App extends Component {
  _signIn = async () => {
    GoogleSignin.configure();

    const status = await GoogleSignin.signIn();
    if (status) {
      alert(`login sucessful !`);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <GoogleSigninButton
          style={{ width: 48, height: 48 }}
          size={GoogleSigninButton.Size.Icon}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._signIn}
          // disabled={this.state.isSigninInProgress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
