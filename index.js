var request = require('request');

module.exports = {
    url: "http://localhost:3000",
    log: function(person, action) {
        let self = this;
        return new Promise(resolve => {
            var clientServerOptions = {
                uri: self.url + "/api/log",
                body: JSON.stringify({person: person, action: action}),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            request(clientServerOptions, function (error, response) {
                resolve(response.body);
                return;
            });
        });
    }
}
