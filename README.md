# wxQuery

wxWuery 基于Promise的仿jquery的微信小程序框架

Microsoft Small Program Framework Imitating jQuery Based on Promise and jquery

Promise封装

蓝牙

页面通讯

老旧微信小程序api兼容


app.js 引入 dist/index.js

var $= wx.wxQuery;


Page(.......)



导航


/** 
 * $.go(str1,str2,str3)  
 * @param str1  [String|Number] 包含数字返回 不包含数字是 普通跳转
 * @param str2  [Object]:  url参数
 * @param str3  [Page]：this/当前page
 
   @call :function(){

	$.go([-1,-2,-3.......])  

	$.go("/pages/index/index")
	
	$.go("pages/index/index")  

	$.go("pages/index/index",{target: [navigateBack, reLaunch , self, open, top ]})
	
   }
*/




/** 
 * $.page(str1,str2,str3)  
 * @param str1  [String] 
 * @param str2  [Page]:  this/当前page
 
   @call :function(){

	$.page()	   ==>   Page

	$.page("data")     ==>   Page.data
	
	$.page("route")      ==>   Page.__route__

	$.page([funname])      ==>   Page.[funname]
	
   }
*/



/** 
 * $.app(str1)  
 * @param str1  [Page]:  this/当前page
 
   @call :function(){

	$.app()	              ==>    App

	$.app("data")         ==>    App.globalData

	$.app([funname])      ==>    App.[funname]
	
   }
*/




/** 
 * $.prevPage(str1)  
 * @param str1  [Page]:  this/当前page
 
   @call :function(){

	$.prevPage()	           ==>    prevPage

	$.prevPage("data")         ==>    prevPage.globalData

	$.prevPage([funname])      ==>    prevPage.[funname]
	
   }
*/







/** 
 * $.ajax(str1)   $.get(url,data,datatype)  $.post(url,data,datatype)
 * @param str1  [Object]: 和小程序ajax相同
 
   @call :function(){

	$.prevPage()	           ==>    prevPage

	$.prevPage("data")         ==>    prevPage.globalData

	$.prevPage([funname])      ==>    prevPage.[funname]
	
   }
*/


$.hideTabBar()  解决安卓隐藏的bug


$.tel(phone)   ==>  makePhoneCall
   
$.addtel(params)   ==>  addPhoneContact


$.title(title)  =>  setNavigationBarTitle

 
$.scrollTo(num,time)   =>> pageScrollTo



$.alert  



$.userinfo  = >>

		 if (app.globalData.userInfo) {
		this.setData({
		userInfo: app.globalData.userInfo,
		hasUserInfo: true
		})
		} else if (this.data.canIUse){
		// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
		// 所以此处加入 callback 以防止这种情况
		app.userInfoReadyCallback = res => {
		this.setData({
		  userInfo: res.userInfo,
		  hasUserInfo: true
		})
		}
		} else {
		// 在没有 open-type=getUserInfo 版本的兼容处理
		wx.getUserInfo({
		success: res => {
		  app.globalData.userInfo = res.userInfo
		  this.setData({
		    userInfo: res.userInfo,
		    hasUserInfo: true
		  })
		}
		})
		}




$.isEmpty()


$.each([object,array],function(item,index){})



$.is   



$.encode64  base64编码

$.decode64  base64解码




$._wx_    ==> wx







































$("#footer")     selectComponent










