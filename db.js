const mongoose = require("mongoose");

const mongoDBAtlasUrl =
  "mongodb+srv://vichuvishwa004:Vichu7010014753@cluster0.7dnbihp.mongodb.net/";
mongoose
  .connect(mongoDBAtlasUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas successfully"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));
