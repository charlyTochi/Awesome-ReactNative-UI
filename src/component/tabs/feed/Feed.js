import React, { Component } from 'react';
import { View,  CardItem, Body, Image, Text, StyleSheet, ScrollView} from 'react-native';
import { Card, Container,Button, Content, StyleProvider, Icon } from 'native-base';
import getTheme from '../../../../native-base-theme/components';
import material from '../../../../native-base-theme/variables/material';
import LottieView from 'lottie-react-native';
import { Animated, Easing } from 'react-native';



export class Feed extends React.Component {
    render() {
      return (
        <StyleProvider style={getTheme(material)}>
        <Container style={{backgroundColor: '#f9fbfe'}}>
          <Content>
              <View style={styles.header}>
              <Icon name="funnel" style={{ marginTop: -100, padding: 30,  fontSize: 20, color: 'white' }}/>
              <Icon name="notifications-outline" style={{ textAlign: 'right', marginTop: -80, padding: 30,  fontSize: 20, color: 'white' }}/>
              </View>
              <View style={styles.header2}>
              <Text style={{  padding: 10,marginTop: -100,fontSize: 20,  color: 'white', fontWeight: 'bold'}}>2800,00 $</Text>             
              <Button onPress={() => this.props.navigation.openDrawer()}
              style={{ width: 100,
                 padding: 7,  color: 'white',
                  marginTop: -100, marginRight: 30,
                   borderRadius: 20, fontSize: 20, 
                   backgroundColor: '#82e8f8'}} title="Go to Jane's profile">
                     <Text style={{ color: '#f9fbfe',  textAlign: 'center', fontWeight: 'bold' }}>TOP UP</Text></Button>
              </View>
              <View style={styles.header2}>
              <Text style={{  padding: 10,marginTop: -100,fontSize: 11,  color: '#918ff6', fontWeight: 'bold'}}>Available Balance</Text>             
              </View>




                 <View>  
               <Card style={styles.card}> 
               <View style={styles.containerw}>
         <View style={styles.outerCircle1}>            
         <LottieView source={require('../../../../assets/lottie/sendss.json')}  />
          	</View>
        <View style={styles.outerCircle2}>
        <LottieView source={require('../../../../assets/lottie/pay.json')}  />
          	</View>
        <View style={styles.outerCircle3}>
        <LottieView source={require('../../../../assets/lottie/request.json')} autoPlay loop  />
      </View>
       </View>

       <View style={styles.containerw}>
        <Text style={{ fontSize: 11, fontWeight: 'bold', color: 'black', textAlign: 'center', paddingTop:2, padding:20 }}>Send</Text>
        <Text style={{ fontSize: 11, fontWeight: 'bold', color: 'black', paddingTop:2 }}>Pay</Text>
        <Text style={{ fontSize: 11, fontWeight: 'bold', color: 'black',paddingTop:2, padding:20}}>Request</Text>
       </View>
        <View style={styles.containerss}>
        <View style={styles.outerCircle4}>
        <LottieView source={require('../../../../assets/lottie/invoice.json')} autoPlay loop  />
            <Text style={{ fontSize: 11, fontWeight: 'bold', color: 'black', paddingTop:80 }}>Invoice</Text>
          	</View>
        <View style={styles.outerCircle5}>
            <LottieView style={{marginTop: 5 , marginLeft:10}} source={require('../../../../assets/lottie/charity.json')}  />
            <Text style={{ fontSize: 11, fontWeight: 'bold', color: 'black', paddingTop:80 }}>Charity</Text>
          	</View>
        <View style={styles.outerCircle6}>
        <LottieView source={require('../../../../assets/lottie/loan.json')}  />
            <Text style={{ fontSize: 11, fontWeight: 'bold', color: 'black', paddingTop:80 }}>Loan</Text>
      </View>
       </View>
         </Card>


         <Card style={styles.cards}>
                 <View>
        <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#bec3ca', marginBottom: 40  }}>Lorem ipsum dolor sit amet</Text>
        <Text style={{ marginTop: -30, fontSize: 11, fontWeight: 'bold', color: '#bec3ca'  }}> dan aku tan moyan</Text>
        <Button style={{ width: 55,
      padding: 7,  color: 'white',
        marginTop: -40, marginLeft: 200,
        borderRadius: 20, fontSize: 20, 
        backgroundColor: '#cff4ff'}} title="Go to Jane's profile">
          <Icon  style={{ color: '#56baf8'}} name="arrow-dropright" size={80}/>
          </Button>
        </View>
         </Card>
          </View>
          <Text style={{ fontSize: 20, color: 'black',padding: 10, paddingTop: 10  }}>Upcoming</Text>


            <ScrollView horizontal style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row' }}>
          <Card style={styles.scrollCard1}>
           <View>
        <Text style={{ fontSize: 15,  color: 'white', marginBottom: 40, padding: 5  }}>Design Logo for Asa</Text>
        <Text style={{ fontSize: 15,  color: 'white',  marginTop: -20, paddingLeft: 5 }}>$240</Text>
        </View>
         </Card>

         <Card style={styles.scrollCard2}>
           <View>
        <Text style={{ fontSize: 15,  color: 'white', marginBottom: 40, padding: 5  }}>Next meeting</Text>
        <Text style={{ fontSize: 15,  color: 'white',  paddingLeft: 5 }}>$240</Text>
        </View>
         </Card>

         <Card style={styles.scrollCard3}>
        <View>
        <Text style={{ fontSize: 15,  color: 'white', marginBottom: 40, padding: 5  }}>Nurman had send you</Text>
        <Text style={{ fontSize: 15,  color: 'white',  marginTop: -20, paddingLeft: 5 }}>$240</Text>
        </View>
         </Card>



         <Card style={styles.scrollCard4}>
           <View>
        <Text style={{ fontSize: 15,  color: 'white', marginBottom: 40, padding: 5  }}>I love designing interface</Text>
        <Text style={{ fontSize: 15,  color: 'white',  marginTop: -20, paddingLeft: 5 }}>$111</Text>
        </View>
         </Card>
            </View>
            </ScrollView>




       </Content>
        </Container>
      </StyleProvider>
      );
    }
  }



  

const styles = StyleSheet.create({

  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'pink',
  },

 containerw: {
    borderRadius: 50,
    // width: 90,
    // height: 50,
    backgroundColor: 'white',
    flexDirection: "row" ,
    justifyContent:'space-between',


  },

  containerss: {
    borderRadius: 50,
    marginTop: 20,
    width: 90,
    height: 130,
    backgroundColor: 'white',
    flexDirection: "row" ,


  },
  outerCircle1: {
    borderRadius: 60,
    width: 80,
    height: 80,
    marginRight: 20,
    backgroundColor: '#4f49ff',
    alignItems: 'center'
  },


  
  outerCircle2: {
    borderRadius: 60,
    width: 80,
    height: 80,
    marginRight: 20,
    backgroundColor: '#ff674e',
    alignItems: 'center'
  },



  outerCircle3: {
    borderRadius: 60,
    width: 80,
    height: 80,
    marginRight: 20,
    backgroundColor: '#009bff',
    alignItems: 'center'
  },



  outerCircle4: {
    borderRadius: 60,
    width: 80,
    height: 80,
    marginRight: 20,
    backgroundColor: '#4f49ff',
    alignItems: 'center'
  },



  outerCircle5: {
    borderRadius: 60,
    width: 80,
    height: 80,
    marginRight: 20,
    backgroundColor: '#ff674e',
    alignItems: 'center'
  },



  outerCircle6: {
    borderRadius: 60,
    width: 80,
    height: 80,
    marginRight: 20,
    backgroundColor: '#009bff',
    alignItems: 'center'
  },

  
  card: {
      height: 300,
      marginTop: -70,
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 6,
      shadowOpacity: 0.26,
      elevation: 10,
      marginLeft: 20,
       marginRight: 20,
      backgroundColor: 'white',
      padding:20,
      borderRadius: 20,
       justifyContent:'space-between',

  },

  cards: {
    height: 80,
    marginTop: -40,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
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

scrollCard1: {
  shadowColor: 'white',
  shadowOffset: {width: 0, height: 2},
  shadowRadius: 6,
  shadowOpacity: 0.26,
  elevation: 10,
  borderRadius: 20,
  marginLeft: 10,
  marginRight: 10,
  backgroundColor: '#4f49ff',
  padding:10,
  width: 120,
},


scrollCard2: {
  shadowColor: 'white',
  shadowOffset: {width: 0, height: 2},
  shadowRadius: 6,
  shadowOpacity: 0.26,
  elevation: 10,
  borderRadius: 20,
  marginLeft: 10,
   marginRight: 10,
  backgroundColor: '#009bff',
  padding:10,
  width: 120,
},




scrollCard3: {
  shadowColor: 'white',
  shadowOffset: {width: 0, height: 2},
  shadowRadius: 6,
  shadowOpacity: 0.26,
  elevation: 10,
  borderRadius: 20,
  marginLeft: 10,
   marginRight: 10,
  backgroundColor: '#ff674e',
  padding:10,
  width: 120,
},





scrollCard4: {
  shadowColor: 'black',
  shadowOffset: {width: 0, height: 2},
  shadowRadius: 6,
  shadowOpacity: 0.26,
  elevation: 10,
  borderRadius: 20,
  marginLeft: 10,
   marginRight: 10,
  backgroundColor: 'green',
  padding:10,
  width: 120,
},



carder: {
  height: 105,
  marginTop: -40,
  shadowColor: 'black',
  // shadowOffset: {width: 0, height: 2},
  shadowRadius: 6,
  shadowOpacity: 0.26,
  elevation: 10,
  marginLeft: 10,
   marginRight: 10,
  backgroundColor: 'white',
  // padding:10,
  // width: 400,
  borderRadius: 20,
   flexDirection: "row" ,
   justifyContent:'space-between',
   justifyContent: 'center',
    flex: 1,  

},
  
  
  card2: {
    height: 190,
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 10,
    marginLeft: 20,
     marginRight: 20,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent: 'center',
    flex: 1, flexDirection: "row" ,
    borderRadius: 10,
    justifyContent:'space-between', 

},

  header: {
    width: '100%',
    height: 100,
    paddingTop: 36,
    backgroundColor: '#4a46ff',
    justifyContent: 'center'
},



header2: {
  width: '105%',
  height: '100%',
  paddingTop: 36,
  backgroundColor: '#4a46ff',
  justifyContent: 'center',
  flex: 1, flexDirection: "row" ,
  justifyContent:'space-between', 

},

  screen: {
    flex: 1
  }

});



