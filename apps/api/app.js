const express = require("express");
const multer = require("multer");
const fs = require("fs/promises");
const sharp = require("sharp");
const cors = require("cors");

const app = express();
const storage = multer.memoryStorage();
const upload = multer({ storage });

const imagesFolderName = './public/images/'

app.use(cors())
app.use(express.static('./public'));

app.get("/", (req, res) => {
    return res.json({ message: "Hello world 🔥🇵🇹" });
});

app.post("/", upload.single("image"), async (req, res) => {
    // fs.access(imagesFolderName, (error) => {
    //     if (error) {
    //         fs.mkdirSync(imagesFolderName);
    //     }
    // });
    const quality = 20
    const { buffer, originalname, mimetype } = req.file;
    const timestamp = new Date().toISOString();
    const ref = `3-png-q${quality}.png`;

    await fs.writeFile(imagesFolderName+originalname, buffer)

    await sharp(buffer)
        .png({ quality })
        .toFile(imagesFolderName + ref);

    // await sharp(buffer).toFile(imagesFolderName + originalname)

    // await sharp(buffer).jpeg({
    //     quality: 20
    // }).toFile(imagesFolderName + ref);

    const link = `http://localhost:3330/${ref}`;
    return res.json({ link });
});



app.listen(3330);