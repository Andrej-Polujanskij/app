(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e){e.exports={subjects:["Fiction","Science"],books:[{id:1342,authors:[{birth_year:1775,death_year:1817,name:"Austen, Jane"}],bookshelves:["Best Books Ever Listings","Harvard Classics"],download_count:45668,formats:{"text/plain; charset=utf-8":"http://www.gutenberg.org/files/1342/1342-0.txt","application/pdf":"http://www.gutenberg.org/files/1342/1342-pdf.pdf","application/rdf+xml":"http://www.gutenberg.org/ebooks/1342.rdf","application/x-mobipocket-ebook":"http://www.gutenberg.org/ebooks/1342.kindle.noimages","application/epub+zip":"http://www.gutenberg.org/ebooks/1342.epub.images","text/plain; charset=us-ascii":"http://www.gutenberg.org/files/1342/1342.txt","text/html; charset=utf-8":"http://www.gutenberg.org/files/1342/1342-h/1342-h.htm"},languages:["en"],media_type:"Text",subjects:["Fiction"],title:"Pride and Prejudice"},{id:33283,authors:[{birth_year:1851,death_year:1916,name:"Thompson, Silvanus P. (Silvanus Phillips)"}],bookshelves:["Mathematics"],download_count:24344,formats:{"application/prs.tex":"http://www.gutenberg.org/files/33283/33283-t.zip","application/rdf+xml":"http://www.gutenberg.org/ebooks/33283.rdf","application/pdf":"http://www.gutenberg.org/files/33283/33283-pdf.pdf"},languages:["en"],media_type:"Text",subjects:["Fiction"],title:"Calculus Made Easy: Being a very-simplest introduction to those beautiful methods which are generally called by the terrifying names of the Differential Calculus and the Integral Calculus"},{id:11,authors:[{birth_year:1832,death_year:1898,name:"Carroll, Lewis"}],bookshelves:["Children's Literature"],download_count:17866,formats:{"text/plain; charset=utf-8":"http://www.gutenberg.org/files/11/11-0.zip","application/rdf+xml":"http://www.gutenberg.org/ebooks/11.rdf","application/pdf":"http://www.gutenberg.org/files/11/11-pdf.pdf","application/x-mobipocket-ebook":"http://www.gutenberg.org/ebooks/11.kindle.noimages","application/epub+zip":"http://www.gutenberg.org/ebooks/11.epub.images","text/plain; charset=us-ascii":"http://www.gutenberg.org/files/11/11.zip","application/zip":"http://www.gutenberg.org/files/11/11-h.zip","text/html; charset=utf-8":"http://www.gutenberg.org/files/11/11-h/11-h.htm"},languages:["en"],media_type:"Text",subjects:["Fiction","Science"],title:"Alice's Adventures in Wonderland"},{id:74,authors:[{birth_year:1835,death_year:1910,name:"Twain, Mark"}],bookshelves:["Banned Books from Anne Haight's list"],download_count:16204,formats:{"image/jpeg":"http://www.gutenberg.org/cache/epub/74/pg74.cover.medium.jpg","text/plain; charset=utf-8":"http://www.gutenberg.org/files/74/74-0.zip","application/rdf+xml":"http://www.gutenberg.org/ebooks/74.rdf","application/x-mobipocket-ebook":"http://www.gutenberg.org/ebooks/74.kindle.images","application/epub+zip":"http://www.gutenberg.org/ebooks/74.epub.noimages","text/html; charset=utf-8":"http://www.gutenberg.org/files/74/74-h/74-h.htm","text/plain; charset=iso-8859-1":"http://www.gutenberg.org/files/74/74.txt","application/zip":"http://www.gutenberg.org/files/74/74.zip"},languages:["en"],media_type:"Text",subjects:["Science"],title:"The Adventures of Tom Sawyer"}]}},23:function(e,t,a){e.exports=a(38)},28:function(e,t,a){},29:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(20),r=a.n(i),s=(a(28),a(8)),l=a(9),c=a(12),u=a(10),p=a(13),g=(a(29),a(6)),h=a(5),w=a(11),b=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={books:{},subjectLink:[]},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({subjectLink:w.subjects.map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(g.b,{to:"/".concat(e)},e," "))})})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Please choose subject"),o.a.createElement("ul",null,this.state.subjectLink))}}]),t}(n.Component),m=function(e){var t=e.match,a=[];return w.books.forEach(function(e,n){if(e.subjects.includes(t.params.id))return a.push(o.a.createElement("div",{key:n},o.a.createElement("h2",null,e.authors[0].name),o.a.createElement("p",null,e.title)))}),o.a.createElement("div",null,o.a.createElement("h1",null,"Theme: ",t.params.id),o.a.createElement("hr",null),a,o.a.createElement(g.b,{to:"/"},"Back Home"))},d=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"main-container"},o.a.createElement(g.a,null,o.a.createElement(h.a,{exact:!0,path:"/",component:b}),o.a.createElement(h.a,{path:"/:id",component:m})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.02b6bba6.chunk.js.map