define(["exports","metal/src/metal"],function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=function(t){function e(t,r,s,o){i(this,e);var u=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return u.blacklist_=s,u.originEmitter_=t,u.pendingEvents_=null,u.proxiedEvents_=null,u.targetEmitter_=r,u.whitelist_=o,u.startProxy_(),u}return r(e,t),s(e,[{key:"addListener_",value:function(t,e){return this.originEmitter_.on(t,e)}},{key:"disposeInternal",value:function(){this.removeListeners_(),this.proxiedEvents_=null,this.originEmitter_=null,this.targetEmitter_=null}},{key:"emitOnTarget_",value:function(){var t;(t=this.targetEmitter_).emit.apply(t,arguments)}},{key:"proxyEvent",value:function(t){this.shouldProxyEvent_(t)&&this.tryToAddListener_(t)}},{key:"removeListeners_",value:function(){if(this.proxiedEvents_){for(var t=Object.keys(this.proxiedEvents_),e=0;e<t.length;e++)this.proxiedEvents_[t[e]].removeListener();this.proxiedEvents_=null}this.pendingEvents_=null}},{key:"setOriginEmitter",value:function(t){var e=this,i=this.originEmitter_&&this.proxiedEvents_?Object.keys(this.proxiedEvents_):this.pendingEvents_;this.originEmitter_=t,i&&(this.removeListeners_(),i.forEach(function(t){return e.proxyEvent(t)}))}},{key:"shouldProxyEvent_",value:function(t){return!(this.whitelist_&&!this.whitelist_[t])&&((!this.blacklist_||!this.blacklist_[t])&&(!this.proxiedEvents_||!this.proxiedEvents_[t]))}},{key:"startProxy_",value:function(){this.targetEmitter_.onListener(this.proxyEvent.bind(this))}},{key:"tryToAddListener_",value:function(t){this.originEmitter_?(this.proxiedEvents_=this.proxiedEvents_||{},this.proxiedEvents_[t]=this.addListener_(t,this.emitOnTarget_.bind(this,t))):(this.pendingEvents_=this.pendingEvents_||[],this.pendingEvents_.push(t))}}]),e}(e.Disposable);t["default"]=o});