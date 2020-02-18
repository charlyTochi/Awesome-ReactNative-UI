import React  from 'react';
import {View, Image, SafeAreaView, ScrollView} from 'react-native';
import {Text, List, ListItem, Button, Left, Icon} from 'native-base'



export class SideMenu extends React.Component{
    render(){
      return(
        <SafeAreaView style={{flex: 1}}>
          <View style={{marginTop: 20, height: 150, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../image/c.jpg')}
          style={{height: 120, width: 120, borderRadius: 60}}/>
           <Text style={{marginTop: 20}}>Orafu Charles</Text>

          </View>
          <ScrollView>
            <List>
              <ListItem onPress={() => this.props.navigation.navigate('Setting')}> 
                <Text style={{marginTop: 30}}>Multipurpose</Text>
              </ListItem>
              <ListItem onPress={() => this.props.navigation.navigate('HealthyFood')}> 
                <Text>Healthy Food</Text>
              </ListItem>
              <ListItem onPress={() => this.props.navigation.navigate('Profile')}> 
                 <Text>Profile</Text>
              </ListItem>

              <ListItem onPress={() => this.props.navigation.navigate('filter')}> 
                 <Text>Filter</Text>
              </ListItem>
            </List>
  
          </ScrollView>
  
          <List>
              <ListItem noBorder onPress={() => this.props.navigation.navigate('auth')}> 
                <Text>Logout</Text>
              </ListItem>
            </List>
  
        </SafeAreaView>
      )
    }
  }
  