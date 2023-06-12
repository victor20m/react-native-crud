import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  DrawerItem,
  Icon,
  IconProps,
  IconRegistry,
  Text,
} from '@ui-kitten/components';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerNavigationProp,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {RenderProp} from '@ui-kitten/components/devsupport';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HomeScreen from '../screens/Home/HomeScreen';
import CustomerScreen from '../screens/Customers/Customers';
import TransactionScreen from '../screens/Transactions/Transactions';
import LoginScreen from '../screens/Login/LoginScreen';

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

export type DrawerParamList = {
  Home: undefined;
  Transactions: undefined;
  Customers: undefined;
  Vendors: undefined;
  Settings: undefined;
  Login: undefined;
  'Log Out': undefined;
};

const MenuIcon: RenderProp<IconProps> = iconProps => (
  <Icon {...iconProps} fill="#0f92e4" />
);
const Drawer = createDrawerNavigator<DrawerParamList>();

export const CustomHeader = ({title}: {title: string}) => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  return (
    <View
      style={{
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        shadowOffset: {height: 3, width: 0},
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 5,
        shadowRadius: 3.84,
      }}>
      <TouchableOpacity
        style={{paddingRight: '1%'}}
        onPress={() => navigation.toggleDrawer()}>
        <Icon
          name="menu-outline"
          fill="#0f92e4"
          style={{width: 24, height: 24}}
        />
      </TouchableOpacity>
      <Text style={{fontSize: 20}}>{title}</Text>
    </View>
  );
};

const CustomDrawer = ({navigation}: DrawerContentComponentProps) => (
  <DrawerContentScrollView>
    <DrawerItem
      title="Home"
      onPress={() => navigation.navigate('Home')}
      accessoryLeft={<MenuIcon name="home-outline" />}
    />
    <DrawerItem
      title="Transactions"
      onPress={() => navigation.navigate('Transactions')}
      accessoryLeft={<MenuIcon name="shopping-bag-outline" />}
    />
    <DrawerItem
      title="Customers"
      onPress={() => navigation.navigate('Customers')}
      accessoryLeft={<MenuIcon name="people-outline" />}
    />
    <DrawerItem
      title="Custom Records"
      onPress={() => navigation.navigate('Home')}
      accessoryLeft={<MenuIcon name="file-text-outline" />}
    />
    <DrawerItem
      title="Vendors"
      onPress={() => navigation.navigate('Home')}
      accessoryLeft={<MenuIcon name="people-outline" />}
    />
    <DrawerItem
      title="Reports"
      onPress={() => navigation.navigate('Home')}
      accessoryLeft={<MenuIcon name="bar-chart-2-outline" />}
    />
    <DrawerItem
      title="Log Out"
      onPress={() => navigation.navigate('Login')}
      accessoryLeft={<MenuIcon name="log-out-outline" />}
    />
  </DrawerContentScrollView>
);
export const AppNavigator: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={CustomDrawer}
        screenOptions={{
          headerTitleAlign: 'center',
          drawerStyle: {
            paddingTop: 20,
          },
          headerStyle: {
            backgroundColor: '#1A6FD3',
            borderBottomWidth: 11,
            borderBottomColor: 'grey',
            shadowOffset: {height: 3, width: 0},
            shadowColor: 'black',
            shadowOpacity: 1,
            elevation: 5,
          },
          headerTitleStyle: {color: 'white'},
          headerTintColor: 'white',
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{header: () => <CustomHeader title="Home" />}}
        />
        <Drawer.Screen name="Transactions" component={TransactionScreen} options={{header: () => <CustomHeader title="Transactions" />}}/>
        <Drawer.Screen
          name="Customers"
          component={CustomerScreen}
          options={{header: () => <CustomHeader title="Customers" />}}
        />
        <Drawer.Screen name="Vendors" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={HomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} options={{header: () => <View/>}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
