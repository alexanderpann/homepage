import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export default class PatentsComponent extends React.Component {

    render() {
    
    return (
    <>
      <Card fluid>
        <Card.Content>
          <Card.Header>Patent: Multi Focus Lens Camera for Mobile Phones </Card.Header>
          <Card.Meta>
            <span className='date'>2020</span>
          </Card.Meta>
          <Card.Description>
          Title: Camera system, mobile device and method of operating a mobile device for multi-focus imaging<br />
        <a href="https://patents.google.com/patent/WO2022106720A1">Google patents</a><br />
      Countries: worldwide
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <figure>
            <Image src="./images/vision.svg" alt="vision" size="medium" />
          </figure>
        </Card.Content>
      </Card>
    </>
  )
  }
}