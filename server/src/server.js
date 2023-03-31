"use strict";
const app = require("./app");
require("dotenv").config();
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App running on port http://localhost:${port}`);
});
