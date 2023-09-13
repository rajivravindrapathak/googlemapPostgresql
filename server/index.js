const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser');
// const { Client } = require('pg');
const pool = require("./config/db")

require('dotenv').config()
   

const app = express()   
const PORT = process.env.PORT || 2501          

app.use(express.json())  
app.use(cors());    
app.use(bodyParser.json());

// // Replace these with your actual database connection details
// const db = new Client({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT, // Default PostgreSQL port


// });

// db.connect()
// .then(() => console.log('Connected to PostgreSQL'))
// .catch((err) => console.error('Error connecting to PostgreSQL:', err));


app.get("/", (req, res) => {
    res.send("home page")
})
  
// // Correct usage of query method with SQL query text
// db.query('SELECT * FROM your_table_name', (err, result) => {
//   if (err) {
//     console.error('Error executing query:', err);
//     return;
//   }
//   console.log('Query result:', result.rows);
// });

app.post('/locations', async (req, res) => {
    try {
      const { lat, lng, locationname, address } = req.body;

      const newLocation = await pool.query(
        "INSERT  INTO marker ( lat, lng, locationname, address) VALUES($1) RETURNING *",
        { lat, lng, locationname, address }
      );  

      res.status(201).json({ message: 'Location added successfully', newLocation }, newLocation.rows[0] );
    } catch (error) {    
      console.error('Error adding location:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, async ()=> {    
  console.log(`listning on PORT ${PORT}`)
})
