var request = require('request');

module.exports = {
    url: "http://node-express-env.mmf37m4qa9.us-west-2.elasticbeanstalk.com/",
    log: function(event) {
        let self = this;
        return new Promise(resolve => {
            var clientServerOptions = {
                uri: self.url + "/api/log",
                body: JSON.stringify(event),
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
