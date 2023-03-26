import React from 'react'
import { SafeAreaView, ScrollView, View, Text, Pressable, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Welcome = () => {

    return (
        <SafeAreaView>
        <View >
            <Text>{'Welcome to Customer Manager Plus'}</Text>
        </View>

        <view>
            <TouchableOpacity>
                <Text>{'Contine...'}</Text>
            </TouchableOpacity>
        </view>

        <view>
            <TouchableOpacity>
                <Text>{'Clear storage...'}</Text>
            </TouchableOpacity>
        </view>
        </SafeAreaView>
    )
}

export default Welcome
