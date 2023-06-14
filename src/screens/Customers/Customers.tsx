import React, {useCallback, useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {
  List,
  ListItem,
  Icon,
  Button,
  IconElement,
  Card,
  Input,
} from '@ui-kitten/components';
import {DrawerParamList} from '../../navigation/AppNavigator';
import {styles} from './Customers.styles';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {customer_data} from './mockedData';
import PlusSignButton from '../../components/PlusSignButton/PlusSignButton';
import {debounce} from '../../utility/Utility';
type Props = DrawerScreenProps<DrawerParamList>;

interface IListItem {
  id: string;
  title: string;
  description: string;
}

export default ({navigation}: Props) => {
  const [newMenu, setNewMenu] = useState(false);
  const [customers, setCustomers] = useState(customer_data);
  const [searchCustomers, setSearchCustomers] = useState('');

  const renderItemAccessory = (): React.ReactElement => (
    <Button size="tiny">View</Button>
  );

  const renderItemIcon = (): IconElement => <Icon name="person" />;
  const renderItem = ({
    item,
    index,
  }: {
    item: IListItem;
    index: number;
  }): React.ReactElement => (
    <ListItem
      title={`${item.title}`}
      description={`${item.description}`}
      key={`${item.id}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
      style={styles.item}
    />
  );

  const debouncedSearchCustomers = useCallback(
    debounce(text => {
      setCustomers(
        customer_data.filter(
          cust => cust.title?.toLowerCase().indexOf(text.toLowerCase()) > -1,
        ),
      );
    }, 500),
    [customers],
  );

  const searchOrders = (text: string) => {
    setSearchCustomers(text);
    if (searchCustomers.length == 0) setCustomers(customer_data);
    debouncedSearchCustomers(text);
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Card>
          <View style={styles.topBar}>
            <Input
              style={styles.searchBar}
              placeholder="Search..."
              onChangeText={searchOrders}
            />
            <PlusSignButton onPress={() => setNewMenu(true)} />
          </View>
        </Card>
        <List
          style={styles.container}
          data={customers}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </>
  );
};
