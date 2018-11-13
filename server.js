const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const util = require('util')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (_, res) => {
  res.end('は？')
})

app.post('/', async (req, res) => {
  const { text } = req.body
  const codeBlock = '```'
  try {
    const result = util.inspect(eval(text))
    res.json({
      text: `Eval(JavaScript)
${codeBlock}
in: ${text}
out: ${result}
${codeBlock}`,
      response_type: 'in_channel'
    })
  } catch (e) {
    res.json({
      response_type: 'in_channel',
      text: `オイオイオイ死んだわアイツ
ほう \`${e}\` ですか…たいしたものですね`
    })
  }
})

const listener = app.listen(process.env.PORT || 4989, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
