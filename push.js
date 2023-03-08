var push = require('web-push');

let vapidkeys = {
    publicKey: 'BJreJiwAjMTdTscOghg9Fyntp4nzpoEIsFG2wqX6IlFKw7qBH1f84q93hI5fLd4QTOJep8159vRPMi-8u1oWMLg',
    privateKey: 'fIR611FL8VzgS7VQHXZvpZAEaCdU78tWo-hQT1JG54k'
};

push.setVapidDetails('mailto:oraonprateek251@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fiSMZqkhcM4:APA91bHqbNMQUOGXDI_WIT5VekgoHJmIIDrPSI7NYXDaZKWl4OqpgLnHjHDovDk3TCc6LIOadCGJJ2n4hYNgdmi_zwnPwK1ZUeTSscg1VEDtK56VUIVMlBgET2Kc_kyrZ5UstyH6SCB3","expirationTime":null,"keys":{"p256dh":"BAbCdC9YTyk7SMCa7u3mDdPDFUEvsTIlsHf8IQS4MxxPU2TbEVdNN1EBLkzclT5C5wevMIhP8S792LEzYAuZPNA","auth":"lAgs_G7CHCZ5tJGeXZ0bQA"}};

push.sendNotification(sub, 'test message from Prateek push.js' )
.then(() => console.log("done"))
.catch(err => console.log(err));


