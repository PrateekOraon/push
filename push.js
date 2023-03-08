var push = require('web-push');

let vapidkeys = {
    publicKey: 'BJreJiwAjMTdTscOghg9Fyntp4nzpoEIsFG2wqX6IlFKw7qBH1f84q93hI5fLd4QTOJep8159vRPMi-8u1oWMLg',
    privateKey: 'fIR611FL8VzgS7VQHXZvpZAEaCdU78tWo-hQT1JG54k'
};

push.setVapidDetails('mailto:oraonprateek251@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey);

let sub = {};

push.sendNotification(sub, 'test message from Prateek');


