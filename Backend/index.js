const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
app.use(cors())
app.use(express.json())
const dns = require("dns");
require("dotenv").config();
dns.setServers(["8.8.8.8", "8.8.4.4"]);

let users = []

app.post('/signup', (req, res) => {

    const { username, password } = req.body

    const exists = users.find(u => u.username === username)

    if (exists) {
        return res.json(false)
    }

    users.push({ username, password })
    return res.json(true)
})

// LOGIN
app.post('/login', (req, res) => {
    const { username, password } = req.body

    const user = users.find(
        u => u.username === username && u.password === password
    )

    if (user) {
        return res.json(true)
    } else {
        return res.json(false)
    }
})



const student = mongoose.model("student", {
    name: String,
    age: Number,
    course: String,
    status: String
}, 'student')



app.post("/details", async (req, res) => {
    try {
        const { name, age, course, status } = req.body

        const newstudent = new student({
            name,
            age: Number(age),
            course,
            status
        })

        await newstudent.save()

        return res.json({ success: true })

    } catch (err) {
        console.log(err)
        return res.status(500).json({ success: false })
    }
})

app.get('/getdata', (req, res) => {

    student.find().then(
        (data) => {
            res.send(data)
        }
    )
})

app.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params

        await student.findByIdAndDelete(id)

        res.json({ success: true })

    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false })
    }
})

app.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params

        await student.findByIdAndUpdate(id, req.body)

        res.json({ success: true })

    } catch (err) {
        res.status(500).json({ success: false })
    }
})


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB error:", err))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server Started...")
})