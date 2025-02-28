const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const db = require("./config/db");

dotenv.config();

const app = express();
//middleware
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

// Global Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
