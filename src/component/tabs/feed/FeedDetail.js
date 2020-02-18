import React from 'react';
import {View} from 'react-native';
import {Text} from 'native-base'
import {CustomHeader} from '../../CustomHeader'

export class FeedDetail extends React.Component {
    render() {
      return (
        <View style={{ flex: 1 }}>
          <CustomHeader title="Feed Detail"  navigation={this.props.navigation}/>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>FeedDetail screen!</Text>
          <Button light ></Button>
        </View>
        </View>
      );
    }
  }