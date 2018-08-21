function takeANumber (current, new){
  current.push(new)
  return console.log(`Welcome, ${new}. You are number ${current.length + 1} in line.`)
}