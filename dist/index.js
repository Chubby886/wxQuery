!function (a, b) { "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.ES6Promise = b() }(this, function () { "use strict"; function a(a) { return "function" == typeof a || "object" == typeof a && null !== a } function b(a) { return "function" == typeof a } function i(a) { g = a } function j(a) { h = a } function p() { return function () { return process.nextTick(v) } } function q() { return "undefined" != typeof f ? function () { f(v) } : t() } function r() { var a = 0, b = new m(v), c = document.createTextNode(""); return b.observe(c, { characterData: !0 }), function () { c.data = a = ++a % 2 } } function s() { var a = new MessageChannel; return a.port1.onmessage = v, function () { return a.port2.postMessage(0) } } function t() { var a = setTimeout; return function () { return a(v, 1) } } function v() { var a, b, c; for (a = 0; e > a; a += 2)b = u[a], c = u[a + 1], b(c), u[a] = void 0, u[a + 1] = void 0; e = 0 } function w() { var a, b; try { return a = require, b = a("vertx"), f = b.runOnLoop || b.runOnContext, q() } catch (c) { return t() } } function y(a, b) { var f, c = arguments, d = this, e = new this.constructor(B); return void 0 === e[A] && $(e), f = d._state, f ? function () { var a = c[f - 1]; h(function () { return W(f, e, a, d._result) }) }() : R(d, e, a, b), e } function z(a) { var c, b = this; return a && "object" == typeof a && a.constructor === b ? a : (c = new b(B), N(c, a), c) } function B() { } function G() { return new TypeError("You cannot resolve a promise with itself") } function H() { return new TypeError("A promises callback cannot return that same promise.") } function I(a) { try { return a.then } catch (b) { return F.error = b, F } } function J(a, b, c, d) { try { a.call(b, c, d) } catch (e) { return e } } function K(a, b, c) { h(function (a) { var d = !1, e = J(c, b, function (c) { d || (d = !0, b !== c ? N(a, c) : P(a, c)) }, function (b) { d || (d = !0, Q(a, b)) }, "Settle: " + (a._label || " unknown promise")); !d && e && (d = !0, Q(a, e)) }, a) } function L(a, b) { b._state === D ? P(a, b._result) : b._state === E ? Q(a, b._result) : R(b, void 0, function (b) { return N(a, b) }, function (b) { return Q(a, b) }) } function M(a, c, d) { c.constructor === a.constructor && d === y && c.constructor.resolve === z ? L(a, c) : d === F ? Q(a, F.error) : void 0 === d ? P(a, c) : b(d) ? K(a, c, d) : P(a, c) } function N(b, c) { b === c ? Q(b, G()) : a(c) ? M(b, c, I(c)) : P(b, c) } function O(a) { a._onerror && a._onerror(a._result), S(a) } function P(a, b) { a._state === C && (a._result = b, a._state = D, 0 !== a._subscribers.length && h(S, a)) } function Q(a, b) { a._state === C && (a._state = E, a._result = b, h(O, a)) } function R(a, b, c, d) { var e = a._subscribers, f = e.length; a._onerror = null, e[f] = b, e[f + D] = c, e[f + E] = d, 0 === f && a._state && h(S, a) } function S(a) { var d, e, f, g, b = a._subscribers, c = a._state; if (0 !== b.length) { for (d = void 0, e = void 0, f = a._result, g = 0; g < b.length; g += 3)d = b[g], e = b[g + c], d ? W(c, d, e, f) : e(f); a._subscribers.length = 0 } } function T() { this.error = null } function V(a, b) { try { return a(b) } catch (c) { return U.error = c, U } } function W(a, c, d, e) { var f = b(d), g = void 0, h = void 0, i = void 0, j = void 0; if (f) { if (g = V(d, e), g === U ? (j = !0, h = g.error, g = null) : i = !0, c === g) return Q(c, H()), void 0 } else g = e, i = !0; c._state !== C || (f && i ? N(c, g) : j ? Q(c, h) : a === D ? P(c, g) : a === E && Q(c, g)) } function X(a, b) { try { b(function (b) { N(a, b) }, function (b) { Q(a, b) }) } catch (c) { Q(a, c) } } function Z() { return Y++ } function $(a) { a[A] = Y++ , a._state = void 0, a._result = void 0, a._subscribers = [] } function _(a, b) { this._instanceConstructor = a, this.promise = new a(B), this.promise[A] || $(this.promise), d(b) ? (this._input = b, this.length = b.length, this._remaining = b.length, this._result = new Array(this.length), 0 === this.length ? P(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && P(this.promise, this._result))) : Q(this.promise, ab()) } function ab() { return new Error("Array Methods must be provided an Array") } function bb(a) { return new _(this, a).promise } function cb(a) { var b = this; return d(a) ? new b(function (c, d) { var f, e = a.length; for (f = 0; e > f; f++)b.resolve(a[f]).then(c, d) }) : new b(function (a, b) { return b(new TypeError("You must pass an array to race.")) }) } function db(a) { var b = this, c = new b(B); return Q(c, a), c } function eb() { throw new TypeError("You must pass a resolver function as the first argument to the promise constructor") } function fb() { throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.") } function gb(a) { this[A] = Z(), this._result = this._state = void 0, this._subscribers = [], B !== a && ("function" != typeof a && eb(), this instanceof gb ? X(this, a) : fb()) } var d, e, f, g, h, k, l, m, n, o, u, x, A, C, D, E, F, U, Y, c = void 0; return c = Array.isArray ? Array.isArray : function (a) { return "[object Array]" === Object.prototype.toString.call(a) }, d = c, e = 0, f = void 0, g = void 0, h = function (a, b) { u[e] = a, u[e + 1] = b, e += 2, 2 === e && (g ? g(v) : x()) }, k = "undefined" != typeof window ? window : void 0, l = k || {}, m = l.MutationObserver || l.WebKitMutationObserver, n = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), o = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, u = new Array(1e3), x = void 0, x = n ? p() : m ? r() : o ? s() : void 0 === k && "function" == typeof require ? w() : t(), A = Math.random().toString(36).substring(16), C = void 0, D = 1, E = 2, F = new T, U = new T, Y = 0, _.prototype._enumerate = function () { var c, a = this.length, b = this._input; for (c = 0; this._state === C && a > c; c++)this._eachEntry(b[c], c) }, _.prototype._eachEntry = function (a, b) { var e, f, c = this._instanceConstructor, d = c.resolve; d === z ? (e = I(a), e === y && a._state !== C ? this._settledAt(a._state, b, a._result) : "function" != typeof e ? (this._remaining-- , this._result[b] = a) : c === gb ? (f = new c(B), M(f, a, e), this._willSettleAt(f, b)) : this._willSettleAt(new c(function (b) { return b(a) }), b)) : this._willSettleAt(d(a), b) }, _.prototype._settledAt = function (a, b, c) { var d = this.promise; d._state === C && (this._remaining-- , a === E ? Q(d, c) : this._result[b] = c), 0 === this._remaining && P(d, this._result) }, _.prototype._willSettleAt = function (a, b) { var c = this; R(a, void 0, function (a) { return c._settledAt(D, b, a) }, function (a) { return c._settledAt(E, b, a) }) }, gb.all = bb, gb.race = cb, gb.resolve = z, gb.reject = db, gb._setScheduler = i, gb._setAsap = j, gb._asap = h, gb.prototype = { constructor: gb, then: y, "catch": function (a) { return this.then(null, a) } }, gb.Promise = gb, wx && (wx.promisify = gb), gb });

!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b()):a.event=b()}(this,function(){function c(a,b,c){if(a&&b){c||console.log("addNotification Warning: no observer will can't remove notice"),console.log("addNotification:"+a);var d={name:a,selector:b,observer:c};e(d)}else console.log("addNotification error: no selector or name")}function d(b,c,d){var e,f;if(a.length>0)for(e=0;e<a.length;e++)if(f=a[e],f.name===b&&f.observer===d)return;this.addNotification(b,c,d)}function e(b){var c,d;if(a.length>0)for(c=0;c<a.length;c++){if(d=a[c],b.name===d.name)return i(d,b)||a.push(b),void 0;a.push(b)}else a.push(b)}function f(b,c){var d,e;for(console.log("removeNotification:"+b),d=0;d<a.length;d++)if(e=a[d],e.name===b&&e.observer===c)return a.splice(d,1),void 0}function g(b){for(var c=0;c<a.length;c++)this.removeNotification(a[c].name,b)}function h(b,c){var d,e;if(console.log("postNotificationName:"+b),0==a.length)return console.log("postNotificationName error: u hadn't add any notice."),void 0;for(d=0;d<a.length;d++)e=a[d],e.name===b&&e.selector(c)}function i(a,b){if(a===b)return!0;if(!(a instanceof Object&&b instanceof Object))return!1;if(a.constructor!==b.constructor)return!1;for(var c in a)if(a.hasOwnProperty(c)){if(!b.hasOwnProperty(c))return!1;if(a[c]===b[c])continue;if("object"!=typeof a[c])return!1;if(!Object.equals(a[c],b[c]))return!1}for(c in b)if(b.hasOwnProperty(c)&&!a.hasOwnProperty(c))return!1;return!0}var a=[],j={addNotification:c,removeNotification:f,postNotificationName:h,addOnceNotification:d,removeAllNotification:g};return wx.exent=j,j});


!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b()):a.implement=b()}(this,function(){function a(){}function f(a){var b=e.call(this,a);return"function"!=typeof a||d.call(a,"callee")?b:b.filter(function(a){return"callee"!==a})}var b="function"==typeof Object.getOwnPropertyNames,c=function(a){return!b||~Object.getOwnPropertyNames(a).indexOf("callee")}(a),d=Object.hasOwnProperty,e=Object.getOwnPropertyNames;return c&&Object.defineProperty(Object,"getOwnPropertyNames",{value:f,configurable:!0,writable:!0}),wx.implement=f,f});


var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t()):e.bletools=t()}(void 0,function(){function e(e){var t="";switch(e){case 0:t="正常";break;case 1e4:t="未初始化蓝牙适配器";break;case 10001:t="当前蓝牙适配器不可用 未初始化蓝牙适配器？ 或是你的手机蓝牙处于关闭状态";break;case 10002:t="没有找到指定设备";break;case 10003:t="连接失败";break;case 10004:t="没有找到指定服务";break;case 10005:t="没有找到指定特征值";break;case 10006:t="当前连接已断开";break;case 10007:t="当前特征值不支持此操作";break;case 10008:t="其余所有系统上报的异常";break;case 10009:t="Android 系统特有，系统版本低于 4.3 不支持 BLE";break;default:t="其他错误 可能本方法定义的错误码已更新不上官方的错误码 也可能是未知错误"}return t}function t(t){for(var o=new ArrayBuffer(t.length),n=new DataView(o),i=0;i<t.length;i++)n.setUint8(i,t[i]);wx.writeBLECharacteristicValue({deviceId:f,serviceId:I.SERUUID,characteristicId:I.WRITEUUID,value:o,success:function(e){N.writeListener(!0)},fail:function(t){N.writeListener(!1,e.getErrorInfo(t.errCode))}})}function o(e){S(),wx.onBluetoothDeviceFound(function(t){var o=t.devices[0],n=o.name;console.log(o.deviceId),(n.toUpperCase().startsWith(I.CONDITION1)||n.toUpperCase().startsWith(I.CONDITION2))&&e.success(o)}),wx.startBluetoothDevicesDiscovery({}),null!=C&&(console.log("有扫描任务在进行 先清除任务"),clearTimeout(C)),C=setTimeout(function(){wx.stopBluetoothDevicesDiscovery({}),C=null},I.SCANTIME)}function n(){wx.openBluetoothAdapter({success:function(e){console.log("初始化蓝牙适配器成功")},fail:function(e){10001==e.errCode&&N.bleStateListener(I.STATE_CLOSE_BLE)}}),wx.onBluetoothAdapterStateChange(function(e){e.discovering?N.bleStateListener(I.STATE_SCANNING):N.bleStateListener(I.STATE_SCANNED)})}function i(e){S();var t=e.deviceId;wx.stopBluetoothDevicesDiscovery({}),f=t,N.bleStateListener(I.STATE_CONNECTING),wx.createBLEConnection({deviceId:t,timeOut:I.CONNECTTIME,fail:function(e){N.bleStateListener(I.STATE_CONNECTING_ERROR),f=null,console.log("连接失败 下面是连接失败原因"),console.dir(e)}}),wx.onBLEConnectionStateChange(function(e){e.connected?(N.bleStateListener(I.STATE_CONNECTED),c(t)):(N.bleStateListener(I.STATE_DISCONNECTED),f=null)})}function c(e){wx.getBLEDeviceServices({deviceId:e,success:function(t){for(var o=t.services,n=0;n<o.length;n++){var i=o[n].uuid;if(I.SERUUID.toUpperCase()===i){console.log("查找服务成功"),I.SERUUID=i,s(e,i);break}}},fail:function(e){console.log("没有找到服务")}})}function s(e,t){wx.getBLEDeviceCharacteristics({deviceId:e,serviceId:t,success:function(t){for(var o=t.characteristics,n=0;n<o.length;n++){var i=o[n].uuid;I.NOTIFYUUID.toUpperCase()===i?(console.log("查找通知服务成功"),I.NOTIFYUUID=i):I.WRITEUUID.toUpperCase()===i&&(console.log("查找写服务成功"),I.WRITEUUID=i)}r(e)}})}function r(e){wx.notifyBLECharacteristicValueChange({deviceId:e,serviceId:I.SERUUID,characteristicId:I.NOTIFYUUID,state:!0,success:function(e){a(),N.bleStateListener(I.STATE_NOTIFY_SUCCESS)},fail:function(e){N.bleStateListener(I.STATE_NOTIFY_FAIL),console.log("开启监听失败 下面是开启监听失败的原因"),console.dir(e)}})}function a(){wx.onBLECharacteristicValueChange(function(e){for(var t=e.value,o=new DataView(t),n=[],i=0;i<o.byteLength;i++)n.push(o.getUint8(i).toString(16));var c=n;N.notifyListener(c)})}function l(){wx.stopBluetoothDevicesDiscovery({})}function T(){wx.closeBluetoothAdapter({success:function(e){console.log("销毁页面 释放适配器资源")}})}function u(e){N=e;try{var t=wx.getSystemInfoSync();E(t.platform,t.version,t.system)}catch(e){}}function E(e,t,o){if("android"===e){o.substring(8,o.length)>="4.3.0"?t>="6.5.7"?n():N.bleStateListener(I.STATE_NOTBLE_WCHAT_VERSION):N.bleStateListener(I.STATE_NOTBLE_SYSTEM_VERSION)}else"ios"===e?t>="6.5.6"?n():N.bleStateListener(I.STATE_NOTBLE_WCHAT_VERSION):console.log("未知系统 请自行探索")}function S(){var e=f;null!=e?(console.log("有设备在连接中"),wx.closeBLEConnection({deviceId:e})):console.log("没有设备在连接中")}var I={NOT_BLE:"嘤嘤嘤 您的蓝牙未打开 请打开你的蓝牙后再进入该页面操作",NOT_PERMISSION1:"嘤嘤嘤 您的系统版本过低 不支持蓝牙的使用",NOT_PERMISSION2:"嘤嘤嘤 您的微信版本过低 不支持蓝牙的使用",SCANING:"设备扫描中...",SCANED:"已停止扫描",ALARM_TITLE:"告警提示",SERUUID:"0000C000-0000-0000-B000-000000000000",NOTIFYUUID:"0000C000-0000-0000-B000-000000000000",WRITEUUID:"0000C000-0000-0000-B000-000000000000",testData1:[1,0,255],STATE_DISCONNECTED:0,STATE_SCANNING:1,STATE_SCANNED:2,STATE_CONNECTING:3,STATE_CONNECTED:4,STATE_CONNECTING_ERROR:6,STATE_NOTIFY_SUCCESS:7,STATE_NOTIFY_FAIL:8,STATE_CLOSE_BLE:9,STATE_NOTBLE_SYSTEM_VERSION:10,STATE_NOTBLE_WCHAT_VERSION:11,CONDITION1:"TK",CONDITION2:"HO",CONNECTTIME:5e3,SCANTIME:5e3},f=null,N=null,C=null,d={writeBle:t,startBle:o,clearBle:T,stopBle:l,joinBle:i,initBle:u,exitBle:S};return wx.bletools=d,d});

(function (global, factory) {
	if (typeof exports === 'object' && typeof module !== 'undefined') { module.exports = factory(); }
	else if (typeof define === 'function' && define.amd) { define(factory()); }
	else { global.wxQuery = factory(); }
}(this, function () {
	var wxapi = wx;
	let Promise = wxapi.promisify;
	let bletools = wxapi.bletools;
	let event_bus = wxapi.event;
	let ownPropertyNames = wxapi.implement;
	var ArrayProto = Array.prototype, ObjectProto = Object.prototype, nativeForEach = ArrayProto.forEach, nativeIndexOf = ArrayProto.indexOf, stringIndexOf = String.indexOf, toStr = ObjectProto.toString;
	var hasOwn = {}.hasOwnProperty;
	let CURRENT_ROUTE = "";
	var _Regexs = {
		phone: /^(?:\+86)?1\d{10}$/,
		phone1: /^(?:\(\d{3,4}\)|\d{3,4}-)?\d{7,8}(?:-\d{1,4})?$/,
		email: /^[-\w\+]+(?:\.[-\w]+)*@[-a-z0-9]+(?:\.[a-z0-9]+)*(?:\.[a-z]{2,})$/i,
		trim: /(^\s*)|(\s*$)/g,
		idcard_15: /^(?:1[1-5]|2[1-3]|3[1-7]|4[1-6]|5[0-4]|6[1-5])\d{4}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}$/,
		idcard_18: /^(?:1[1-5]|2[1-3]|3[1-7]|4[1-6]|5[0-4]|6[1-5])\d{4}(?:1[89]|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}(?:\d|[xX])$/,
		url: /(\w+)=([^&#]*)/igm
	}
	var wxapi = wx;

	/* 小程序的promise没有finally方法，自己扩展下   */
	Promise.prototype.finally = function (callback) {
		var Promise = this.constructor;
		return this.then(function (value) {
			Promise.resolve(callback()).then(function () { return value; });
		}, function (reason) {
			Promise.resolve(callback()).then(function () { throw reason; });
		});
	}
	/**
	* forEach遍历数组
	* @param callback [function] 回调函数；
	* @param context [object] 上下文；
	*/
	function forEach(params, callback, context) {
		var length = params.length;
		if (length === undefined) {
			for (var name in params) {
				if (params.hasOwnProperty(name)) { if (callback.call(params[name], params[name], name) === false) { break; } }
			}
		} else {
			for (var i = 0; i < length; i++) { if (callback.call(params[i], params[i], i) === false) { break; } }
		}
	}
	function wxQuery(selector, context) { return new wxQuery.prototype.elem(selector, context); }
	function promisify(callback) {var that = wxQuery;
		var args = Array.prototype.slice.apply(arguments);var app = args.shift();
		return new Promise((resolve, reject)=>{
			if(that.has(wxapi,callback)){
				if(that.isNotEmpty(args) && args.length>0 && that.is(args[0],"object")){
					var call_data = args[0];
					that.extend(call_data, {
						success: function (res = {cookies=[],data={}} = {}) {
							if (that.DEBUG) { that.log(res); }
							console.log(res)
							if(that.has(res,"data") || that.has(res,"cookies")){
								var res_data = res.data; var res_cookie = res.cookies; 
								if(that.is(res_data,"string")){
									if(/^<[^<>]+>/gm.test(res_data)){
										reject(res,call_data);
										return ;
									}
									res_data = res_data.replace(/\ufeff/g,"");
									res_data = JSON.parse(res_data);
								}
								resolve(res_data,res_cookie);
								return ;
							}
							resolve(res);
						},
						fail: function (res) {  
							if (that.DEBUG) { that.log(res); }  
							res.errMsg = res.errMsg.replace(`${callback}:fail `,"");
							reject(res,call_data); 
						}
					})
				}
				wxapi[callback] && wxapi[callback].apply(that,args);
			}else{
				reject({ "statusCode":404, "errMsg":`${callback} is not function; API is old. ` });
			}
		})
	}
	var old_api =  ["canIUse","getUpdateManager","getLaunchOptionsSync","onPageNotFound","onError","onAudioInterruptionEnd","onAudioInterruptionBegin","onAppShow","onAppHide","offPageNotFound","offError","offAudioInterruptionEnd","offAudioInterruptionBegin","offAppShow","offAppHide","setEnableDebug","getLogManager","reLaunch","navigateBack","showToast","showModal","showLoading","showActionSheet","hideToast","hideLoading","showNavigationBarLoading","setNavigationBarTitle","setNavigationBarColor","hideNavigationBarLoading","setBackgroundTextStyle","setBackgroundColor","showTabBarRedDot","showTabBar","setTabBarStyle","setTabBarItem","setTabBarBadge","removeTabBarBadge","hideTabBarRedDot","hideTabBar","loadFontFace","stopPullDownRefresh","startPullDownRefresh","pageScrollTo","createAnimation","setTopBarText","nextTick","getMenuButtonBoundingClientRect","onWindowResize","offWindowResize","request","downloadFile","uploadFile","sendSocketMessage","onSocketOpen","onSocketMessage","onSocketError","onSocketClose","connectSocket","closeSocket","stopLocalServiceDiscovery","startLocalServiceDiscovery","onLocalServiceResolveFail","onLocalServiceLost","onLocalServiceFound","onLocalServiceDiscoveryStop","offLocalServiceResolveFail","offLocalServiceLost","offLocalServiceFound","offLocalServiceDiscoveryStop","setStorageSync","setStorage","removeStorageSync","removeStorage","getStorageSync","getStorageInfoSync","getStorageInfo","getStorage","clearStorageSync","clearStorage","createMapContext","saveImageToPhotosAlbum","previewImage","getImageInfo","compressImage","chooseMessageFile","chooseImage","saveVideoToPhotosAlbum","createVideoContext","chooseVideo","stopVoice","setInnerAudioOption","playVoice","pauseVoice","getAvailableAudioSources","createInnerAudioContext","createAudioContext","stopBackgroundAudio","seekBackgroundAudio","playBackgroundAudio","pauseBackgroundAudio","onBackgroundAudioStop","onBackgroundAudioPlay","onBackgroundAudioPause","getBackgroundAudioPlayerState","getBackgroundAudioManager","createLivePusherContext","createLivePlayerContext","stopRecord","startRecord","getRecorderManager","createCameraContext","openLocation","getLocation","chooseLocation","updateShareMenu","showShareMenu","hideShareMenu","getShareInfo","createCanvasContext","canvasToTempFilePath","canvasPutImageData","canvasGetImageData","saveFile","removeSavedFile","openDocument","getSavedFileList","getSavedFileInfo","getFileSystemManager","getFileInfo","login","checkSession","navigateToMiniProgram","navigateBackMiniProgram","getAccountInfoSync","getUserInfo","reportMonitor","reportAnalytics","requestPayment","authorize","openSetting","getSetting","chooseAddress","openCard","addCard","chooseInvoiceTitle","chooseInvoice","startSoterAuthentication","checkIsSupportSoterAuthentication","checkIsSoterEnrolledInDevice","getWeRunData","stopWifi","startWifi","setWifiList","onWifiConnected","onGetWifiList","getWifiList","getConnectedWifi","connectWifi","stopBeaconDiscovery","startBeaconDiscovery","onBeaconUpdate","onBeaconServiceChange","getBeacons","addPhoneContact","writeBLECharacteristicValue","readBLECharacteristicValue","onBLEConnectionStateChange","onBLECharacteristicValueChange","notifyBLECharacteristicValueChange","getBLEDeviceServices","getBLEDeviceCharacteristics","createBLEConnection","closeBLEConnection","stopBluetoothDevicesDiscovery","startBluetoothDevicesDiscovery","openBluetoothAdapter","onBluetoothDeviceFound","onBluetoothAdapterStateChange","getConnectedBluetoothDevices","getBluetoothDevices","getBluetoothAdapterState","closeBluetoothAdapter","getBatteryInfoSync","getBatteryInfo","setClipboardData","getClipboardData","stopHCE","startHCE","sendHCEMessage","onHCEMessage","getHCEState","onNetworkStatusChange","getNetworkType","setScreenBrightness","setKeepScreenOn","onUserCaptureScreen","getScreenBrightness","makePhoneCall","stopAccelerometer","startAccelerometer","onAccelerometerChange","stopCompass","startCompass","onCompassChange","stopDeviceMotionListening","startDeviceMotionListening","onDeviceMotionChange","stopGyroscope","startGyroscope","onGyroscopeChange","onMemoryWarning","scanCode","vibrateShort","vibrateLong","createWorker","getExtConfigSync","getExtConfig","createSelectorQuery","createIntersectionObserver"]
	var _wxQuery = {}
	forEach(old_api,function(item,key) {
		if(new RegExp("canI|Sync|onApp|offApp|PageNot|Manager|offAudio|Error|create|onBack|offLocal|onLocal|Window|nextTick|report|onWifi|onGet|onBeacon|onBLE|onBlue|getMenu|Change|onHCE|onUser|Memory","ig").test(item)&&item!='createBLEConnection'&& item!="notifyBLECharacteristicValueChange"){
			_wxQuery[item] = function(){ return `${item} is not function; API is old. ` }
		}else{
			_wxQuery[item] = function(params){
				var args = Array.prototype.slice.apply(arguments);args.unshift(item); 
				return promisify.apply(this,args); 
			}
		}
	})
	forEach(wxapi,function(item,key) {
		if(key!="wxQuery"){
			if(new RegExp("canI|Sync|onApp|offApp|PageNot|Manager|offAudio|Error|create|onBack|offLocal|onLocal|Window|nextTick|report|onWifi|onGet|onBeacon|onBLE|onBlue|getMenu|Change|onHCE|onUser|Memory","ig").test(key)&&key!='createBLEConnection'&& key!="notifyBLECharacteristicValueChange"){
				_wxQuery[key] = item
			}else{
				_wxQuery[key] = function(params){ 
					var args = Array.prototype.slice.apply(arguments);args.unshift(key); 
					return promisify.apply(this,args); 
				}
			}
		}
	})
	function ispage(params) {
		if (wxQuery.is(params, "object")) {
			if (wxQuery.has(params, "__route__")) { return true } 
			else if (wxQuery.has(params, "onShow")) { return true } 
			else if (wxQuery.has(params, "onReady")) { return true } 
			else if (wxQuery.has(params, "onLaunch")) { return true } 
			else if (wxQuery.has(params, "onHide")) { return true }
			return false
		}
		return false
	}
	wxQuery.fn = wxQuery.prototype = {
		elem: function (selector, context) {
			var $context = null; //= wxQuery.page(null,context);
			var _self = (this);
			var params = {};
			var page = wxQuery.page(null,context);
			if (wxQuery.is(selector, "object")) {
				params = wxQuery.extend(true, _self, { e: selector })
				params.selector = null
				params.type = "view"
				if (ispage(selector)) { params.type = "page" }
			} else if (wxQuery.is(selector, "string")) {
				var ele_str = selector || "";
				ele_str = ele_str.replace(new RegExp("#", "ig"), "")
				if (wxQuery.has(page, ele_str + "Elem")) {
					params = wxQuery.extend(true, _self, {
						e: page[page, ele_str + "Elem"],
						type: page[page, ele_str + "Type"],
						selector: page[page, ele_str + "Selector"]
					});
				} else {
					if (!ispage(context)) {
						if (page.selectComponent) {
							params = wxQuery.extend(true, _self, {
								e: page.selectComponent(selector)
							});
						} else {
							params = wxQuery.extend(true, _self, { e: false });
						}
					}
					params.selector = selector || "";
					page[page, ele_str + "Elem"] = params["e"] || null;
					page[page, ele_str + "Type"] = params["type"] || null;
					page[page, ele_str + "Selector"] = params["selector"] || null;
				}
			}
			return params;
		},
		$apply: function (callback, params, params1) {
			if (wxQuery.has(this, "e")) {
				var elem = this.e;
				if (wxQuery.has(elem, callback)) {
					elem[callback].call(elem, params || null, params1 || null)
				}
			}
		},
		get: function (params) {
			return this[params]
		},
		val: function () {
			var elem = this.e;
			return (elem.detail.value) || "";
		},
		id: function () { var elem = this.e; return (elem.currentTarget.id) || ""; },
		data: function (params) {
			var elem = this.e;
			var $dataset, dataset = elem;
			if (wxQuery.has(elem, "currentTarget")) { dataset = elem.currentTarget;}
			if (wxQuery.has(dataset,"dataset")){ $dataset = dataset["dataset"]; }
			if (wxQuery.has(dataset, "data")) { $dataset = dataset["data"]; }
			if (wxQuery.isNotEmpty($dataset)){
				if (wxQuery.isEmpty(params)) { return $dataset; }
				else { return $dataset[params]; }
			}
		},
		offset: function (params) {
			var elem = this.e;
			var $target = elem.currentTarget;
			var $data = { top: $target.offsetTop, left: $target.offsetLeft }
			if (wxQuery.isEmpty(params)) { return $data || {}; }
			else { return $data[params] || null; }
		},
		col: function () {
			var elem = this.e;
			return elem.detail.column || 0;
		},
		current: function () {
			var elem = this.e;
			return elem.detail.current || 0;
		},
		attr: function (params) {
			var that = this;
			params = params.toLowerCase();
			if (params == "data" || params == "dataset") { return that.data(); }
			else if (params == "val" || params == "value" || params == "text") { return that.val(); }
			else if (params == "id") { return that.id(); }
			else if (params == "offset") { return that.offset(); }
			else if (params == "offsetleft" || params == "left") { return that.offset("left"); }
			else if (params == "offsettop" || params == "top") { return that.offset("top"); }
			else if (params == "column" || params == "col") { return that.col(); }
			else if (params == "current") { return that.current(); }
			else if (params == "detail") { var elem = this.e; return elem.detail; }
		}
	}
	wxQuery.prototype.elem.prototype = wxQuery.prototype;
	wxQuery.extend = wxQuery.fn.extend = function () {
		// copy reference to target object
		var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options;
		// Handle a deep copy situation
		if (target.constructor == Boolean) { deep = target; target = arguments[1] || {}; i = 2; }
		// Handle case when target is a string or something (possible in deep copy)
		if (typeof target != "object" && typeof target != "function") { target = {}; }
		// extend jQuery itself if only one argument is passed
		if (length == 1) { target = this; i = 0; }
		for (; i < length; i++) {
			// Only deal with non-null/undefined values
			if ((options = arguments[i]) != null) {
				// Extend the base object
				for (var name in options) {
					// Prevent never-ending loop
					if (target === options[name]) { continue; }
					// Recurse if we're merging object values
					if (deep && options[name] && typeof options[name] == "object" && target[name] && !options[name].nodeType)
						target[name] = wxQuery.extend(target[name], options[name]);
					// Don't bring in undefined values
					else if (options[name] != undefined) { target[name] = options[name]; }
				}
			}
		}
		// Return the modified object
		return target;
	};
	wxQuery.extend(_wxQuery);
	wxQuery.extend({
		DEBUG: false,
		Promise, promisify,
		len:function getLength(o){
			if (this.is(o, 'string')) { return o.length; } 
			else if (this.is(o, 'object')) {
				var n = 0;
				for (var i in o) { n++; }
				return n;
			}
			return false;
		},
		btoa: function btoa(str) {
			function btoa(s) {
				let i;
				s = `${s}`;
				for (i = 0; i < s.length; i++) { if (s.charCodeAt(i) > 255) { return null; } }
				let out = "";
				for (i = 0; i < s.length; i += 3) {
					const groupsOfSix = [undefined, undefined, undefined, undefined];
					groupsOfSix[0] = s.charCodeAt(i) >> 2;
					groupsOfSix[1] = (s.charCodeAt(i) & 0x03) << 4;
					if (s.length > i + 1) {
						groupsOfSix[1] |= s.charCodeAt(i + 1) >> 4;
						groupsOfSix[2] = (s.charCodeAt(i + 1) & 0x0f) << 2;
					}
					if (s.length > i + 2) {
						groupsOfSix[2] |= s.charCodeAt(i + 2) >> 6;
						groupsOfSix[3] = s.charCodeAt(i + 2) & 0x3f;
					}
					for (let j = 0; j < groupsOfSix.length; j++) {
						if (typeof groupsOfSix[j] === "undefined") { out += "="; } 
						else { out += btoaLookup(groupsOfSix[j]); }
					}
				}
				return out;
			}
			function btoaLookup(idx) {
				if (idx < 26) { return String.fromCharCode(idx + "A".charCodeAt(0)); }
				if (idx < 52) { return String.fromCharCode(idx - 26 + "a".charCodeAt(0)); }
				if (idx < 62) { return String.fromCharCode(idx - 52 + "0".charCodeAt(0)); }
				if (idx === 62) { return "+"; }
				if (idx === 63) { return "/"; }
				return undefined;
			}
			return btoa(str);
		},
		atob:function atob(a) {
			function atob(data) {
				data = `${data}`;
				data = data.replace(/[ \t\n\f\r]/g, "");
				if (data.length % 4 === 0) { data = data.replace(/==?$/, ""); }
				if (data.length % 4 === 1 || /[^+/0-9A-Za-z]/.test(data)) { return null; }
				let output = "";
				let buffer = 0;
				let accumulatedBits = 0;
				for (let i = 0; i < data.length; i++) {
					buffer <<= 6;
					buffer |= atobLookup(data[i]);
					accumulatedBits += 6;
					if (accumulatedBits === 24) {
						output += String.fromCharCode((buffer & 0xff0000) >> 16);
						output += String.fromCharCode((buffer & 0xff00) >> 8);
						output += String.fromCharCode(buffer & 0xff);
						buffer = accumulatedBits = 0;
					}
				}
				if (accumulatedBits === 12) {
					buffer >>= 4;
					output += String.fromCharCode(buffer);
				} else if (accumulatedBits === 18) {
					buffer >>= 2;
					output += String.fromCharCode((buffer & 0xff00) >> 8);
					output += String.fromCharCode(buffer & 0xff);
				}
				return output;
			}
			function atobLookup(chr) {
				if (/[A-Z]/.test(chr)) { return chr.charCodeAt(0) - "A".charCodeAt(0); }
				if (/[a-z]/.test(chr)) { return chr.charCodeAt(0) - "a".charCodeAt(0) + 26; }
				if (/[0-9]/.test(chr)) { return chr.charCodeAt(0) - "0".charCodeAt(0) + 52; }
				if (chr === "+") { return 62; }
				if (chr === "/") { return 63; }
				// Throw exception; should not be hit in tests
				return undefined;
			}
			return atob(a)			  
		},
		uuid: function uuid(len, radix) {
			var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-'.split('');
			var uuid = [], i;
			radix = radix || chars.length;
			if (len) {
				// Compact form
				for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
			} else {
				// rfc4122, version 4 form
				var r;
				// rfc4122 requires these characters
				uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
				uuid[14] = '4';
				// Fill in random data. At i==19 set the high bits of clock sequence as
				// per rfc4122, sec. 4.1.5
				for (i = 0; i < 36; i++) {
					if (!uuid[i]) {
						r = 0 | Math.random() * 16;
						uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
					}
				}
			}
			return uuid.join('');
		},
		encode64(str) {
			// first we use encodeURIComponent to get percent-encoded UTF-8,
			// then we convert the percent encodings into raw bytes which
			// can be fed into btoa.
			return this.btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) { return String.fromCharCode('0x' + p1); }));
		},
		decode64(str) {
			// Going backwards: from bytestream, to percent-encoding, to original string.
			return decodeURIComponent(this.atob(str).split('').map(function (c) { return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2); }).join(''));
		},
		_wx_: wxapi,
		is: function is(o, type) {
			var isnan = { "NaN": 1, "Infinity": 1, "-Infinity": 1 }
			type = type.toLowerCase();
			// {"NaN": 1, "Infinity": 1, "-Infinity": 1}.hasOwnProperty(2)   -> false
			// {"NaN": 1, "Infinity": 1, "-Infinity": 1}.hasOwnProperty(NaN) -> true
			if (type == "finite") { return !isnan["hasOwnProperty"](+o); }
			if (type == "array") { return o instanceof Array; }
			if (type == "negint") { return (typeof o === 'number' && o < 0 && Number.isInteger(o)); }
			return (type == "null" && o === null) ||
				// is(undefined,'undefined')
				(type == typeof o && o !== null) ||
				// Object(Object) == Object -> true
				// Object({}) == {}         -> false
				(type == "object" && o === Object(o)) ||
				(type == "array" && Array.isArray && Array.isArray(o)) ||
				Object.prototype.toString.call(o).slice(8, -1).toLowerCase() == type;
		},
		isfn: function (params) {
			var str = toStr.call(params);
			return str === '[object Function]' || str === '[object GeneratorFunction]' || str === '[object AsyncFunction]';
		},
		getNum: function (params, isFilter) {
			isFilter = isFilter || false;
			if (typeof params === "string") {
				var arr = params.match(isFilter ? /[1-9]\d{1,}/g : /\d{2,}/g);
				return arr.map(function (item) { return item; });
			} else { return []; }
		},
		log: function (params) {
			console.log(`日志>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\r\n\r\n`, params, "\r\n\r\n");
		},
		decrypt: function () { },
		each:forEach,
		values: function (params) {
			var that = this, results = [];
			if (that.isEmpty(params)) { return results; }
			that.each(params, function (value) {
				results[results.length] = value;
			});
			return results;
		},
		include: function (params, target) {
			var found = false, that = this;
			if (that.isEmpty(params)) { return found; }
			if (nativeIndexOf && params.indexOf === nativeIndexOf) { return params.indexOf(target) != -1; }
			if (stringIndexOf && params.indexOf === stringIndexOf) { return params.indexOf(target) != -1; }
			that.each(params, function (value) {
				if (found || (found = (value === target))) { return {}; }
			});
			return found;
		},
		find: function (params, target) {
			var found = false, that = this;
			if (that.isEmpty(params)) { return false; }
			else { return params.indexOf(target) > -1; }
		},
		has: function hasProp(obj, prop) {
			if (this.isEmpty(obj) || this.isEmpty(prop)) { return false }
			if (obj[prop]) { return true; }
			return Object.prototype.hasOwnProperty.call(obj, prop);
		},
		keys: function omit(params) {
			return Object.keys(params);
		},
		isEmpty: function isEmpty(params) {
			//console.log(typeof params, params)
			try {
				if (params == null || params == undefined) { return true; }
				//判断数字是否是NaN
				if (typeof params === "number") {
					if (isNaN(params)) { return true; }
					else { return false; }
				}
				//判断参数是否是布尔、函数、日期、正则，是则返回false
				if (typeof params === "boolean" || typeof params === "function" || params instanceof Date || params instanceof RegExp) { return false; }
				//判断参数是否是字符串，去空，如果长度为0则返回true
				if (typeof params === "string") {
					if (params.trim().length == 0) { return true; }
					else { return false; }
				}
				if (typeof params === 'object') {
					//判断参数是否是数组，数组为空则返回true
					if (params instanceof Array) {
						if (params.length == 0) { return true; }
						else { return false; }
					}
					//判断参数是否是对象，判断是否是空对象，是则返回true
					if (params instanceof Object) {
						//判断对象属性个数
						if (ownPropertyNames(params).length == 0) { return true; }
						else { return false; }
					}
				}
			} catch (e) { console.log(e); return false; }
		},
		isNotEmpty: function isNotEmpty(params) {
			return !this.isEmpty(params);
		},
		trim: function (params) { return (val || "").replace(_Regexs.trim, ''); },
		decodeURIComponent: function (val) {
			var result = '';
			try { result = decodeURIComponent(val); }
			catch (e) { result = val; };
			return result;
		},
		toUrl: function (json) {
			var params = this.keys(json).map(function (key) {
				return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
			}).join("&");
			return params;
		},
		obj2url: function (params, data) {
			var that = this;
			//没有参数，直接返回url
			if (that.isEmpty(data)) { return url; }
			let keys = that.keys(data);
			let finalUrl = "";
			//参数没有key 返回url
			if (keys.length == 0) { return url; }
			else {
				//url没有拼接 ？
				if (url.indexOf("?") === -1) {
					finalUrl = keys.reduce((url, key) => { return data + key + "=" + data[key] + "&"; }, data + "?");
				} else {
					//url以 ？ 号结尾
					if (url.endsWith("?")) {
						finalUrl = keys.reduce((url, key) => { return data + key + "=" + data[key] + "&"; }, url);
					} else {
						//url以 & 结尾
						if (url.endsWith("&")) {
							finalUrl = keys.reduce((url, key) => { return data + key + "=" + data[key] + "&"; }, url);
						} else {
							//直接拼接
							finalUrl = keys.reduce((url, key) => { return data + key + "=" + data[key] + "&"; }, params + "&")
						}
					}
				}
			}
			return finalUrl.endsWith("&") ? finalUrl.slice(0, finalUrl.length - 1) : finalUrl;
		},
		paramUrl: function (params,url) {
			// var _decode = wxQuery.decodeURIComponent;
			// var search = url.substring(url.lastIndexOf("?") + 1);
			// var obj = {};
			// var reg = /([^?&=]+)=([^?&=]*)/g;
			// var app = search.replace(reg, function (rs, $1, $2) {
			// 	var name = _decode($1); var val = _decode($2);
			// 	val = String(val); obj[name] = val;
			// 	return rs;
			// });
			// console.log(app)
			// return obj;	
			//没有参数，直接返回url
			if (this.isEmpty(params)) { return url; }
			let keys = Object.keys(params);
			let finalUrl = ""
			//参数没有key 返回url
			if (this.isEmpty(keys)) { return url; } 
			else {
				//url没有拼接 ？
				if (url.indexOf("?") === -1) {
					finalUrl = keys.reduce((url, key) => { return url + key + "=" + params[key] + "&"; }, url + "?");
				} else {
					//url以 ？ 号结尾
					if (url.endsWith("?")) {
						finalUrl = keys.reduce((url, key) => { return url + key + "=" + params[key] + "&"; }, url);
					} else {
						//url以 & 结尾
						if (url.endsWith("&")) {
							finalUrl = keys.reduce((url, key) => { return url + key + "=" + params[key] + "&"; }, url);
						} else {
							//直接拼接
							finalUrl = keys.reduce((url, key) => { return url + key + "=" + params[key] + "&"; }, url + "&")
						}
					}
				}
			}
			return finalUrl.endsWith("&") ? finalUrl.slice(0, finalUrl.length - 1) : finalUrl;
		},
		inArray: function (elem, array) {
			for (var i = 0, length = array.length; i < length; i++)
				if (array[i] == elem)
					return i;

			return -1;
		},
		inArray: function in_array(search, array) {
			for (var i in array) {
				console.log(i)
				if (i == search) {
					return true;
				}
			}
			return false;
		},
		/**
		 * 数字转换特定形式
		 * 1000  -> 1,000
		 * 1500250 -> 1,500,2500
		 * 1000.23 -> 1,000.23
		 */
		formatNumber: (number, isNotHadDecimals) => {
			if (!number) { return '0.00' }
			let str = ''
			if (number < 1000) { return number.toFixed(2) }
			// 判断有没有小数，如果有小数，剔除缓存起来
			const numberToString = '' + number
			const pointIndex = numberToString.indexOf('.')
			const noDecimals = pointIndex > -1 ? numberToString.substring(pointIndex, -1) : numberToString
			let haveDecimals = pointIndex > -1 ? numberToString.substring(pointIndex) : '.00'
			// 补充到两位小数
			if (haveDecimals.length === 1) {
				haveDecimals += '00'
			} else if (haveDecimals.length === 2) {
				haveDecimals += '0'
			} else if (haveDecimals.length === 3) { } else {
				haveDecimals = haveDecimals.substring(0, 3)
			}
			const tmp = noDecimals.split('').reverse()
			const len = tmp.length
			tmp.forEach((v, i) => {
				str += v
				if ((i + 1) % 3 === 0 && i != len - 1) { str += ',' }
			})
			return (str.split('').reverse().join('') + (!isNotHadDecimals ? haveDecimals : ''))
		},
		/** 
		 * js截取字符串，中英文都能用 
		 * @param str：需要截取的字符串 
		 * @param len: 需要截取的长度 
		 */
		$cut: function (str, len) {
			let strlength = 0;
			let strlen = 0;
			let strcut = new String();
			strlen = str.length;
			for (let i = 0; i < strlen; i++) {
				let a = str.charAt(i);
				strlength++;
				//中文字符的长度经编码之后大于4  
				if (escape(a).length > 4) { strlength++; }
				strcut = strcut.concat(a);
				// strcut = strcut.concat("...");
				if (strlength >= len) { return strcut; }
			}
			//如果给定字符串小于指定长度，则返回源字符串；  
			if (strlength < len) { return str; }
		},
		cache: function (params, obj, expires) {
			var that = this;
			if (wxQuery.isEmpty(obj)) {
				return this.getStorage({ key: params }).then(function (res) {
					return (res.data)
				}).catch(function (res) { return null; });
			}
			return this.setStorage({ key: params, data: obj });
		},
		rmCache: function (params) {
			if (wxQuery.isEmpty(params)) {
				return this.clearStorage({ key: params })
			}
			return this.removeStorage({ key: params });
		},
		throttle:function(delay,no_trailing,callback,debounce_mode ) {
			var timeout_id, last_exec = 0;
			if ( typeof no_trailing !== 'boolean' ) { debounce_mode = callback;  callback = no_trailing; no_trailing = undefined; }
			function wrapper() {
				var that = this, elapsed = +new Date() - last_exec, args = arguments;
				function exec() { last_exec = +new Date(); callback.apply( that, args ); };
				function clear() { timeout_id = undefined;  };
				if ( debounce_mode && !timeout_id ) { exec(); }
				timeout_id && clearTimeout( timeout_id );
				if ( debounce_mode === undefined && elapsed > delay ) {exec();} 
				else if ( no_trailing !== true ) {
					timeout_id = setTimeout( debounce_mode ? clear : exec, debounce_mode === undefined ? delay - elapsed : delay );
				}
			};
			return wrapper;
		},
		debounce:function( delay, at_begin, callback ) { return callback === undefined ? this.jq_throttle(delay,at_begin,false):this.jq_throttle(delay,callback,at_begin!==false); }
	})
	wxQuery.extend({
		$servers: {
			ajaxServer: "",
			socketServer: "",
			uploadServer: "",
			downloadServer: ""
		},
		userinfo: function (params = {}) {
			var that = this;
			var app = wxQuery.app();
			var g_data = app.globalData;
			if (that.has(params, "detail")) {
				var _detail = params.detail;
				if (wxQuery.has(_detail,"userInfo")){
					g_data.userInfo = _detail.userInfo
					let userinfo = _detail.userInfo
					that.cache('x-userinfo', userinfo);
					return new Promise(function (resolve, reject) {
						resolve({ userinfo: userinfo, encryptedData: _detail.encryptedData, iv: _detail.iv, signature: _detail.signature })
					})
				} else{
					return that.confirm("本小程序需用户授权，请重新点击按钮授权。", { title: '用户授权', confirmColor: '#F45C43' })
				}
			} else {
				var can_user = that.can('button.open-type.getUserInfo');
				let userinfos = that.getStorageSync('x-userinfo');
				if (that.has(userinfos, 'nickName')) {
					return new Promise(function (resolve, reject) { resolve({ userinfo: userinfos }); })
				} else {
					if (g_data.userInfo) {
						return new Promise(function (resolve, reject) { resolve({ userinfo: g_data.userInfo }); })
					} else if (can_user) {
						// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
						// 所以此处加入 callback 以防止这种情况
						return new Promise(function (resolve, reject) {
							if (app.userInfoReadyCallback) {
								app.userInfoReadyCallback = (res) => { resolve({ userinfo: userinfos }); }
							}
						})
					} else {
						// 在没有 open-type=getUserInfo 版本的兼容处理
						return that.getUserInfo().then(function (res) {
							app.globalData.userInfo = res.userInfo;
							return ({ userinfo: res.userinfo, encryptedData: res.encryptedData, iv: res.iv, signature: res.signature })
						})
					}
				}
			}
		},
		clipbrd: function (params) {
			if(this.isEmpty(params)){ return this.getClipboardData() }
			return this.setClipboardData({data:params.toString()})
		},
		battery:function () { return this.getBatteryInfo() },
		getApp: function () { return getApp() },
		confirm: function (params, data = {}) {
			var _default = {
				title: '温馨提示',
				cancelText: '取消',
				confirmText: '确定',
				confirmColor: '#4986ea',
				cancelColor: '#999999',
				showCancel: true
			}
			if ((this.is(params, "string") || this.is(params, "number"))) { 
				data.content = params.toString(); 
				data = this.extend({}, _default, data); 
			}
			else if (this.is(params, "object") && this.isEmpty(data)) { data = this.extend({}, _default, params); }
			return this.showModal(data);
		},
		alert: function (params, data = {}) { return this.confirm(params, this.extend({}, data, { showCancel: false })); },
		actionSheet: function (list = [], color = "#000000") {
			return this.showActionSheet({ "itemList": list, "itemColor": color });
		},
		loading: function (params = {}) {
			var _default = { "mask": true, "title": "加载中" };
			params = this.extend({}, _default, params);
			return this.showLoading(params);
		},
		scrollTo: function (params = 0, time = 300) {
			return this.pageScrollTo({ "scrollTop": params, "duration": time });
		},
		animation: function (params = {}) {
			var _default = { "duration": 400, timingFunction: "linear", delay: 0, transformOrigin: "50% 50% 0" }
			return this.createAnimation(this.extend({}, _default, params));
		},
		location:function (params){ 
			return this.getLocation({type:params});
			},
		map:function (id,page){ return page?this.createMapContext(id,page):this.createMapContext(id); },
		canvas:function (id,page){ return page?this.createCanvasContext(id,page):this.createCanvasContext(id); },
		video:function (id,page){ return page?this.createVideoContext(id,page):this.createVideoContext(id); },
		audio:function (){ return this.createInnerAudioContext(id); },
		camera:function (){ return this.createCameraContext(id); },
		Scan: function (params = {}) {
			var _default = { "onlyFromCamera": false, scanType: ['barCode', 'qrCode'] }
			return this.scanCode(this.extend({}, _default, params));
		},
		title:function(params){ return this.setNavigationBarTitle({ title: params }); },
		tel: function (params) {
			if ((_Regexs.phone).test(params) || (_Regexs.phone1).test(params)) {
				return this.makePhoneCall({ "phoneNumber": params.toString() });
			}
			else { return this.alert("当前号码有误") }
		},
		addtel: function (params = {}) {
			return this.addPhoneContact(params);
		},
		card: function (params = {}) {
			params = this.extend({}, { cardList: [] }, params);
			return this.openCard(params);
		},
		addcard: function (params = {}) {
			params = this.extend({}, { cardList: [] }, params);
			return this.addCard(params);
		},
		os: function (params) {
			try {
				var { SDKVersion = '0.0.0', brand = "unknow",
					screenWidth, windowWidth, screenHeight, windowHeight, statusBarHeight = 0,
					language, version, platform, system, model
				} = this.getSystemInfoSync();
				var win_info = {
					"sdk": SDKVersion,
					brand: brand == "devtools" ? "unknow" : brand,
					"width": windowWidth, "height": windowHeight, "state": statusBarHeight,
					"lang": language, version, platform, "wxV": system, model
				}
				if (wxQuery.isNotEmpty(params)) { return win_info[params]; }
				else { return win_info; }
			} catch (e) {
				// Do something when catch error
				return {};
			}
		},
		getNetInfo: function () { return this.getNetworkType(); },
		getSystemInfo: function () { return this.getSystemInfo(); },
		system: function () {
			var that = this;
			var getNetInfo = that.getNetInfo()
			var systemInfo = that.getSystemInfo()
			return new Promise(function (resolve, reject) {
				Promise.all([getNetInfo, systemInfo]).then(resolve).catch(reject)
			})
		},
		can: function (params) {
			if (this.canIUse) { return this.canIUse(params); }
			else{ return false; }
		},
		go(url, params ={"islogin":false,"target":"navigateTo"}, page) {
			var $page = this.page(null, page);
			var $route = this.page("route", $page)
			var $prevPage = this.prevPage();
			if (this.isEmpty(url)) { throw Error("You are sure you want to navigate?"); }
			var _pages = __wxConfig.pages;
			
			if (url.startsWith("/pages")) { url = url.substring(1,url.length); }
			var userinfo = this.getStorageSync("x-userinfo")
			if(params.islogin && this.isEmpty(userinfo)){
				params = this.extend({},params,{ redirect:url })
				url = "login/index";
			}

			if(!url.startsWith("pages/")){
				var _length = 0;
				wxQuery.each(_pages,function(item,index){
					if(item.indexOf(url)>-1){ url = item; _length = _length+1; }
				})
				if(_length<1){ throw Error("You are sure you want to navigate?"); }
			}
			var _target = "navigateTo";
			if (/^-[1-9]*/.test(url)) { _target = "navigateBack"; }
			else if (this.has(params, "target")) {
				var p_target = params["target"];
				if (new RegExp("new|open|top|blank|close", "gm").test(p_target)) { _target = "redirectTo"; }
				else if (new RegExp("self|''", "gm").test(p_target)) { _target = "navigateTo"; }
				else if (new RegExp("tab|bar|switch", "gm").test(p_target)) { _target = "switchTab"; }
				else if (/^-[1-9]*/.test(p_target) || new RegExp("back|return|out", "gm").test(p_target)) { _target = "navigateBack"; }
				else if (new RegExp("reLaunch|all|launch", "gm").test(p_target)) { _target = "reLaunch"; }
			}
			
			var _tapbar = __wxConfig.tabBar.list;
			wxQuery.each(_tapbar,function(item,index){
				var pagePath = item.pagePath.replace(/.html$/g, "");
				if(url.startsWith("pages/")){ if(url==pagePath){ _target = "switchTab"; } }
			})
			console.log(url,_target)
			if (/^-[1-9]*/.test(url)) { url = Math.abs(parseInt(url)); } 
			else if (_target != "switchTab") { url = this.paramUrl(params,url) }
			return this[_target]({ url: "/"+url, delta: url});
		},
		getPages: function () {
			var that = this;
			let pages = getCurrentPages();
			return pages
		},
		getPage: function (num) {
			let pages = this.getPages();
			if (this.isEmpty(num)) { num = 0 }
			if (pages.length > 1) { return (pages[pages.length - 1 - num] || pages[0]); }
			return pages[0];
		},
		page: function (callback, page) {
			var params = "";
			if (this.isEmpty(page)) {  page = this.getPage();  }
			if (this.isEmpty(callback)) { return page; }
			if (callback == "data") {
				if (this.has(page, "globalData")) { params = "globalData" }
				else if (this.has(page, "data")) { params = "data" }
			} else if (callback == "route" || callback == "link" || callback == "url") { params = "__route__" }
			else { params = callback; }
			return page[params];
		},
		data: function (params, page){
			var dataset = this.page("data");
			if (this.isNotEmpty(params)){ return dataset[params]; }
			return this.page("data")
		},
		app: function (params) {
			var page = this.getApp();
			return this.page(params, page)
		},
		prevPage: function (params) {
			var page = this.getPage(1);
			return this.page(params, page)
		},
		pay: function (params) {
			var that = this;
			var _default = { 'signType': 'MD5', };
			params = that.extend({}, _default, params);
			return this.requestPayment(params);
		},
		login: function () {
			var wx_login = this.login();
			return wx_login();
		},
		fit: function (params = {}) {
			if (this.getSetting) {
				return this.getSetting();
			}
			else { return new Promise((resolve, reject) => { reject(-1) }) }
		},
		auth: function (params = "scope.userInfo"){
			return new Promise((resolve, reject) => {
				wxapi.getSetting({
					success: (response) => {
						if (response.authSetting[params]) { resolve(true) }
						wxapi.authorize({
							scope: params,
							success: () => { resolve(true) },
							fail: () => { reject(false) }
						})
					}
				})
			})
		},
		update: function () {
			var that = this;
			return new Promise(function (resolve, reject) {
				if (that.getUpdateManager) {
					// 微信版本更新，处理微信缓存问题
					const updateManager = that.getUpdateManager();
					updateManager.onCheckForUpdate(function (res) { console.log("版本是否有更新", res.hasUpdate); resolve(res); })
					updateManager.onUpdateReady((res) => {
						that.confirm("小程序版本已更新，为给您提供更好的服务，请重启升级小程序！", {
							title: '更新提示', cancelText: '稍后再说', confirmText: '立即重启',
							confirmColor: '#FFBF00',
						}).then(function (c_res) { if (c_res.confirm) { updateManager.applyUpdate(); resolve(res); } })
					});
					updateManager.onUpdateFailed((res) => {
						that.alert("新版本下载失败", { title: '更新提示', confirmColor: '#FFBF00', })
							.then(function (a_res) {
								if (a_res.confirm) { updateManager.applyUpdate(); resolve(res); }
							})
					});
				} else {
					reject({ isupdate: !!that.getUpdateManager });
				}
			})

		},
		ajax: function (params) {
			var that = this;
			let wx_token = this.getStorageSync("WX_TOKEN");
			var _default = {
				data: {},
				method: 'POST',
				dataType: "json",
				header: {
					'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
					'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
				},
			}
			let wx_link = that.link || "";
			params = that.extend({}, _default, params);
			var p_link = params.url;
			if (that.isEmpty(p_link)) { wxQuery.log("request: url is null"); return false; }
			else if ( !new RegExp("http:|https:","ig").test(p_link) ) {
				(params.url) = `${wx_link}${p_link}`
			}
			if (wxQuery.isNotEmpty(wx_token)) {
				params.header = that.extend({}, params.header || {}, { "x-Authorization": wx_token })
			}
			return this.request(params);
		},
		get: function ($url, $data = {}, $dataType = "json") {
			return this.ajax({ url: $url, data: $data, method: "GET", dataType: $dataType });
		},
		post: function ($url, $data = {}, $dataType = "json") {
			return this.ajax({ url: $url, data: $data, method: "POST", dataType: $dataType });
		},
		system: function () { return this.getSystemInfo(); },
		saveImg: function ($url) {
			var that = this;
			let wx_token = that.getStorageSync("WX_TOKEN");
			var result = that.saveImageToPhotosAlbum({ filePath: $url }).catch(function ({ errMsg }) {
				console.log(errMsg.indexOf("fail auth deny"))
				if (errMsg.indexOf("fail auth deny") > -1) {
					return that.getSetting().then(function ({ authSetting }) {
						if (!authSetting['scope.writePhotosAlbum']) {
							return that.authorize({ scope: 'scope.writePhotosAlbum', }).then(function () {
								return that.$saveImg($url);
							})
						}
					})
				}
			})
			return result;
		},
		upload: function ($url, localImgs = [], $data = {}) {
			var that = this;
			let result = null;
			let wx_token = that.getStorageSync("WX_TOKEN");
			var _default = {
				name: 'file[]',
				header: { "Content-Type": "multipart/form-data" },
			};
			let wx_link = that.link || "";
			var params = {};
			if (that.isEmpty($url)) {
				that.log("request: url is null")
				return false;
			} else if (($url).indexOf("http") < 0 || ($url).indexOf("https") < 0) {
				(params.url) = `${wx_link}${$url}`
			} else {
				(params.url) = $url
			}
			params = that.extend({}, _default, { formData: $data })
			if (that.isNotEmpty(wx_token)) {
				params.formData = that.extend({}, params.formData, { "x-Authorization": wx_token })
			}
			if (wxQuery.is(localImgs, "string") || (wxQuery.is(localImgs, "array") && localImgs.length == 1)) {
				if (wxQuery.is(localImgs, "string")) {
					params = wxQuery.extend({}, params, { filePath: localImgs });
				} else {
					params = wxQuery.extend({}, params, { filePath: localImgs[0] });
				}
				result = that.uploadFile(params)
			} else {
				var promiseList = localImgs.map((item, a, b, c) => {
					params = wxQuery.extend({}, params, { filePath: item });
					return that.uploadFile(params);
				});
				// 使用Primise.all来执行promiseList
				const result = Promise.all(promiseList).then((res) => {
					// 返回的res是个数据，对应promiseList中请求的结果，顺序与promiseList相同
					// 在这里也就是在线图片的url数组了
					return res;
				}).catch((error) => {
					console.log(error);
				});
			}
			return result;
		},
		download: function (localImgs = []) {
			var that = this;
			let result = null;
			let wx_token = this.getStorageSync("WX_TOKEN");
			var _default = { header: { "Content-Type": "multipart/form-data" } };
			let wx_link = that.link || "";
			var params = {};
			if (that.isEmpty($url)) {
				that.log("request: url is null")
				return false;
			} else if (($url).indexOf("http") < 0 || ($url).indexOf("https") < 0) {
				that.log("request: url is null")
			} else { (params.url) = $url }
			if (that.isNotEmpty(wx_token)) {
				params.header = that.extend({}, params.header, { "x-Authorization": wx_token })
			}
			if (wxQuery.is(localImgs, "string") || (wxQuery.is(localImgs, "array") && localImgs.length == 1)) {
				if (wxQuery.is(localImgs, "string")) {
					params = wxQuery.extend({}, params, { filePath: localImgs });
				} else {
					params = wxQuery.extend({}, params, { filePath: localImgs[0] });
				}
				result = that.downloadFile(params)
			} else {
				var promiseList = localImgs.map((item, a, b, c) => {
					params = wxQuery.extend({}, params, { filePath: item });
					return that.downloadFile(params);
				});
				// 使用Primise.all来执行promiseList
				const result = Promise.all(promiseList).then((res) => {
					// 返回的res是个数据，对应promiseList中请求的结果，顺序与promiseList相同
					// 在这里也就是在线图片的url数组了
					return res;
				}).catch((error) => {
					console.log(error);
				});
			}
			return result;
		},
		tabbar: function (params) {
			var _default = { aniamtion: false };
			var that = this;
			params = that.extend({}, _default, params);
			return that.hideTabBar(params).catch(function () {
				setTimeout(function () { return that.tabbar(params); }, 500);
			});
		},
		className:function classNames() {
			var classes = [];
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
				var argType = typeof arg;
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) { classes.push(inner); }
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) { classes.push(key); }
					}
				}
			}
			return classes.join(' ');
		},
	})
	wxQuery.extend({
		startSoter: function (params){
			var that = this;
			var _default = { requestAuthModes: ["fingerPrint"], authContent:"请用指纹解锁" };
			params = that.extend({}, _default, params);
			return that.startSoterAuthentication(params)
		},
		isSupportSoter:function(){ return this.checkIsSupportSoterAuthenticatio(); },
		isSoterInDevice: function (params) {
			var that = this;
			params = that.extend({}, { checkAuthMode: "fingerPrint" }, { checkAuthMode: params });
			return that.checkIsSoterEnrolledInDevice(params)
		},
		Suppor: function (oname = "fingerPrint", otitle ="请用指纹解锁"){
			var that = this;
			var _default = { code: "404", msg: "您的设备不支持指纹识别" };
			function errorFn(params) {
				params = that.extend({}, _default, params);
				return new Promise(function (resolve, reject) { reject(params) })
			}
			if (this.canIUse("checkIsSupportSoterAuthentication")){
				return this.isSupportSoter().then(function(res){
					if (that.has(res, "supportMode") && that.find(res.supportMode, oname)){
						return that.isSoterInDevice(oname).then(function (res) {
							console.log(res)
							return that.startSoter({ 
								requestAuthModes:[oname], authContent: otitle,
								challenge: '123456',
							}).then(function (res) {
								console.log(res)
							}).catch(function (error) {
								console.log(res)
							})
						}).catch(function (error) {
							console.log(res)
						})
					}else{
						return errorFn({})
					}
				})
			}else{
				return errorFn({})
			}
		}
	})
	wxQuery.extend({
		on: function (name, callback, observer) {
			var $page = wxQuery.page();
			if (wxQuery.isEmpty(observer)) { observer = $page; }
			event_bus.addNotification(name, callback, $page);
		},
		off: function (name, observer) {
			var $page = wxQuery.page();
			if (wxQuery.isEmpty(observer)) { observer = $page; }
			event_bus.removeNotification(name, observer);
		},
		emit: function (name, data) {
			event_bus.postNotificationName(name, data);
		},
		one: function (name, callback, observer) {
			var $page = wxQuery.page();
			if (wxQuery.isEmpty(observer)) { observer = $page; }
			event_bus.addOnceNotification(name, callback, observer);
		},
		clear: function (observer) {
			var $page = wxQuery.page();
			if (wxQuery.isEmpty(observer)) { observer = $page; }
			event_bus.removeAllNotification(observer);
		}
	});
	wxQuery.extend(bletools);
	wxapi.wxQuery = wxQuery;
	//this.uuid = generateUUID;
	return wxQuery;
}));
