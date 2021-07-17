const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static("./dist/webweb"));
app.get("/*", (req, res) =>
res.sendFile("index.html", { root: "dist/webweb/" })
);
app.listen(PORT, () => {
console.log(`Server is now up and running @${PORT}`);
});