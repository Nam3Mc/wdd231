export default function modalCreator(data) {

    const modal = document.createElement('dialog')
    const title = document.createElement('h2')
    const certificate = document.createElement('h3')
    const description = document.createElement('p')
    const container = document.createElement('div')
    const btn = document.createElement('button')
    const tecnologies = data.technology
    
    modal.classList.add(`${data.subject}${data.number}`)
    title.textContent = data.title
    certificate.textContent = data.certificate
    description.textContent = data.description
    btn.textContent = 'Close'

    tecnologies.forEach( tecnology => {
        const div = document.createElement('div')
        div.textContent = tecnology
        container.appendChild(div)
    })

    btn.addEventListener('click', () => {
        console.log('hi')
        modal.close()
    })

    modal.appendChild(title)
    modal.appendChild(certificate)
    modal.appendChild(description)
    modal.appendChild(container)
    modal.appendChild(btn)


    return modal

}