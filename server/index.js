const express = require('express')
const oracledb = require('oracledb')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const port = 5000

app.get('/student_names', async (req, res) => {
        try{
                const conn = await oracledb.getConnection({
                        user: 'system',
                        password: 'orcl'
                })
                const queryStr = 'SELECT name FROM Student'
                const resultRows = await conn.execute(queryStr)
                const studentNames = []
                resultRows.rows.forEach(record => {
                        studentNames.push(record[0])
                })
                console.log(studentNames)
                res.send({
                        studentNames
                })

        }catch(e){
                res.status(500).send({error: e})
        }
})

app.listen(port, () => {
        console.log(`Listening on port ${port}`)
})