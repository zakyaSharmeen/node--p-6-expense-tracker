const mongoose = require("mongoose")
const conn = mongoose.connect(process.env.ATLAS_URL)

.then((db)=>{
    console.log("databse connected")
    return db
    
})
.catch((err) =>{
    console.log("err", err);
    
})

module.exports = conn