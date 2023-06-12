import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Input, Text, Card, Button} from '@ui-kitten/components';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {DrawerParamList} from '../../navigation/AppNavigator';
import {styles} from './Login.styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {regular} from '@fortawesome/fontawesome-svg-core/import.macro';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Link} from '@react-navigation/native';
type Props = DrawerScreenProps<DrawerParamList>;

const LoginScreen = ({navigation}: Props) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const eyeIcon = (): React.ReactElement => (
    <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
      <FontAwesomeIcon
        style={styles.eyeIcon}
        icon={secureTextEntry ? regular('eye') : regular('eye-slash')}
      />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.title}>
          <Text category="h1">Welcome!</Text>
          <Text category="s1">Login to continue</Text>
        </View>
        <Input style={styles.input} placeholder="Username" />
        <Input
          style={styles.input}
          placeholder="Password"
          accessoryRight={eyeIcon}
          secureTextEntry={secureTextEntry}
        />
        <Link to={'/Home'}>Forgot password?</Link>
        <Button
          style={styles.loginButton}
          onPress={() => navigation.navigate('Home')}>
          Login
        </Button>
        <Button appearance="outline" style={styles.registerButton}>
          Register
        </Button>
      </Card>
    </SafeAreaView>
  );
};

export default LoginScreen;
