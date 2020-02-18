import React, { Component }  from 'react';
import { StyleSheet,ScrollView,FlatList,ImageBackground,TextInput} from 'react-native';
import {CustomHeader} from '../CustomHeader'
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {styles} from '../../../native-base-theme/variables/Styles';
    
import {
    StyleProvider,Container,View,Text,Button,Card,CardItem,Body,Div,Header, Left, Right,Icon,Title
} from "native-base";

const ICON_SIZE = 0;
const FONT_SIZE = 18;

export class Setting extends React.Component {
    render() {
      return (

        <View style={{ flex: 1 }}>
          <CustomHeader isHome={false}  title="MultiPurpose"  navigation={this.props.navigation}/>
          <ImageBackground  style={CustomStyles.backgroundIm} source={require('../../../images/02.jpg')}>
          <View style= {[ {flexDirection: 'row',  height: '20%'} ]}>
        <Card block style={{ marginLeft: 20, borderRadius: 10 ,  width: '40%', justifyContent: 'space-between', borderColor: '#0873b5' }} >
        <CardItem  style={{ borderRadius: 10 , height: '100%',   backgroundColor: '#0873b5'}}>
        <View style={styles.iconStyle}>
        <Icon name='musical-notes' style={{color: '#FFF' }} size={80}/>
      <Text style={{ color: '#FFF' }}>Lyrics</Text>
       </View>
         </CardItem>
        </Card>



        <Card block style={{ marginRight: 10, borderRadius: 10 ,  width: '40%', justifyContent: 'space-between',  borderColor: '#0873b5'}} >
        <CardItem  style={{ borderRadius: 10 , height: '100%',   backgroundColor: '#0873b5'}}>
        <View style={{borderColor: '#FFF'}}>
        <Icon name='sunny' style={{color: '#FFF' , alignSelf: 'center' }} size={80}/>
      <Text style={{ color: '#FFF' , alignSelf: "center", alignSelf: 'center' }}>Weather</Text>
       </View>
        </CardItem>
        </Card>
      </View>  


      <View style= {[ {flexDirection: 'row',  height: '20%'} ]}>
        <Card block style={{ marginLeft: 20, borderRadius: 10 ,  width: '40%', justifyContent: 'space-between', borderColor: '#0873b5' }} >
        <CardItem  style={{ borderRadius: 10 , height: '100%',   backgroundColor: '#0873b5'}}>
        <View style={styles.iconStyle}>
        <Icon name='globe' style={{color: '#FFF' }} size={80}/>
      <Text style={{ color: '#FFF' }}>News</Text>
       </View>
         </CardItem>
        </Card>



        <Card block style={{ marginRight: 10, borderRadius: 10 ,  width: '40%', justifyContent: 'space-between',  borderColor: '#0873b5'}} >
        <CardItem  style={{ borderRadius: 10 , height: '100%',   backgroundColor: '#0873b5'}}>
        <View style={{borderColor: '#FFF'}}>
        <Icon name='videocam' style={{color: '#FFF' , alignSelf: 'center' }} size={80}/>
      <Text style={{ color: '#FFF' , alignSelf: "center", alignSelf: 'center' }}>Movies</Text>
       </View>
        </CardItem>
        </Card>
      </View>  
      
        <View style= {[ {flexDirection: 'row',   height: '20%'} ]}>
        <Card block style={{ borderRadius: 10 ,  width: '40%', justifyContent: 'space-between', borderColor: '#0873b5' }} >
        <CardItem  style={{ borderRadius: 10 , height: '100%',   backgroundColor: '#0873b5'}}>

        <View style={{borderColor: '#FFF', alignItems: 'center', justifyContent: 'center'}}>
        <Icon name='person' style={{color: '#FFF', alignItems: 'center'}} size={80}/>
      <Text style={{ color: '#FFF' ,  alignSelf: 'center'}}>Profile</Text>
       </View>

         </CardItem>
        </Card>

        <Card block style={{ borderRadius: 10 ,  width: '40%', justifyContent: 'space-between', borderColor: '#0873b5'}} >
        <CardItem  style={{ borderRadius: 10 , height: '100%',   backgroundColor: '#0873b5'}}>

        <View style={{borderColor: '#FFF'}}>
        <Icon name='power' style={{color: '#FFF', alignSelf: 'center' }} size={80}/>
      <Text style={{ color: '#FFF' }}>Logout</Text>
      
       </View>
        </CardItem>
        </Card>
      </View>  

        </ImageBackground>

        </View>
      );
    }
  }




  

const CustomStyles = StyleSheet.create({
    backgroundIm:  {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconStyle: {
        flexDirection: 'column',
        alignItems: 'center',
            paddingRight: 10,
            flex: 1,
            borderColor: '#FFF'
      },

    buttonRed: {
        marginTop: '5%',
        backgroundColor: '#e6eae7',
        width: '90%'
    },

    iconContainer: {
        width: ICON_SIZE * 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
      },

    buttonGreen: {
        backgroundColor: 'green',
        width: '50%',
       

    }
});


 
    

