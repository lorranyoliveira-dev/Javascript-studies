const unstructuredText = "My cpf is 123.456.789-00"

const regex = new RegExp("[0-9]{3} . [0-9]{3}. [0-9]{3} - [0-9]{2}")

console.log(unstructuredText.match(regex))