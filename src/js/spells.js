const spellList = document.getElementById('spellList');

getSpells();

async function getSpells() {
    try {
        // Fetch spells from D&D api
        const response = await fetch('https://www.dnd5eapi.co/api/spells');
        // Check if the response is successful
        const data = await response.json();
                if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        spellList.innerHTML = '';
        console.log(data);
        data.results.forEach(spell => {
            const spellItem = document.createElement('section');
            spellItem.innerHTML = `
                <h2>${spell.name}</h2>
                <p><strong>Level:</strong> ${spell.level}</p>
                
            `;
            if (spell.level === 0) {
                spellItem.innerHTML += `<p><strong>Type:</strong> Cantrip</p>`;
            }
            spellList.appendChild(spellItem);
        })
    } catch (error) {
        console.error('Error fetching spells:', error);
        spellList.innerHTML = '<p>Failed to load spells. Please try again later.</p>';
    }};

async function getSpellDetails(spellIndex) {
    try {
        const response = await fetch(`https://www.dnd5eapi.co/api/spells/${spellIndex}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const spell = await response.json();
        console.log(spell);

        const spellDetails = document.createElement('section');
        spellDetails.innerHTML = `<h2>${spell.name}</h2>`;
        spellDetails.innerHTML += `<p><strong>Level:</strong> ${spell.level}</p>`;
        spellDetails.innerHTML += `<p><strong>Description:</strong> ${spell.desc}</p>`;
        spellDetails.innerHTML += `<p><strong>Range:</strong> ${spell.range}</p>`;
        spellDetails.innerHTML += `<p><strong>Components:</strong> ${spell.components.join(', ')}</p>`;
        spellDetails.innerHTML += `<p><strong>Duration:</strong> ${spell.duration}</p>`;
        
        document.body.appendChild(spellDetails);
    } catch (error) {
        console.error('Error fetching spell details:', error);
    }

getSpellDetails('acid-arrow');

}

