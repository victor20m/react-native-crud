import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {Layout} from '@ui-kitten/components';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { DrawerNavigationEventMap, DrawerScreenProps } from '@react-navigation/drawer';
import {DrawerParamList} from '../../navigation/AppNavigator';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {Tile} from '../../components/Tile/Tile';
import {Card, Text} from '@ui-kitten/components';
import {styles} from './HomeScreen.styles';
type Props = DrawerScreenProps<DrawerParamList>;

const HomeScreen = ({navigation}: Props) => {
  const themeMode: string = '';
  const backgroundStyle = {
    backgroundColor: themeMode === 'dark' ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  const iconColor = themeMode === 'dark' ? '#000000' : '#2A93D5';
  return (
    <SafeAreaView style={backgroundStyle}>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <StatusBar
          barStyle={themeMode === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />

        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Card style={styles.card}>
            <Text style={{fontSize: 20}}>
              Hello, <Text style={styles.userWelcome}>John Doe</Text>
            </Text>
            <Text>Welcome back!</Text>
          </Card>

          <Layout style={styles.layout} level="4">
            <Tile
              icon={
                <FontAwesomeIcon
                  icon={solid('handshake')}
                  size={60}
                  style={styles.icon}
                />
              }
              title="Transactions"
              onPress={() => navigation.navigate('Home')}
            />
            <Tile
              icon={
                <FontAwesomeIcon
                  icon={solid('users')}
                  size={60}
                  style={styles.icon}
                />
              }
              title="Customers"
              onPress={() => navigation.navigate('Customers')}
            />
            <Tile
              icon={
                <FontAwesomeIcon
                  icon={solid('users-line')}
                  size={60}
                  style={styles.icon}
                />
              }
              title="Vendors"
              onPress={() => navigation.navigate('Home')}
            />
            <Tile
              icon={
                <FontAwesomeIcon
                  icon={solid('file-pen')}
                  size={60}
                  style={styles.icon}
                />
              }
              title="Records"
              onPress={() => navigation.navigate('Home')}
            />
            <Tile
              icon={
                <FontAwesomeIcon
                  icon={solid('chart-line')}
                  size={60}
                  style={styles.icon}
                />
              }
              title="Reports"
              onPress={() => navigation.navigate('Home')}
            />
            <Tile
              icon={
                <FontAwesomeIcon
                  icon={solid('gear')}
                  size={60}
                  style={styles.icon}
                />
              }
              title="Settings"
              onPress={() => navigation.navigate('Home')}
            />
          </Layout>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};

export default HomeScreen;
