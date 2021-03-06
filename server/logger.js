const {format, createLogger, transports} = require('winston');


const logger = createLogger({
    level: 'info',
    format:  format.simple(),
    transports: [new transports.Console()]
})

module.exports = {logger}