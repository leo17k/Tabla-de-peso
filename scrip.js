var peso = document.getElementById('Peso');
var estatura = document.getElementById('Estatura');
var condiciom = document.getElementById('Condicion');
let editar = document.getElementById('Edit');



function condicionxds(){

var x = peso.innerText;
var y = estatura.innerText;

var y2 = y * y;

if(x / y2 < 18.5){
    valor = 'Bajo peso (desnutrición)';
}
else if( x / y2 >= 18.5 && x/y2 <= 24.9){
    valor='Peso Normal'
}
else if( x / y2 >= 25 && x/y2 <= 29.9){
    valor='Sobrepeso'
}
else if( x / y2 >30){
    valor='Obesidad'
}


    return valor ;
}



    editar.addEventListener('click', ()=>{
        condiciom.innerText = condicionxds();
    })
    





    function editartabla(td){
        const input = document.createElement('input');
        input.type = 'text';
        input.value = td.innerText;
        td.innerHTML = '';
        td.appendChild(input);
        input.focus();

        input.onblur = input.onkeypress = (event)=>{

            if(event.type === 'blur' || event.key === 'Enter'){
     td.innerText = input.value || td.innerText;

            } 
        };

    }


    function añadirfila(){
     
        const table = document.getElementById('tabla-alumnos').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        newRow.id = `fila-${table.rows.length}`;   

        const encabezados = ['Nombre', 'Edad', 'Estatura', 'Peso', 'Condicion']; 

        for (let i = 0; i < 5; i++){

        const newCell = newRow.insertCell(i)
        
        newCell.className = 'editable';
        newCell.onclick = () => editartabla(newCell);
        newCell.innerText = ( i === 0 )? '':(i === 1 ? '' : '');

        newCell.id = `${encabezados[i]}`; 
        }

    }


    

    console.log('sexo');





