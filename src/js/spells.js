import ProjectData from './ProjectData.mjs'
import { getParam, loadHeaderFooter } from './utils.mjs';

loadHeaderFooter();


const spellList = document.getElementById('spellList');
const category = "spells"
const spellData = new ProjectData(category)

