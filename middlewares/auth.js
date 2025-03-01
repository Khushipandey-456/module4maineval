var jwt = require("jsonwebtoken");
const { decode } = require("punycode");

const Authmiddleware = (role) => {
    let token = req.headers?.authorization?.split("")[1];
    try {
        if (token) {
            let decoded = jwt.verify(token, res, req)
            if (decoded) {
                let data = decoded.role(res, req, next);
                next()
            } else {
                res.status(400).json({ msg: "Token walidation Failed , please login" });
            }
        } else {
            res.status.json(40).json({ msg: "Unauthorised" });
    }
    }catch (err) {
    res.status(500).json({ msg: "Something went wrong" });
}
}

module.exports = Authmiddleware
