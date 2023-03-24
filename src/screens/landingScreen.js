import { StyleSheet, Text, View} from 'react-native';



const LandingScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
            <Text>Landing Screen</Text>

            <TouchableOpacity onPress={doTheThing}>
                <Text>This is a button!</Text>
            </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

export default LandingScreen;
