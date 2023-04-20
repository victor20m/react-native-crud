import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    View,
} from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from '../navigation/AppNavigator';


type Props = NativeStackScreenProps<RootStackParamList>;

const HomeScreen = ({ navigation }: Props) => {
    const themeMode: string = ""
    const backgroundStyle = {
        backgroundColor: themeMode === "dark" ? Colors.darker : Colors.lighter,
        flex: 1
    };
    return (
        <SafeAreaView style={backgroundStyle}>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <StatusBar
                    barStyle={themeMode === "dark" ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                />
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={backgroundStyle}>
                    <View
                        style={{
                            backgroundColor: themeMode === "dark" ? Colors.black : Colors.white,
                        }}>
                    </View>
                </ScrollView>
            </Layout>
        </SafeAreaView>);
}

export default HomeScreen;