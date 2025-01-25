// const express = require("express")
// const cors = require ("cors")
// const routes = require("./routes/route")
// const conn = require("./db/connect")


// require("dotenv").config({path: "./config.env"})
// const port = process.env.PORT || 5000



// const app= express()
// app.use("/api", routes)


// // connection
// conn.then(db =>{
//     if(!db) return process.exit(1)
//     app.listen(port, ()=>{
//         console.log(`server started on port ${port}`);
        
//     })
//     app.on("error", err => console.log("failed to connect"))

    
// })




// app.use(cors())
// app.use(express.json())

// // app.listen(port, ()=>{
// //     console.log(`server started on port ${port}`);
    
// // })


const express = require("express");
const cors = require("cors");
const routes = require("./routes/route");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api", routes);

// Database connection and server start
const con = require("./db/connect")
con.then((db) => {
    if (!db) return process.exit(1)

    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });

    app.on("errr", (err) =>{
        console.log("failed to connect", err);
        
    })
}).catch((err) => {
    console.error("Connection error:", err);
});

