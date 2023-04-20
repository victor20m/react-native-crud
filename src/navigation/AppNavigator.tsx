import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { DrawerItem, Icon, IconProps, IconRegistry, MenuItemProps, Text } from '@ui-kitten/components';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { RenderProp } from '@ui-kitten/components/devsupport';
import { View, TouchableOpacity } from 'react-native';
const { Navigator, Screen } = createNativeStackNavigator();
import { useNavigation } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

const HomeNavigator = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name='Home' component={HomeScreen} />
  </Navigator>
);

export type DrawerParamList = {
  Home: undefined;
  Orders: undefined;
  Customers: undefined;
  Vendors: undefined;
  Settings: undefined;
  "Log Out": undefined;
};
const HomeIcon: RenderProp<IconProps> = (iconProps) => <Icon {...iconProps} name="home-outline" />;
const OrdersIcon: RenderProp<IconProps> = (iconProps) => <Icon {...iconProps} name="shopping-bag-outline" />;
const CustomersIcon: RenderProp<IconProps> = (iconProps) => <Icon {...iconProps} name="people-outline" />;
const LogOutIcon: RenderProp<IconProps> = (iconProps) => <Icon {...iconProps} name="log-out-outline" />;
const Drawer = createDrawerNavigator<DrawerParamList>();

export const CustomHeader = ({ title }: { title: string }) => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  return <View
    style={{
      height: 60,
      backgroundColor: '#161616',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      shadowOffset: { height: 3, width: 0 },
      shadowColor: 'black',
      shadowOpacity: 1,
      elevation: 5,
      shadowRadius: 3.84,
    }}>
    <TouchableOpacity 
      style={{paddingRight: "33%"}}
      onPress={() => navigation.toggleDrawer()}>
      <Icon name="menu-outline" fill="white" style={{ width: 24, height: 24 }} />
    </TouchableOpacity>
    <Text style={{ color: 'white', fontSize: 20 }}>{title}</Text>
  </View>
};

const CustomDrawer = ({ navigation }: DrawerContentComponentProps) => (<DrawerContentScrollView>
  <DrawerItem
    title="Home"
    onPress={() => navigation.navigate('Home')}
    accessoryLeft={HomeIcon}
  />
  <DrawerItem
    title="Orders"
    onPress={() => navigation.navigate('Home')}
    accessoryLeft={OrdersIcon}
  />
  <DrawerItem
    title="Customers"
    onPress={() => navigation.navigate('Home')}
    accessoryLeft={CustomersIcon}
  />
  <DrawerItem
    title="Log Out"
    onPress={() => navigation.navigate('Home')}
    accessoryLeft={LogOutIcon}
  />
</DrawerContentScrollView>)
export const AppNavigator: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={CustomDrawer}
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#1A6FD3",
            borderBottomWidth: 11,
            borderBottomColor: "grey",
            shadowOffset: { height: 3, width: 0 },
            shadowColor: 'black',
            shadowOpacity: 1,
            elevation: 5,
          },
          headerTitleStyle: { color: "white" },
          headerTintColor: "white"
        }}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{ header: () => <CustomHeader title="Home" /> }} />
        <Drawer.Screen name="Orders" component={HomeScreen} />
        <Drawer.Screen name="Customers" component={HomeScreen} />
        <Drawer.Screen name="Vendors" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={HomeScreen} />
        <Drawer.Screen name="Log Out" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
