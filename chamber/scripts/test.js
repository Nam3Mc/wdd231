fetch("./data/members.json")
    .then( response => response.json())
    .then( data => {
        const members = data.members
        const container = document.querySelector('#main')
        members.forEach(member => {
            const tag = document.createElement('p')
            tag.textContent = member.address
            container.appendChild(tag)
        });
    })