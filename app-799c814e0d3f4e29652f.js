webpackJsonp([1],{0:function(t,e,n){n(171),t.exports=n(183)},36:function(t,e){"use strict";e.__esModule=!0,e.MinColumn=20,e.MaxColumn=30,e.Row=13,e.ExceptHeight=500,e.deX=[-1,1,0,0],e.deY=[0,0,-1,1]},61:function(t,e,n){"use strict";e.__esModule=!0;var r=n(2),o=n(151),a=n(44),i=n(88),c=n(182),s=n(193);e.store=s["default"]({}),e.history=i.syncHistoryWithStore(o.browserHistory,e.store),e.getStore=function(){return e.store};var u=r.createClass({render:function(){return r.createElement(a.Provider,{store:e.store},r.createElement(o.Router,{history:e.history},r.createElement(o.Route,{path:"/",component:c["default"]}),r.createElement(o.Route,{path:"/Snake_React_v2",component:c["default"]})))}});e["default"]=u},93:function(t,e,n){"use strict";e.__esModule=!0;var r=n(20);e.initSnack=r.createAction("init snake"),e.setSnack=r.createAction("set snake"),e.setFood=r.createAction("set food"),e.setSnackDirection=r.createAction("set snake direction"),e.setGameInit=r.createAction("set game init"),e.getCode=r.createAction("get code"),e.clearCode=r.createAction("clear code"),e.setModal=r.createAction("set modal"),e.startGame=r.createAction("start game"),e.endGame=r.createAction("end game"),e.pauseGame=r.createAction("pause game"),e.setVolume=r.createAction("set volume")},94:function(t,e){"use strict";e.__esModule=!0,e.getColumn=function(t){return t.column.get("cnt")}},95:function(t,e){"use strict";e.__esModule=!0,e.getModal=function(t){return t.game.get("modal")}},171:function(t,e){(function(e){!function(e){"use strict";function n(t,e,n,r){var a=e&&e.prototype instanceof o?e:o,i=Object.create(a.prototype),c=new d(r||[]);return i._invoke=u(t,n,c),i}function r(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function o(){}function a(){}function i(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function s(t){function n(e,o,a,i){var c=r(t[e],t,o);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&_.call(u,"__await")?Promise.resolve(u.__await).then(function(t){n("next",t,a,i)},function(t){n("throw",t,a,i)}):Promise.resolve(u).then(function(t){s.value=t,a(s)},i)}i(c.arg)}function o(t,e){function r(){return new Promise(function(r,o){n(t,e,r,o)})}return a=a?a.then(r,r):r()}"object"==typeof e.process&&e.process.domain&&(n=e.process.domain.bind(n));var a;this._invoke=o}function u(t,e,n){var o=k;return function(a,i){if(o===M)throw new Error("Generator is already running");if(o===C){if("throw"===a)throw i;return h()}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var s=l(c,n);if(s){if(s===N)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===k)throw o=C,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=M;var u=r(t,e,n);if("normal"===u.type){if(o=n.done?C:S,u.arg===N)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=C,n.method="throw",n.arg=u.arg)}}}function l(t,e){var n=t.iterator[e.method];if(n===y){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=y,l(t,e),"throw"===e.method))return N;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return N}var o=r(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,N;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=y),e.delegate=null,N):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,N)}function f(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function p(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function m(t){if(t){var e=t[b];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function o(){for(;++n<t.length;)if(_.call(t,n))return o.value=t[n],o.done=!1,o;return o.value=y,o.done=!0,o};return r.next=r}}return{next:h}}function h(){return{value:y,done:!0}}var y,v=Object.prototype,_=v.hasOwnProperty,g="function"==typeof Symbol?Symbol:{},b=g.iterator||"@@iterator",w=g.asyncIterator||"@@asyncIterator",E=g.toStringTag||"@@toStringTag",x="object"==typeof t,O=e.regeneratorRuntime;if(O)return void(x&&(t.exports=O));O=e.regeneratorRuntime=x?t.exports:{},O.wrap=n;var k="suspendedStart",S="suspendedYield",M="executing",C="completed",N={},j={};j[b]=function(){return this};var P=Object.getPrototypeOf,R=P&&P(P(m([])));R&&R!==v&&_.call(R,b)&&(j=R);var A=i.prototype=o.prototype=Object.create(j);a.prototype=A.constructor=i,i.constructor=a,i[E]=a.displayName="GeneratorFunction",O.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},O.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,i):(t.__proto__=i,E in t||(t[E]="GeneratorFunction")),t.prototype=Object.create(A),t},O.awrap=function(t){return{__await:t}},c(s.prototype),s.prototype[w]=function(){return this},O.AsyncIterator=s,O.async=function(t,e,r,o){var a=new s(n(t,e,r,o));return O.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},c(A),A[E]="Generator",A[b]=function(){return this},A.toString=function(){return"[object Generator]"},O.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},O.values=m,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(p),!t)for(var e in this)"t"===e.charAt(0)&&_.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=y),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var i=_.call(o,"catchLoc"),c=_.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&_.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,N):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),N},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),p(n),N}},"catch":function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;p(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:m(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=y),N}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,function(){return this}())},173:function(t,e,n){"use strict";e.__esModule=!0;var r=n(20);e.resetColumn=r.createAction("reset column")},174:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},a=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};e.__esModule=!0;var c=n(2),s=n(25),u=n(44),l=n(36),f=n(177),p=n(173),d=n(93),m=n(36);n(205);var h=function(t){function e(e){var n=t.call(this,e)||this;return n.timer=null,n.foodTimer=null,n.startTimer=null,n.handleResize=function(){var t=window.innerHeight,e=t-l.ExceptHeight,r=Math.floor(e/l.Row),o=r<m.MinColumn?m.MinColumn:r>m.MaxColumn?m.MaxColumn:r;n.setState({start:[{x:o-1,y:0,de:0,pm:1,index:1}]}),n.props.actions.resetColumn(o),n.props.actions.setFood(),n.props.actions.initSnack()},n.getSnakePosition=function(t){var e=t.x,n=t.y;return{transform:"translate("+(15*n+n)+"px, "+(15*e+e)+"px)"}},n.startGame=function(){n.timer&&clearInterval(n.timer),n.foodTimer&&clearInterval(n.foodTimer),n.timer=setInterval(n.goNext,500),n.foodTimer=setInterval(n.setFoodShowOrHide,200)},n.dead=function(){n.props.actions.endGame(),n.props.actions.setGameInit(-1),n.props.actions.initSnack(),n.startTimer=setInterval(n.renderInit,10)},n.goNext=function(){var t=n.props,e=t.snake,r=t.direction,o=t.food,a=e.toJS(),i=o.toJS(),c=n.getNext(a[0],r.get("snake"));return n.isDead(c)?(n.dead(),clearInterval(n.timer),void clearInterval(n.foodTimer)):(a.unshift(c),c.x!==i.x||c.y!==i.y?a.pop():(n.props.actions.getCode(),n.props.actions.setFood()),void n.props.actions.setSnack(a))},n.getNext=function(t,e){var r=n.props,o=r.column,a=r.game,i=t.x+l.deX[e],c=t.y+l.deY[e];return 1===a.get("modal")?{x:i,y:c}:(i>=o&&(i=0),c>=l.Row&&(c=0),i<0&&(i=o-1),c<0&&(c=l.Row-1),{x:i,y:c})},n.setFoodShowOrHide=function(){n.setState({showFood:!n.state.showFood})},n.getNewStartXY=function(t){var e=n.props.column,r={},o=t.x,a=t.y,i=t.de,c=t.pm,s=t.index;return r.x=1===i?o+c:o,r.y=0===i?a+c:a,r.de=i,r.pm=c,r.index=s,r.x===e-s-1&&r.y===s-1&&r.x!==Math.floor(e/2)&&r.y!==Math.floor(l.Row/2)&&(r.index+=1),0===i&&(r.y===l.Row-r.index||r.y===r.index-1&&r.x===s-1)&&(r.de=1),1!==i||r.x!==e-r.index&&r.x!==r.index-1||(r.de=0),r.y===l.Row-r.index&&r.x===e-r.index&&(r.pm=-1),r.y===r.index-1&&r.x===r.index-1&&(r.pm=1),r.x===Math.floor(l.Row/2)&&r.y===Math.floor(l.Row/2)&&(n.props.actions.setGameInit(0),n.startTimer&&clearInterval(n.startTimer)),r},n.renderInit=function(){var t=n.state.start,e=t.length,r=n.getNewStartXY(t[e-1]);t.push(r),n.setState({start:t})},n.state={showFood:!0,start:[{x:n.props.column-1,y:0,de:0,pm:1,index:1}]},n}return r(e,t),e.prototype.isDead=function(t){var e=t.x,n=t.y,r=this.props,o=r.game,a=r.column;if(1===o.get("modal")&&(0===e||0===n||e===a||n===l.Row))return!0;var i=this.props.snake.toJS();return 0!==i.filter(function(t){return t.x===e&&t.y===n}).length},e.prototype.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize),this.startTimer=setInterval(this.renderInit,10)},e.prototype.componentWillReceiveProps=function(t){t.game.get("start")&&!this.props.game.get("start")&&(1===t.game.get("modal")?this.setState({start:[{x:this.props.column-2,y:1,de:0,pm:1,index:2}]}):this.setState({start:[{x:this.props.column-1,y:0,de:0,pm:1,index:1}]}),this.startGame()),!t.game.get("start")&&this.props.game.get("start")&&(clearInterval(this.timer),clearInterval(this.foodTimer)),t.game.get("pause")&&!this.props.game.get("pause")&&(clearInterval(this.timer),clearInterval(this.foodTimer)),!t.game.get("pause")&&this.props.game.get("pause")&&this.startGame(),t.game.get("init")===-1&&this.props.game.get("init")!==-1&&(this.startTimer&&clearInterval(this.startTimer),this.startTimer=setInterval(this.renderInit,10))},e.prototype.componentWillUnmount=function(){clearInterval(this.timer),clearInterval(this.foodTimer),clearInterval(this.startTimer)},e.prototype.render=function(){var t=this,e=this.props,n=e.column,r=e.snake,o=e.food,a=e.game,i=this.state,s=i.showFood,u=i.start,p=a.get("init"),d=a.get("modal");return c.createElement("div",{className:"left"},(0===p||p===-2)&&c.createElement(f["default"],null),[].fill.call(new Array(n),0).map(function(t,e){return[].fill.call(new Array(l.Row),0).map(function(t,r){return 1!==d||0!==e&&0!==r&&e!==n-1&&r!==l.Row-1?c.createElement("div",{className:"cell",key:e*l.Row+r}):c.createElement("div",{className:"cell full-cell",key:e*l.Row+r})})}),1===p&&r.map(function(e,n){return c.createElement("div",{key:n,style:t.getSnakePosition(e.toJS()),className:"cell snake-cell"})}),1===p&&c.createElement("div",{style:this.getSnakePosition(o.toJS()),className:"cell "+(s?"food-o-cell":"food-cell")}),p===-1&&u.map(function(e,n){return c.createElement("div",{key:n,style:t.getSnakePosition(e),className:"cell snake-cell"})}))},e=a([u.connect(function(t){return{column:t.column.get("cnt"),snake:t.snake.get("snake"),food:t.food.get("food"),direction:t.direction,game:t.game}},function(t){return{actions:s.bindActionCreators(o({},p,d),t)}}),i("design:paramtypes",[Object])],e)}(c.Component);e["default"]=h},175:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0;var o=n(2);n(206);var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(){return o.createElement("div",{className:"header"},o.createElement("div",{className:"left"},o.createElement("span",null),o.createElement("div",{className:"cell"}),o.createElement("div",{className:"cell"})),o.createElement("span",null,"SNAKE"),o.createElement("div",{className:"right"},o.createElement("div",{className:"top"},o.createElement("div",{className:"cell"}),o.createElement("div",{className:"cell"}),o.createElement("div",{className:"cell"})),o.createElement("div",{className:"bottom"},o.createElement("div",{className:"cell"}),o.createElement("div",{className:"cell"})),o.createElement("span",null)))},e}(o.Component);e["default"]=a},176:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0;var o=n(2),a=n(141);n(207);var i=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handleClick=function(t){e.props.handleKeyDown(t)},e}return r(e,t),e.prototype.render=function(){return o.createElement("div",{className:"keyboard"},o.createElement("div",{className:"left"},o.createElement("div",{className:"top"},o.createElement("ul",null,o.createElement("li",null,o.createElement("button",{onClick:this.handleClick.bind(null,1)}),o.createElement(a,{name:"volume-off"})),o.createElement("li",null,o.createElement("button",{onClick:this.handleClick.bind(null,3)}),o.createElement(a,{name:"cog"})),o.createElement("li",null,o.createElement("button",{onClick:this.handleClick.bind(null,4)}),o.createElement(a,{name:"pause"})),o.createElement("li",null,o.createElement("button",{onClick:this.handleClick.bind(null,0)}),o.createElement(a,{name:"undo"})))),o.createElement("div",{className:"bottom"},o.createElement("ul",null,o.createElement("li",null,o.createElement("button",{onClick:this.handleClick.bind(null,2)}),o.createElement(a,{name:"play"}))))),o.createElement("div",{className:"right"},o.createElement("div",{className:"direction"},o.createElement("div",{className:"top"},o.createElement("button",{onClick:this.handleClick.bind(null,38)},o.createElement(a,{name:"angle-double-up"}))),o.createElement("div",{className:"center"},o.createElement("button",{onClick:this.handleClick.bind(null,37)},o.createElement(a,{name:"angle-double-left"})),o.createElement("div",{className:"icon"},o.createElement("div",{className:"top"},o.createElement(a,{name:"caret-up"})),o.createElement("div",{className:"center"},o.createElement(a,{name:"caret-left"}),o.createElement(a,{name:"caret-right"})),o.createElement("div",{className:"bottom"},o.createElement(a,{name:"caret-down"}))),o.createElement("button",{onClick:this.handleClick.bind(null,39)},o.createElement(a,{name:"angle-double-right"}))),o.createElement("div",{className:"bottom"},o.createElement("button",{onClick:this.handleClick.bind(null,40)},o.createElement(a,{name:"angle-double-down"}))))))},e}(o.Component);e["default"]=i},177:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0;var o=n(2);n(208);var a=function(t){function e(){var e=t.call(this)||this;return e.timeout=null,e.animate=function(){clearTimeout(e.timeout),e.setState({style:"r1",display:"none"});var t="r",n=0,r=function(t,n){t&&(e.timeout=setTimeout(t,n))},o=function(t){r(function(){e.setState({display:"block"}),t&&t()},150)},a=function(t){r(function(){e.setState({display:"none"}),t&&t()},150)},i=function(n,o,a){r(function(){e.setState({style:t+2}),r(function(){e.setState({style:t+1}),n&&n()},a)},o)},c=function(o){r(function(){e.setState({style:t+4}),r(function(){return e.setState({style:t+3}),n++,10!==n&&20!==n&&30!==n||(t="r"===t?"l":"r"),n<40?void c(o):(e.setState({style:t+1}),void(o&&r(o,4e3)))},100)},100)},s=function(){n=0,i(function(){i(function(){i(function(){e.setState({style:t+2}),c(s)},150,150)},150,150)},1e3,1500)};o(function(){a(function(){o(function(){a(function(){o(function(){s()})})})})})},e.state={style:"r1",display:"none"},e}return r(e,t),e.prototype.componentWillMount=function(){this.animate()},e.prototype.componentWillUnmount=function(){clearTimeout(this.timeout)},e.prototype.render=function(){return o.createElement("div",{className:"logo",style:{display:this.state.display}},o.createElement("div",{className:"bg dragon "+this.state.style}),o.createElement("p",null,"贪吃蛇"))},e}(o.Component);e["default"]=a},178:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0;var o=n(2);n(209);var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.shouldComponentUpdate=function(t){var e=t.data;return e!==this.props.data},e.prototype.render=function(){return o.createElement("div",{className:"bg music "+(this.props.data?"c":"")+" "})},e}(o.Component);e["default"]=a},179:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0;var o=n(2);n(210);var a=function(t){return t<10?("0"+t).split(""):(""+t).split("")},i=function(t){function e(){var e=t.call(this)||this;return e.timeInterval=null,e.time_count=null,e.state={time_count:!1,time:new Date},e}return r(e,t),e.prototype.componentWillMount=function(){var t=this;if(this.props.time){var e=function(){var n=+t.timeInterval;t.timeInterval=setTimeout(function(){t.setState({time:new Date,time_count:n}),e()},1e3)};e()}},e.prototype.shouldComponentUpdate=function(t){var e=t.number;return this.props.time?this.state.time_count!==this.time_count&&(this.state.time_count!==!1&&(this.time_count=this.state.time_count),!0):this.props.number!==e},e.prototype.componentWillUnmount=function(){this.props.time&&clearTimeout(this.timeInterval)},e.prototype.render=function(){if(this.props.time){var t=this.state.time,e=a(t.getHours()),n=a(t.getMinutes()),r=t.getSeconds()%2,i=e.concat(r?"d":"d_c",n);return o.createElement("div",{className:"number"},i.map(function(t,e){return o.createElement("span",{className:"bg s_"+t,key:e})}))}for(var c=(""+this.props.number).split(""),s=this.props.length?this.props.length:6,u=0,l=s-c.length;u<l;u++)c.unshift("n");return o.createElement("div",{className:"number"},c.map(function(t,e){return o.createElement("span",{className:"bg s_"+t,key:e})}))},e}(o.Component);e["default"]=i},180:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0;var o=n(2);n(211);var a=function(t){function e(){var e=t.call(this)||this;return e.timeout=null,e.state={showPause:!1},e}return r(e,t),e.prototype.componentDidMount=function(){this.setShake(this.props.data)},e.prototype.componentWillReceiveProps=function(t){var e=t.data;this.setShake(e)},e.prototype.shouldComponentUpdate=function(t){var e=t.data;return!!e||e!==this.props.data},e.prototype.setShake=function(t){var e=this;t&&!this.timeout&&(this.timeout=setInterval(function(){e.setState({showPause:!e.state.showPause})},250)),!t&&this.timeout&&(clearInterval(this.timeout),this.setState({showPause:!1}),this.timeout=null)},e.prototype.render=function(){return o.createElement("div",{className:"bg pause "+(this.state.showPause?"c":"")})},e}(o.Component);e["default"]=a},181:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i};e.__esModule=!0;var a=n(2),i=n(25),c=n(44),s=n(179),u=n(178),l=n(180),f=n(408),p=n(407),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(){var t=this.props.game;return a.createElement("div",{className:"right"},a.createElement("div",{className:"record"},a.createElement("label",null,"分数："),a.createElement(s["default"],{number:t.get("code")}),a.createElement("img",{src:f})),a.createElement("div",{className:"level"},a.createElement("label",null,"模式"),a.createElement(s["default"],{number:t.get("modal")})),a.createElement("div",{className:"set"},a.createElement(u["default"],{data:!t.get("volume")}),a.createElement(l["default"],{data:t.get("pause")})),a.createElement("div",{className:"time"},a.createElement("img",{src:p}),a.createElement(s["default"],{time:!0})))},e=o([c.connect(function(t){return{game:t.game}},function(t){return{actions:i.bindActionCreators({},t)}})],e)}(a.Component);e["default"]=d},182:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},a=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};e.__esModule=!0;var c=n(2),s=n(25),u=n(44),l=n(175),f=n(176),p=n(181),d=n(174),m=n(93);n(212);var h=function(t){function e(e){var n=t.call(this,e)||this;return n.handling=!1,n.handleKeyDown=function(t){if(!n.handling){n.handling=!0;var e=n.props.game.get("init");if(1===t)n.props.actions.setVolume();else if(0===e)2===t||0===t?(n.props.actions.setGameInit(1),n.props.actions.clearCode(),n.props.actions.startGame()):3===t&&n.props.actions.setGameInit(-2);else if(1===e){var r=n.props.direction.get("snake");38===t&&1!==r?r=0:40===t&&0!==r?r=1:37===t&&3!==r?r=2:39===t&&2!==r?r=3:32===t?n.props.actions.pauseGame():4===t?n.props.actions.pauseGame({pause:!0}):2===t?(n.props.actions.pauseGame({pause:!1}),n.props.actions.startGame()):0!==t||n.props.game.get("pause")||(n.props.actions.endGame(),n.props.actions.setGameInit(-1),n.props.actions.initSnack(),setTimeout(n.handleKeyDown.bind(null,2),0)),n.props.actions.setSnackDirection(r)}else e===-2?37===t||39===t?n.props.actions.setModal():2===t&&(n.props.actions.setGameInit(1),n.props.actions.startGame()):e===-1&&2===t&&setTimeout(n.handleKeyDown.bind(null,2),0);setTimeout(n.resetHandle,250)}},n.resetHandle=function(){n.handling=!1},n.keyDown=function(t){var e=t.nativeEvent.keyCode;n.handleKeyDown(e)},n}return r(e,t),e.prototype.render=function(){return c.createElement("div",{className:"app",onKeyDown:this.keyDown,tabIndex:0},c.createElement("div",{className:"layout"},c.createElement(l["default"],null),c.createElement("div",{className:"content"},c.createElement("div",{className:"main"},c.createElement("div",{className:"screen"},c.createElement(d["default"],null),c.createElement(p["default"],null)))),c.createElement(f["default"],{handleKeyDown:this.handleKeyDown})))},e=a([u.connect(function(t){return{direction:t.direction,game:t.game,column:t.column.get("column")}},function(t){return{actions:s.bindActionCreators(o({},m),t)}}),i("design:paramtypes",[Object])],e)}(c.Component);e["default"]=h},183:function(t,e,n){"use strict";e.__esModule=!0,n(171);var r=n(2),o=n(49),a=n(61),i=n(341);n(213);var c=document.getElementById("root");o.render(r.createElement(i.AppContainer,null,r.createElement(a["default"],null)),c)},184:function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t){return function(t){return function(e){return console.log(e),t(e)}}}},185:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0;var o=n(20),a=n(27),i=n(36),c=a.Record({cnt:i.MinColumn}),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e}(c);e.IColumn=s;var u=new s;e["default"]=o.handleActions({"reset column":function(t,e){var n=e.payload<i.MinColumn?i.MinColumn:e.payload>i.MaxColumn?i.MaxColumn:e.payload;return t.set("cnt",n)}},u)},186:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0;var o=n(20),a=n(27),i=a.Record({snake:3}),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e}(i);e.IDirection=c;var s=new c;e["default"]=o.handleActions({"set snake direction":function(t,e){return t.set("snake",e.payload)},"init snake":function(t){return t.set("snake",3)}},s)},187:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0;var o=n(20),a=n(27),i=n(36),c=n(61),s=n(94),u=n(95),l=12,f=1;setTimeout(function(){l=s.getColumn(c.getStore().getState()),f=u.getModal(c.getStore().getState())});var p=1===f?3:1,d=Math.floor(Math.random()*(l-p))+1,m=Math.floor(Math.random()*(i.Row-p))+1;0===f?(console.assert(d>=0&&d<l,"bad assert modal:"+f+", x:"+d),console.assert(m>=0&&m<i.Row,"bad assert modal:"+f+", x:"+m)):(console.assert(1===f&&d>=1&&d<l-1,"bad assert modal:"+f+", x:"+d),console.assert(1===f&&m>=1&&m<i.Row-1,"bad assert modal:"+f+", x:"+m));var h=a.Record({food:a.fromJS({x:d,y:m})}),y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e}(h);e.IFood=y;var v=new y;e["default"]=o.handleActions({"set food":function(t){void 0===t&&(t=v);var e=u.getModal(c.getStore().getState()),n=1===e?3:1,r=Math.floor(Math.random()*(l-n))+1,o=Math.floor(Math.random()*(i.Row-n))+1,s={x:r,y:o};return t.set("food",a.fromJS(s))}},v)},188:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0;var o=n(20),a=n(27),i=a.Record({init:-1,code:0,modal:0,start:!1,pause:!1,volume:!0}),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e}(i);e.IGame=c;var s=new c;e["default"]=o.handleActions({"set game init":function(t,e){return t.set("init",e.payload)},"get code":function(t){return t.set("code",t.get("code")+1)},"clear code":function(t){return t.set("code",0)},"set modal":function(t,e){var n=t.get("modal");return t.set("modal",n?0:1)},"start game":function(t){return t.set("start",!0)},"end game":function(t){return t.set("start",!1)},"pause game":function(t,e){return t.set("pause",e.payload?e.payload.pause:!t.get("pause"))},"set volume":function(t){return t.set("volume",!t.get("volume"))}},s)},189:function(t,e,n){"use strict";e.__esModule=!0;var r=n(88),o=n(25),a=n(185),i=n(190),c=n(186),s=n(187),u=n(188),l=o.combineReducers({routing:r.routerReducer,column:a["default"],snake:i["default"],direction:c["default"],food:s["default"],game:u["default"]});e["default"]=l},190:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){
t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0;var o=n(20),a=n(27),i=n(36),c=n(61),s=n(94),u=n(95),l=12,f=1;setTimeout(function(){l=s.getColumn(c.getStore().getState()),f=u.getModal(c.getStore().getState())});var p=1===f?3:1,d=Math.floor(Math.random()*(l-p))+1,m=Math.floor(Math.random()*(i.Row-p))+1,h=a.Record({snake:a.fromJS([{x:d,y:m},{x:d,y:m-1}])}),y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e}(h);e.ISnake=y;var v=new y;e["default"]=o.handleActions({"init snake":function(t){void 0===t&&(t=v);var e=u.getModal(c.getStore().getState()),n=1===e?3:1,r=Math.floor(Math.random()*(l-n))+1,o=Math.floor(Math.random()*(i.Row-n))+1;return t.set("snake",a.fromJS([{x:r,y:o},{x:r,y:o-1}]))},"set snake":function(t,e){return void 0===t&&(t=v),t.set("snake",a.fromJS(e.payload))}},v)},191:function(t,e){"use strict";function n(){return r(this,function(t){return[2]})}var r=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,a&&(i=a[2&n[0]?"return":n[0]?"throw":"next"])&&!(i=i.call(a,n[1])).done)return i;switch(a=0,i&&(n=[0,i.value]),n[0]){case 0:case 1:i=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,a=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){s.label=n[1];break}if(6===n[0]&&s.label<i[1]){s.label=i[1],i=n;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(n);break}i[2]&&s.ops.pop(),s.trys.pop();continue}n=e.call(t,s)}catch(r){n=[6,r],a=0}finally{o=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,a,i,c,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return c={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c};e.__esModule=!0,e["default"]=n},192:function(t,e,n){"use strict";function r(t){return t}this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,a&&(i=a[2&n[0]?"return":n[0]?"throw":"next"])&&!(i=i.call(a,n[1])).done)return i;switch(a=0,i&&(n=[0,i.value]),n[0]){case 0:case 1:i=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,a=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){s.label=n[1];break}if(6===n[0]&&s.label<i[1]){s.label=i[1],i=n;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(n);break}i[2]&&s.ops.pop(),s.trys.pop();continue}n=e.call(t,s)}catch(r){n=[6,r],a=0}finally{o=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,a,i,c,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return c={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c};e.__esModule=!0;var o=(n(164),n(191)),a=[o["default"]];e.CANCEL_SAGAS_HMR="CANCEL_SAGAS_HMR";var i={startSagas:function(t){a.map(r).forEach(function(e){return t.run(e)})},cancelSagas:function(t){t.dispatch({type:e.CANCEL_SAGAS_HMR})}};e["default"]=i},193:function(t,e,n){"use strict";function r(t){var e=window.devToolsExtension?window.devToolsExtension()(o.createStore):o.createStore,n=a["default"](),r=o.applyMiddleware(s["default"],n)(e),u=r(i["default"],t);return c["default"].startSagas(n),u}e.__esModule=!0;var o=n(25),a=n(165),i=n(189),c=n(192),s=n(184);e["default"]=r},205:function(t,e){},206:function(t,e){},207:function(t,e){},208:function(t,e){},209:function(t,e){},210:function(t,e){},211:function(t,e){},212:function(t,e){},213:function(t,e){},341:function(t,e,n){t.exports=n(344)},342:function(t,e,n){"use strict";t.exports=n(343)},343:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(2),s=c.Component,u=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),i(e,[{key:"render",value:function(){return this.props.component?c.createElement(this.props.component,this.props.props):c.Children.only(this.props.children)}}]),e}(s);t.exports=u},344:function(t,e,n){"use strict";t.exports=n(345)},345:function(t,e,n){"use strict";t.exports.AppContainer=n(342)},407:function(t,e,n){t.exports=n.p+"images/robot-1xuxV.png"},408:function(t,e,n){t.exports=n.p+"images/snack-i-0Ey.png"}});