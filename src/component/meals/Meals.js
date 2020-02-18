import React, { Component }  from 'react';
import {View, CardItem, Body, Button, Image, Text, StyleSheet, ScrollView} from 'react-native';
import { Card, Container,Content, StyleProvider, Icon } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import LottieView from 'lottie-react-native';
import { Animated, Easing } from 'react-native';
import {CustomHeader} from '../CustomHeader'


export class Meals extends React.Component {
    render() {
      return (
        <StyleProvider style={getTheme(material)}>
        <Container style={{backgroundColor: '#e3e3e3'}}>
          <Content>
            <View>
         <CustomHeader  isHome={true}  navigation={this.props.navigation}/>
            {/* <Icon name="reorder" style={{ marginTop: -20, padding: 30,  fontSize: 35, color: 'black' }}/> */}
            </View>
            <View>
            <Text style={{ padding: 30, marginTop: -10,fontSize: 20,  color: 'green'}}>MEAL OPTIONS</Text>
            <Icon name="options" style={{ textAlign: 'right', marginTop: -80, padding: 30,  fontSize: 20, color: 'black' }}/>
            </View>
               <Card style={styles.card}>
               <Image source={require('../../image/pizza.jpg')} resizeMode="contain" style={{borderRadius: 90, marginTop: -10,borderRadius: 20,width: 78, height: 130}}/>
                <Text style={{ marginLeft: 100, marginTop: -115,fontSize: 15,  color: 'black'}}>Pizza</Text>
                <Text style={{ marginLeft: 100, fontSize: 10, marginTop: 10, color: 'blue'}}>Browse the recommended meal that you are craving to imrove</Text>
                <LottieView source={require('../../../assets/lottie/like.json')} autoPlay Loop  style={{ marginLeft: 90,marginTop: 42}} />
                <LottieView source={require('../../../assets/lottie/love.json')} autoPlay Loop  style={{ marginLeft: 130,marginTop:30}} />
                <LottieView source={require('../../../assets/lottie/role.json')} autoPlay Loop  style={{ marginLeft: 130,marginTop:-40}} />
                </Card>

                <Card style={styles.card}>
               <Image source={require('../../image/burger.jpg')} resizeMode="contain" style={{borderRadius: 50, marginTop: -10,borderRadius: 20,width: 78, height: 130}}/>
                <Text style={{ marginLeft: 100, marginTop: -115,fontSize: 15,  color: 'black'}}>Burger</Text>
                <Text style={{ marginLeft: 100, fontSize: 10, marginTop: 10, color: 'blue'}}>Browse the recommended meal that you are craving to imrove</Text>
                <LottieView source={require('../../../assets/lottie/like.json')}   style={{ marginLeft: 90,marginTop: 42}} />
                <LottieView source={require('../../../assets/lottie/love.json')}   style={{ marginLeft: 130,marginTop:30}} />
                <LottieView source={require('../../../assets/lottie/dot.json')}   style={{ marginLeft: 130,marginTop:-40}} />
                </Card>

                <Card style={styles.card}>
               <Image source={require('../../image/rice.jpg')} resizeMode="contain" style={{borderRadius: 90, marginTop: -10,borderRadius: 20,width: 78, height: 130}}/>
                <Text style={{ marginLeft: 100, marginTop: -115,fontSize: 15,  color: 'black'}}>Rice</Text>
                <Text style={{ marginLeft: 100, fontSize: 10, marginTop: 10, color: 'blue'}}>Browse the recommended meal that you are craving to imrove</Text>
                <LottieView source={require('../../../assets/lottie/like.json')}   style={{ marginLeft: 90,marginTop: 42}} />
                <LottieView source={require('../../../assets/lottie/love.json')}   style={{ marginLeft: 130,marginTop:30}} />
                <LottieView source={require('../../../assets/lottie/dot.json')}   style={{ marginLeft: 130,marginTop:-40}} />
                </Card>

                <Card style={styles.card}>
               <Image source={require('../../image/egg.jpg')} resizeMode="contain" style={{borderRadius: 90, marginTop: -10,borderRadius: 20,width: 78, height: 130}}/>
                <Text style={{ marginLeft: 100, marginTop: -115,fontSize: 15,  color: 'black'}}>Egg</Text>
                <Text style={{ marginLeft: 100, fontSize: 10, marginTop: 10, color: 'blue'}}>Browse the recommended meal that you are craving to imrove</Text>
                <LottieView source={require('../../../assets/lottie/like.json')}   style={{ marginLeft: 90,marginTop: 42}} />
                <LottieView source={require('../../../assets/lottie/love.json')}   style={{ marginLeft: 130,marginTop:30}} />
                <LottieView source={require('../../../assets/lottie/dot.json')}   style={{ marginLeft: 130,marginTop:-40}} />
                </Card>
       </Content>
        </Container>
      </StyleProvider>

      );
    }
  }



  
const styles = StyleSheet.create({
 
    card: {
        height: 130,
        marginTop: 5,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 10,
        marginLeft: 20,
         marginRight: 20,
        backgroundColor: 'white',
        padding:10,
        borderRadius: 10
    },
    header: {
        width: '100%',
        height: 100,
        backgroundColor: '#4a46ff',
        justifyContent: 'center'
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
  
  
  
    header: {
      width: '100%',
      height: 150,
      paddingTop: 36,
      backgroundColor: '#ffa500',
      justifyContent: 'center'
  },
  
    screen: {
      flex: 1
    }
  
  });