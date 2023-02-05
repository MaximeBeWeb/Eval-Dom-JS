//fonction pour faire apparaitre les 5 menus en cliquant sur le bouton "CLIC !" à gauche du header

function abracadabra() {
    let appear = document.getElementById("monMenu");
    if (appear.style.display === "none") {
        appear.style.display = "block";
    }
    else {
        appear.style.display = "none";
    }

}


// fonction pour faire descendre les menus deroulants depuis un clic sur l'onglet correspondant

function deroule(event, number) {
    let i, onglet, Menu;
    onglet = document.getElementsByClassName("onglet");
    for (i = 0; i < onglet.length; i++) {
        onglet[i].style.display = "none";
    }
    Menu = document.getElementsByClassName("Menu");
    for (i = 0; i < Menu.length; i++) {
        Menu[i].className = Menu[i].className.replace(" active", "");
    }
    document.getElementById(number).style.display = "block";
    event.currentTarget.className += " active";

    // console.log("on y est");
}






// PREMIER ONGLET

function show() {
    document.getElementById('image').style.display = 'block';
}
// fait apparaitre l'image 1 lorsque la souris passe dessus
function hide() {
    document.getElementById('image').style.display = 'none';
}
// la fait disparaitre lorsque la souris se deplace de l'image

// image 2
function show2() {
    document.getElementById('image2').style.display = 'block';
}

function hide2() {
    document.getElementById('image2').style.display = 'none';
}

// image3
function show3() {
    document.getElementById('image3').style.display = 'block';
}

function hide3() {
    document.getElementById('image3').style.display = 'none';
}






// DEUXIEME ONGLET
// Test: 
//console.log("coucou");
let data_name;
    // Controle s'il y a qqch dans le local storage, si oui on alimente la variable
    if (localStorage.getItem("prods")) {
        data_name = JSON.parse(localStorage.getItem("prods"));
    }
    // sinon la variable reste vierge, sans aucune donnée 
    else {
        data_name = [];
    }

    //Test : 
    //console.log("Test")

        //On recupere les informations passées dans les deux inputs, et on les met dans le local storage.
        // on les recupere du Json et on les presente sous forme de string dans la console
    table_result();
    go.addEventListener("click", function() {
        if (data_name.length == 0) {
            new_entry = inputsToJson();
            data_name.push(new_entry);
            console.log(data_name); 
            localStorage.setItem("prods", JSON.stringify(data_name));
    
        }
        // already prods in store, just check if new prod already exists
        else {
            let counted = 0; 
            // serving as a flag to know if end reached                 
            // loop through products                 
            for (i = 0; i < data_name.length; i++) {
                console.log("\nstart the registration ... ");
                console.log("current entry : ", data_name[i]);
                // if name and ref already exists, add the stock                     
                if (
                    data_name[i]['surname'] == document.getElementById("surname").value                        
                    &&                        
                    data_name[i]['name'] == document.getElementById("name").value
                    ) {
                    console.log("already here !");
                    // data_name[i]['quantity'] += parseInt(document.getElementById("quantity").value);
                    localStorage.setItem("prods", JSON.stringify(data_name));
                }
                // not existing, proceed as normal                     
                else {
                    // not this one but maybe the next ?                       
                    counted++;
                }
            } // end of for loop    

            console.log(counted);
            // loop ended, check the "counted" flag (end reached without finding occurence of product)                
            if (counted === data_name.length) {
                console.log("adding new product to list ...");
                new_entry = inputsToJson();
                data_name.push(new_entry);
                // display to verify                    
                console.log(data_name);
                // store to localstorage                    
                localStorage.setItem("prods", JSON.stringify(data_name));
            } // end of if             
        } // end of else     
        table_result()
    }); // end of fct    

    function inputsToJson() {
        // get all inputs             
        let prenom = document.getElementById("name").value;       
        let nom_de_famille = document.getElementById("surname").value;
        return pdt_json = {
            "name": prenom ,
            "surname": nom_de_famille };
    }

    function table_result(){
        let table =
            `<table> <br>
                <thead> LISTE DES INSCRIPTIONS:
                <th> Nom </th>
                <th> Prénom </th>
                </thead>`;

        let tbody = document.getElementById("resultat");
        for (let i = 0 ; i < data_name.length ; i++){
            let prenom = data_name[i].name;
            let nom_de_famille = data_name[i].surname;
            table += `<tbody><tr><td>${prenom}</td><td>${nom_de_famille}</td>`;
        }
        tbody.innerHTML = `${table}</tbody></table>`
    }






// LE TROISIEME ONGLET ET L'APPLICATION DE TRANSFORMATIONS DU TEXTE


// Premier changement
function chg(textemodif) {
    document.getElementById(textemodif).style.backgroundColor = 'yellow';
    document.getElementById(textemodif).style.color = 'red';
}

// deuxieme changement:
function chg2(textemodif) {
    document.getElementById(textemodif).style.fontFamily = 'Fantasy';
}

//troisieme changement:
function chg3(textemodif) {
    document.getElementById(textemodif).style.textAlign = "center";
}







// LE QUATRIEME ONGLET / LA LISTE DE CHIFFRES QUI DOIT SE MELANGER


let divParent = document.getElementById("parent")
let div0 = document.getElementById("div0");
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");

let divArray = [div0, div1, div2, div3];



document.getElementById("btnDown").addEventListener("click", () => {
    for (let i = 0; i < divArray.length; i++) {
        divParent.appendChild(divArray[i]);
    }
    console.log("coucou");
    if (divArray[0] === div0) {
        divArray[0] = div1;
        divArray[1] = div0;
    } else if (divArray[1] === div0) {
        divArray[1] = div2;
        divArray[2] = div0;
    } else if (divArray[2] === div0) {
        divArray[2] = div3;
        divArray[3] = div0;
    } else if (divArray[3] === div0) {
        divArray[3] = div3;
        divArray[2] = div2;
        divArray[1] = div1;
        divArray[0] = div0;
    }
})


document.getElementById("btnUp").addEventListener("click", () => {
    for (let i = 0; i < divArray.length; i++) {
        divParent.appendChild(divArray[i]);
    }
    console.log("coucou encore");

    if (divArray[3] === div0) {
        divArray[3] = div3;
        divArray[2] = div0;
    } else if (divArray[2] === div0) {
        divArray[2] = div2;
        divArray[1] = div0;
    } else if (divArray[1] === div0) {
        divArray[1] = div1;
        divArray[0] = div0;
    } else if (divArray[0] === div0) {
        divArray[3] = div0;
        divArray[2] = div3;
        divArray[1] = div2;
        divArray[0] = div1;
    }
})




