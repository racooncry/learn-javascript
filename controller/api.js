var products = [
    {
        name: "iphone",
        price: 6999
    },
    {
        name: "Kindle",
        price: 888
    }
];

module.exports={
    "GET /api/products":async (ctx,next)=>{
        //设置content-type
        ctx.response.type="application/json";
        ctx.response.body={
            products: products
        };
    },
    'POST /api/products': async (ctx, next) => {
        var p = {
            name: ctx.request.body.name,
            price: ctx.request.body.price
        };
        products.push(p);
        ctx.response.type = 'application/json';
        ctx.response.body = p;
    }

};