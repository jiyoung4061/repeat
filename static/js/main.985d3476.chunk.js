(this.webpackJsonprepeat=this.webpackJsonprepeat||[]).push([[0],{32:function(e,t,a){e.exports=a(60)},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(23),i=a.n(s),c=a(28),m=a(1),o=a(10),l=a.n(o),u=a(24),v=a(25),p=a(26),d=a(31),g=a(30),_=a(27),y=a.n(_);var E=function(e){var t=e.year,a=e.title,n=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:a,title:"title"}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("h6",{className:"movie__year"},t),r.a.createElement("ul",{className:"movie__genre"},i.map((function(e,t){return r.a.createElement("li",{key:t,className:"genre__list"},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,140),"...")))},f=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"Loader"},r.a.createElement("span",{className:"Loader__Text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(E,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component);var h=function(){return r.a.createElement(c.a,null,"Something",r.a.createElement(m.a,{path:"/",component:f}))};i.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.985d3476.chunk.js.map