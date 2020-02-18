import React, { Component }  from 'react';
import {View, CardItem, Body, Button, Image, Text, StyleSheet, ScrollView} from 'react-native';
import { Card, Container,Content, StyleProvider, Icon } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import LottieView from 'lottie-react-native';
import { Animated, Easing } from 'react-native';
import {CustomHeader} from '../CustomHeader'


export class Flight extends React.Component {
    render() {
      return (
        <StyleProvider style={getTheme(material)}>
        <Container style={{backgroundColor: '#e3e3e3'}}>
          <Content>
              <View style={styles.header}>
                <Card style={styles.card}>
                <Icon onPress={() => this.props.navigation.navigate('Meals')}  name="arrow-round-back" style={{ marginTop: 40, padding: 10,   color: 'white' }}/>
                <Text style={{ marginLeft: 60, marginTop: -35,  color: 'white'}}>Rome, Italy</Text>
                <Text style={{ fontSize: 10, marginLeft: 60, marginTop: -1,  color: 'white'}}>Fri 20 Sep</Text>
                <LottieView source={require('../../../assets/lottie/airplane.json')}  style={{ marginRight: -5,marginTop: -60}} />
                 <Text style={{marginRight: 30, textAlign: 'right', marginTop: -30,  color: 'white'}}>Florence, Italy</Text> 
                 <Icon name="bus" style={{ marginTop: 50, marginLeft: 40, color: 'white' }}/>
                 <Icon name="business" style={{ marginTop: -30, marginLeft: 100, color: 'white' }}/>
                 <Icon name="train" style={{ marginTop: -30, marginLeft: 160, color: 'white' }}/>
                 <Icon name="airplane" style={{ marginTop: -30, marginLeft: 220, color: 'white' }}/>
                 <Icon name="logo-model-s" style={{ marginTop: -30, marginLeft: 280, color: 'white' }}/>
                 <Text style={{ marginLeft: 30, marginTop: 30, color: 'white'}}>Sorted by</Text>
                 <Text style={{ marginLeft: 30, marginTop: -5, fontSize: 20, color: 'white'}}>Cheapest</Text>
                 <Icon name="arrow-dropdown" style={{ marginTop: -25, marginLeft: 120, color: 'white' }}/>
                 <Icon name="options" style={{ textAlign: 'right', marginTop: -70, padding: 40,  fontSize: 20, color: 'white' }}/>
                </Card>
                </View>
                <Card style={styles.caard}>
                    <Text style={{ marginRight: 10, marginTop: -10}}>Cheapest & Fastest</Text>
                    <Text style={{ marginLeft: 230, marginTop: -20, fontSize: 20,}}>$122</Text>       
                     <Text style={{ marginRight: 10, marginTop: -2, fontSize: 19,}}>18:30 ------- Oh 35m ------- 19:25</Text>
                     <Text style={{ marginRight: 10, marginTop: 6, fontSize: 10,}}>Rome Leornado da Vinci</Text>
                     <Text style={{ marginRight: 10, marginTop: 2, fontSize: 10,}}>Flumicinho Airport(FCO)</Text>
                     <Text style={{ textAlign: 'right', marginRight: 10, marginTop: -30, fontSize: 10,}}>Florence Peratala</Text>
                     <Text style={{ textAlign: 'right', marginRight: 10, marginTop: 2, fontSize: 10,}}>Airport(FLR)</Text>
                  </Card>

                  <Card style={styles.caard1}>
                    <Text style={{ marginRight: 10, marginTop: -10}}>Cheapest & Fastest</Text>
                    <Text style={{ marginLeft: 230, marginTop: -20, fontSize: 20,}}>$122</Text>       
                     <Text style={{ marginRight: 10, marginTop: -2, fontSize: 19,}}>12:30 ------- 1h 42m ------- 18:29</Text>
                     <Text style={{ marginRight: 10, marginTop: 6, fontSize: 10,}}>Beijing Capital International</Text>
                     <Text style={{ marginRight: 10, marginTop: 2, fontSize: 10,}}>Airport</Text>
                     <Text style={{ textAlign: 'right', marginRight: 10, marginTop: -30, fontSize: 10,}}>Al Ghaidah</Text>
                     <Text style={{ textAlign: 'right', marginRight: 10, marginTop: 2, fontSize: 10,}}>International</Text>
                  </Card>

                  <Card style={styles.caard1}>
                    <Text style={{ marginRight: 10, marginTop: -10}}>Cheapest & Fastest</Text>
                    <Text style={{ marginLeft: 230, marginTop: -20, fontSize: 20,}}>$122</Text>       
                     <Text style={{ marginRight: 10, marginTop: -2, fontSize: 19,}}>07:10 ------- 3h 12m ------- 10:33</Text>
                     <Text style={{ marginRight: 10, marginTop: 6, fontSize: 10,}}>Dubai International</Text>
                     <Text style={{ marginRight: 10, marginTop: 2, fontSize: 10,}}>Airport</Text>
                     <Text style={{ textAlign: 'right', marginRight: 10, marginTop: -30, fontSize: 10,}}>Hortsfield Atlanta</Text>
                     <Text style={{ textAlign: 'right', marginRight: 10, marginTop: 2, fontSize: 10,}}>International</Text>
                  </Card>


                  <Card style={styles.caard1}>
                    <Text style={{ marginRight: 10, marginTop: -10}}>Cheapest & Fastest</Text>
                    <Text style={{ marginLeft: 230, marginTop: -20, fontSize: 20,}}>$122</Text>       
                     <Text style={{ marginRight: 10, marginTop: -2, fontSize: 19,}}>18:30 ------- Oh 35m ------- 19:25</Text>
                     <Text style={{ marginRight: 10, marginTop: 6, fontSize: 10,}}>Rome Leornado da Vinci</Text>
                     <Text style={{ marginRight: 10, marginTop: 2, fontSize: 10,}}>Flumicinho Airport(FCO)</Text>
                     <Text style={{ textAlign: 'right', marginRight: 10, marginTop: -30, fontSize: 10,}}>Florence Peratala</Text>
                     <Text style={{ textAlign: 'right', marginRight: 10, marginTop: 2, fontSize: 10,}}>Airport(FLR)</Text>
                  </Card>
       </Content>
        </Container>
      </StyleProvider>

      );
    }
  }



  
const styles = StyleSheet.create({
 
    card: {
        height: 290,
        borderColor: "#4b5eb2",
        backgroundColor: '#4b5eb2',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
       
    },

    header: {
        width: '100%',
        height: 200,
        backgroundColor: '#4b5eb2',
        justifyContent: 'center'
    },
    caard: {
        height: 110,
        marginTop: -3,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 10,
        marginLeft: 20,
         marginRight: 20,
        backgroundColor: 'white',
        padding:20,
        borderRadius: 10
    },

    caard1: {
        height: 110,
        marginTop: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 10,
        marginLeft: 20,
         marginRight: 20,
        backgroundColor: 'white',
        padding:20,
        borderRadius: 10
    },
  

    card02: {
        height: 130,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 10,
        marginLeft: 20,
         marginRight: 20,
        backgroundColor: 'white',
        padding:20,
        borderRadius: 10
    },
    card2: {
      height: 100,
      shadowRadius: 6,
      shadowOpacity: 0.26,
      elevation: 10,
      marginLeft: 20,
      flexDirection: 'row',
       marginRight: 20,
      backgroundColor: 'white',
      alignItems:'center',
      justifyContent: 'center',
      flex: 1, flexDirection: "row" ,
      borderRadius: 10
  },
  
  
  
  
    screen: {
      flex: 1
    }
  
  });