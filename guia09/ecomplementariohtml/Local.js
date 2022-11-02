import React from 'react';
import { WebView } from 'react-native-webview'
import { View, Text } from 'react-native';
export default function Local() {
    const LOCAL = 'http://192.168.1.10:5500/guia09/html/index.html'
    const GOOGLE = 'https://www.youtube.com/c/annemariechase'
    return (
        <View>
            <View style={{ width: '100%', height: '100%' }}>
                <WebView
                    source={{ uri: LOCAL }}
                />
            </View>
        </View>
    )
}