const jwt = require("jsonwebtoken");
const secrect = "zwxzwl";
// const cookieKey = "token";

// 颁发jwt
exports.publish = function(res, maxAge = 3600 * 24, info = {}) {
    // 生成jwt令牌 token
    const token = jwt.sign(info, secrect, {
        expiresIn: maxAge,
    });
    // 添加到 cookie
    // res.cookie(cookieKey, token, {
    //     maxAge: maxAge,
    //     path: "/",
    // });
    // 添加其他传输
    res.header("authorization", token);
}

// 认证jwt 
exports.verify = function (req) {
    // 获取 jwt 从什么地方获取 cookie authorization
    // let token;
    // token = req.cookies[cookieKey]; // 在cookie中获取 jwt
    // if(!token) {
    //     // cookie中没有 在authorization获取
    //     token = req.headers.authorization;
    //     if(!token) {
    //         // 还没有 说明 没有token
    //         return null;
    //     }
        let token = req.headers.authorization;
        if (!token) {
            // 没有token 
            return null;
        }
        // authorization: bearer token 格式
        token = token.split(" ");
        token = token.length === 1 ? token[0] : token[1];
    // 拿到 token 验证 jwt
    try {
        const result = jwt.verify(token, secrect);
        return result;
    } catch(err) {
        return null;
    }
}