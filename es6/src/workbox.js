
if(Reflect.has(navigator, "serivceWorker")){
    window.addEventListener('load', () =>　{
        navigator.serviceWorker.register("/service-worker.js").then(res => {
            console.log("SW 注册成功：", res)
        }).catch(err => {
            console.log("SW 注册失败：", err)
        })
    })
}else{
    console.log("不存在")
}