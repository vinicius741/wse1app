const dgram = require('dgram')
const server = dgram.createSocket('udp4')
const dateFormat = require('dateformat')
const firebase = require('firebase')

var lastDate = new Date()
var currentDate = new Date()
var points = []

firebase.initializeApp({
    "appName": "workshop",
    "databaseURL": "https://workshop-c1d2d.firebaseio.com/",
});

var datediff = (date1, date2) => 
{
    let diffMs = (date1 - date2) // milliseconds between now & Christmas
    let diffDays = Math.floor(diffMs / 86400000) // days
    let diffHrs = Math.floor((diffMs % 86400000) / 3600000) // hours
    let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000) // minutes

    return diffMins
}

server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`)
    server.close()
})

server.on('message', (msg, rinfo) => {
   
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`)

    let value = parseFloat(msg)

    points.push(value)

    currentDate = new Date()

    console.log(datediff(currentDate, lastDate))

    if (datediff(currentDate, lastDate) >= 1 && points.length > 0)
    {
        lastDate = currentDate

        let somatorio = 0.0

        points.forEach(x => { 

            somatorio += x;

        })

        let media = somatorio / points.length

        while (points.length != 0)
            points.pop()

        let data = dateFormat(new Date(), 'yyyy-MM-dd_hh:mm:ss')        

        firebase.database().ref(data).set({
            value: media,
            date: data
        });
    }
})

server.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`)
})

server.bind(555)