var femaleNames = ['Asia' , 'Kasia' , 'Ola' , 'Jola']
var maleNames = ['Piotrek' , 'Marek' , 'Arek' , 'Jarek']

var allNames = femaleNames.concat(maleNames)

console.log(allNames)

var newName = 'Marian'
var updateList = allNames.push(newName)

if (allNames.indexOf(newName) === -1) {
	console.log(updateList)
} else {
	console.log(allNames)
}
