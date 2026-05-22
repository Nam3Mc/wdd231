export default function serviceSelector(servicesList) {{
    const selectedServices = []
    const usedIndexes = new Set();

    while (selectedServices.length != 3) {
        const index = Math.floor(Math.random() * servicesList.length);
        if (servicesList[index].membership === 3 && !usedIndexes.has(index)) {
            selectedServices.push(servicesList[index])
            usedIndexes.add(index)
        }

    }
    return selectedServices
}}