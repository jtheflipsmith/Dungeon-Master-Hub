import ProjectData from "./ProjectData.mjs"

export default class SpellDetails {
  constructor(index, dataSource) {
    this.index = index;
    this.dataSource = dataSource;
    this.spell = null;
  }

  async init() {
    this.spell = await this.dataSource.findItemByIndex(this.index);
    this.renderSpellDetails();
  }

  renderSpellDetails() {
    spellDetailsTemplate(this.spell);
  }
}

function spellDetailsTemplate(spell) {
  if (!spell) return;

  document.querySelector("h2").textContent = spell.name;
  document.getElementById("spellLevel").textContent = `Level ${spell.level}`;
  document.getElementById("spellDesc").textContent = Array.isArray(spell.desc)
    ? spell.desc.join(" ")
    : spell.desc;
}

