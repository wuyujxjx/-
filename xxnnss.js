// ==UserScript==
// @name         仙女社福利姬资源下载
// @name:zh-TW   仙女社福利姬資源下載
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  获取仙女社站内所有资源链接，不限次数下载。
// @description:zh-TW  獲取仙女社站內所有資源鏈接，不限次數下載
// @author       You
// @match        https://unidoll.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=unidoll.net
// @grant        none
// @antifeature payment

// ==/UserScript==

(功能() {
    '使用严格';

    让 VipPageData = {
        塔宾德克斯: 0
    }
     功能 vipPanelInit() {
         让 vipPanel_=文档。getElementById(" vipPanel ")
        如果 (vipPanel_) {
vipPanel_。去除()
        }
        让 风格=文档。createElement(“风格”)
风格。innerHTML = `

#vipPanel {
宽度:310px
高度:500px
箱形阴影:0 0 0 1px rgb(0 0 0 / 5%)，0 2px 4px 1px RGB(0 0 0/9%)；
边框-左侧:1px纯色透明；
            border-right: none;
            border-top: 1px solid transparent;
            border-bottom: 1px solid transparent;
            background-color: #FFFFFF;
            position: fixed;
            left: 6px;
            bottom: 6px;
            z-index: 99999;
        }
        .panelHead {
            display: flex;
            border-bottom: 1px solid #ececec;
        }
        .panelHead>div {
            color: #444;
            font-size: 14px;
            padding: 0 10px;
            height: 40px;
            line-height: 40px;
            box-sizing: border-box;
            user-select: none;
            text-align: center;
            width: 76px;
        }
        .panelHead>div:not(.headDivActive):hover {
            border-bottom: 3px solid #ccc;
            cursor: pointer;
        }
        .headDivActive {
            border-bottom: 3px solid #00809d;
            color: #444;
            font-weight: bold;
        }
        .searchInput {
            width: 80%;
            border-radius: 24px;
            box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 2px 4px 1px rgb(0 0 0 / 9%);
            height: 40px;
            border-left: 1px solid transparent;
            border-right: none;
            border-top: 1px solid transparent;
            border-bottom: 1px solid transparent;
            margin: 0 auto;
            overflow: hidden;
            margin-top: 40px;
            display: flex;
            padding-right: 10px;
            align-items: center;
        }
        .searchInput:hover {
            border-top-left-radius: 24px;
            box-shadow: 0 0 0 1px rgb(0 0 0 / 10%), 0 2px 4px 1px rgb(0 0 0 / 18%);
            border-left: 1px solid transparent;
            border-right: none;
            border-top: 1px solid transparent;
            border-bottom: 1px solid transparent;
        }
        .searchInput input {
            flex: 1;
            height: 100%;
            border: 0;
            outline: 0;
            font-size: 16px;
            padding-left: 10px;
        }
        .searchInput .userSearchI {

            width: 30px;
            height: 30px;
            text-align: center;
            box-sizing: border-box;
            line-height: 26px;

        }
        .tipContentBox {
            display:flex;
            color: #71777d;
            font-size: 14px;
            margin: 0 auto;
            margin-top: 20px;
            width: 280px;
        }
        #tipContent {
            width: 0;
            flex: 1;
        }
        .getVipA {
            color: #FFFFFF;
            font-weight: bold;
            background-color: #449fe5;
            height: 100px;
            width: 100px;
            border-radius: 50px;
            text-align: center;
            line-height: 100px;
            margin: 20px auto;
            box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 2px 4px 1px rgb(0 0 0 / 9%);
            user-select: none;
        }
        .getVipA:hover {
            cursor: pointer;
            box-shadow: 0 0 0 0 rgb(0 0 0 / 5%), 0 2px 4px 1px rgb(0 0 0 / 18%);
            -webkit-box-shadow: 0 0 0 0 rgb(0 0 0 / 5%), 0 2px 4px 1px rgb(0 0 0 / 18%);
            -moz-box-shadow: 0 0 0 0 rgba(0,0,0,.05),0 2px 4px 1px rgba(0,0,0,.18);
        }

		@keyframes float {
			0% {
				transform: translateY(0px);
			}
			5% {
				transform: translateY(-10px);
			}
			10%,100% {
				transform: translateY(0px);
			}
		}

		.navy_ {
			position: relative;
		}

		.navy_ span {
			position: relative;
			display: inline-block;
			color: white;
			font-size: 2em;
			animation: float 10s ease-in-out infinite;
			animation-delay: 5s;
		}
        .resolvePro {
            color: #71777d;
            font-size: 14px;
            position: absolute;
            bottom: 10px;
            left: 10px;
        }
        .hiddenPanel {
            left: -310px !important;
        }
        .hiddenBtn,.showBtn {
            position: absolute;
            left: 320px;
            bottom: 20px;
            width: 60px;
            height: 40px;
            line-height: 40px;
            color: black;
            user-select: none;
            background-color: #FFFFFF;
            position: absolute;
            left: 243px;
            bottom: 20px;
        }
        .showBtn {
            left: 320px;
            display: none;
        }
        .hiddenBtn:hover,.showBtn:hover {
            cursor: pointer;
        }
        .panelBody_1 {
            display: none;
        }
        .panelBody_1 p {
            padding: 0 10px;
            font-size: 14px;
            text-indent: 1em;
        }
        .lplogin {
            color: white;
            width: 100px;
            height: 30px;
            display:flex;
            align-items:center;
            justify-content: center;
            cursor: pointer;
            background-color: #449fe5;
            margin: 20px auto;
            border-radius: 30px;
        }
        .newVersionLink {
             text-decoration: underline;
        }
        .sourceList {
            font-size: 14px;
        }
        .jbbtn {
            font-size: 22px;
            font-weight: bold;
            color: red;
        }
        .jbbtn a {
            cursor:pointer;
        }
        `
        document.getElementsByTagName("head")[0].appendChild(style)
        let panel = document.createElement("div")
        panel.setAttribute("id", "vipPanel")
        panel.innerHTML = `
            <div class="hiddenBtn">&lt;&lt;隐藏</div>
            <div class="showBtn">&gt;&gt;显示</div>
            <div class="panelMain">
                <div class="panelHead">
                    <div class="headDivActive">获取权限</div>
                  
                    <div>更多福利</div>
                    <div>TG群聊</div>
                </div>
                <div class="panelBody panelBody_0">
                    <div class="searchInput">
                        <input id="txm" type="text" placeholder="">
                        <div class="userSearchI getVipBtn"><i class="fa fa-search"></i></div>
                    </div>
                    <div class="tipContentBox">
                        <div style="width:50px;">提示: </div>
                        <div id="tipContent">请输入您的卡密以获取资源下载链接</div>
                    </div>
                    <div class="getVipBtn getVipA navy_">
                        <span>G</span>
                        <span>O</span>
                        <span>!</span>
                    </div>

                    <div class="resolvePro">
                    <a class="newVersionLink" target="_blank" href="https://t.me/+grdFbvikWytkZDJh">点我去TG群获取最新版本(需要VPN)</a><br/>
                        填写下面（）内的字符获取权限 <br/>
                       （xf9528966072|QABpBmZGhM）
                    </div>
                </div>
                <div class="panelBody panelBody_1">

                    <div class="searchInput">
                        <input id="lp" type="text" placeholder="请输入令牌(注意不是卡密)">
                        <div class="userSearchI"><i class="el-icon-search"></i></div>
                    </div>
                    <p style="margin-top:10px;text-align:center;">请不要输入没有用的东西，否则下载地址会失效，请点击下方链接获取令牌然后粘贴到上面的输入框后点击登录。</p>
                    <div style="margin-top:20px;text-align:center;" id="swag19"><a class="newVersionLink"  target="_blank"  style="color:#71777E;">点此获取令牌</a></div>
                    <div class="lplogin">登录</div>
                </div>
            </div>
        `
        document.body.appendChild(panel)

         let tabs = document.querySelectorAll(".panelHead>div")
         for (let i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener("click", function() {
                if (tabs[i].innerHTML == "最新版本") {
                    toNewVersionF()
                    return
                }
                if (tabs[i].innerHTML == "TG群聊") {
                    useMethodF()
                    return
                }
                if (tabs[i].innerHTML == "更多福利") {
                    toPayPage()
                    return
                }
                for (let ii = 0; ii < tabs.length; ii++) {
                    tabs[ii].className = ""
                }
                tabs[i].className = "headDivActive"
                VipPageData.tabIndex = i
                changeTabF()
            })
        }

        document.querySelector(".hiddenBtn").addEventListener("click", function() {
            hiddenBtnF()
        })
         document.querySelector("#swag19").addEventListener("click", function() {
            window.open("https://103.241.72.37:5000/file/xns.html")
        })
         document.querySelector(".lplogin").addEventListener("click",function(){
            let lpvalue = document.getElementById("lp").value
            if (lpvalue) {
                linpailogin(lpvalue)
            }

        })
        document.querySelector(".showBtn").addEventListener("click", function() {
            showBtnF()
        })
        let gets = document.querySelectorAll(".getVipBtn")
        for (let i = 0; i < gets.length; i++) {
            gets[i].addEventListener("click", function() {
                if (getTip() == "获取权限中..." || getTip() == "请先登录....") {
                    return
                }
                if (getTxm()) {
                    getPermissionF(getTxm())
                }
            })
        }

        // 读取本地是否有通行码
        if (window.localStorage.getItem("txm") != null && window.localStorage.getItem("txm") != "") {
            document.getElementById("txm").value = window.localStorage.getItem("txm")
        }

        if (isSuccess()) {
            setTip("卡密校验成功，失效请进TG群")
            hiddenBtnF()
        }
        document.querySelector(".logoload")
        let interval = setInterval(() => {
            if (document.querySelector(".logoload")) {
                document.querySelector(".logoload").style.display="none"
                clearInterval(interval)
            }
        }, 1000)
        if (location.href.includes("/id")) {
            setDownloadBtn()
        }

    }
    function hiddenBtnF() {
        document.querySelector(".hiddenBtn").style.display = "none"
        document.querySelector("#vipPanel").className = "hiddenPanel"
        document.querySelector(".showBtn").style.display = "block"
    }
    function showBtnF() {
        document.querySelector(".hiddenBtn").style.display = "block"
        document.querySelector("#vipPanel").className = ""
        document.querySelector(".showBtn").style.display = "none"
    }
    function isSuccess(){
        let second = localStorage.getItem("getSecond")
        if (second) {
            if (Date.now()-second>=1000*60*60*12) {
                localStorage.removeItem("getSecond")
                localStorage.removeItem("fetchLink")
            }
        }
        let link = localStorage.getItem("fetchLink")
        return link?true:false
    }
    function getTip() {
        return document.querySelector("#tipContent").innerHTML
    }
    function getTxm() {
        console.log("222")
        if (!document.getElementById("txm").value) {
            if (getTip().includes("输入您的卡密 ")) {
                setTip(getTip()+"!!! ")
            } else {
                setTip("输入您的卡密 ")
            }
            if(getTip().includes("!!! !!! !!! !!!")) {
                setTip("输入您的卡密 ")
            }
            return false
        } else {
            return document.getElementById("txm").value
        }
    }
    function setTip(str) {
        document.querySelector("#tipContent").innerHTML = str
    }
    function changeTabF() {
        let mains = document.querySelectorAll(".panelBody")
        for (let i = 0; i < mains.length; i ++) {
电源[我].风格.显示 = "无"
        }
电源[VipPageData。塔宾德克斯].风格.显示 = "阻止"
    }
    功能 linpailogin(数据) {
本地存储。setItem(" getSecond "，日期。现在())
        localStorage.setItem("fetchLink", "https://k00.fr/"+data)
        setTimeout(() => {
            location.reload()
        }, 1000)
    }
    功能 getPermissionF(tax systems modernization 税务系统的现代化) {
        Über SetTip("发送请求中，请稍后...")
        取得(HTTPS://103。241 .72 .37:3013/get permission/${tax systems modernization 税务系统的现代化}/155`).然后(表示留数=> res。json()).然后(表示留数 => {
            如果 (水库。密码 == 200) {
                setTip("卡密校验成功, 正在刷新页面请稍后...")
                localStorage.setItem("txm", txm)
                localStorage.设置项目(" getSecond ", Date.现在())
                localStorage.设置项目(" fetchLink ", res.数据)
                location.再装()
            } 其他 {
                关于SetTip(res.msg)


            }
        }).捕捉(() => {
            setTip("系统错误请联系作者");
        })

    }
    function toPayPage() {
        window.open("https://haokawx.lot-ml.com/Product/Index/360575")
    }
    function useMethodF() {
        window.open("https://t.me/+grdFbvikWytkZDJh")
    }
    功能 toNewVersionF() {
窗户。打开(" https://sleazy fork . org/zh-CN/scripts/475013-jablehk-only fans % E7 % AD % 89% E5 % B9 % B3 % E5 % 8F % B0 % E8 % B5 % 84% E6 % BA % 90% E4 % B8 % 8B % E8 % BD % BD % E6 % 88% 9C % A8 % E7 % BA % BF % E8 % A7 % 82% E7 % 9C % 8B ")
    }
    功能 setDownloadBtn() {
        让 按钮;
        让 hrefarr = location.href.使分离("/")
        让 身份证明（identification）= hrefarr[hrefarr。长度-1][hrefarr。长度-1]
        如果 (发布成功()) {
            button = `
< div class="jbbtn " >
< div >请找到资源名称为${id}的文件或文件夹下载,一般最近几天刚上传的资源可能会没有需要等1-2天2007年12月15日
< div >如果提示链接失效请重新点击去吧，如果下载慢则代表你可能需要翻墙2007年12月15日
< div >如果您没有翻墙软件,可以点击Vtwo机场试试:< a href = " https://vtwoc 2 . top/#/register？code = oeT8GhAx " target = " _ blank " > Vtwo机场</a></div >
< a style = " font-size:30px；"href= "${localStorage.getItem('fetchLink')}" target="_blank">点此下载|解压密码:arcloi.com</a>
</div >
        `
        } 其他 {
            button = `
< div class="jbbtn " >
< div >未校验卡密无法下载,如您有卡密,请重新输入卡密并点击去按钮</div >
</div >
        `
        }
        让 差异 = document.createElement(" div ")
        div.innerHTML = button

        如果 (document.查询选择器(".文章标题")) {
            document.querySelector(".article-header").appendChild(div)查询选择器(".文章标题").appendChild(div)
        }
    }
     vipPanelInit()
})();
