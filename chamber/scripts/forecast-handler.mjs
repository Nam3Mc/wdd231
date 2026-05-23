export default function forecastHandler(list) {
    
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const dayIndex = new Date().getDay()+1

    const tableBody = document.querySelector('#forecast-body');
    tableBody.textContent = '';

    for (let i = 0; i < 3; i++) {
        const tr = document.createElement('tr');

        const day = document.createElement('td');
        day.textContent = days[(dayIndex + i) % 7];
        tr.append(day);

        const temp = document.createElement('td');
        temp.innerHTML = `${list[i].main.temp} °C`;
        tr.append(temp);

        const wind = document.createElement('td');
        wind.innerHTML = `${list[i].wind.speed} km/h`;
        tr.append(wind);

        const condition = document.createElement('td');
        condition.innerHTML = `${list[i].weather[0].description}`;
        tr.append(condition);
        
        tableBody.append(tr);
    }
}