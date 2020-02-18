import React from 'react';
import {View} from 'react-native';
import {Text} from 'native-base'
import {CustomHeader} from '../CustomHeader'



export class Register extends React.Component {
    render() {
      return (
        <View style={{ flex: 1 }}>
          <CustomHeader title="Register"  navigation={this.props.navigation}/>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Register screen!</Text>
        </View>
        </View>
      );
    }
  }
  