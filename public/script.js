const backendurl = "https://localhost:3000"
 
async function adatokLetoltese() {
    const response = await fetch(backendurl);
    const data = await response.json();
    adatokMegjelenitese(data);
}
 
async function betoltes(id) {
    document.getElementById("kartyakDiv").innerHTML = "";
    document.getElementById("ujdiv").style.display = "block";
    const response = await fetch(backendurl + "/" + id);
    const data = await response.json();
    console.log(data);
    document.getElementById("id").value = data.id;
    document.getElementById("megnevezes").value = data.megnevezes;
    if(data.menyegy === "kg") {
        document.getElementById("kg").checked = true;
    } else {
        document.getElementById("db").checked = true;
    }
    document.getElementById("egysegar").value = data.egysegar;
    document.getElementById("mennyiseg").value = data.mennyiseg;
}
 
function adatokMegjelenitese(JSON) {
    var htmlTartalom = "";
    for(let i = 0; i < fruitJSON.length; i++) {
        htmlTartalom += `
    <div class="card" style="width: 20rem;">
        <div class="card-body">
            <h5 class="card-title">${fruitJSON[i].megnevezes}</h5>
            <p class="card-text">Egységár:  ${fruitJSON[i].egysegar}</p>
            <p class="card-text">Mérhető mennyiség: ${fruitJSON.menyegy}</p>
            <p class="card-text">Mennyiség: ${fruitJSON.mennyiseg}</p>
        </div>
    </div>
        `;
    }
    document.getElementById("ujdiv").innerHTML = htmlTartalom;
}
 
document.addEventListener("DOMContentLoaded", () => {
    adatokLetoltese();
    document.getElementById("ujdiv").style.display = "none";
});