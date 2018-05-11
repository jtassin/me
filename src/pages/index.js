import React from 'react'
import Link from 'gatsby-link';
import Paper from 'material-ui/Paper';
import Stackoverflow from '../components/Stackoverflow';
import Github from '../components/Github';
import Resume from '../components/Resume';
import Mplay from '../components/Mplay';

const paperStyle = {
  height: 200,
  width: 300,
  margin: 20,
  textAlign: 'center',
  float: 'left',
};

const divStyle = {
  width: 750
};


const IndexPage = () => (
  <div>
    <div style={divStyle}>
      <Paper style={paperStyle} zDepth={3}>
        <Stackoverflow />
      </Paper>
      <Paper style={paperStyle} zDepth={3}>
        <Github />
      </Paper>
      <Paper style={paperStyle} zDepth={3}>
        <Resume />
      </Paper>
      <Paper style={paperStyle} zDepth={3}>
        <Mplay />
      </Paper>
    </div>
  </div>
)

export default IndexPage
