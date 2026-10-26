import assert from "node:assert/strict";
const base=process.env.TEST_BASE_URL||"http://localhost:3002";
const paths=["/","/about","/services","/tratamientos/odontologia-general","/tratamientos/limpieza-dental","/tratamientos/estetica-dental","/tratamientos/ortodoncia","/tratamientos/implantes-protesis","/tratamientos/endodoncia","/tratamientos/periodoncia","/tratamientos/odontopediatria","/primera-visita","/preguntas-frecuentes","/contact","/blog","/blog/primera-consulta-dental","/blog/rutina-higiene-dental","/blog/sangrado-encias","/blog/blanqueamiento-dental-dudas","/blog/brackets-o-alineadores","/blog/implantes-dentales-valoracion","/blog/endodoncia-conservar-diente","/blog/primera-visita-dental-infantil","/terminos-y-condiciones","/politica-de-privacidad"];
paths.push("/reservar");
const titles=new Set();
for(const path of paths){
 const response=await fetch(base+path);assert.equal(response.status,200,path);
 const html=await response.text();assert.equal((html.match(/<h1[ >]/g)||[]).length,1,"One H1: "+path);
 const title=html.match(/<title>(.*?)<\/title>/)?.[1];assert.ok(title,path+" title");assert.ok(!titles.has(title),"Unique title "+path);titles.add(title);
 const canonical=html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];assert.equal(new URL(canonical).href,new URL(base+path).href,"Canonical "+path);
 if(path.startsWith("/blog/")){const json=html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];assert.ok(json,"Article schema "+path);assert.equal(JSON.parse(json)["@type"],"BlogPosting")}
 const footer=html.split("<footer")[1]?.split("</footer>")[0];assert.ok(footer,"Footer "+path);
 for(const destination of paths)assert.ok(footer.includes('href="'+destination+'"'),"Footer backlink "+destination+" on "+path);
 assert.ok(footer.includes('href="https://www.angelstudiodigital.online/"'),"Studio link");
 console.log("PASS",path);
}
const sitemap=await (await fetch(base+"/sitemap.xml")).text();assert.equal((sitemap.match(/<loc>/g)||[]).length,paths.length);
for(const path of ["/blog/no-existe","/tratamientos/no-existe"]){assert.equal((await fetch(base+path)).status,404,path)}
console.log("26 pages, unique titles, canonicals, footer links, article schema, sitemap and 404s passed.");



