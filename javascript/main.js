// mensaje de bienvenida

alert("Bienvenido a nuestra nueva página")

// funcion para sacar turno
function sacarTurno(paciente){
    
    // contador para los distintos turnos
    for (let numPaciente = 1; numPaciente <= 10; numPaciente++){

        // aquí utilizaremos el nombre del paciente y un mensaje para mostrar el turno, el cual acompañará al contador
        console.log( paciente + " usted ahora tiene el turno " + numPaciente )
        
        //mensaje para saber si quiere otro turno o no
        otroTurno = prompt("¿desea cambiar de turno?")

        //si el paciente quiere otro turno, el contador seguira su camino normal y le asignara un nuevo turno al usuario, si el usuario no quiere otro turno, el contador ya no es necesario y podemos simplemente detenerlo
        if (otroTurno == "si"){
            continue
        } else{
            break
        }

    }
}

    //hago un prompt para saber si el usuario desea sacar turno
    let elejirTurno = prompt("¿desea reservar un turno?") 
    
    
    
    // aqui es donde empieza la magia
    if (elejirTurno == "si"){
        
        //aqui el paciente guarda su nombre así podemos identificarlo

        let paciente = prompt("A continuacion escriba su nombre")

        //llamamos a la funcion 

        sacarTurno(paciente)

    } else {  //despedimos al usuario que no saco turno
        console.log("que tenga buen día señor/madame")
    }
