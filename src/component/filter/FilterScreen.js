import React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import { Card, Container,Content, StyleProvider, Icon } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import LottieView from 'lottie-react-native';
import {CustomHeader} from '../CustomHeader'

export class FilterScreen extends React.Component {
render(){
    return(
       


<StyleProvider style={getTheme(material)}>
<Container style={{backgroundColor: '#e3e3e3'}}>
  <Content>
 <CustomHeader  isHome={true}  navigation={this.props.navigation}/>
 <View style={styles.screen}> 
            <Text>The Filters Screen>!</Text>
            <Text style={styles.title}>Available Filters/ Restrictions</Text>
       <View style={styles.filterContainer}>
           <Text> Gluten-free</Text>
           <Switch />
       </View>
        </View></Content>
</Container>
</StyleProvider>
    );
}
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});


