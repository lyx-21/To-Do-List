exports.getErr = function (err = "server internal error", errcode = 500) {
    // 处理获取数据失败的情况
    return {
        code: errcode,
        msg: err
    }
};


// 返回响应数据成功的格式
exports.getResult = function (result) {
    return {
        code: 0,
        msg: "",
        data: result
    };
};

// 处理成功 失败 数据 响应给 浏览器
exports.asyncHandler = (handler) => {
    return async (req, res, next) => {
        try {
            const result = await handler(req, res, next);
            res.send(exports.getResult(result));
        } catch (err) {
            next(err);
        }
    }
}