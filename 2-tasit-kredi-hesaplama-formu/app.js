function yillar() {
    let tarih = new Date();
    let yil = tarih.getFullYear();
    for (let i = yil; i >= 1970; i--) {
        let secenek = document.createElement("option");
        document.getElementById("aracModeli").options.add(secenek);
        secenek.value = i;
        secenek.text = i;
    }

}
    const vergiHesapla = () => {
        let aracTipi, motorGucu, aracModeli;
        let odenecekVergi;
        let i;
        let sonuc = document.getElementById("sonuc");
        for (i = 0; i < document.getElementById("aracTipi").length; i++) {
            if (document.getElementById("aracTipi").options[i].selected) {
                aracTipi = document.getElementById("aracTipi").options[i].value;
            }
        }

        for (i = 0; i < document.getElementsByName("motorGucu").length; i++) {
            if (document.getElementsByName("motorGucu")[i].checked) {
                motorGucu = document.getElementsByName("motorGucu")[i].value;
            }

        }
        for (i = 0; i < document.getElementById("aracModeli").length; i++) {
            if (document.getElementById("aracModeli").options[i].selected) {
                aracModeli = document.getElementById("aracModeli").options[i].value;
            }
            console.log(aracModeli);
        }


        if (aracTipi == "motorsiklet") {
            odenecekVergi = 100;
        }
        else if (aracTipi == "otomobil") {
            odenecekVergi = 200;
        }
        if (motorGucu == "999cc alti") {
            odenecekVergi += 50;
        }
        else if (motorGucu == "1000cc-1600cc") {
            odenecekVergi += 100;
        }
        else if (motorGucu == "1601cc-2000cc") {
            odenecekVergi += 150;
        }
        else if (motorGucu == "2001cc ustu") {
            odenecekVergi += 200;
        }
        if(aracModeli<2005){
            odenecekVergi-=25;
        }


        sonuc.innerHTML = "Odenecek Vergi= " + odenecekVergi;

    }

