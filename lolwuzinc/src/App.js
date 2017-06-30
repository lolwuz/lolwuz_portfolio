import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import self from './img/self.jpg';
import Navigation from './components/navigation/Navigation';
import BottomFooter from './components/navigation/BottomFooter';
import {Card, CardTitle, Row, Col} from 'react-materialize';

class App extends Component {
  render() {
    return (
      <div>
          <Navigation/>

          <Row>
              <Col s2={8}>
                  <Card header={<CardTitle reveal image={self} waves='light'/>}
                        title="Marten Hoekstra"
                        reveal={<p>19 years old computer science student from the Netherlands. @lolwuz Meaning "What has happend?".</p>}>
                      <p><a href="#">This is a link</a></p>
                  </Card>
              </Col>
          </Row>
          <BottomFooter/>
      </div>
    );
  }
}

export default App;
