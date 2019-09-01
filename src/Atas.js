import React, {Component} from 'react';
import "semantic-ui-css/semantic.min.css"
import {Grid , Flag , Header , Image, Divider,Input ,Icon  } from "semantic-ui-react"
class Atas extends Component {
  render(){
    return (
      <div>
      <br />

      <Grid container columns={3}>
        <Grid.Column>
          <Flag name="id" />

          <Icon name='angle left' />
          
          <Icon name='angle right' />
        </Grid.Column>

        <Grid.Column>
         <Input fluid icon='star' placeholder='Search...' />
        </Grid.Column>

        <Grid.Column>
          <Header as="h3">
          <Image src=" https://react.semantic-ui.com/images/avatar/large/patrick.png " height="50px" widht="50px" avatar />
           farhan
          </Header>
        </Grid.Column>
      </Grid>
      <Divider horizontal >selamat datang !!!</Divider>
      </div>

    );
  }
}
export default Atas;
