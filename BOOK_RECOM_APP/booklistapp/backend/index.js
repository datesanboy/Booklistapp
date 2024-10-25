const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const book  = require('./routes/api/book')

const app = express()

connectDB();

app.use(cors({origin: true, credentials: true}))

app.use(express.json({extended: false}))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/api/book', book);

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`server app listening at http://localhost:${port}`)
}
)