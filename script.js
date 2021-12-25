const prov = document.getElementById("provinsi");
const Kota = document.getElementById("kota");

const data_kota = {
    Jakarta: ["Kota Administrasi Jawa Barat", "Kota Administrasi Jakarta Pusat", "Kota Administrasi Jakarta Selatan", "Kota Administrasi Jakarta Timur", "Kota Administrasi Jakarta Utara"],
    Jabar: ["Kota Bekasi", "Kota Bandung", "Kota Banjar", "Kota Bogor", "Kota Depok"],
    Jateng: ["Kota Magelang", "Kota Pekalongan", "Kota Salatiga", "Kota Semarang", "Kota Surakarta"],
    Jatim: ["Kota Batu", "Kota Blitar", "Kota Kediri", "Kota Madiun", "Kota Malang"],
};

function tampil_kota(){
    var value = prov.options[prov.selectedIndex].value;
    console.log(value);

    if(value == "DKI Jakarta"){
        Kota.removeAttribute('disabled');
        Kota.innerHTML = "<option disabled selected>Pilih Kota</option>";
        for(let i = 0; i<data_kota["Jakarta"].length; i++){
            Kota.innerHTML += `<option value="${data_kota["Jakarta"][i]}">${data_kota["Jakarta"][i]}</option>`;
        }
    }else if(value == "Jawa Barat"){
        Kota.removeAttribute('disabled');
        Kota.innerHTML = "<option disabled selected>Pilih Kota</option>";
        for(let i = 0; i<data_kota["Jabar"].length; i++){
            Kota.innerHTML += `<option value="${data_kota["Jabar"][i]}">${data_kota["Jabar"][i]}</option>`;
        }
    }else if(value == "Jawa Tengah"){
        Kota.removeAttribute('disabled');
        Kota.innerHTML = "<option disabled selected>Pilih Kota</option>";
        for(let i = 0; i<data_kota["Jateng"].length; i++){
            Kota.innerHTML += `<option value="${data_kota["Jateng"][i]}">${data_kota["Jateng"][i]}</option>`;
        }
    }else if(value == "Jawa Timur"){
        Kota.removeAttribute('disabled');
        Kota.innerHTML = "<option disabled selected>Pilih Kota</option>";
        for(let i = 0; i<data_kota["Jatim"].length; i++){
            Kota.innerHTML += `<option value="${data_kota["Jatim"][i]}">${data_kota["Jatim"][i]}</option>`;
        }
    }
}

function tampil_hasil(){
    var valueProv = prov.options[prov.selectedIndex].value;
    var valueKota = Kota.options[Kota.selectedIndex].value;
    var hasil = document.getElementById("kalimat");

    hasil.innerText = `Pada Provinsi ${valueProv} terdapat ${valueKota}`;
}

function darkMode(){
    var gelap = document.body;

    gelap.classList.toggle("dark-mode");
}

