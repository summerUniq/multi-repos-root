// 1- 打开或创建一个indexDb数据库
let db;

const request = window.indexedDB.open('testDb', 1)

request.onerror = function (event) {
    console.log('无法使用indexDb');
}

request.onsuccess = function (event) {
    db = event.target.result
    console.log('你打开了indexDb');
}

// // 2- 创建一个object store(表)
request.onupgradeneeded = function (event) {
    console.log('upgrade', db);
    db = event.target.result
    let objectStore;
    if (!db.objectStoreNames.contains('test')) {
        objectStore = db.createObjectStore('test', { keyPath: 'id' })
    }
}
// // 3- 创建一个事物来执行数据库操作
function addData(db, storeName, data) {
    let request = db.transaction([storeName], 'readwrite').objectStore(storeName).add(data)

    request.onerror = function (event) {
        console.log('数据写入失败');
    }

    request.onsuccess = function (event) {
        console.log('数据写入成功');
    }

}



