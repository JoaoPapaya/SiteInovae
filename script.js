const form = document.getElementById("rota");
const seg = document.getElementById("seg");
function FormRota(){
    form.hidden = false;
}
function seguranca(){
    form.hidden = true;
    seg.innerText = "Possívelmente seguro";
}
function ajuda(){
    seg.innerText = "Pedido Enviado"
}