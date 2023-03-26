import React from 'react'
import { SafeAreaView, ScrollView, View, Text, Pressable, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Region = () => {



    return (
        <SafeAreaView>

            <view>
                <TouchableOpacity>
                    <Text>{'Create Customer'}</Text>
                </TouchableOpacity>
            </view>

            <View>
                <Text>{'List of regions'}</Text>
            </View>

            <View>
                <Text>{'Select a region:'}</Text>
            </View>

            <view>
                <TouchableOpacity>
                    <Text>{'South West'}</Text>
                </TouchableOpacity>
            </view>

            <view>
                <TouchableOpacity>
                    <Text>{'North West'}</Text>
                </TouchableOpacity>
            </view>

            <view>
                <TouchableOpacity>
                    <Text>{'South East'}</Text>
                </TouchableOpacity>
            </view>

            <view>
                <TouchableOpacity>
                    <Text>{'North East'}</Text>
                </TouchableOpacity>
            </view>

            <view>
                <TouchableOpacity>
                    <Text>{'Mid West'}</Text>
                </TouchableOpacity>
            </view>


        </SafeAreaView>
    )
}

export default Region
