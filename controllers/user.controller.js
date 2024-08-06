const User = require("../models/User.schema")

const createUser = async (req, res) => {

    let { email } = req.body
    let isUser = await User.findOne({ email: email })
    if (isUser) {
        res.send({ message: "User already exists" })
    }
    else {
        let data = await User.create(req.body)
        res.send(data)

    }
}