const dndURL = "https://www.dnd5eapi.co/api";


function convertToJson(res) {
  if (res.ok) {
    return res.json();
  }
  throw new Error("Bad Response");
}

export default class ProjectData {
  constructor(category = "spells") {
    this.category = category;
  }

  async getData(category = this.category) {
    const normalizedCategory = category.replace(/\./g, "/");
    const response = await fetch(`${dndURL}/2014/${normalizedCategory}`);
    return convertToJson(response);
  }

  async findItemByIndex(index) {
    const normalizedIndex = index.startsWith("spells/") ? index : `spells/${index}`;
    return this.getData(normalizedIndex);
  }
}