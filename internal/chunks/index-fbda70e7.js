import{K as i,L as a,M as s,N as l,O as h,P as p,Q as f,C as m}from"./vendor-164a226e.js";var t={en:{interpolated:e=>"A text where I interpolate "+e.count+" times",time:e=>"Now is "+i(e.now,"en"),number:e=>"My favorite number is "+a("en",e.n,0),pluralized:e=>"I have "+s(e.count,0,l,{"1":"one cat",other:e.count+" cats"}),"pluralized-with-hash":e=>"I have "+s(e.count,0,l,{one:"just "+a("en",e.count,0)+" cat",other:a("en",e.count,0)+" cats"}),selected:e=>h(e.gender,{male:"He is a good boy",female:"She is a good girl",other:"They are good fellas"}),English:()=>"French",Accueil:()=>"Home",Documents:()=>"Documents",Contact:()=>"Contact"},fr:{"Hello World":()=>"Bonjour Monde",interpolated:e=>"Du texte que j'interpole "+e.count+" fois",time:e=>"Il est maintenant "+i(e.now,"fr"),number:e=>"Mon nombre pr\xE9f\xE9r\xE9 est "+a("fr",e.n,0),pluralized:e=>"J'ai "+s(e.count,0,p,{"1":"un chat",other:e.count+" chats"}),"pluralized-with-hash":e=>s(e.count,0,p,{"0":"Je n'ai pas de chat","1":"J'ai juste "+a("fr",e.count,0)+" chat",other:"J'ai "+a("fr",e.count,0)+" chats"}),selected:e=>h(e.gender,{male:"C'est un bon gar\xE7on",female:"C'est une bonne fille",other:"Ce sont de bonnes personnes"}),Error:()=>"Erreur",About:()=>"\xC0 Propos",Map:()=>"Carte",French:()=>"English",Home:()=>"Acceuil"}};const r="en",b=m("en"),g=f(b,e=>{let o;if(e===r){if(!Object.prototype.hasOwnProperty.call(t,e))return function(c){return c};o=t[e]}return Object.prototype.hasOwnProperty.call(t,e)?o=t[e]:(console.error(`Trying to get info from locale "${e}", which doesn't exist.
 Falling back to source locale("${r}")`),o=t[r]),function c(n,u){return Object.prototype.hasOwnProperty.call(o,n)?o[n](u):e===r?n:Object.hasOwnProperty.call(t,r)?o===t[r]?n:(console.error(`Key "${n}" not present in locale "${e}", falling back to source locale ("${r}")`),o=t[r],c(n,u)):n}});export{t as a,b as l,g as t};