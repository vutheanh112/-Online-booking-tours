router.post('/create_payment_url', function (req, res, next) {
    var ipAddr = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

    var config = require('config');
    var dateFormat = require('dateformat');

    var tmnCode = config.get('vnp_TmnCode');
    var secretKey = config.get('vnp_HashSecret');
    var vnpUrl = config.get('vnp_Url');
    var returnUrl = config.get('vnp_ReturnUrl');

    var date = new Date();

    var createDate = dateFormat(date, 'yyyymmddHHmmss');
    var orderId = dateFormat(date, 'HHmmss');
    var amount = req.body.amount;
    var bankCode = req.body.bankCode;

    var orderInfo = req.body.orderDescription;
    var orderType = req.body.orderType;
    var locale = 'vn';
    var currCode = 'VND';
    var vnp_Params = {};
    vnp_Params['vnp_Version'] = '2';
    vnp_Params['vnp_Command'] = 'pay';
    vnp_Params['vnp_TmnCode'] = '2QXUI4J4';
    // vnp_Params['vnp_Merchant'] = ''
    vnp_Params['vnp_Locale'] = 'vn';
    vnp_Params['vnp_CurrCode'] = 'VND';
    vnp_Params['vnp_TxnRef'] = orderId;
    vnp_Params['vnp_OrderInfo'] = orderInfo;
    vnp_Params['vnp_OrderType'] = orderType;
    vnp_Params['vnp_Amount'] = amount * 100;
    vnp_Params['vnp_ReturnUrl'] = returnUrl;
    vnp_Params['vnp_IpAddr'] = ipAddr;
    vnp_Params['vnp_CreateDate'] = createDate;
    vnp_Params['vnp_BankCode'] = bankCode;

    vnp_Params = sortObject(vnp_Params);

    var querystring = require('qs');
    var signData = secretKey + querystring.stringify(vnp_Params, { encode: false });

    var sha256 = require('sha256');

    var secureHash = sha256(signData);

    vnp_Params['vnp_SecureHashType'] = 'SHA256';
    vnp_Params['vnp_SecureHash'] = secureHash;
    vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: true });

    //Neu muon dung Redirect thi dong dong ben duoi
    res.status(200).json({ code: '00', data: vnpUrl })
    //Neu muon dung Redirect thi mo dong ben duoi va dong dong ben tren
    //res.redirect(vnpUrl)
});
function sortObject(o) {
    var sorted = {},
        key, a = [];

    for (key in o) {
        if (o.hasOwnProperty(key)) {
            a.push(key);
        }
    }

    a.sort();

    for (key = 0; key < a.length; key++) {
        sorted[a[key]] = o[a[key]];
    }
    return sorted;
}