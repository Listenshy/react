// const proxy=require("http-proxy-middleWare")
const { createProxyMiddleware } =require("http-proxy-middleWare")
module.exports=function(app){
app.use(
    createProxyMiddleware("/api1",{
        target:"http://localhost:5090",
        changeOrigin:true,
        pathRewrite:{'^/api1':""}
    }),
   
)
}