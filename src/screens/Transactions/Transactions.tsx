import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {
  List,
  ListItem,
  Icon,
  Button,
  IconElement,
  Card,
  Input,
  OverflowMenu,
  MenuItem,
} from '@ui-kitten/components';
import {DrawerParamList} from '../../navigation/AppNavigator';
import {styles} from './Transactions.styles';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {transaction_data} from './mockedData';
import {debounce} from '../../utility/Utility';
import PlusSignButton from '../../components/PlusSignButton/PlusSignButton';
type Props = DrawerScreenProps<DrawerParamList>;

interface IListItem {
  orderId: string;
  orderType: string;
  description: string;
}

export default ({navigation}: Props) => {
  const [newMenu, setNewMenu] = useState(false);
  const [transactions, setTransactions] = useState(transaction_data);
  const [searchedTransactions, setSearchedTransactions] = useState('');
  const renderItemAccessory = (): React.ReactElement => (
    <Button size="tiny">View</Button>
  );

  useEffect(() => {
    clearTimeout(500);
  }, [transactions]);
  const renderItemIcon = (): IconElement => <Icon name="person" />;
  const renderItem = ({
    item,
    index,
  }: {
    item: IListItem;
    index: number;
  }): React.ReactElement => (
    <ListItem
      title={`${item.orderId}`}
      description={`${item.description}`}
      key={`${index}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
      style={styles.item}
    />
  );
  const debouncedSearchOrders = useCallback(
    debounce(text => {
      setTransactions(
        transaction_data.filter(
          tran => tran.orderId?.toLowerCase().indexOf(text.toLowerCase()) > -1,
        ),
      );
    }, 500),
    [transactions],
  );

  const searchOrders = (text: string) => {
    setSearchedTransactions(text);
    if (searchedTransactions.length == 0) setTransactions(transaction_data);
    debouncedSearchOrders(text);
  };

  const toggleMenu = (): React.ReactElement => (
    <PlusSignButton onPress={() => setNewMenu(true)} />
  );

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
            <OverflowMenu
              anchor={toggleMenu}
              visible={newMenu}
              onBackdropPress={() => setNewMenu(false)}>
              <MenuItem title="Sales Order" />
              <MenuItem title="Purchase Order" />
              <MenuItem title="Transfer Order" />
            </OverflowMenu>
          </View>
        </Card>
        <List
          style={styles.container}
          data={transactions}
          renderItem={renderItem}
          keyExtractor={item => item.orderId}
        />
      </SafeAreaView>
    </>
  );
};
