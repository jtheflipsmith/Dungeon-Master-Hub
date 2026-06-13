const baseURL = "https://www.dnd5eapi.co/api";

function convertToJson(res) {
    if (res.ok) {
        return res.json();
    } else {
        throw new Error ("Bad Response");
    }
}

export default class ProjectData {
    constructor(category) {

    }
    async getData(category) {
        const response = await fetch(`${baseURL}/2014/${category}`);
        const data = await convertToJson(response);
        return data.Result;
    }
}