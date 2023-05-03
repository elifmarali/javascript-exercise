document.addEventListener("change", hesapla);
function toogle() {
    let liste = document.getElementsByName("indirimKontrol");
    for (let i = 0; i < liste.length; i++) {
        if (liste[i].checked) {
            if (liste[i].value == "aktif") {
                document.getElementById("textIndirimKodu").disabled = false;
            }
            else if (liste[i].value == "pasif") {
                document.getElementById("textIndirimKodu").disabled = true;
            }
        }
    }
}
function hesapla() {
    let pizzaFiyati, girilenKod, odenecekTutar,malzeme;
    const indirimKodlari = "PROMO";
    let i, liste, secenek;
    liste = document.getElementById("pizzaBoyut");
    for (i = 0; i < liste.length; i++) {
        if (liste.options[i].selected) {
            pizzaFiyati = Number(liste.options[i].value);

        }
    }
    liste = document.getElementsByName("grupEkMalzeme");
    document.querySelectorAll("#pizzaSecilmisMalzemeler option").forEach((option)=>option.remove())
    for (i = 0; i < liste.length; i++) {
        if (liste[i].checked) {
            pizzaFiyati += 2;
            malzeme=liste[i].value;
            let secenek=document.createElement("option");
            document.getElementById("pizzaSecilmisMalzemeler").options.add(secenek);
            secenek.text=malzeme;
            secenek.value=malzeme;
        }
    }
    girilenKod = document.getElementById("textIndirimKodu").value;

    if (girilenKod.length > 0) {
        if (indirimKodlari == girilenKod) {
            odenecekTutar = pizzaFiyati - 5;
        }
        else {
            alert("Lutfen gecerli bir kod giriniz.")
        }
    }
    else {

        odenecekTutar = pizzaFiyati;
    }

    document.getElementById("sonuc").innerHTML = odenecekTutar;
}
