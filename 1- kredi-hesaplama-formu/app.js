
const krediHesapla = () => {
    let anaPara = document.getElementById("textKrediTutari").value;
    let vadeSecenekler = document.getElementById("selectKrediVade");
    let vadeSayisi = vadeSecenekler.options[vadeSecenekler.selectedIndex].value;
    let aylikTaksitTutari, odenecekPara;
    let sonuc = document.getElementById("sonuc");
   if(vadeSayisi==12){
    odenecekPara=anaPara*1.1;
   }
   else if(vadeSayisi==24){
    odenecekPara=anaPara*1.2;
   }
   else if(vadeSayisi==36){
    odenecekPara=anaPara*1.3;
   }
   else if(vadeSayisi==48){
    odenecekPara=anaPara*1.4;
   }
    aylikTaksitTutari = odenecekPara / vadeSayisi;
    sonuc.innerHTML = "Geri odeme toplami=" + odenecekPara + "<br>" + "Aylik odenecek tutar = " + aylikTaksitTutari.toFixed(2);
}
