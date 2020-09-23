(this["webpackJsonpevent-list-front-end"]=this["webpackJsonpevent-list-front-end"]||[]).push([[0],{30:function(e,t,n){e.exports=n(58)},35:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(27),o=n.n(l),i=(n(35),n(7)),c=n(8),u=n(10),s=n(9),m=n(12),d=n(2),h=n(11),E=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={id:0,name:"",location:"",precis:"",date:0,time:0},a}return Object(c.a)(n,[{key:"handleChange",value:function(e){var t={};t[e.target.name]=e.target.value,this.setState(t)}},{key:"submitHandler",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.name,this.state.location,this.state.precis,this.state.date,this.state.time),this.setState({id:0,name:"",location:"",precis:"",date:0,time:0})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{onSubmit:function(t){return e.submitHandler(t)}},r.a.createElement(d.a.Group,{controlId:"name"},r.a.createElement(d.a.Label,null,"Name"),r.a.createElement(d.a.Control,{name:"name",type:"text",value:this.state.name,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(d.a.Group,{controlId:"location"},r.a.createElement(d.a.Label,null,"Location"),r.a.createElement(d.a.Control,{name:"location",type:"text",value:this.state.location,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(d.a.Group,{controlId:"precis"},r.a.createElement(d.a.Label,null,"Precis"),r.a.createElement(d.a.Control,{name:"precis",type:"text",value:this.state.precis,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(d.a.Group,{controlId:"date"},r.a.createElement(d.a.Label,null,"Date"),r.a.createElement(d.a.Control,{name:"date",type:"text",value:this.state.date,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(d.a.Group,{controlId:"time"},r.a.createElement(d.a.Label,null,"Time"),r.a.createElement(d.a.Control,{name:"time",type:"text",value:this.state.time,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(h.a,{variant:"primary",type:"submit"},"Add Event")))}}]),n}(r.a.Component),p=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={id:"",name:"",location:"",precis:"",date:0,time:0},a}return Object(c.a)(n,[{key:"handleChange",value:function(e){var t={};t[e.target.name]=e.target.value,this.setState(t)}},{key:"submitHandler",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.id,this.state.name,this.state.location,this.state.precis,this.state.date,this.state.time),this.setState({id:"",name:"",location:"",precis:"",date:0,time:0})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{onSubmit:function(t){return e.submitHandler(t)}},r.a.createElement(d.a.Group,{controlId:"id"},r.a.createElement(d.a.Label,null,"ID"),r.a.createElement(d.a.Control,{name:"id",type:"text",value:this.state.id,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(d.a.Group,{controlId:"name"},r.a.createElement(d.a.Label,null,"Name"),r.a.createElement(d.a.Control,{name:"name",type:"text",value:this.state.name,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(d.a.Group,{controlId:"location"},r.a.createElement(d.a.Label,null,"Location"),r.a.createElement(d.a.Control,{name:"location",type:"text",value:this.state.location,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(d.a.Group,{controlId:"precis"},r.a.createElement(d.a.Label,null,"Precis"),r.a.createElement(d.a.Control,{name:"precis",type:"text",value:this.state.precis,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(d.a.Group,{controlId:"date"},r.a.createElement(d.a.Label,null,"Date"),r.a.createElement(d.a.Control,{name:"date",type:"text",value:this.state.date,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(d.a.Group,{controlId:"time"},r.a.createElement(d.a.Label,null,"Time"),r.a.createElement(d.a.Control,{name:"time",type:"text",value:this.state.time,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(h.a,{variant:"primary",type:"submit"},"Update Event")))}}]),n}(r.a.Component),v=n(28),f=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).updateEventList=function(e){var t=e.data;a.setState((function(){return{events:t}}))},a.grabList=function(){a.props.client.getEvents().then((function(e){a.updateEventList(e)}))},a.createList=function(){if("array"!==typeof response){var e=a.state.events;return(e=Array.from(e)).map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.location),r.a.createElement("td",null,e.precis),r.a.createElement("td",null,e.date),r.a.createElement("td",null,e.time),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return a.deleteEvent(e._id)}},"Delete")))}))}return a.events.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.location),r.a.createElement("td",null,e.precis),r.a.createElement("td",null,e.date),r.a.createElement("td",null,e.time),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return a.deleteEvent(e._id)}},"Delete")))}))},a.state={events:[]},a.createList=a.createList.bind(Object(m.a)(a)),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.grabList()}},{key:"IDsearch",value:function(e){var t=this;this.props.client.returnID(e).then((function(e){var n=[e.data];t.setState((function(){return{events:n}}))}))}},{key:"createEvent",value:function(e,t,n,a,r){var l=this;this.props.client.newEvent(e,t,n,a,r).then((function(e){l.grabList(e)}))}},{key:"updateEvent",value:function(e,t,n,a,r,l){var o=this;this.props.client.updateEvent(e,t,n,a,r,l).then((function(e){o.grabList(e)})).then(this.status).catch((function(e){console.error(e),alert(e)}))}},{key:"deleteEvent",value:function(e){var t=this;this.props.client.deleteEvent(e).then((function(e){t.grabList(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",null,"The Event List"),r.a.createElement(v.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Name"),r.a.createElement("td",null,"Location"),r.a.createElement("td",null,"Precis"),r.a.createElement("td",null,"Date"),r.a.createElement("td",null,"Time"),r.a.createElement("td",null,"Delete"))),r.a.createElement("tbody",null,this.createList()))),r.a.createElement("br",null),r.a.createElement("h3",null,"Add Event to List"),r.a.createElement(E,{onSubmit:function(t,n,a,r,l,o){return e.createEvent(t,n,a,r,l,o)}}),r.a.createElement("br",null),r.a.createElement("h4",null,"Edit Event Entry"),r.a.createElement(p,{onSubmit:function(t,n,a,r,l,o){return e.updateEvent(t,n,a,r,l,o)}}),r.a.createElement("br",null),r.a.createElement(h.a,{onClick:this.props.logout},"Logout"))}}]),n}(r.a.Component),b=n(15),g=n.n(b),y=n(29),C=n(16),k=n.n(C),L="https://mysterious-castle-32998.herokuapp.com/eventlist/",j=function(){function e(t,n){Object(i.a)(this,e),this.tokenProvider=t,this.logoutHandler=n}return Object(c.a)(e,[{key:"login",value:function(){var e=Object(y.a)(g.a.mark((function e(t,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,n),e.next=3,k()({method:"post",url:"".concat("https://mysterious-castle-32998.herokuapp.com/","auth"),header:{authorization:this.tokenProvider()},data:{username:t,password:n}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"authenticatedCall",value:function(e,t,n){var a=this;return k()({method:e,url:t,header:{authorization:this.tokenProvider()},data:n}).catch((function(e){if(403===e.response.status)return a.logoutHandler(),Promise.reject();throw e}))}},{key:"status",value:function(e){return e.status>=200&&e.status<300?Promise.resolve(e):Promise.reject(new Error(e.statusText))}},{key:"getEvents",value:function(){return this.authenticatedCall("get",L)}},{key:"newEvent",value:function(e,t,n,a,r){return this.authenticatedCall("post","".concat(L,"create"),{name:e,location:t,precis:n,date:a,time:r})}},{key:"deleteEvent",value:function(e){return this.authenticatedCall("delete","".concat(L).concat(e))}},{key:"updateEvent",value:function(e,t,n,a,r,l){return this.authenticatedCall("put","".concat(L).concat(e),{name:t,location:n,precis:a,date:r,time:l})}},{key:"returnID",value:function(e){return this.authenticatedCall("get","".concat(L).concat(e))}}]),e}(),w=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={disabled:!1},a}return Object(c.a)(n,[{key:"submitHandler",value:function(e){var t=this;e.preventDefault(),this.setState({disabled:!0}),this.props.client.login(e.target.username.value,e.target.password.value).then((function(e){t.setState({disabled:!1}),t.props.loggedIn(e.data.token)})).catch((function(){alert("an error occurred, please try again"),t.setState({disabled:!1})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,"Login",r.a.createElement("br",null),r.a.createElement("form",{onSubmit:function(t){return e.submitHandler(t)}},"Username",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"username",disabled:this.state.disabled}),r.a.createElement("br",null),"Password",r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",disabled:this.state.disabled}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",disabled:this.state.disabled}," Submit ")))}}]),n}(r.a.Component),O=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).logout=function(e){a.setState({token:void 0}),window.localStorage.setItem("token",e)},a.state={token:window.localStorage.getItem("token")},a.client=new j((function(){return a.state.token}),(function(){return a.logout()})),a}return Object(c.a)(n,[{key:"login",value:function(e){window.localStorage.setItem("token",e),this.setState({token:e})}},{key:"render",value:function(){var e=this;return this.state.token?r.a.createElement(f,{client:this.client,logout:this.logout}):r.a.createElement(w,{loggedIn:function(t){return e.login(t)},client:this.client})}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(57);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.4c092ff5.chunk.js.map