


        //1.初始化数据        
        var hashA = init()
        var keys = hashA['keys']
        var hash = hashA['hash']

        //2.生成键盘
        //遍历keys，生成kbd标签
        generateKeyboard(keys, hash)

        //3.监听用户动作
        listenToUser(hash)

        //下面是我的工具函数
        function getFromLocalStorage(name) {
            return JSON.parse(localStorage.getItem(name) || 'null')
        }

        function tag(tagName) {
            return document.createElement(tagName)
        }

        function createSpan(textContent) {
            var span = tag('span')
            span.textContent = textContent // 0~9 0~8 0~6
            span.className = 'text'
            return span
        }
        function createButton(id) {
            var button = tag('button')
            button.textContent = '编辑'
            button.id = id
            button.onclick = function (sadijfosiadn) {
                var button2 = sadijfosiadn.target
                var img2 = button2.previousSibling
                var key = button2.id  //sadijfosiadn.target用户点击的元素
                var x = prompt('请输入一个网址：')
                hash[key] = x
                img2.src = 'http://' + x + '/favicon.ico'
                img2.onerror = function (lxx) {
                    lxx.target.src = '//i.loli.net/2018/07/02/5b39cf4fc0c59.png'
                }
                localStorage.setItem('zzz', JSON.stringify(hash))

            }
            return button
        }

        function createImage(domain) {
            var img = tag('img')
            if (domain) {
                img.src = domain + '/favicon.ico'
            } else {
                img.src = '//i.loli.net/2018/07/02/5b39cf4fc0c59.png'
            }
            img.onerror = function (lxx) {
                lxx.target.src = '//i.loli.net/2018/07/02/5b39cf4fc0c59.png'
            }
            return img
        }


        function init() {
            var keys = {
                0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
                1: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
                2: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
                length: 3
            }
            var hash = {
                q: 'http://www.quanmin.tv', w: 'http://www.weibo.com', e: undefined, r: 'http://www.ruanyifeng.com',
                t: 'http://www.taobao.com', y: 'http://www.youtube.com', u: undefined, i: 'http://www.iqiyi.com',
                o: 'http://www.oneplusbbs.com', p: 'http://pan.baidu.com', a: 'http://www.apple.com',
                s: 'http://www.shuma.in', d: 'http://www.douyu.com', f: undefined, g: 'http://www.google.com',
                h: 'http://www.huya.com', j: 'http://www.jd.com', k: undefined, l: 'http://www.lagou.com', z: 'http://www.zimuzu.tv',
                x: 'http://xiedaimala.com', c: 'http://www.canton8.com/forum', v: 'http://www.v2ex.com', b: 'http://www.bilibili.com',
                n: 'http://www.nike.com', m: 'http://mail.qq.com',
            }
            //取出localStorage中的lll对应的hash
            var hashInLocalStorage = getFromLocalStorage('zzz')
            if (hashInLocalStorage) {
                hash = hashInLocalStorage
            }
            return {
                "keys": keys,
                "hash": hash
            }
        }

        function generateKeyboard(keys, hash) {
            for (var index = 0; index < keys['length']; index = index + 1) {
                var div = tag('div')
                div.className = 'row'

                main.appendChild(div)

                var row = keys[index] //第一个数组 第二个数组 第三个数组
                for (var index2 = 0; index2 < row['length']; index2 = index2 + 1) {
                    var span = createSpan(row[index2])

                    var button = createButton(row[index2])


                    var img = createImage(hash[row[index2]])

                    var keyboard = tag('kbd')
                    keyboard.className = 'key'

                    keyboard.appendChild(span)
                    keyboard.appendChild(img)
                    keyboard.appendChild(button)

                    div.appendChild(keyboard)
                }
            }
        }

        function listenToUser(hash) {
            document.onkeypress = function (sadijfosiadn) {
                var key = sadijfosiadn['key'] //获取用户按的键
                var website = hash[key] //key对应的网站
                //location.href = website  //当前地址栏的地址，打开网站
                window.open(website, '_blank')
            }
        }
