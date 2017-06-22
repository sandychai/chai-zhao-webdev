var app = require('../express');

require('./services/user.service.server');
require('./services/website.service.server');
require('./services/widget.service.server');
require('./services/page.service.server');

app.get('/goodbye', sayHello);
app.get('/websites', getWebsites);


function sayHello() {
        console.log('dfa')
    }

function getWebsites(req, res) {
    var websites = [
        {name:'facebook'},
        {name:'twitter'}
    ]

    res.send(websites);

}
