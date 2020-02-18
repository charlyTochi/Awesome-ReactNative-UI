import React, { Component }  from 'react';
import { StackActions, NavigationActions } from "react-navigation";
import {View, CardItem, Body, Button, Image, Text, StyleSheet, ScrollView} from 'react-native';
import { Card, Container,Content, StyleProvider, Icon } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import LottieView from 'lottie-react-native';
import { Animated, Easing } from 'react-native';
import {CustomHeader} from '../CustomHeader'


export class SplashScreen extends React.Component {
    
        componentDidMount() {
            setTimeout(() => {
              this.signInToAcc();
            }, 3000);
          }
        
          async signInToAcc() {
            const { navigate } = this.props.navigation;
            const resetAction = StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: "Home" })]
            });
            this.props.navigation.dispatch(resetAction);
            navigate("Home");
          }
        
          render() {
            return (
              <StyleProvider style={getTheme(material)}>
                <Container>

                  <View
                    style={
                      { flex: 6, backgroundColor: '#2c85de', alignItems: "center", justifyContent: "center" }
                    }>
      <LottieView style={{ }} source={require('../../../assets/lottie/progress.json')} autoPlay loop />
                  </View>
                </Container>
              </StyleProvider>
            );
          }
}