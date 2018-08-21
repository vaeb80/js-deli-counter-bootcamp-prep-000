function takeANumber (current, new_person){
  if (current.length == 0){
    current.unshift(new_person)
  }
  current.push(new_person)
  return console.log(`Welcome, ${new_person}. You are number ${current.length + 1} in line.`)
}