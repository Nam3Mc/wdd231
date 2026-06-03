export default function createModal(data) {
    const modal = document.createElement('dialog')
    const p = document.createElement('p')
    const btn = document.createElement('botton')

    p.textContent = data
    btn.textContent = 'Close'

    btn.classList.add('mdl-button')
    modal.appendChild(p)
    modal.appendChild(btn)

    btn.addEventListener('click', () => {
        modal.close()
    })

    return modal

}