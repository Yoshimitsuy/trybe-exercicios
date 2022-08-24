const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const userRouter = require('./routes/UserRoute')

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/users', userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));