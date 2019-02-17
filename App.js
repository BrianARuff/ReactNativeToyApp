import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Alert,
    ScrollView,
    FlatList
} from "react-native";
import ImageOfBrian from "./ImageOfBrian";

export default class HelloWorld extends React.Component {
    state = {
        switch: true,
        text: ""
    };
    render() {
        const text = "Brian Ruff";
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 40
                }}
            >
                <ScrollView>
                    <Text style={{ color: "red" }}>
                        {this.state.switch ? "Hello World!" : text}
                    </Text>
                    <Button
                        color="green"
                        title="click me"
                        onPress={() =>
                            this.setState(
                                { switch: !this.state.switch },
                                () => {
                                    Alert.alert("You pressed the button!");
                                }
                            )
                        }
                        style={{ borderRadius: "3px" }}
                    >
                        Click Me!
                    </Button>
                    <ScrollView>
                        <ImageOfBrian text={text} />
                        <ImageOfBrian text={text} />
                        <ImageOfBrian text={text} />
                        <ImageOfBrian text={text} />
                        <ImageOfBrian text={text} />
                        <ImageOfBrian text={text} />
                        <ImageOfBrian text={text} />
                        <ImageOfBrian text={text} />
                        <ImageOfBrian text={text} />
                        <ImageOfBrian text={text} />
                        <ImageOfBrian text={text} />
                        <ImageOfBrian text={text} />
                    </ScrollView>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter text here..."
                        onChangeText={text => this.setState({ text })}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    textInput: {
        height: 40
    }
});
