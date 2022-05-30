/* palabras clave
console. arrays asociativos.

Se trata de notificar si ha aprobado o suspendido cada asignatura definida en materias.
La matriz asociativa tabla se compone del nombre de la materia con 3 campos:
	porcentaje de asitencia: Se aprueba con más del 90%
	nota en el examen: se aprueba con más de un 5
	practicas entregadas: se aprueban con más de 3

	se definen funciones,se recorre la matriz y se muestran los resultados.

*/

const materias = {
	fisica: [90, 6, 3,],
	matematica: [84, 4, 2,],
	logica: [92, 8, 4,],
	quimica: [96, 8, 4,],
	calculo: [91, 6, 3,],
	programacion: [79, 7, 4,],
	biologia: [75, 9, 2,],
	bbdd: [98, 9, 1,],
	algebra: [100, 10, 4,]
}

let asignatura;

aproboAsistencia = (asignatura) => {
	if (materias[asignatura][0] >= 90) {
		return true;
	}
	else return false;
}
aproboExamen = (asignatura) => {
	if (materias[asignatura][1] >= 5) {
		return true;
	}
	else return false;
}
aproboPracticas = (asignatura) => {
	if (materias[asignatura][2] >= 3) {
		return true;
	}
	else return false;
}

for (materia in materias) {
	let asistencia = aproboAsistencia(materia);
	let examen = aproboExamen(materia);
	let practicas = aproboPracticas(materia);
	let partesSuspensas = "está suspensa en: ";


	document.write(`<br>La asignatura:  ${materia} `);
	if (asistencia && examen && practicas) {
		console.log("%c   está aprobada ¡Enhorabuena!", "color: green");
		document.write(`<b style = "color:green"> está aprobada ¡Enhorabuena! </b><br>`);
	}
	else {
		if (!asistencia) {
			partesSuspensas = partesSuspensas + " asistencia,";
		}
		if (!examen) {
			partesSuspensas = partesSuspensas + " examen,";
		}
		if (!practicas) {
			partesSuspensas = partesSuspensas + " practicas";
		}
		document.write(`<b style = "color:red">   ${partesSuspensas} </b><br>`);
		console.log("%c   está suspensa ", "color: red green");
	}
}

