

function Somar (){
    let x = document.getElementById ("valorx").value ;
    let y = document.getElementById ("valory").value ;
    let r = parseInt(x) + parseInt(y);

    document.getElementById("valor").value = r
    console.log(r);
}


function Subitração (){
    let x = document.getElementById ("valorx").value;
    let y = document.getElementById ("valory").value;
    let r = parseInt(x) - parseInt(y)

    document.getElementById("valor").value = r 
}


function Divição (){

    let x = document.getElementById ("valorx").value;
    let y = document.getElementById ("valory").value;
    let r = parseInt(x) / parseInt(y)

    document.getElementById("valor").value = r
 
}


function Porcentagem (){

    let x = document.getElementById ("valorx").value
    let y = document.getElementById ("valory").value
    let r = parseInt(y) *100 / parseInt(x)
    
    console.log(r);
    

    document.getElementById("valor").value = r
    
}


function Mutiplicação (){

    let x = document.getElementById ("valorx").value
    let y = document.getElementById ("valory").value
    let r = parseInt(x) * parseInt(y)

    document.getElementById("valor").value = r
}
