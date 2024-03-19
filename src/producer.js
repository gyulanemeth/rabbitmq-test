import amqp from 'amqplib'

const queueName = 'task_queue'

async function produce() {
  const conn = await amqp.connect('amqp://localhost')
  const channel = await conn.createChannel()
  await channel.assertQueue(queueName, { durable: false })

  let count = 0
  setInterval(async () => {
    const msg = `Message ${++count}`
    channel.sendToQueue(queueName, Buffer.from(msg))
    console.log(" [x] Sent %s", msg)
  }, 2000)

  process.on('SIGINT', () => {
    console.log('Closing RabbitMQ connection...')
    channel.close()
    conn.close()
    process.exit()
  })
}

produce()
