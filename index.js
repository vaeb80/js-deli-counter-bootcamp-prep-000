function takeANumber (current, new_person){
  if(current == 0){  
    current[0] = new_person;
  } else {
    current.unshift(new_person)
  }
  return console.log(`Welcome, ${new_person}. You are number ${current.length + 1} in line.`)
}
function 