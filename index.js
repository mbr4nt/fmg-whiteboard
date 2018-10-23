var request = require('request');

module.exports = {
    url: "http://node-express-env.mmf37m4qa9.us-west-2.elasticbeanstalk.com/",
    log: function(event) {
        let self = this;
        return post(self.url + "/api/log", event);
    },
    userBoard: function(userId) {
        let self = this;
        return new Promise((resolve, reject) => {
            post(self.url + "/api/boards", {userId: userId}).then(response => {
                let result = {};
                Object.keys(response).forEach(key => {
                    let actions = response[key];
                    if(actions.length > 0)
                    result[key] = actions[0].count;
                });
                resolve(result);
            }).catch(err => {reject(err);});
        });
    }
}

function post(url, data) {
    return new Promise(resolve => {
        var clientServerOptions = {
            uri: url,
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        request(clientServerOptions, function (error, response) {
            resolve(JSON.parse(response.body));
            return;
        });
    });
}
