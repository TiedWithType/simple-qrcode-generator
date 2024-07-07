const $ = (selector: string): HTMLElement => document.querySelector(selector);

$('input').addEventListener("input", () => {
    const inputValue = ($('input') as HTMLInputElement).value;
    const imgElement = $('img') as HTMLImageElement;
    
    imgElement.setAttribute('src', `http://api.qrserver.com/v1/create-qr-code/?data=${inputValue || 'null'}&size=200`);

    ['alt', 'title'].forEach(attr => {
        imgElement.setAttribute(attr, inputValue);
    });

    $('.length').textContent = `${inputValue.length} / ${($('input') as HTMLInputElement).maxLength}`;
});
