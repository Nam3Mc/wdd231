export default function addStock() {
    try {

        const formData = document.querySelector('#technician-form')
        const stock = JSON.parse(localStorage.getItem('stock'))
        formData.addEventListener('submit', (event) => {
            event.preventDefault()
            const newStock = {
                "id": crypto.randomUUID(),
                "productName": formData.productName.value,
                "category": formData.category.value,
                "quantity": formData.quantity.value,
                "price": formData.price.value,
                "expirationDate": formData.expirationDate.value
            }
            
            technicians.push(newTechnician)
            localStorage.setItem('technicians', JSON.stringify(technicians))
            alert('Stock added successfully')  
            formData.reset()
        })

    } catch(error) {
        console.error('Error adding service:', error)
        alert('Something went wrong while adding the Stock')
    }
}