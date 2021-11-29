import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class WelcomePage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    WelcomePage
                </Text>
            </View>
        );
    }

    componentDidMount() {
        this.timer = setTimeout(()=>{
            // 跳转到首页
        }, 2000)
    }

    componentWillUnmount() {
        // 页面销毁，清空定时器
        this.timer && clearTimeout(this.timer)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
