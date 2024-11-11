import Pino from 'pino';

// Create custom logger using pino and pino-pretty
export const logger = Pino({
  level: 'info', // Set level log minimum
  transport: {
    target: 'pino-pretty', // Use pino-pretty for output "humanable"
    options: {
      colorize: true, // Add color log on console
      translateTime: 'SYS:standard', // Standard time format
      ignore: 'pid,hostname', // Ignoring pid and hostname on log
    },
  },
});
