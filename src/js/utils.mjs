
// this is for header and footer
export function renderWithTemplate(template, parentElement, data, callback) {
  const html = template;
  parentElement.innerHTML = html;
  if (callback) {
    callback(data);
  }
}


export async function loadHeaderFooter() {
        const headerTemplate = await fetch('../partials/header.html');
        const headerElement = document.getElementById('mainH');
        
