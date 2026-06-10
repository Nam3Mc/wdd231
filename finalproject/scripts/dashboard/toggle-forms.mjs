export default function toggleForms() {

    const btns = document.querySelectorAll('.accordion-btn')
    btns.forEach(btn => {
        const parent = btn.parentElement
        btn.addEventListener('click', () => {
            parent.classList.toggle('show')
        })
    })


}