import React from 'react';
import {Button} from '@ui-kitten/components';
import {styles} from './PlusSignButton.styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
type Props = {
  onPress: () => void;
  onLayout: ()=> void;
};

const PlusSignButton = React.forwardRef<any, any>((props, ref) => {
    return (
      <Button {...props} ref={ref} style={styles.plusButton}>
        <FontAwesomeIcon icon={faPlus} color="#0f92e4" size={30} />
      </Button>
    );
  });
  
  export default PlusSignButton;
