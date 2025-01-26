// const model = require("../models/model");

// async function create_Categories(req, res) {
//   // res.json(" get request coming from controller")

//    const Create = new model.Categories({
//     type: "investement",
//     color: "blue",
//   });

//  await Create.save(function(err){
//     if(!err) return res.json(Create)
//         return res.status(400).json({mssg: `something wrong, ${err}`})
//   })
  
// }

// module.exports = {
//   create_Categories,
// };


const model = require("../models/model");

async function create_Categories(req, res) {
    try {
        const Create = new model.Categories({
            type: req.body.type, 
            color: req.body.color
        });

        // Save the document and wait for the result
        const savedCategory = await Create.save();

        // Respond with the saved document
        return res.status(201).json(savedCategory);
    } catch (err) {
        // Catch and handle errors during the save operation
        return res.status(400).json({ mssg: `Something went wrong: ${err.message}` });
    }
}


async function get_Categories(req, res) {
    try {
        

        // get all the categories data
        let data = await model.Categories.find({})
        let filter = await data.map((v => Object.assign({}, {
            type:v.type,
            color:v.color

        })))

        // return res.status(201).json(data);
        return res.status(201).json(filter);

    } catch (err) {
        return res.status(400).json({ mssg: `Something went wrong: ${err.message}` });
    }
}


async function create_Transations(req, res) {
    let {name, type, amount} = req.body
    try {
        const Create = new model.Transactions({
            name, 
            type,
            amount,
            date: new Date()
        });

        // Save the document and wait for the result
        const savedCategory = await Create.save();

        // Respond with the saved document
        return res.status(201).json(savedCategory);
    } catch (err) {
        // Catch and handle errors during the save operation
        return res.status(400).json({ mssg: `Something went wrong: ${err.message}` });
    }
}
async function get_Transations(req, res) {
    try {
        

        // get all the categories data
        let data = await model.Transactions.find({})
        

        // return res.status(201).json(data);
        return res.status(201).json(data);

    } catch (err) {
        return res.status(400).json({ mssg: `Something went wrong: ${err.message}` });
    }
}

// to dlete

async function delete_Transactions(req, res) {
    try {
        const { _id } = req.body; 

        if (!_id) {
            return res.status(400).json({ mssg: "Transaction ID is required" });
        }

        const result = await model.Transactions.deleteOne({ _id });

        if (result.deletedCount === 0) {
            return res.status(404).json({ mssg: "No transaction found with the provided ID" });
        }

        return res.status(200).json({ mssg: "Transaction deleted successfully" });
    } catch (err) {
        return res.status(500).json({ mssg: `Something went wrong: ${err.message}` });
    }
}


// async function get_Labels(req, res){

//     model.Transactions.aggregate([
//         {
//             $lookup:{
//                 from: "categories",
//                 localField: 'type',
//                 foreignField: "type",
//                 as:"categories_info" 
//             }
//         },
//         {
//             $unwind: {
//                 path: "$categories_info",
//                 preserveNullAndEmptyArrays: false // Exclude documents with no match
//             }
//         }
//     ]).then((data) =>{
//         res.status(200).json(data)
//     }).catch((err) =>{
//         res.status(400).json({mssg: "something wrong", err})

//     })
// }

async function get_Labels(req, res) {
    try {
        const data = await model.Transactions.aggregate([
            {
                $lookup: {
                    from: "categories", //  matches the actual collection name
                    localField: "type", // Field in transactions
                    foreignField: "type", // Field in categories
                    as: "categories_info"
                }
            },
            {
                $unwind: {
                    path: "$categories_info",
                    preserveNullAndEmptyArrays: false // Exclude documents with no match
                }
            }
        ]);

        // If data is empty then msg
        if (!data || data.length === 0) {
            return res.status(404).json({ mssg: "No matching data found" });
        }
        const result = data.map((v=> Object.assign({},{
            _id: v._id,
            name: v.name,
            type: v.type,
            amount: v.amount,
            color: v.categories_info['color']
        })))

        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ mssg: `Something went wrong: ${err.message}` });
    }
}





module.exports = {
    create_Categories,
    get_Categories,
    create_Transations,
    get_Transations,
    delete_Transactions,
    get_Labels
};
