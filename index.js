function takeANumber (current, new_person){
  if(current == 0){  
    current[0] = new_person;
  } else {
    current.push(new_person)
  }
  return console.log(`Welcome, ${new_person}. You are number ${current.length + 1} in line.`)
}
function nowServing (current){
  var message = []
  if (current.length > 0){
    var customer = current[0]
    current = current.splice(current.length - 1)
    return customer
  }
  return 'There is nobody waiting to be served!'
}