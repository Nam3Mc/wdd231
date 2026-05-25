
// http://127.0.0.1:5500/week4/thanks.html?first=dreiser&last=morales&phone=3138761588&email=moralesdreiser5%40gmail.com&ordinance=Endowment&date=2026-05-30&location=Provo+City+Center

const getString = window.location.search
console.log(getString)

const myInfo = new URLSearchParams(getString)
console.log(myInfo)

console.log(myInfo.get('first'))
console.log(myInfo.get('last'))
console.log(myInfo.get('ordinances'))
console.log(myInfo.get('date'))
console.log(myInfo.get('location'))
console.log(myInfo.get('phone'))
console.log(myInfo.get('email'))


const results = document.querySelector('#results')

results.innerHTML = `
    <p> Apointment for ${myInfo.get('first')} ${myInfo.get('last')} </p>
    <p> Proxy ${myInfo.get('ordinances')} on ${myInfo.get('date')} in the ${myInfo.get('location')}</p>
    <p> Your Phone number: ${myInfo.get('phone')}</p>
    <p> Your Email ${myInfo.get('email')}</p>
`