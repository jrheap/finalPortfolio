(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{AsEK:function(e,t,n){},FGZ8:function(e,t,n){"use strict";var o=n("lwsE"),a=n.n(o),r=n("W8MJ"),s=n.n(r),p=n("a1gu"),u=n.n(p),i=n("Nsbk"),c=n.n(i),l=n("PJYZ"),d=n.n(l),f=n("7W2i"),v=n.n(f),P=n("pVnL"),m=n.n(P),g=n("QILm"),h=n.n(g),w=n("lSNA"),O=n.n(w),y=n("cDcd"),N=n.n(y),S=n("TSYQ"),C=n.n(S),k=n("EA6I"),E=n("xeH2"),b=n.n(E),D=n("vN+2"),J=n.n(D),A=(n("Fwgg"),function(e){function t(){var e;return a()(this,t),e=u()(this,c()(t).call(this)),O()(d()(e),"onAnyPulsePopupOpen",function(t,n){n!==e.state.target&&e.state.target&&e.setState({popupOpen:!1,target:void 0})}),O()(d()(e),"openPulsePopover",function(t){var n=e.props,o=n.disabled,a=n.pulseDotProps,r=e.state.popupOpen,s=a.onClick;if(s&&s(t),!r&&!o){var p={popupOpen:!0,target:t.currentTarget.querySelector(".inner-dot")};e.setState(p,function(){b()(window).trigger("onUIPulsePopupOpen",e.state.target)})}}),O()(d()(e),"closePulsePopover",function(){e.setState({popupOpen:!1,target:void 0}),e.props.onPopupClose()}),e.state={popupOpen:!1,target:void 0},e}return v()(t,e),s()(t,[{key:"componentDidMount",value:function(){b()(window).on("onUIPulsePopupOpen",this.onAnyPulsePopupOpen)}},{key:"componentWillUnmount",value:function(){b()(window).off("onUIPulsePopupOpen",this.onAnyPulsePopupOpen)}},{key:"renderPopover",value:function(){var e,t=this.props,n=this.state,o=t.popupContent,a=(t.className,t.popupClass),r=(t.showPulse,t.onPopupClose,t.pulseDotProps,h()(t,["popupContent","className","popupClass","showPulse","onPopupClose","pulseDotProps"])),s=n.target;return e="function"==typeof o?o():o,N.a.createElement(k.a,m()({},r,{className:C()("pulse-popup",a),open:!0,onClose:this.closePulsePopover,showTip:!1,target:s,popoverSpace:0}),N.a.createElement("div",{className:"popup-content"}," ",e," "))}},{key:"renderPulse",value:function(){var e=this.props,t=e.showPulse,n=e.pulseDotProps,o=t?"pulse":"";return N.a.createElement("div",m()({},n,{className:"pulse-dot ".concat(o),onClick:this.openPulsePopover}),N.a.createElement("div",{className:"inner-dot"}," "))}},{key:"render",value:function(){var e=this.props.className,t=this.state.popupOpen;return N.a.createElement("div",{className:C()("pulse-popup",e)},this.renderPulse(),t&&this.renderPopover())}}]),t}(y.Component));O()(A,"defaultProps",{open:!1,disabled:!1,onPopupClose:J.a,pulseDotProps:{onClick:J.a}}),t.a=A},Fwgg:function(e,t,n){},MfAl:function(e,t,n){"use strict";n("VRzm");var o=n("MrcO"),a=n("ZaSc"),r=n("Ckvm"),s={};t.a=function(e){return new Promise(function(t,n){if(s[e])t(s[e]);else if(o.a.get(e)){var p=o.a.get(e);s[e]=p,t(p)}else Object(a.g)({url:"".concat(Object(r.b)(),"shorten"),data:{url:encodeURIComponent(e)},success:function(n){var a=n.url;s[e]=a,o.a.set(e,a),t(a)},error:n})})}},MrcO:function(e,t,n){"use strict";var o="undefined"==typeof localStorage?{}:localStorage;function a(){var e;try{e=JSON.parse(o.jStorage)}catch(t){e={}}return e}var r={set:function(e,t){var n=a();n[e]=t,o.jStorage=JSON.stringify(n)},get:function(e){return a()[e]}};"undefined"!=typeof window&&(window.jStorage=r),t.a=r},XzeZ:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return p});var o,a;n("eM6i");try{o=localStorage,a=sessionStorage}catch(e){o={},a={}}function r(e){var t={set:function(t,n,o){var a=Date.now()/1e3,r={updatedTime:a,data:n};o&&(r.expireOn=a+o),e[t]=JSON.stringify(r)},get:function(n,o){var a=e[n];try{a=JSON.parse(a)}catch(e){a={data:a}}if(!(a.expireOn&&a.expireOn<Date.now()/1e3))return!o&&"data"in a?a.data:a;t.delete(n)},delete:function(t){e[t]&&delete e[t]}};return t}var s=r(o),p=r(a)},YZNL:function(e,t,n){"use strict";var o=n("pVnL"),a=n.n(o),r=n("QILm"),s=n.n(r),p=n("cDcd"),u=n.n(p),i=n("TSYQ"),c=n.n(i);n("AsEK");function l(e){var t=e.title,n=e.layer,o=e.active,r=e.className,p=e.children,i=s()(e,["title","layer","active","className","children"]);return u.a.createElement("div",a()({className:c()("ui-card",r,"ui-layer-".concat(n),{"active-card":o})},i),t&&u.a.createElement("h5",{className:"ui-title text-sec-headline-xs"},t),u.a.createElement("div",{className:"card-content"},p))}l.defaultProps={title:"",layer:2,active:!1},t.a=l},laJX:function(e,t,n){"use strict";var o=n("eOGF"),a=function(){throw new Error("This module is meant to be used in client only")};Object(o.H)()||(a=n("gTbk")),t.a=a}}]);
//# sourceMappingURL=https://staging.hackerrank.net/fcore-assets/sourcemaps/hackerrank_r_modules~onboarding-fdaee149.js.map