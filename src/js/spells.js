import ProjectData from './ProjectData.mjs';
import SpellDetails from './SpellDetails.mjs';
import { getParam, loadHeaderFooter } from './utils.mjs';

loadHeaderFooter();

const spellIndex = getParam('spell') || 'acid-splash';
const spellData = new ProjectData('spells');
const spellDetails = new SpellDetails(spellIndex, spellData);

// Initialize details to use in view
spellDetails.init();

async function loadSpellList() {
  const spellInfo = await spellData.getData('spells');
  const spellList = document.getElementById('spellList');
  
// --- Ai helped me learn and adapt this part into the code ---
  if (!spellInfo || !Array.isArray(spellInfo.results)) {
    spellList.textContent = 'No spells found.';
    return;
  }
// -----------------------------------
  spellList.innerHTML = '';

  spellInfo.results.forEach((spell) => {
    const card = document.createElement('a');
    card.className = 'spell-card';
    card.href = `spells.html?spell=${spell.index}`;
    card.innerHTML = `
      <div class="card-content">
        <h3>${spell.name}</h3>
        <p>${spell.desc || ''}</p>
      </div>
    `;

    spellList.appendChild(card);
  });
}

loadSpellList();