// const pledgesComponentSource = require('./pledges_component');

/*
- create simlink with ln -s on the command line to point to pledges component src file
- require simlink so that when webpack is pointed at this file, it fetches all the source code in the pledges directory
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Pledges from './pledges_component/components/App.jsx';

let params = new URLSearchParams(window.location.search);
let id = params.get("id")
if (id === null) {
  id = 1;
};


ReactDOM.render(<Pledges id={id} />, document.getElementById('pledges'));

