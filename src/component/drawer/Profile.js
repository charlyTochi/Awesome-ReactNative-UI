import React, { Component }  from 'react';
import {View, Body, Button, Image, Text, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import { Card, CardItem, Container,Content, StyleProvider, Icon , Left, Right, Title, Subtitle, Center} from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import LottieView from 'lottie-react-native';
import { Animated, Easing } from 'react-native';
// import {CustomHeader} from '../CustomHeader'


export class Profile extends React.Component {
 
    render() {
      return (
            <StyleProvider style={getTheme(material)}>
        <Container style={{backgroundColor: '#ffffff'}}>
          <Content>
          <View style={styles.header}>
          <Left>
          {/* <Icon onPress={() => this.props.navigation.navigate('Meals')} name="arrow-back" style={{padding: 10, color: 'black', borderRadius: 100, width: 70, height: 70, marginRight: 270, marginTop: 10}}/> */}
            </Left>
             <View>
             <Subtitle style={{ marginRight: 250, padding: 10, marginTop: -200, fontSize: 20, color: 'black'}} >Name</Subtitle>
              <Text style={{padding: 15, marginTop: -18, fontSize: 30, color: 'blue'}}>Gracey</Text>
              <Image source={require('../../image/2.jpg')}  style={{marginTop: -100, marginLeft: 250, borderRadius: 100, width: 80, height: 80, marginRight: 30}}/>
              <Text style={{padding: 15, marginTop: -3, fontSize: 15, color: 'blue'}}>She is a recently popular photographer and has won numerous awards</Text>
               </View>
              </View>
              <Text style={{padding: 15, marginTop: -50, fontSize: 25, color: 'blue'}}>Video</Text>


              <ScrollView horizontal style={{ flexDirection: 'row' }}>
              <Card  style={styles.card}>
              <ImageBackground  style={{ borderRadius: 0, width:280, height: 160}}source={require('../../image/rose.jpg')}>
              <Icon  style={{ marginTop: 120, marginLeft: 20, color: '#ffffff'}} name="eye" size={80}/>
                <Text style={{ marginLeft: 50, fontSize: 10, marginTop: -20, color: 'blue'}}>6854</Text>
              </ImageBackground>
              </Card>
              
              <Card  style={styles.card}>
              <ImageBackground  style={{ borderRadius: 0, width:280, height: 160}}source={require('../../image/rock.jpg')}>
              <Icon  style={{ marginTop: 120, marginLeft: 20, color: '#ffffff'}} name="eye" size={80}/>
                <Text style={{ marginLeft: 50, fontSize: 10, marginTop: -20, color: 'blue'}}>3854</Text>
              </ImageBackground>
              </Card>

              <Card  style={styles.card}>
              <ImageBackground  style={{ borderRadius: 0, width:280, height: 160}}source={require('../../image/tree.jpg')}>
              <Icon  style={{ marginTop: 120, marginLeft: 20, color: '#ffffff'}} name="eye" size={80}/>
                <Text style={{ marginLeft: 50, fontSize: 10, marginTop: -20, color: 'blue'}}>1854</Text>
              </ImageBackground>
              </Card>

              <Card  style={styles.card}>
              <ImageBackground  style={{ borderRadius: 0, width:280, height: 160}}source={require('../../image/stone.jpg')}>
              <Icon  style={{ marginTop: 120, marginLeft: 20, color: '#ffffff'}} name="eye" size={80}/>
                <Text style={{ marginLeft: 50, fontSize: 10, marginTop: -20, color: 'blue'}}>854</Text>
              </ImageBackground>
              </Card>
                </ScrollView>
                <Text style={{padding: 15, marginTop: 1, fontSize: 25, color: 'blue'}}>Ranking List</Text>

                <Card style={styles.cardss}>
                <CardItem style={{marginTop: 1}}>
                      <Left>
                      <Image source={require('../../image/3.jpg')}  style={{borderRadius: 100, width: 70, height: 70, marginRight: 30}}/>
                        <View style={{ alignItems: 'flex-start'}} >
                          <Title  style={{color: 'black'}} >Vikes Tan</Title>
                          <Subtitle  style={{color: 'black'}} >2019-12-30</Subtitle>
                        </View>
                      </Left>

                      <Right>
                      <View style={{ marginRight: 3}} >
                      <Icon name="contract" style={{ color: 'black' }}/>          
                        </View>
                      </Right>
                    </CardItem>
                     </Card>


                     <Card style={styles.cardss}>
                <CardItem style={{marginTop: 1}}>
                      <Left>
                      <Image source={require('../../image/4.jpg')}  style={{borderRadius: 100, width: 70, height: 70, marginRight: 30}}/>
                        <View style={{ alignItems: 'flex-start'}} >
                          <Title  style={{color: 'black'}} >Army Dress</Title>
                          <Subtitle  style={{color: 'black'}} >$26</Subtitle>
                        </View>
                      </Left>
                      <Right>
                      <View style={{ marginRight: 3}} >
                      <Icon name="contract" style={{ color: 'black' }}/>          
                        </View>
                      </Right>
                    </CardItem>
                     </Card>


                     <Card style={styles.cardss}>
                <CardItem style={{marginTop: 1}}>
                      <Left>
                      <Image source={require('../../image/5.jpg')}  style={{borderRadius: 100, width: 70, height: 70, marginRight: 30}}/>
                        <View style={{ alignItems: 'flex-start'}} >
                          <Title  style={{color: 'black'}} >Victor</Title>
                          <Subtitle  style={{color: 'black'}} >2019-12-30</Subtitle>
                        </View>
                      </Left>
                      <Right>
                      <View style={{ marginRight: 3}} >
                      <Icon name="contract" style={{ color: 'black' }}/>          
                        </View>
                      </Right>
                    </CardItem>
                     </Card>

          </Content>
        </Container>
      </StyleProvider>

      );
    }
  }



  
const styles = StyleSheet.create({

  backgroundIm:  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},

    header: {
        width: '100%',
        height: 230,
        backgroundColor: '#ffffff',
        justifyContent: 'center'
    },
    card: {
      height: 150,
      width:240,
      marginTop: 5,
      shadowRadius: 6,
      shadowOpacity: 0.26,
      marginLeft: 20,
       marginRight: 20,
      // backgroundColor: '#7acdee',
      // padding:10,
      borderRadius: 40
  },
  
  cardss: {
    height: 110,
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
  });