// 有8个图片资源的url，已经存储在数组urls中。

// urls类似于['https://image1.png', 'https://image2.png', ....]

// 而且已经有一个函数function loadImg，输入一个url链接，返回一个Promise，该Promise在图片下载完成的时候resolve，下载失败则reject。

// 但有一个要求，任何时刻同时下载的链接数量不可以超过3个。

// 请写一段代码实现这个需求，要求尽可能快速地将所有图片下载完成

var urls = [
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png",
];

function loadImg(url) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = function () {
            console.log("一张图片加载完成");
            resolve(img);
        };
        img.onerror = function () {
            reject(new Error('Could not load image at' + url));
        };
        img.src = url;
    });
}

function limitLoad(urls, hanler, limit) {
    let sequence = [].concat(urls)
    let promises = sequence.splice(0, limit).map((url, index) => {
        return hanler(url).then(() => {
            return index
        })
    })

    return sequence.reduce((pCollect, url) => {
        return pCollect.then(() => { Promise.race(promises) })
            .then((fastestIndex) => {
                promises[fastestIndex] = hanler(url).then(() => {
                    return fastestIndex
                })
            }).catch((err) => {
                console.log(err);
            })
    }, Promise.resolve())
        .then(() => {
            return Promise.all(promises)
        })
}

limitLoad(urls, loadImg, 3)
    .then(res => {
        console.log("图片全部加载完毕");
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    });