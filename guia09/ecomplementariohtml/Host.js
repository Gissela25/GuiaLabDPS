import React from 'react';
import { WebView } from 'react-native-webview'
import { View, Text } from 'react-native';
export default function Host() {
    const JOGI = 'https://jogiwisuby.github.io/'
    return (
        <View>
             <View style={{ width: '100%', height: '100%' }}>
                <WebView
                    source={{ uri: JOGI }}
                />
            </View>
        </View>
    )}