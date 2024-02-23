let personName :string = '';

PersonName = prompt('what is your name?') || '';

let lowercase :String = PersonName.toLowerCase() ;
let uppercase :string = PersonName.toUpperCase() ;
let titlecase :string = PersonName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

if(PersonName !== null && PersonName !== ''){
    alert(`hello ${PersonName}, here are your name in:
LowerCase: ${LowerCase}
UpperCase: ${UpperCase}
TitleCase: ${TitleCase}`)
}
else{
    alert('please fill your name !')
}