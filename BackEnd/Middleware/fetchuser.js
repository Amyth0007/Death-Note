var jwt = require('jsonwebtoken');
const JWT_SECRET = "amitisgoodboy";

const fetchuser = (req, res, next) => {
    // get the user from the jwt token and add id to req obkect

    const token = req.header("authtoken");
    if (!token) {
        res.status(401).send({ error: "please add avalid token" })
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    }
    catch (error) {
        res.status(401).send({ error: "ooh bhaishab bohot jyada hawwe mt udo" })
    }
    // const string = jwt.verify(token, JWT_SECRET);
    // req.user = data.user;
}

module.exports = fetchuser;