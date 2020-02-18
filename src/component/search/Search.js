import React, { Component }  from 'react';
import {View, CardItem, Body, Image, Text, StyleSheet, ScrollView} from 'react-native';
import { Card, Container,Button, Content, StyleProvider, Icon } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import LottieView from 'lottie-react-native';
import { Animated, Easing } from 'react-native';
import {CustomHeader} from '../CustomHeader'



export class Search extends React.Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container style={{backgroundColor: '#0c969c'}}>
        <Content>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <Icon name="arrow-round-back" style={{ padding: 20,  fontSize: 20, color: 'white' }}/>
            <Text style={{ marginTop: 20, fontSize: 20, color: 'white', marginRight: 20,}}>Conns fix 2306</Text>             
        </View> 
              <View>
          <View style={styles.outerCircle4}>
          <LottieView style={{ }} source={require('../../../assets/lottie/bell.json')} autoPlay loop />
          </View>
     </View>
     <View style={{marginTop:20}}>
     <Text style={{ marginTop: 15, fontSize: 22, color: 'white', marginLeft: 20,}}>Hello, Maze</Text> 
     <Text style={{ marginTop: 5, fontSize: 22, color: 'white', marginLeft: 20,}}>I wish you a happy life!</Text>             
     <Text style={{ marginTop: 20, fontSize: 22, color: '#abdade', marginLeft: 20,}}>My room</Text>             
     </View>

     <View style= {[ {flexDirection: 'row'} ]}>
     <Card style={styles.cards}>
       <View>
       <LottieView style={{marginTop: -20,  }} source={require('../../../assets/lottie/tele.json')} autoPlay/>
      <Text style={{marginTop: 80,  color: 'black'  }}>Living room</Text>
      </View>
       </Card>

       <Card style={styles.cards}>
      <View>
      <LottieView style={{marginTop: -20,  }} source={require('../../../assets/lottie/bed.json')} autoPlay loop />
      <Text style={{marginTop: 80,  color: 'black'  }}>Bedroom</Text>
      </View>
       </Card>
      </View>

      <View style= {[ {flexDirection: 'row'} ]}>
     <Card style={styles.cards1}>
       <View>
       <LottieView style={{marginTop: -20,  }} source={require('../../../assets/lottie/kitchen.json')} autoPlay loop />
      <Text style={{marginTop: 60,  color: 'black'  }}>Kitchen</Text>
      </View>
       </Card>

       <Card style={styles.cards}>
      <View>
      <LottieView style={{marginTop: -20,  }} source={require('../../../assets/lottie/bath.json')} autoPlay loop />
      <Text style={{marginTop: 60,  color: 'black'  }}>Bathroom</Text>
      </View>
       </Card>
      </View>

      <View style={{flexDirection: 'row'}}>
      <View style={styles.outerCircle5}>
      <Icon style={{color: '#0c969c' }}name ="happy" autoPlay loop />
            </View>
            <View style={styles.outerCircle6}>
            <Icon style={{color: '#0c969c', padding: 20 }}name ="home" autoPlay loop />
            </View>
            <View style={styles.outerCircle6}>
            <Icon style={{color: '#0c969c', padding: 20 }}name ="bed" autoPlay loop />
            </View>
            <View style={styles.outerCircle6}>
            <Icon style={{color: '#0c969c', padding: 20 }}name ="walk" autoPlay loop />
            </View>
            </View>

         <View style={{flexDirection: 'row' }}>
          <Text style={{ marginLeft: 20, color: 'white'  }}>Smart</Text>
          <Text style={{ marginLeft: 60, color: 'white'  }}>Home</Text>
          <Text style={{ marginLeft: 50, color: 'white'  }}>Sleep</Text>
          <Text style={{marginLeft: 50, color: 'white'  }}>Party</Text>
            </View>

            <View style={{flexDirection: 'row' ,marginTop: 30}}>
         
            </View>
     </Content>
      </Container>
    </StyleProvider>

      // <View style={{ flex: 1 }}>
      //   <CustomHeader title="Search"  isHome={true}  navigation={this.props.navigation}/>
      //   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      //   <Text>Sxreen screen!</Text>
      //   {/* <Button light onPress={() => this.props.navigation.navigate('SearchDetail')}>
      //     <Text> Go to screen detail</Text>
      //     </Button> */}
      // </View>
      // </View>
    );
  }
}



const styles = StyleSheet.create({


  header: {
    height: 800,
    backgroundColor: '#0c969c',
    justifyContent: 'center'
},
containerss: {
    borderRadius: 50,
    marginTop: 20,
    width: 90,
    height: 130,
    backgroundColor: 'white',
    flexDirection: "row" ,
  },

  outerCircle4: {
    borderRadius: 60,
    width: 50,
    height: 50,
    marginLeft: 20,
    marginTop: -10,
    backgroundColor: '#feffff',
    alignItems: 'center'
  },

  
  outerCircle5: {
    borderRadius: 60,
    width: 60,
    height: 60,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    backgroundColor: '#fdfeff',
    alignItems: 'center',
    flex: 1,
    flexDirection: "row" ,
    justifyContent: 'center'

  },


  outerCircle6: {
    borderRadius: 60,
    width: 60,
    height: 60,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    backgroundColor: '#81c5cd',
    alignItems: 'center',
    flex: 1,
    flexDirection: "row" ,

  },

  iconStyle: {
    flexDirection: 'column',
    alignItems: 'center',
        paddingRight: 10,
        flex: 1,
        borderColor: '#FFF'
  },
  cards: {
    height: 140,
    marginTop: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 10,
    marginLeft: 20,
     marginRight: 20,
     borderBottomLeftRadius: 20,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 90,
    backgroundColor: 'white',
    padding:20,
    borderRadius: 20,
     flexDirection: "row" ,
     justifyContent:'space-between',
     justifyContent: 'center',
     flex: 1, flexDirection: "row" ,
},
cards1: {
    height: 140,
    marginTop: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 90,


    shadowOpacity: 0.26,
    elevation: 10,
    marginLeft: 20,
     marginRight: 20,
    backgroundColor: 'white',
    padding:20,
    borderRadius: 20,
     flexDirection: "row" ,
     justifyContent:'space-between',
     justifyContent: 'center',
     flex: 1, flexDirection: "row" ,
},
});

