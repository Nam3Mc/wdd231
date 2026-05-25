import courseCardCreator from "./index/course-card-creator.mjs"

const navButton = document.querySelector('#ham-btn')
const navBar = document.querySelector('#nav-bar')
const certificates = document.querySelector('#certificates')

let totalCredits = 0

document.getElementById('currentYear').textContent =
  new Date().getFullYear()
  
document.getElementById('lastModified').textContent =
  document.lastModified

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show')
    navBar.classList.toggle('show')
})

fetch('./scripts/courses.json')
  .then(response => response.json())
  .then(data => {

    let courses = data
    let subjects = [...new Set(courses.map(course => course.subject))]
    const btnsDiv = document.createElement('div')
    const coursesDiv = document.createElement('div')
    const allBtn = document.createElement('button')
    const totalP = document.createElement('p')

    allBtn.id = 'show-all'
    allBtn.textContent = 'ALL'
    btnsDiv.id = 'btns'
    coursesDiv.id = 'courses'
    totalP.id = 'total-credits'
    btnsDiv.appendChild(allBtn)

    function renderCourses(list, container) {
        container.innerHTML = ''
        totalCredits = 0
        list.forEach(course => {
              const courseBtn = courseCardCreator(course)
              container.appendChild(courseBtn)
            totalCredits += course.credits
        })
        totalP.textContent =
          `The total credits for courses listed above is ${totalCredits}`
    }

    allBtn.addEventListener('click', () => {
        renderCourses(courses, coursesDiv)
    })

    subjects.forEach(subject => {
        const btn = document.createElement('button')
        btn.id = `show-${subject}`
        btn.textContent = subject
        btnsDiv.appendChild(btn)
        btn.addEventListener('click', () => {
            const filteredCourses = courses.filter(course =>
                course.subject === subject
            )
            renderCourses(filteredCourses, coursesDiv)
        })
    })

    certificates.appendChild(btnsDiv)
    certificates.appendChild(coursesDiv)
    certificates.appendChild(totalP)
    renderCourses(courses, coursesDiv)

  })
  .catch(error => console.error(error))