const tarjeta=document.querySelector('#tarjeta'), btnAbrirFormulario=document.querySelector('#btn-abrir-formulario'),
formulario=document.querySelector('#formulario-tarjeta'),
numeroTarjeta=document.querySelector('#tarjeta .numero'),
nombreTarjeta=document.querySelector('#tarjeta .nombre'),
logoMarca = document.querySelector('#logo-marca'),
firma=document.querySelector('#tarjeta .firma p'),
mesExpiracion=document.querySelector('#tarjeta .mes'),
yearExpiracion=document.querySelector('#tarjeta .year'),
ccv=document.querySelector('#tarjeta .ccv');
const mostrarFrente = () =>{
    if(tarjeta.classList.contains('active')){
        tarjeta.classList.remove('active');
    }
};
//rotacion de la tarjeta
tarjeta.addEventListener('click',() => {
    tarjeta.classList.toggle('active');
});
//abrir formulario
btnAbrirFormulario.addEventListener('click',()=>{
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});
//select del mes generado dinamicamente
for(let i=1;i<=12;i++){
    let opcion=document.createElement('option');
    opcion.value=i;
    opcion.innerText=i;
    formulario.selectMes.appendChild(opcion);
}
//select del año generado dinamicamente
const yearAtual=new Date().getFullYear();
for(let i=yearAtual;i<=yearAtual+9;i++){
    let opcion=document.createElement('option');
    opcion.value=i;
    opcion.innerText=i;
    formulario.selectYear.appendChild(opcion);
}
//inut numero de tarjeta
formulario.inputNumero.addEventListener('keyup',(e)=>{
    let valorinput=e.target.value;
    //eliminamos espacios en blanco
    formulario.inputNumero.value=valorinput.replace(/\s/g, '')
    //eliminar las letras
    .replace(/\s/g,'')
    .replace(/\D/g,'')
    //ponemos espacio cada 4 numeros
    .replace(/([0-9]{4})/g, '$1 ')
    .trim();
    numeroTarjeta.textContent=valorinput;
    if(valorinput==''){
        numeroTarjeta.textContent= '#### #### #### ####';
        logoMarca.innerHTML='';
    }
    if(valorinput[0]==4){
        logoMarca.innerHTML='';
        const imagen=documents.createElement('img');
        imagen.src='img/logos/visa.png';
        logoMarca.appendChild(imagen);
    }else if(valorinput[0]==5){
        logoMarca.innerHTML='';
        const imagen=documents.createElement('img');
        imagen.src='img/logos/mastercard.png';
        logoMarca.appendChild(imagen);
    }
    mostrarFrente();
});
formulario.inputNombre.addEventListener('keyup',(e) => {
    let valorinput=e.target.value;
    formulario.inputNombre.value=valorinput.replace(/[0-9]/g, '');
    nombreTarjeta.textContent=valorinput;
    firma.textContent=valorinput;
    if(valorinput==''){
        nombreTarjeta.textContent= 'Jhon Doe';
    }
    mostrarFrente();
});
formulario.selectMes.addEventListener('change',(e) => {
    mesExpiracion.textContent=e.target.value;
    mostrarFrente();
});
formulario.selectYear.addEventListener('change',(e) => {
    yearExpiracion.textContent=e.target.value.slice(2);
    mostrarFrente();
});
formulario.inputCCV.addEventListener('keyup',(e) => {
    if(!tarjeta.classList.contains('active')){
        tarjeta.classList.toggle('active');
    }
    formulario.inputCCV.value=formulario.inputCCV.value.
    replace(/\s/g, '')
    //eliminar las letras
    .replace(/\D/g,'');
    ccv.textContent=formulario.inputCCV.value;
});

