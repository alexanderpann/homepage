import React from 'react'
import { Card, Image, Embed, Grid } from 'semantic-ui-react'

export default class AppComponent extends React.Component {

    render() {
    
    return (
    <>
            
        <Card fluid>
            <Card.Content>
                <Card.Header>itemis</Card.Header>
                <Card.Meta>
                    <span className='date'>2021 - present</span>
                </Card.Meta>
                <Card.Description>
                Language Engineer using JetBrains MPS (full time)
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <figure>
                    <Image href="https://itemis.com" rel="noreferrer" target="_blank" src='https://it-mitteldeutschland.de/wp-content/uploads/2020/06/itemis-Logo-blau-rgb-website.png' alt="itemis" size="medium" />
                </figure>
            </Card.Content>
        </Card>
        <Card fluid>
            <Card.Content>
                <Card.Header> Freelance work for ams AG</Card.Header>
                <Card.Meta>
                    <span className='date'>2013 - 2021</span>
                </Card.Meta>
                <Card.Description>
                    Development of 30+ scripts and web tools that are used in production and by clients of ams AG. <i>(web technologies, Python)</i>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
               <figure>
                    <Image rounded href="/wafer_layout" rel="noreferrer" target="_blank" src='images/gelato.png' alt="Wafer Layout and Yield Simulator" size="medium" />
                </figure> 
                <br />
            Simulator for Semiconductor Fabrication Yield [Try online]
            </Card.Content>
        </Card>
        <Card fluid>
            <Card.Content>
                <Card.Header>Weill Cornell Medicine, Cornell University <small>(NYC, USA)</small></Card.Header>
                <Card.Meta>
                    <span className='date'>2016</span>
                </Card.Meta>
                <Card.Description>
                    JetBrains MPS programmer for the institute for computational biomedicine of Weill Cornell Medicine <i>(JetBrains MPS, Java, R)</i>.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <figure>
                    <Image href="https://weill.cornell.edu/" rel="noreferrer" target="_blank" src='images/weill_cornell.png' alt="Weill Cornell Medicine" size="medium" />
                </figure>
            </Card.Content>
        </Card>
        <Card fluid>
            <Card.Content>
                <Card.Header>ams AG</Card.Header>
                <Card.Meta>
                    <span className='date'>2012</span> (Styria, Austria)
                </Card.Meta>
                <Card.Description>
                    Internship at the marketing communication department.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <figure>
                    <Image href="http://ams.com" target="_blank" rel="noreferrer" src='images/ams.svg' size="medium" alt="ams AG logo" />
                </figure>
            </Card.Content>
        </Card>
        <Card fluid>
            <Card.Content>
                <Card.Header>EP45</Card.Header>
                <Card.Meta>
                    <span className='date'>2015</span>
                </Card.Meta>
                <Card.Description>
                    Development of an Android app that targets solo entertainers <i>(Android, Kotlin)</i>.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <figure>
                    <Image rounded href="https://apkcombo.com/playback-karaoke-player-pro/com.ep45.pro/" rel="noreferrer" target="_blank" src='images/ep45.png' alt="EP45" size="medium" />
                </figure>
                <br /><br />
                <figure>
                    <Image rounded href="https://apkcombo.com/playback-karaoke-player-pro/com.ep45.pro/" rel="noreferrer" target="_blank" src='images/ep45.webp' alt="EP45" size="medium" />
                </figure>
            </Card.Content>
        </Card>
        <Card fluid>
            <Card.Content>
                <Card.Header>Tire pressure simulator</Card.Header>
                <Card.Meta>
                    <span className='date'>2015</span>
                </Card.Meta>
                <Card.Description>
                    Development of a simulator for ams AG for the long night of research <i>(Unity, C#)</i>.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <Grid columns={1}>
                <Grid.Column computer={16} widescreen={8}>
                    <Embed id='q5y2tZ_kLn8' placeholder='/images/tire_pressure_ams.png' source='youtube' />
                </Grid.Column>
            </Grid>
            </Card.Content>
        </Card>
        <Card fluid>
            <Card.Content>
                <Card.Header>Proxi Bird</Card.Header>
                <Card.Meta>
                    <span className='date'>2015</span>
                </Card.Meta>
                <Card.Description>
                <div class="ui justified container">
                    <p> 
                        Development of a demonstrator for mobile phone gesture sensor, presented at the World Mobile (WMC) Congress in Barcelona and at the Consumer Electronic Show (CES) in Las Vegas 2016
                    </p>
                </div>
                   
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <figure>
                    <Image href="https://apktom.com/android-games/com-proxibird/" src='images/proxibird.png' alt="Proxibird" size="medium" />
                </figure>
            </Card.Content>
        </Card>
        <Card fluid>
            <Card.Content>
                <Card.Header>Hue Gesture</Card.Header>
                <Card.Meta>
                    <span className='date'>2016</span>
                </Card.Meta>
                <Card.Description>
                    Demonstration app that allowed to control Philips Hue lights with gestures <i>(Android, Kotlin)</i>.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Grid columns={1}>
                    <Grid.Column computer={16} widescreen={8}>
                        <Embed id='nhD6PNcnAys' placeholder='/images/hue_gesture_video.png' source='youtube' />
                    </Grid.Column>
                </Grid>
            </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>Website: Building Contractor</Card.Header>
                <Card.Meta>
                    <span className='date'>2021</span>
                </Card.Meta>
                <Card.Description>
                    Updates for Website of Building Contractor.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <figure>
                    <Image href="http://www.baumeisterpann.at" rel="noreferrer" target="_blank" src='images/baumeisterpann.jpg' alt="Baumeister Pann" size="medium" />
                </figure>
            </Card.Content>
        </Card>
    </>
    )
    }
}