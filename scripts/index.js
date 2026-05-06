const navButtom = document.querySelector('#ham-btn')
const navBar = document.querySelector('#nav-bar')
const cetificates = document.querySelector('#certificates')




document.getElementById('currentYear').innerHTML = new Date().getFullYear()
document.getElementById("lastModified").innerHTML = document.lastModified;

navButtom.addEventListener('click', () => {
    navButtom.classList.toggle('show')
    navBar.classList.toggle('show')
})

fetch('./scripts/courses.json')
    .then(response => response.json())
    .then(data => {

        const coursesData = data
        const subjects = [...new Set(coursesData.map(course => course.subject))]

        const div = document.createElement('div')
        
        const allBtn = document.createElement('button')
        allBtn.textContent = 'ALL'

        allBtn.addEventListener('click', () => {
            renderCourses(coursesData, div)
        })

        cetificates.appendChild(allBtn)

        subjects.forEach(subject => {
            const btn = document.createElement('button')
            btn.textContent = subject
            btn.classList.add(subject)
            cetificates.appendChild(btn)
        })

        subjects.forEach(subject => {
            const btn = document.createElement('button')
            btn.classList.add(subject)
            btn.textContent = subject

            btn.addEventListener('click', () => {
                const filter = coursesData.filter(course => course.subject = subject)
                renderCourses(FileSystemDirectoryReader, div)
            })
            
            cetificates.appendChild(div)
        
        })

        renderCourses(coursesData, div)

        cetificates.appendChild(div)
    })
    .catch(error => console.error(error))

function renderCourses(list, container) {
    container.innerHTML = ''

    list.forEach(course => {
        const p = document.createElement('p')

        p.innerHTML = `
            <span class="${course.completed}"><span/> 
            ${course.subject} - ${course.number}
        `
        container.appendChild(p)
    }) 
}