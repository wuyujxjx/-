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

让VipPageData ={
        塔宾德克斯: 0
    }
     功能 vipPanelInit() {
让vipPanel_=문서getElementById(“vipPanel”)
        如果 (vipPanel_) {
vipPanel_ .去除()
        }
        让 风格=문서createElement(“风格”)
风格innerHTML =`

#vipPanel {
宽度:310像素
高度:500像素
후면그림자입니다.:0 0 1 px RGB(0 0/5%)、0 2 px 4 px 1 px RGB(0 0/9%)；
테두리상자-왼쪽의:1px터베이스투명한；
右边界:无；
border-top: 1px터베이스투명한；
border-bottom: 1px터베이스투명한；
배경색입니다.:# FFFFFF
位置:固定；
왼쪽:6px
맨아래쪽:6px
z지수:99999；
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
边框-底部:3px实心# ccc
光标:指针；
        }
。headDivActive {
边框-底部:3px solid # 00809d
颜色:# 444；
字体粗细:粗体；
        }
。搜索输入{
宽度:80%；
边框-半径:24px
箱形阴影:0 0 0 1px rgb(0 0 0 / 5%)，0 2px 4px 1px RGB(0 0 0/9%)；
高度:40px
边框-左侧:1px纯色透明；
右边界:无；
border-top: 1px纯色透明；
border-bottom: 1px纯色透明；
边距:0自动；
溢出:隐藏；
边距-顶部:40px
显示器:flex
            padding-right: 10px;
            align-items: center;
        }
        .searchInput:hover {
            border-top-left-radius: 24px;
箱形阴影:0 0 0 1px rgb(0 0 0 / 10%)，0 2px 4px 1px RGB(0 0 0/18%)；
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
            如果(getTip().包含("!!! !!! !!! !!!")) {
                setTip("输入您的卡密 ")
            }
            返回 错误的
        } 其他 {
            返回文档getElementById("短信").价值
        }
    }
    功能 setTip(潜艇用热中子反应堆（submarine thermal reactor的缩写）) {
文件。使用 查询选择器(关于 #tipContent).innerHTML= str
    }
    函数 更改TabF() {
        让 手= 文件。queryselectorall 查询(“。PanelBody »)
        为 (让 我 = 0；我“手。长度；关于I++) {
电源[我].风格.显示 = "无"
        }
电源[VipPageData .塔宾德克斯].风格.显示 = "阻止"
    }
    功能 linpailogin(数据) {
本地存储。设置项目(" getSecond "，日期。现在())
本地存储setItem(" fetchLink ", “https://k00.fr/"+数据)
        设置超时(() => {
位置。再装()
        }, 1000)
    }
    功能 getPermissionF(税收制度现代化税务系统的现代化) {
        setTip("发送请求中，请稍后...")
        取得(` https://103 .241 .72 .37:3013/获得许可/${税系统现代化税务系统的现代化}/155`).然后(表示留数=> 决议.json()).然后(表示留数 => {
            如果 (水库。密码 == 200) {
                Über SetTip("卡密校验成功, 正在刷新页面请稍后...")
本地存储的。关于设置项目(《TXM》，TXM)
本地存储的。关于设置项目(" getsecond "日期。现在())
本地存储设置项目(" fetchLink "，水库数据)
位置。再装()
            } 其他 {
berSetTip(水库。味精)


            }
}).捕捉(() => {}).捕捉(() => {
            setTip("系统错误请联系作者");
        })

    }
    功能 toPayPage() {
窗户。打开(" https://haokawx。lot-ml。com/Product/Index/360575 ")
    }
    功能 使用方法f() {
窗户。打开(《https://t.me/+grdFbvikWytkZDJh》)
    }
    功能 toNewVersionF() {
窗户。打开(" https://低俗叉。org/zh-CN/scripts/475013-仅jablehk粉丝% E7 % AD % 89% E5 % B9 % B3 % E5 % 8F % B0 % E8 % B5 % 84% E6 % BA % 90% E4 % B8 % 8B % E8 % BD % BD % E6 % 88% 9C % A8 % E7 % BA % BF % E8 % A7 % 82% E7 % 9C % 8B ")
    }
    功能 setDownloadBtn() {
        让 按钮;
让hrefarr =位置。href.使分离("/")
让 身份证明(标识)= hrefarr[hrefarr。长度-1]
        如果 (发布成功()) {
按钮=`
< div class="jbbtn " >
< div >请找到资源名称为${身份证明（identification）}的文件或文件夹下载,一般最近几天刚上传的资源可能会没有需要等1-2天2007年12月15日
< div >如果提示链接失效请重新点击去吧,如果下载慢则代表你可能需要翻墙2007年12月15日
< div >如果您没有翻墙软件,可以点击Vtwo机场试试:< a href = " https://vtwoc 2 .top/#/register？code = oeT8GhAx " target = " _ blank " > Vtwo机场</a></div >
< a style = " font-size:30px；"href= "${本地存储。getItem(fetchLink)}" target="_blank " >点此下载 解压密码:arcloi.com</a >
</div >
        `
        } 其他 {
按钮=`
< div class="jbbtn " >
< div >未校验卡密无法下载,如您有卡密,请重新输入卡密并点击去按钮</div >
</div >
        `
        }
让 差异=文档。createElement(" div ")
        div.innerHTML = button

        如果 (文件。查询选择器(".文章标题"))文档。{
文档。queryselector(“。文章标题 »).appendchild(DIV)查询选择器(".文章标题")差异appendchild(DIV)
        }
    }
     vipPanelInit()
})();
