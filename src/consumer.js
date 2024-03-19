import amqp from 'amqplib'

const queueName = 'task_queue'
const delay = parseInt(process.argv[2], 10) || 2000 // Delay time in milliseconds from command line

async function consume() {
  const conn = await amqp.connect('amqp://localhost')
  const channel = await conn.createChannel()

  await channel.assertQueue(queueName, { durable: false })
  console.log(` [*] Waiting for messages in %s. To exit press CTRL+C`, queueName)

  channel.consume(queueName, (msg) => {
    if (msg !== null) {
      console.log(` [x] Received %s`, msg.content.toString())
      setTimeout(() => {
        console.log(` [x] Done processing ${msg.content.toString()}`)
        channel.ack(msg)
      }, delay)
    }
  }, { noAck: false })
}

consume()
