var db;
var l;
var s = [false, false, false, false];
const kisBetuk = 'abcdefghijklmnopqrstuvwxyz';
const nagyBetuk = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const szamok = '0123456789';
const specialisKarakterek = '!@#$%^&*()_+{}[]:;"<>,.?/-=_+~`';
const ossszeteveszthetoKisBetuk = 'abcdefghijkmnpqrstuvwxyz';
const ossszeteveszthetoNagyBetuk = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const ossszeteveszthetoSzamok = '23456789';
const ossszeteveszthetoSpecialisKarakterek = '!@#$%^&*()_+{}[]:;"<>,.?/-=_+~`';
const kartyaHely = document.getElementById("jelszavakgeneralasihelye");

function Random(also, felso) {
    return Math.floor(Math.random() * (felso - also + 1)) + also;
}

function GetInfo() {
    let checkboxes = [
        document.getElementById("nagybetu"),
        document.getElementById("specialiskarakter"),
        document.getElementById("szamok"),
        document.getElementById("karakterelrejt")
    ];

    var atLeastOneChecked = false;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            s[i] = true;
            atLeastOneChecked = true;
        } else {
            s[i] = false;
        }
    }

    db = parseInt(document.getElementById("jelszavakszama").value);
    l = parseInt(document.getElementById("jelszohossza").value);

    return true;
}

function KartyaGen() {
    for (let z = 0; z < db; z++) {
        let jelszo = '';
        for (let i = 0; i < l; i++) {
            let fajta = Random(0, 2);
            //1.
            if (s[0] === true && s[1] === true && s[2] === true && s[3] === false) {
                console.log(fajta)
                if (fajta === 0) {
                    let kvn = Random(0, 1);
                    let betu = (kvn === 0) ? kisBetuk[Random(0, 25)] : nagyBetuk[Random(0, 25)];
                    jelszo += betu;
                } else if (fajta === 2) {
                    let betu = szamok[Random(0, 8)];
                    jelszo += betu;
                } else {
                    let betu = specialisKarakterek[Random(0, 30)];
                    jelszo += betu;
                }
            }
            //--------------------------------------------------
            //2
            else if(s[0] === true && s[1] === true && s[2] === true && s[3] === true){
                if (fajta === 0) {
                    let kvn = Random(0, 1);
                    let betu = (kvn === 0) ? ossszeteveszthetoKisBetuk[Random(0, 23)] : ossszeteveszthetoNagyBetuk[Random(0, 23)];
                    jelszo += betu;
                } else if (fajta === 1) {
                    let betu = ossszeteveszthetoSzamok[Random(0, 7)];
                    jelszo += betu;
                } else {
                    let betu = ossszeteveszthetoSpecialisKarakterek[Random(0, 30)];
                    jelszo += betu;
                }
            }
            //-----------------------------------------------------
            //3
            else if (s[0] === true && s[1] === true && s[2] === false && s[3] === false) {
                if(fajta === 2)
                {
                    let eldont = Random(0,1);
                    if(eldont == 0)
                    {
                        let kvn = Random(0, 1);
                        let betu = (kvn === 0) ? kisBetuk[Random(0, 25)] : nagyBetuk[Random(0, 25)];
                        console.log(fajta);
                        console.log(betu);
                        jelszo += betu;
                    }
                    else
                    {
                        let betu = specialisKarakterek[Random(0, 30)];
                        console.log(fajta);
                        console.log(betu);
                        jelszo += betu;
                    }
                }
                else
                {
                    if (fajta === 0) {
                        let kvn = Random(0, 1);
                        let betu = (kvn === 0) ? kisBetuk[Random(0, 25)] : nagyBetuk[Random(0, 25)];
                        console.log(fajta);
                        console.log(betu);
                        jelszo += betu;
                    } 
                        
                    else {
                        console.log(specialisKarakterek.length);
                        let betu = specialisKarakterek[Random(0, 30)];
                        jelszo += betu;
                    }
                }
            }
            //------------------------------------------------------
            //4
            else if (s[0] === true && s[1] === false && s[2] === true && s[3] === false) 
            {
                if(fajta === 1)
                {
                    let eldont = Random(0,1);
                    if(eldont === 0)
                    {
                        let kvn = Random(0, 1);
                        let betu = (kvn === 0) ? kisBetuk[Random(0, 25)] : nagyBetuk[Random(0, 25)];
                        jelszo += betu;
                    }
                    else
                    {
                        let betu = szamok[Random(0, 9)];
                        jelszo += betu;
                    }
                }
                else
                {
                    if(fajta === 0)
                    {
                        let kvn = Random(0, 1);
                        let betu = (kvn === 0) ? kisBetuk[Random(0, 25)] : nagyBetuk[Random(0, 25)];
                        jelszo += betu;
                    }
                    else
                    {
                        let betu = szamok[Random(0, 9)];
                        jelszo += betu;
                    }
                }
            }
            //------------------------------------------------------
            //5
            else if (s[0] === false && s[1] === true && s[2] === true && s[3] === false) 
            {
               
                if (fajta === 0) {
                    let betu = kisBetuk[Random(0, 25)]; console.log(fajta); console.log(betu);
                    jelszo += betu;
                } else if (fajta === 1) {
                    let betu = szamok[Random(0, 9)]; console.log(fajta); console.log(betu);
                    jelszo += betu;
                } else {
                    console.log(specialisKarakterek.length)
                    let betu = specialisKarakterek[Random(0, 30)]; console.log(fajta); console.log(betu);
                    jelszo += betu;
                }
            }
            //--------------------------------------------------------------------------
            // 6
            else if(s[0] === true && s[1] === true && s[2] === false && s[3] === true) 
            {
                if(fajta === 2)
                {
                    let eldont = Random(0,1);
                    if(eldont === 0)
                    {
                        let kvn = Random(0, 1);
                        let betu = (kvn === 0) ? ossszeteveszthetoKisBetuk[Random(0, 23)] : ossszeteveszthetoNagyBetuk[Random(0, 23)];
                        jelszo += betu;
                    }
                    else
                    {
                        let betu = ossszeteveszthetoSpecialisKarakterek[Random(0, 30)];
                        jelszo += betu;
                    }
                }
                else
                {
                    if(fajta === 0)
                    {
                        let kvn = Random(0, 1);
                        let betu = (kvn === 0) ? ossszeteveszthetoKisBetuk[Random(0, 23)] : ossszeteveszthetoNagyBetuk[Random(0, 23)];
                        jelszo += betu;
                    }
                    else
                    {
                        let betu = ossszeteveszthetoSpecialisKarakterek[Random(0, 30)];
                        jelszo += betu;
                    }
                }
            }
            //----------------------------------------------
            //7 
            else if(s[0] === true && s[1] === false && s[2] === false && s[3] === false)
            {
                if(fajta == 2 || fajta == 1)
                {
                    let kvn = Random(0, 1);
                    let betu = (kvn === 0) ? kisBetuk[Random(0, 25)] : nagyBetuk[Random(0, 25)];
                    jelszo += betu;
                }
                else 
                {
                    let kvn = Random(0, 1);
                    let betu = (kvn === 0) ? kisBetuk[Random(0, 25)] : nagyBetuk[Random(0, 25)];
                    jelszo += betu;
                }
            }
            //--------------------------------------------
            //8
            else if(s[0] === false && s[1] === false && s[2] === true && s[3] === false)
            {
                if(fajta === 1)
                {
                    let eldont = Random(0,1);
                    if(eldont === 0)
                    {
                        let betu = kisBetuk[Random(0,25)];
                        jelszo +=betu;
                    }

                    else
                    {
                        let betu = szamok[Random(0,7)];
                        jelszo +=betu;
                    }
                }
                else
                {
                    if(fajta === 0)
                    {
                        let betu = kisBetuk[Random(0,25)];
                        jelszo +=betu;
                    }
                    
                    else
                    {
                        let betu = szamok[Random(0,7)];
                        jelszo +=betu;
                    }
                }
            }
            //---------------------------------------------
            //9
            else if(s[0] === true && s[1] === false && s[2] === false && s[3] === true)
            {
                if(fajta === 1 || fajta == 2)
                {
                        let kvn = Random(0, 1);
                        let betu = (kvn === 0) ? ossszeteveszthetoKisBetuk[Random(0, 23)] : ossszeteveszthetoNagyBetuk[Random(0, 23)];
                        jelszo += betu;
                }
                else
                {
                        let kvn = Random(0, 1);
                        let betu = (kvn === 0) ? ossszeteveszthetoKisBetuk[Random(0, 23)] : ossszeteveszthetoNagyBetuk[Random(0, 23)];
                        jelszo += betu;
                }

            }
            //----------------------------------------------
            //10
            else if(s[0] === false && s[1] === true && s[2] === true && s[3] === true)
            {
                if (fajta === 0) {
                    let betu = ossszeteveszthetoKisBetuk[Random(0, 23)];
                    jelszo += betu;
                } else if (fajta === 1) {
                    let betu = ossszeteveszthetoSzamok[Random(0, 7)];
                    jelszo += betu;
                } else {
                    let betu = ossszeteveszthetoSpecialisKarakterek[Random(0, 31)];
                    jelszo += betu;
                }

            }
            //------------------------------------------------
            //11
            else if(s[0] === false && s[1] === true && s[2] === false && s[3] === false)
            {
                if(fajta === 2)
                {
                    let eldont = Random(0,1);
                    if(eldont === 0)
                    {
                        console.log(fajta);
                        let betu = kisBetuk[Random(0,25)]; console.log(kisBetuk.length);
                        jelszo += betu;
                    }

                    else
                    {
                        console.log(fajta);
                        let betu = specialisKarakterek[Random(0,30)];console.log(specialisKarakterek.length);
                        jelszo +=betu;
                    }
                }
                else
                {
                    if(fajta === 0)
                    {
                        console.log(fajta);
                        let betu = kisBetuk[Random(0,25)];console.log(kisBetuk.length);
                        jelszo += betu;
                    }
                    else
                    {
                        console.log(fajta);
                        let betu = specialisKarakterek[Random(0,30)];console.log(specialisKarakterek.length);
                        jelszo +=betu;
                    }
                }

            }
            //-----------------------------------------------
            //-13
            else if(s[0] === false && s[1] === false && s[2] === false && s[3] === true)
            {
                if(fajta === 1 || fajta === 2 )
                {
                    let eldont = Random(0,1);
                    if(eldont === 1)
                    {
                        let betu = ossszeteveszthetoKisBetuk[Random(0,23)];
                        jelszo += betu;
                    }

                    else
                    {
                        let betu = ossszeteveszthetoSzamok[Random(0,7)];
                        jelszo +=betu;
                    }
                }
                else
                {
                    if(fajta === 0)
                    {
                        let betu = ossszeteveszthetoKisBetuk[Random(0,23)];
                        jelszo += betu;
                    }
                    
                    else
                    {
                        let betu = ossszeteveszthetoSzamok[Random(0,7)];
                        jelszo +=betu;
                    }
                }

            }
            //-----------------------------------------------
            //14
            else if(s[0] === false && s[1] === false && s[2] === false && s[3] === false)
            {
                if(fajta === 1 || fajta == 2)
                {

                    let betu = kisBetuk[Random(0,25)];
                    jelszo += betu;

                }
                else
                {
                    let betu = kisBetuk[Random(0,25)];
                    jelszo += betu;
                }

            }
            //---------------------------------------------
            //15
            else if(s[0] === false && s[1] === false && s[2] === true && s[3] === true)
            {
                if(fajta === 1)
                {
                    let eldont = Random(0,1);
                    if(eldont === 1)
                    {
                        let betu = ossszeteveszthetoKisBetuk[Random(0,23)];
                        jelszo += betu;
                    }

                    else
                    {
                        let betu = ossszeteveszthetoSzamok[Random(0,7)];
                        jelszo +=betu;
                    }
                }
                else
                {
                    if(fajta === 0)
                    {
                        let betu = ossszeteveszthetoKisBetuk[Random(0,23)];
                        jelszo += betu;
                    }
                    
                    else
                    {
                        let betu = ossszeteveszthetoSzamok[Random(0,7)];
                        jelszo +=betu;
                    }
                }
            }
            //-------------------------------------------------
            //16
            else if(s[0] === false && s[1] === true && s[2] === false && s[3] === true)
            {
                if(fajta === 2)
                {
                    let eldont = Random(0,1);
                    if(eldont === 0)
                    {
                        let betu = ossszeteveszthetoKisBetuk[Random(0,23)];
                        jelszo += betu;
                    }

                    else
                    {
                        let betu = ossszeteveszthetoSpecialisKarakterek[Random(0,30)];
                        jelszo +=betu;
                    }
                }
                else
                {
                    if(fajta === 0)
                    {
                        let betu = ossszeteveszthetoKisBetuk[Random(0,23)];
                        jelszo += betu;
                    }
                    
                    else
                    {
                        let betu = ossszeteveszthetoSpecialisKarakterek[Random(0,30)];
                        jelszo +=betu;
                    }
                }
            }
            //17
            else if(s[0] === true && s[1] === false && s[2] === true && s[3] === true)
            {
                if(fajta === 2)
                {
                    let eldont = Random(0,1);
                    if(eldont === 0)
                    {
                        let kvn = Random(0, 1);
                        let betu = (kvn === 0) ? ossszeteveszthetoKisBetuk[Random(0, 23)] : ossszeteveszthetoNagyBetuk[Random(0, 23)];
                        jelszo += betu;
                    }

                    else
                    {
                        let betu = ossszeteveszthetoSzamok[Random(0,7)];
                        jelszo +=betu;
                    }
                }
                else
                {
                    if(fajta === 0)
                    {
                        let kvn = Random(0, 1);
                        let betu = (kvn === 0) ? ossszeteveszthetoKisBetuk[Random(0, 23)] : ossszeteveszthetoNagyBetuk[Random(0, 23)];
                        jelszo += betu;
                    }
                    
                    else
                    {
                        let betu = ossszeteveszthetoSzamok[Random(0,7)];
                        jelszo +=betu;
                    }
                }
            }
            //-----------------
            }
            let kartya = document.createElement("div");
            let h2 = document.createElement("h2");
            kartya.className="kartya";
            h2.innerHTML=jelszo;
            kartya.appendChild(h2);
            kartyaHely.appendChild(kartya);
            console.log(kartyaHely);
            console.log(jelszo);
        }
        
    }
function Generalas() {
    if (GetInfo() && l <=16 && db <=30) {
        KartyaGen();
        console.log(db);
        console.log(l);
        console.log(s);
    }
    else
    {
        alert("Helyes értéket adjon meg!");
    }
}

function Reset()
{
    window.location.reload();
}
