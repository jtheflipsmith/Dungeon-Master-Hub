
export function getParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// this is for header and footer
export function renderWithTemplate(template, parentElement, data, callback) {
  const html = template;
  parentElement.innerHTML = html;
  if (callback) {
    callback(data);
  }
}

async function loadTemplate(path) {
  const response = await fetch(path);
  const template = await response.text();
  return template;
}

export async function loadHeaderFooter() {
        const headerTemplate = await loadTemplate('../public/partials/header.html');
        const headerElement = document.getElementById('mainH');
        const footerTemplate = await loadTemplate('../public/partials/footer.html');
        const footerElement = document.getElementById('mainF');
        renderWithTemplate(await headerTemplate, headerElement);
        renderWithTemplate(await footerTemplate, footerElement);
}

