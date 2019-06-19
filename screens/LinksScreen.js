import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import * as Permissions from "expo-permissions";
import MyCamera from "../components/MyCamera";

export default class LinksScreen extends React.Component {
  state = {
    showCamera: false
  };

  _showCamera = async () => {
    const cameraPer = await Permissions.askAsync(Permissions.CAMERA);
    console.log(cameraPer);
    const hasCameraPermission = cameraPer.status === "granted";

    if (hasCameraPermission) {
      this.setState({ showCamera: true });
    }
  };

  render() {
    const { showCamera } = this.state;
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          width: "100%"
        }}
      >
        {showCamera ? (
          <MyCamera />
        ) : (
          <TouchableOpacity onPress={this._showCamera}>
            <Text> Show Camera </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
