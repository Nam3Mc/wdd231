import modalCreator from "./modal-creator.mjs"

export default function courseCardCreator(course) {

    const btn = document.createElement('button')
    const modal = modalCreator(course)

    btn.classList.add(course.subject)
    btn.innerHTML = `<span class="${course.completed}"></span> ${course.subject} - ${course.number}`
    document.body.appendChild(modal)

    btn.addEventListener('click', () => {
        modal.showModal()
    })

    return btn
}