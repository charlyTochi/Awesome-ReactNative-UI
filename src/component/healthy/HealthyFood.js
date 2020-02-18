import React, { Component }  from 'react';
import {View, Body, Button, Image, Text, StyleSheet, ScrollView} from 'react-native';
import { Card, CardItem, Container,Content, StyleProvider, Icon , Left, Right, Title, Subtitle, Center} from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import LottieView from 'lottie-react-native';
import { Animated, Easing } from 'react-native';
import {CustomHeader} from '../CustomHeader'


export class HealthyFood extends React.Component {
    render() {
      return (
            <StyleProvider style={getTheme(material)}>
        <Container style={{backgroundColor: '#e3e3e3'}}>
          <Content>
          <View style={styles.header}>
          <Right>
          <Icon onPress={() => this.props.navigation.navigate('Meals')} name="arrow-round-back"  style={{color: 'white', borderRadius: 100, width: 70, height: 70, marginRight: 270, marginTop: 10}}/>
                        <View >
                        <Icon name="options"  style={{color: 'white', marginTop: -70, marginRight: 70,}} />
                        <Icon name="apps"  style={{color: 'white', marginTop: -30, marginLeft: 70,}} />
                        </View>
                      </Right>
                      <View>
                      <Text style={{padding: 10, marginTop: -160, fontSize: 30, color: 'white'}}>Healthy Food</Text>
                      </View>
                  </View>

                <Card style={styles.card}>
                    <CardItem style={{marginTop: 11}}>
                      <Left>
                      <Image source={require('../../image/salmon.jpg')}  style={{borderRadius: 100, width: 70, height: 70, marginRight: 30}}/>
                        <View style={{ alignItems: 'flex-start'}} >
                          <Title  style={{color: 'black'}} >Salmon Bowl</Title>
                          <Subtitle  style={{color: 'black'}} >$22</Subtitle>
                        </View>
                      </Left>
                      <Right>
                      <View style={{ marginRight: 3}} >
                      <Icon name="add" style={{ color: 'black' }}/>          
                        </View>
                      </Right>
                    </CardItem>

                    <CardItem style={{marginTop: 11}}>
                      <Left>
                      <Image source={require('../../image/spring.jpg')}  style={{borderRadius: 100, width: 70, height: 70, marginRight: 30}}/>
                        <View style={{ alignItems: 'flex-start'}} >
                          <Title  style={{color: 'black'}} >Spring Bowl</Title>
                          <Subtitle  style={{color: 'black'}} >$24</Subtitle>
                        </View>
                      </Left>

                      <Right>
                      <View style={{ marginRight: 3}} >
                      <Icon name="add" style={{ color: 'black' }}/>          
                        </View>
                      </Right>
                    </CardItem>
                       <CardItem style={{marginTop: 11}}>
                      <Left>
                      <Image source={require('../../image/berry.jpg')}  style={{borderRadius: 100, width: 70, height: 70, marginRight: 30}}/>
                        <View style={{ alignItems: 'flex-start'}} >
                          <Title  style={{color: 'black'}} >Berry Bowl</Title>
                          <Subtitle  style={{color: 'black'}} >$19</Subtitle>
                        </View>
                      </Left>

                      <Right>
                      <View style={{ marginRight: 3}} >
                      <Icon name="add" style={{ color: 'black' }}/>          
                        </View>
                      </Right>
                    </CardItem>
                     <CardItem style={{marginTop: 11}}>
                      <Left>
                      <Image source={require('../../image/avocado.jpg')}  style={{borderRadius: 100, width: 70, height: 70, marginRight: 30}}/>
                        <View style={{ alignItems: 'flex-start'}} >
                          <Title  style={{color: 'black'}} >Avaocado Bowl</Title>
                          <Subtitle  style={{color: 'black'}} >$26</Subtitle>
                        </View>
                      </Left>

                      <Right>
                      <View style={{ marginRight: 3}} >
                      <Icon name="add" style={{ color: 'black' }}/>          
                        </View>
                      </Right>
                    </CardItem>

                    <CardItem style={{marginTop: 30}}>
                      <Left>                     
                       {/* <Icon name="search"  style={{color: 'white', marginTop: -70, marginRight: 70,}} /> */}
                      <Icon name="search" style={{fontSize: 50, borderRadius: 100, width: 70, height: 70, marginRight: 10}}/>
                        <View style={{ alignItems: 'flex-start'}} >
                        <Icon name="basket"  style={{fontSize: 50,borderRadius: 100, width: 70, height: 70, marginRight: 30}}/>
                        </View>
                      </Left>
                      <Right>
                      <View  >

                      <Button 
                      onPress={() => this.props.navigation.navigate('Profile')}
                       style={{ width: 100,
                         padding: 7,  color: '#0bc1bf',
                   borderRadius: 20, fontSize: 20, 
                   backgroundColor: '#0bc1bf'}} title="Next Interface">
                    </Button>
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

    header: {
        width: '100%',
        height: 230,
        backgroundColor: '#0bc1bf',
        justifyContent: 'center'
    },
    card: {
        height: 600,
        // width: '100%',
        borderTopLeftRadius: 90,
        borderBottomRightRadius: 20,
        marginTop: -79,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 10,
        backgroundColor: 'white',
        padding:20,
    },

  
  
    screen: {
      flex: 1
    }
  
  });