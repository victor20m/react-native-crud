import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {List, ListItem, Icon, Button, IconElement} from '@ui-kitten/components';
import {DrawerParamList} from '../../navigation/AppNavigator';
import {styles} from './Transactions.styles';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {transaction_data} from './mockedData';
type Props = DrawerScreenProps<DrawerParamList>;

interface IListItem {
  orderId: string;
  orderType: string;
  description: string;
}

export default ({navigation}: Props) => {
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
      title={`${item.orderId}`}
      description={`${item.description}`}
      key={`${index}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
      style={styles.item}
    />
  );
  return (
    <>
      <SafeAreaView style={styles.container}>
        <List
          style={styles.container}
          data={transaction_data}
          renderItem={renderItem}
          keyExtractor={item => item.orderId}
        />
      </SafeAreaView>
    </>
  );
};
