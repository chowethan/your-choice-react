import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './style.css';
import { Container, Header, Menu, Dropdown, Grid, Icon, Image, Button, Divider, Form } from 'semantic-ui-react';

class Topmenu extends React.Component {
  render() {
    return (
        <Menu className='topmenu' borderless>
          <Container>
            <Image src="https://www.linode.com/media/images/header/linode-logo.svg" className="nav-logo" />
            <Menu.Item position={'right'} href='#'>
              <Icon name="home" />
            </Menu.Item>
            <Menu.Item href='#'>Features</Menu.Item>
            <Menu.Item href='#'>Pricing</Menu.Item>
            <Menu.Item href='#'>Add-ons</Menu.Item>
            <Dropdown item text="Resources">
              <Dropdown.Menu>
                <Dropdown.Item>Getting Started</Dropdown.Item>
                <Dropdown.Item>Migrating to Linode</Dropdown.Item>
                <Dropdown.Item>Hosting a Website</Dropdown.Item>
                <Divider style={{padding: 0}}/>
                <Dropdown.Item>Guides & Tutorials</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="divider">|</div>
            <Menu.Item href='#'>Log in <Icon name="caret right" style={{fontSize: "12px", color: "#3bb878"}}/></Menu.Item>
            <Menu.Item href='#'><Button>Sign up</Button></Menu.Item>
          </Container>
          <a href="https://www.linode.com/careers"><Image src="https://www.linode.com/media/images/home/hiring_banner.png" style={{position: "absolute", top: 0, right: 0}} /></a>
        </Menu>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
        <Container fluid className="background" style={{paddingBottom: "100px"}}>
          <Container className="background-image" style={{padding: "60px 0 0 0"}}>
            <Grid>
              <Grid.Row centered>
                <div style={{fontSize: "45px", color: "#FFF"}}>Cloud Hosting for</div>
              </Grid.Row>
              <Grid.Row centered>
                <div style={{fontSize: "80px", lineHeight: 1.1, color: "#FFF"}}>You.</div>
              </Grid.Row>
              <Grid.Row centered>
                <div style={{padding: "0 20%", fontFamily: "\"Helvetica\", \"Arial\", sans-serif", fontSize: "26px", fontWeight: 300, lineHeight: 1.2, color: "#FFF"}}>High performance SSD Linux servers for all of your infrastructure needs.</div>
              </Grid.Row>
            </Grid>
            <Grid columns={2}>
              <Grid.Column />
              <Grid.Column>
                <Form style={{padding: "20px 10%"}}>
                  <Form.Field>
                    <input placeholder="Your email" />
                  </Form.Field>
                  <Form.Field>
                    <input placeholder="Choose a username" />
                  </Form.Field>
                  <Form.Field>
                    <input placeholder="Choose a password" />
                  </Form.Field>
                  <Button fluid className="create" style={{background: "#2D8EC6", color: "#FFF"}}>Create Account</Button>
                </Form>
              </Grid.Column>
            </Grid>
          </Container>
        </Container>
    );
  }
}

class ContentMoar extends React.Component {
  render() {
    return (
        <Container fluid className='content-moar'>
          <Grid columns={5} container className='menugrid'>
            <Grid.Row centered style={{fontSize: "32px", fontWeight: 300}}>
              Lightning-Quick SSD Servers for Only&nbsp;<span style={{fontWeight: 400}}>$5/mo.</span>
            </Grid.Row>
            <Grid.Row centered>
              <a href="#" style={{fontFamily: "\"Helvetica\", \"Arial\", sans-serif", fontSize: "19.8px", fontWeight: 300}}>View Plans & Pricing</a>
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
        <Container fluid className='footer'>
          <Grid container className='menugrid'>
            <Grid.Row centered>
              <Grid columns={4}>
                <Grid.Column>
                  <a href="#" className="heading">Overview</a><br />
                  <a href="#">Plans & Pricing</a><br />
                  <a href="#">Features</a><br />
                  <a href="#">Add-Ons</a><br />
                  <a href="#">Managed</a><br />
                  <a href="#">Professional Services</a>
                </Grid.Column>
                <Grid.Column>
                  <a href="#" className="heading">Resources</a><br />
                  <a href="#" >Guides & Tutorials</a><br />
                  <a href="#" >Speed Test</a><br />
                  <a href="#" >Forum</a><br />
                  <a href="#" >Chat</a><br />
                  <a href="#" >System Status</a>
                </Grid.Column>
                <Grid.Column>
                  <a href="#" className="heading">Company</a><br />
                  <a href="#">About Us</a><br />
                  <a href="#">Blog</a><br />
                  <a href="#">Press</a><br />
                  <a href="#">Referral System</a><br />
                  <a href="#">Careers</a>
                </Grid.Column>
                <Grid.Column>
                  <a href="#" className="heading">Contact Us</a><br />
                  <a href="tel:+18554546633">855-4-LINODE</a><br />
                  <a href="tel:+18554546633">(855-454-6633)</a><br />
                  <a href="tel:+16093807100">Intl.: +1 609-380-7100</a><br />
                  <a href="mailto:support@linode.com">Email us</a>
                </Grid.Column>
              </Grid>
            </Grid.Row>
            <Grid.Row centered>
              <a href="https://facebook.com/linode"><Icon name="facebook f" /></a>
              <a href="https://twitter.com/linode"><Icon name="twitter" /></a>
              <a href="https://plus.google.com/+linode/"><Icon name="google plus" /></a>
              <a href="https://linkedin.com/company/linode"><Icon name="linkedin" /></a>
              <a href="https://github.com/linode/"><Icon name="github" /></a>
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}

class FooterMoar extends React.Component {
  render() {
    return (
        <Container fluid className='footer-moar'>
          <Grid columns={5} container className='menugrid'>
            <Grid.Column>
              © 2018 Linode, LLC
            </Grid.Column>
            <Grid.Column>
              <a href="#">Terms of Service</a>
            </Grid.Column>
            <Grid.Column>
              <a href="#">Privacy Policy</a>
            </Grid.Column>
            <Grid.Column>
              <a href="#">Security</a>
            </Grid.Column>
            <Grid.Column>
              <a href="#">Standards & Compliance</a>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

class Linode extends React.Component {

  render() {
    return (
        <div>
          <Topmenu />
          <Content />
          <ContentMoar />
          <Footer />
          <FooterMoar />
        </div>
    );
  }
}

ReactDOM.render(<Linode />, document.getElementById('root'));
