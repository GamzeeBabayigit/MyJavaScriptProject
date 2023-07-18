// let soru = {
//     soruMetni: "Hangisi javascript paket yönetim uygulamasıdır? ",
//     cevapSecenekleri:{
//         a: "Node.js",
//         b: "Typescript",
//         c: "Npm"
//     },
//     dogruCevap: "c",
//     cevabiKontrolEt: function(cevap){
//         return cevap == this.dogruCevap
//     }
// }


function Soru(soruMetni,cevapSecenekleri,dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    this.cevabiKontrolEt = function(cevap){
        return cevap == this.dogruCevap
    }
}

let soru1 = new Soru("Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Typescript", c: "Npm"},"c");
let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c: "Npm"},"b");

let sorular = [
    new Soru("Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Typescript", c: "Npm"},"c"),
    new Soru("Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Typescript", c: "Npm"},"c")
]

console.log(sorular[0].soruMetni);
for(let s of sorular){
    console.log(s.soruMetni);
}

console.log(soru1.soruMetni);
console.log(soru1.dogruCevap);
console.log(soru1.cevabiKontrolEt("c"));