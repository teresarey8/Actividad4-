let name = prompt("Introduce tu nombre:");
let reversedName = "";
for (let i = name.length - 1; i >= 0; i--) {
  reversedName += name.charAt(i);
}
alert("¡Adiós " + reversedName + "!");
