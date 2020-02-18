import React from 'react';
import { Container, Header, Left, Body, Right, Button,  Title, Icon, Text, List, ListItem} from 'native-base';


 export class CustomHeader extends React.Component {
    render() {
      let {title, isHome} = this.props
      return (

        isHome?
          <Header style={{ backgroundColor: "#e3e3e3" }} >
          <Left>
          <Button transparent   onPress={() => this.props.navigation.toggleDrawer()}
        
        >

              <Icon name='reorder'  style={{fontSize: 40, color: 'black' }}/>
            </Button>
              </Left>
              <Body>
          <Title>{title}</Title>
          </Body>
          <Right></Right>
          </Header>

            :

            <Header style={{ backgroundColor: "#0873b5" }} >
            <Left>
            <Button transparent   onPress={() => this.props.navigation.goBack()}>
            <Icon name='arrow-back' />
              </Button>
                </Left>
                <Body>
                 <Title>{title}</Title>
          </Body>
          <Right></Right>
                </Header>

        // <Header style={{ backgroundColor: "#e3e3e3" }} >
        //   <Left>
        //     {
        //       isHome?
            
        //       <Button transparent   onPress={() => this.props.navigation.openDrawer()}>
        //       <Icon name='reorder'  style={{fontSize: 35, color: 'white' }}/>
        //     </Button>
        //    :
        //     <Button transparent onPress={() => this.props.navigation.goBack()}>
        //     <Icon name='arrow-back' />
        //     </Button>
        //     }
        //   </Left>

        //   <Body>
        //   <Title>{title}</Title>
        //   </Body>
        //   <Right>
            
        //   </Right>
        // </Header>
      );
    }
  }
