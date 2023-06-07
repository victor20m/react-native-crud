import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {List, ListItem, Icon, Button, IconElement} from '@ui-kitten/components';
import {DrawerParamList} from '../../navigation/AppNavigator';
import {styles} from './Customers.styles';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {customer_data} from './mockedData';
type Props = DrawerScreenProps<DrawerParamList>;

interface IListItem {
  id: string;
  title: string;
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
      title={`${item.title}`}
      description={`${item.description}`}
      key={`${item.id}`}
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
          data={customer_data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </>
  );
};
