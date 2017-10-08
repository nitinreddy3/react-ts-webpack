import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Greet from './components/greet';

const techStack = ['React', 'Typescript', 'Webpack', 'Bootstrap'];
ReactDOM.render(<Greet techs={techStack} />, document.getElementById('app'));