var request = require("request");

var options = { method: 'POST',
  url: 'http://mkpservice.moaee.com/booking/',
  headers: 
   { 'Postman-Token': '0c4570e1-1d4e-4317-8771-6f3a43149f55',
     'cache-control': 'no-cache',
     Accept: 'application/json',
     'Content-Type': 'application/json' },
  body: 
   { api_key: 'D92F63F965E1C',
     email: 'youremail@domain.com',
     url: 
      { success: 'http://shippop.com/?success',
        fail: 'http://shippop.com/?fail' },
     data: 
      [ { from: 
           { name: 'ชื่อผู้ส่ง - นามสกุล',
             address: '522 ซอยรัชดาภิเษก 26 ถนนรัชดาภิเษก  แขวงสามเสนนอก เขตห้วยขวาง กรุงเทพมหานคร',
             district: '-',
             state: '-',
             province: '-',
             postcode: '10310',
             tel: '0929053355' },
          to: 
           { name: 'ชื่อผู้รับ นามสกุล',
             address: '522 ซอยรัชดาภิเษก 26 ถนนรัชดาภิเษก  แขวงสามเสนนอก เขตห้วยขวาง กรุงเทพมหานคร',
             district: '-',
             state: '-',
             province: '-',
             postcode: '10310',
             tel: '0929053355' },
          parcel: { name: '-', weight: '1', width: '1', length: '1', height: '1' },
          courier_code: 'THP' } ] },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
