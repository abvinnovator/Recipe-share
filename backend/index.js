const express = require("express");
const mysql = require("mysql");
const cors = require('cors')
const app = express();
const multer = require('multer');
const path = require('path');
app.use(express.json());
app.use('/Images', express.static(path.join(__dirname, '/Images')));
app.use(cors());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Vamsi@135',
    database: 'react'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.get("/", (req, res) => {
    res.json("hello navigate to recipes");
});

//get
app.get("/recipes", (req, res) => {
    const q = "SELECT * FROM recipes";
    db.query(q, (err, data) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(data);
    });
});
app.get("/Images")
//MULTER
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'Images')
  },
  filename: (req, file, cb) => {
      cb(null, file.originalname)
  }
})
const upload = multer({
  storage: storage,
  limits: { fileSize: '1000000' },
  fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png|gif/
      const mimeType = fileTypes.test(file.mimetype)  
      const extname = fileTypes.test(path.extname(file.originalname))

      if(mimeType && extname) {
          return cb(null, true)
      }
      cb('Give proper files formate to upload')
  }
})

//insert
app.post("/recipes",upload.single('cover'), (req, res) => {
    const q = "INSERT INTO recipes(`title`, `ingred`, `desc`, `cover`) VALUES (?,?,?,?)";
  
    const values = [
      req.body.title,
      req.body.ingred,
      req.body.desc,
      req.file.filename,
    ];

db.query(q, values, (err, result) => {
  if (err) {
    console.error("Error inserting recipe:", err);
    return res.status(500).json({ Error: "Error inserting recipe" });
}
return res.json({ Status: "Success" });
  })
});
//delete
app.delete("/recipes/:id", (req, res) => {
    const recipeId = req.params.id;
    const q = " DELETE FROM recipes WHERE id = ? ";
  
    db.query(q, [recipeId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });
  //update
  app.put("/recipes/:id", (req, res) => {
    const recipeId = req.params.id;
    const q = "UPDATE recipes SET `title`= ?, `ingred`= ?, `desc`= ?, `cover`= ? WHERE id = ?";
  
    const values = [
      req.body.title,
      req.body.ingred,
      req.body.desc,
      req.body.cover,
      recipeId, 
    ];
  
    db.query(q, values, (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
});


app.listen(4000, () => {
    console.log("SQL server started on port 4000");
});