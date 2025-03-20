//Create an object "keyboard" with the following details:
  keyboard = {
  type: "mechanical",
  layout: "QWERTY",
  hasNumPad: true,
  color: "black"
  }

//Display the keyboard type and layout.
console.log(`Type: ${keyboard.type}, Layout: ${keyboard.layout}`);

//Display the numpad status.
console.log(`Numpad status: ${keyboard.hasNumPad}`);

//Add a backlit key with the value true.
Object.assign(keyboard, { backlit: true });

//Change the color key to "white".
keyboard.color = "White";

//Display the keyboard object.
console.log(keyboard);