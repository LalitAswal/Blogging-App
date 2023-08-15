const jwt = require('jsonwebtoken');

console.log('checking post middleware...');

const authentication = (req, res, next)=>{

    try {
console.log('checking post routes');
        
        const authHeader = req.headers['authorization'];
        console.log(authHeader);
        const token = authHeader && authHeader.split(' ')[1];
        console.log(token);
    
        if(!token) {
            return res.status(401).json({ error:`Invalid authorization`})
        }
        const secretKey = process.env.jwtPrivateKey;

        const tokenDecode = jwt.verify(token, secretKey);
        req.email = tokenDecode.email;
        next();
        
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }



}
console.log('checking post middleware');


module.exports = authentication;