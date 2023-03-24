import React from 'react'
import { SafeAreaView, ScrollView, View, Text, Pressable, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import stylesFn from './style'


const Region = () => {

    const styles = stylesFn()

    return (
        <SafeAreaView>

            <view>
                <TouchableOpacity>
                    <Text>{'Create Customer'}</Text>
                </TouchableOpacity>
            </view>

            <View style={styles.container}>
                <Text>{'List of regions'}</Text>
            </View>

            <View style={styles.container}>
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
