const mongoose = require("mongoose");

//const mongoURI =   "mongodb+srv://Shweta12345:Shweta12345@cluster0.0dromtq.mongodb.net/Food_App_MERN?retryWrites=true&w=majority";
const mongoURI =
  "mongodb://Shweta12345:Shweta12345@ac-vuu67yz-shard-00-00.0dromtq.mongodb.net:27017,ac-vuu67yz-shard-00-01.0dromtq.mongodb.net:27017,ac-vuu67yz-shard-00-02.0dromtq.mongodb.net:27017/Food_App_MERN?ssl=true&replicaSet=atlas-14f6kh-shard-0&authSource=admin&retryWrites=true&w=majority";
const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("---", err);
      else {
        console.log("Connected to MongoDB");
        const fetched_data = await mongoose.connection.db.collection(
          "food_items"
        );
        fetched_data.find({}).toArray(async function (err, data) {
          const foodCategory = await mongoose.connection.db.collection(
            "food_Category"
          );
          foodCategory.find({}).toArray(function (err, catData) {
            if (err) console.log(err);
            else {
              global.food_items = data;
              global.foodCategory = catData;
            }
          });

          // if (err) console.log(err);
          // else {
          //   global.food_items = data;
          // }
        });
      }
    }
  );
};

module.exports = mongoDB;
