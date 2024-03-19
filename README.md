
# RabbitMQ Node.js Example

This project demonstrates how to use RabbitMQ for messaging in a Node.js application, featuring a producer that sends messages and a consumer that processes those messages with a delay.

## Requirements

- Node.js
- RabbitMQ server

## Setup

First, ensure RabbitMQ is installed and running on your machine. Refer to the RabbitMQ [official documentation](https://www.rabbitmq.com/download.html) for installation instructions.

Next, install the necessary Node.js dependencies by running:

```bash
npm install
```

## Running the Application

### Start the Producer

To start the producer, which sends messages to the queue every second, run:

```bash
node producer.mjs
```

### Start the Consumer

To start a consumer that processes messages from the queue, run:

```bash
node consumer.mjs <delay>
```

Replace `<delay>` with the time in milliseconds that the consumer should wait between processing messages. For example, to have the consumer wait 2 seconds between messages, run:

```bash
node consumer.mjs 2000
```

## Architecture

- **Producer (`producer.mjs`)**: Sends messages to a RabbitMQ queue at a fixed interval.
- **Consumer (`consumer.mjs`)**: Listens for messages on the queue and processes them with a specified delay, which is passed as a command-line argument.

## Notes

- Ensure the RabbitMQ server is running before starting the producer or consumer.
- The delay for the consumer is in milliseconds and must be specified when starting the consumer script.
