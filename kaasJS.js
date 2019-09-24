function myFuction(){
    document.getElementById("button").alert("test");
}



if (geel == "ja") {
    const gaten = prompt("Zitten er gaten in? [ja of nee]")
        if(gaten == "ja") {
            const duur = prompt("Is de kaas extreem duur? [ja of nee]")
                if (duur == "ja") {
                    var kaas = "Emmentaler"
                }
                else if (duur == "nee") {
                    var kaas = "Leerdammer"
                }
                else {
                    alert("gerbruik alleen ja of nee")
                    document.write("gebruik alleen ja of nee")
                }
        }
        else if (gaten == "nee") {
            const hard = prompt("Is de kaas heel hard? [ja of nee]")
                if (hard == "ja") {
                    var kaas = "Parmigiano Reggiano"
                }
                else if (hard == "nee") {
                    var kaas = "Goudse kaas"
                }
                else {
                    alert("gerbruik alleen ja of nee")
                    document.write("gebruik alleen ja of nee")
                }
        }
        else {
            alert("gerbruik alleen ja of nee")
            document.write("gebruik alleen ja of nee")
        }
}
else if (geel == "nee") {
    const schimmel = prompt("Zit er blauwe schimmel op? [ja of nee]")
        if (schimmel == "ja") {
            const korst = prompt("Zit er een korst aan? [ja of nee]")
                if (korst == "ja") {
                    var kaas = "Bleu de Rochbaron"
                }
                else if (korst == "nee") {
                    var kaas = "Foume d'Ambert"
                }
                else {
                    alert("gerbruik alleen ja of nee")
                    document.write("gebruik alleen ja of nee")
                }
        }
        else if (schimmel == "nee") {
            const korst = prompt("Zit er een korst aan? [ja of nee]")
                if (korst == "ja") {
                    var kaas = "Camembert"
                }
                else if (korst == "nee") {
                    var kaas = "Mozzarella"
                }
                else {
                    alert("gerbruik alleen ja of nee")
                    document.write("gebruik alleen ja of nee")
                }
        }
        else {
            alert("gerbruik alleen ja of nee")
            document.write("gebruik alleen ja of nee")
        }
}
else {
    alert("gerbruik alleen ja of nee")
    document.write("gebruik alleen ja of nee")
}


if (kaas != 0) {
  document.write("The cheese you had in mind was "+kaas)
    }