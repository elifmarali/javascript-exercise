let cinsiyetTuru;
let urunSecimi, urunAdedi, urunTaksit;
let araToplam, odenecekTutar, kargoTutar=7;
let i;
let liste, secenek;
let erkekUrunleri = ["Calvin Klein", 100, "Lacoste", 120, "Axe", 20, "First Class", 50];
let kadinUrunleri = ["Burberry", 150, "Avon", 80, "She", 60, "Ninna Richie", 130];

function urunAdediDoldur (){
for(i=1;i<=10;i++){
    secenek=document.createElement("option");
    liste=document.getElementById("urunAdedi");
    liste.options.add(secenek);
    secenek.text=i;
    secenek.value=i;
}
}
function urunTaksitiDoldur (){
    for(i=0;i<13;i+=3){
        secenek=document.createElement("option");
        liste=document.getElementById("urunTaksiti");
        liste.options.add(secenek);
        secenek.text=i;
        secenek.value=i;
    }
}
function urunleriGetir() {
    document.querySelectorAll("#urunListesi option").forEach(option=>option.remove())
    liste = document.getElementsByName("urunCinsiyet");
    for (i = 0; i < liste.length; i++) {
        if (liste[i].checked) {
            cinsiyetTuru = liste[i].value;
        }
    }
    if (cinsiyetTuru == "E") {
        for (i = 0; i < erkekUrunleri.length; i += 2) {
            secenek=document.createElement("option");
            liste=document.getElementById("urunListesi");
            liste.options.add(secenek);
            secenek.text=erkekUrunleri[i];
            secenek.value=erkekUrunleri[i+1];
        }
    }
    else if (cinsiyetTuru == "K") {
        for (i = 0; i < erkekUrunleri.length; i += 2){
        secenek=document.createElement("option");
        liste=document.getElementById("urunListesi");
        liste.options.add(secenek);
        secenek.text=kadinUrunleri[i];
        secenek.value=kadinUrunleri[i+1];
        }
    }
}

function Hesapla(){
    liste=document.getElementById("urunListesi");
    urunSecimi=liste[liste.selectedIndex].value;

    liste=document.getElementById("urunAdedi");
    urunAdedi=liste[liste.selectedIndex].value;

    liste=document.getElementById("urunTaksiti");
    urunTaksit=liste[liste.selectedIndex].value;
    
    araToplam=urunSecimi*urunAdedi;
    if(urunTaksit==3){
        araToplam*=1.1;
    }
    else if(urunTaksit==6){
        araToplam*=1.2;
    }
    else if(urunTaksit==9){
        araToplam*=1.3;
    }
    else if(urunTaksit==12){
        araToplam*=1.4;
    }
    console.log(araToplam);
    if(araToplam<100){
        document.getElementById("textKargo").value=kargoTutar;
        odenecekTutar=araToplam+kargoTutar;
    }
    else if(araToplam>=100){
        document.getElementById("textKargo").value=0;
        odenecekTutar=araToplam;
    }

    document.getElementById("textAraToplam").value=araToplam;
    document.getElementById("sonuc").innerHTML="Odenecek toplam tutar(Vade farki ve kargo dahildir)="+odenecekTutar;

}