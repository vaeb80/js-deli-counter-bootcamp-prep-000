function takeANumber (current, new_person){
  if(current.length == 0){  
    current[0] = new_person;
  } else {
    current.push(new_person)
  }
  return `Welcome, ${new_person}. You are number ${current.length } in line.`
}
function nowServing (current){
  var message = []
  if (current.length > 0){
    var customer = current[0]
    current = current.splice(current.length - 1)
    return `Currently serving ${customer}.`
  }
  return 'There is nobody waiting to be served!'
}
function currentLine (current){
  var sentence = 'The line is currently:'
  for ( var i = 0 ; i < current.length ; i++){
    if (i < current.length){
    sentence = sentence + ` ${i + 1}. ${current[i]},`
    } else {
      sentence = sentence + 
    }
  
  }
}