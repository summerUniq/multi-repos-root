// 编程题解析一个url，并生成window.location对象包含的域

/**

解析一个url，并生成window.location对象包含的域
location:
{
 href: '包含完整的url',
 origin: '包含协议到pathname之前的内容',
 protocol: 'url使用的协议，包含末尾的:',
 username: '用户名', // 暂时不支持
 password: '密码',  // 暂时不支持
 host: '完整主机名，包含:和端口',
 hostname: '主机名，不包含端口'
 port: '端口号',
 pathname: '服务器上访问资源的路径/开头',
 search: 'query string，?开头',
 hash: '#开头的fragment identifier'
}

@param {string} url 需要解析的url
@return {Object} 包含url信息的对象 */

function parseUrl(url) {
    var result = {};
    var keys = ['href', 'origin', 'protocol', 'host',
        'hostname', 'port', 'pathname', 'search', 'hash'];
    var i, len;
    var regexp = /(([^:]+:)\/\/(([^:\/\?#]+)(:\d+)?))(\/[^?#]*)?(\?[^#]*)?(#.*)?/;

    var match = regexp.exec(url);
    console.info('match=', match);

    if (match) {
        for (i = keys.length - 1; i >= 0; --i) {
            result[keys[i]] = match[i] ? match[i] : '';
        }
    }
    console.info('result=', result);
    return result;
}

parseUrl("http://test.com:8080?name=1&password=2#page1");

function parseUrl1(url) {
    const a = document.createElement('a')
    a.href = url
    return {
        href: url,
        origin: a.origin,
        protocol: a.protocol,
        host: a.host,
        hostname: a.hostname,
        port: a.port,
        pathname: a.pathname,
        search: a.search,
        hash: a.hash,
        params: (function () {
            let ret = {},
                seg = a.search.replace(/^\?/, '').split('&'),
                len = seg.length, i = 0, s
            for (; i < len; i++) {
                if (!seg[i]) {
                    continue
                }
                s = seg[i].split('=')
                ret[s[0]] = decodeURIComponent(s[1])
            }
            return ret
        })()
    }
}