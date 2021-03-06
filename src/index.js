// const pledgesComponentSource = require('./pledges_component');

/*
- create simlink with ln -s on the command line to point to pledges component src file
- require simlink so that when webpack is pointed at this file, it fetches all the source code in the pledges directory
*/

// if I edit code in the symlink do I need to run a babel build on that component


import React from 'react';
import ReactDOM from 'react-dom';
import Pledges from './pledges_component/App.jsx';
import Description from './description_component/App.jsx';
import Photos from './photos_component/App.jsx';

let params = new URLSearchParams(window.location.search);
let id = params.get("id")
if (id === null) {
  id = 1;
};

ReactDOM.render(<Photos id={id} />, document.getElementById('photos'));
ReactDOM.render(<Description id={id} />, document.getElementById('description'));
ReactDOM.render(<Pledges id={id} />, document.getElementById('pledges'));

