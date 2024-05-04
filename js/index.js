/*

7. İstifadəçi flash sürücünün həcmi GB olaraq göstərir. Proqram 820 MB ölçüsündəki faylların neçəsinin flash sürücünə sığacağını hesablayır. 
8. İstifadəçi cüzdanındakı pul miqdarını və bir cokoladka qiymətini daxil edir. Proqram istifadəçinin neçə cokoladka ala biləcəyini və onun əlində qalan qalan pul miqdarını çap edir. 
9. İstifadəçidən üç rəqəmli bir ədəd soruşun və onu tərsinə çevirin. Həll etmək üçün% operatorundan istifadə etməyiniz tələb olunur (bölmənin qalığı). 
10. İstifadəçidən bir tam ədəd soruşun və cavab olaraq onun cüt ədəd olub olmadığını çap edin. 
Tapşırıqda mantıq operatorlarını istifadə edin. Şərt operatorları if və ya switch istifadə etməyiniz tələb olunur. */

//1.İstifadəçidən adını soruşun və cavab olaraq ona "Salam, [adı]!" çap edin.

// let ad = prompt("Adinizi daxil edin:");
// alert("Salam," + ad);

//2. İstifadəçidən doğum ilini soruşun, onun yaşını hesablayın və nəticəni çap edin. Cari il kodda sabit olaraq qeyd edin.

// let dogumIli = Number(prompt("Dogum ilnizi daxil edin:"));
// let cariIl = new Date();
// alert(cariIl.getFullYear() - dogumIli);

//3.İstifadəçidən kvadratın bir tərəfinin uzunluğunu soruşun və bu kvadratın perimetrini çap edin.

// let teref = Number(prompt("kvadratın bir tərəfinin uzunluğunu daxil edin:"));
// let perimetr = 4 * teref;
// alert("p=" + perimetr.toString());

//4. İstifadəçidən bir dairənin radiusunu soruşun və bu dairənin sahəsini çap edin.

// let radius = Number(prompt("dairənin radiusunu daxil edin:"));
// let sahe = 2 * 3.14 * radius * radius;
// alert("S=" + sahe.toString());

//5. İstifadəçidən iki şəhər arasındakı məsafəni kilometr cinsində və hansısa saatda çatmaq istədiyini soruşun. Vaxtında çatmaq üçün lazım olan sürəti hesablayın.

// let kilometr = Number(prompt("kilometr daxil edin:"));
// let saat = Number(prompt("saati daxil edin:"));
// let suret = kilometr / saat;
// alert("suret=" + suret.toString());

//6. Valyuta çevirici tətbiq edin. İstifadəçi dollarları daxil edir, proqram onları avrolara çevirir. Valyuta məzənnəsini bir sabitdə saxlayın.

// let dollar = Number(prompt("dollar daxil edin:"));
// let avro = 0.9317 * dollar;
// alert("avro=" + avro.toString());

//7. İstifadəçi flash sürücünün həcmi GB olaraq göstərir. Proqram 820 MB ölçüsündəki faylların neçəsinin flash sürücünə sığacağını hesablayır.

// let gb = Number(prompt("GB daxil edin:"));
// let say = parseInt((gb * 1024) / 820);
// alert(say.toString() + "  fayli flash surucusune sigisdirmaq olar");

//8. İstifadəçi cüzdanındakı pul miqdarını və bir cokoladka qiymətini daxil edir. Proqram istifadəçinin neçə cokoladka ala biləcəyini və onun əlində qalan qalan pul miqdarını çap edir.

// let pul = Number(prompt("pul miqdarini daxil edin:"));
// let sokolad = Number(prompt("sokoladin qiymetini daxil edin:"));
// let say = parseInt(pul / sokolad);
// let qaliq = pul - sokolad * say;
// alert(
//   say.toString() +
//     " sokolad ala biler! elde qalan pul miqdari: " +
//     qaliq.toString()
// );

//9. İstifadəçidən üç rəqəmli bir ədəd soruşun və onu tərsinə çevirin. Həll etmək üçün% operatorundan istifadə etməyiniz tələb olunur (bölmənin qalığı).

// let eded = prompt("üç rəqəmli bir ədəd daxil edin:");
// let tersEded = 0;
// if (eded.length == 3) {
//   let teklik = Number(eded) % 10;
//   let onluq = parseInt(Number(eded) / 10) % 10;
//   let yuzluk = parseInt(Number(eded) / 100);
//   tersEded = teklik * 100 + onluq * 10 + yuzluk;
//   alert(tersEded);
// } else {
//   alert("ədəd üç rəqəmli deyil!");
// }

//10. İstifadəçidən bir tam ədəd soruşun və cavab olaraq onun cüt ədəd olub olmadığını çap edin.

let eded = Number(prompt("tam ədəd daxil edin:"));
if (eded % 2 == 0) {
  alert("cut");
} else {
  alert("tek");
}
