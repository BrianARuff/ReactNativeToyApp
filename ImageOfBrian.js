import React from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";

export default class ImageOfBrian extends React.Component {
    state = {
        switch: true
    };

    render() {
        const pic = {
            uri: "https://avatars1.githubusercontent.com/u/31252964?s=460&v=4"
        };

        setInterval(() => {
            this.setState({ switch: !this.state.switch });
        }, 3000);

        return (
            <View>
                <ImageBackground
                    source={pic}
                    style={{ width: 300, height: 300 }}
                >
                    <Text style={styles.textStyles}>{this.state.switch ? this.props.text : null}</Text>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyles: {
        position: "absolute",
        top: "50%",
        left: "50%",
        color: "#fff",
        fontWeight: "bold"
    }
});
