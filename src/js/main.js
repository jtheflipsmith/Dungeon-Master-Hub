import ProjectData from './ProjectData.mjs';
import { loadHeaderFooter } from './utils.mjs';

loadHeaderFooter();

const form = document.getElementById("wordSearch")

form.addEventListener("submit", function(event) {
    event.preventDefault;

    const formData = new FormData(form);
    const newWord = formData.get("word")
    

});

async function wordSearch(word) {
    data = new ProjectData.dictionarySearch(word);

}