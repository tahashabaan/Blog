import winston from "winston";

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [new winston.transports.Console()],
  });


  class LoggerService{
    constructor(){

    }

    logger (){
        const logger = winston.createLogger({
            level: 'info',
            format: winston.format.json(),
            transports: [new winston.transports.Console()],
          });

          return logger;
    }
  }

