const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express()
const port =process.env.PORT || 5000;


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iwcqk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

console.log(uri);

async function run(){
    try{
        await client.connect();
        console.log('database connected')
    }
    finally{
        // await client.close();
    }

}
run().catch(console.dir)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*
one time:
1.install nodemon globally
2.mongodb atlas user,access
3.network access(ip address)

every project
1.install mongodb,cors,express,dotenv
2.import(require),mongodb
3.copy uri(connection string)
4.create the client(copy code from atlas)
5.create and get database access credentials(username,password)
6.create .env file and add DB_USER and DB_PASS as environment varialbe
7.make sure you import env.config
8.converty uri string to template string using (``).add DB_USER and DB_PASS in the connection uri string
9.check uri by console.log
10.create async function and call by its name
11.try and finally inside the run function
12.comment out await client.close() to keep connection alive
13.add await client.connect() inside the try block
14.console.log inside the try to ensure connected your database with the server
*/ 