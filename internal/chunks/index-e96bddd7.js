import{J as u,K as a,L as s,M as l,N as h,O as f,P as p,C as m}from"./vendor-a95add37.js";var t={en:{interpolated:e=>"A text where I interpolate "+e.count+" times",time:e=>"Now is "+u(e.now,"en"),number:e=>"My favorite number is "+a("en",e.n,0),pluralized:e=>"I have "+s(e.count,0,l,{"1":"one cat",other:e.count+" cats"}),"pluralized-with-hash":e=>"I have "+s(e.count,0,l,{one:"just "+a("en",e.count,0)+" cat",other:a("en",e.count,0)+" cats"}),selected:e=>h(e.gender,{male:"He is a good boy",female:"She is a good girl",other:"They are good fellas"}),English:()=>"French",Accueil:()=>"Home",Documents:()=>"Documents",Contact:()=>"Contact"},fr:{"Hello World":()=>"Bonjour Monde",interpolated:e=>"Du texte que j'interpole "+e.count+" fois",time:e=>"Il est maintenant "+u(e.now,"fr"),number:e=>"Mon nombre pr\xE9f\xE9r\xE9 est "+a("fr",e.n,0),pluralized:e=>"J'ai "+s(e.count,0,f,{"1":"un chat",other:e.count+" chats"}),"pluralized-with-hash":e=>s(e.count,0,f,{"0":"Je n'ai pas de chat","1":"J'ai juste "+a("fr",e.count,0)+" chat",other:"J'ai "+a("fr",e.count,0)+" chats"}),selected:e=>h(e.gender,{male:"C'est un bon gar\xE7on",female:"C'est une bonne fille",other:"Ce sont de bonnes personnes"}),Error:()=>"Erreur",About:()=>"\xC0 Propos",Map:()=>"Carte",French:()=>"English",Home:()=>"Acceuil"}};const n="en",d=m("en"),g=p(d,e=>{let o;if(e===n){if(!Object.prototype.hasOwnProperty.call(t,e))return function(c){return c};o=t[e]}return Object.prototype.hasOwnProperty.call(t,e)?o=t[e]:(console.error(`Trying to get info from locale "${e}", which doesn't exist.
 Falling back to source locale("${n}")`),o=t[n]),function c(r,i){return Object.prototype.hasOwnProperty.call(o,r)?o[r](i):e===n?r:Object.hasOwnProperty.call(t,n)?o===t[n]?r:(console.error(`Key "${r}" not present in locale "${e}", falling back to source locale ("${n}")`),o=t[n],c(r,i)):r}});function w(e){if(typeof history.pushState!="function"){window.location.assign(e);return}window.history.pushState({},"",e)}export{t as a,w as c,d as l,g as t};