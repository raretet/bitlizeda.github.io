
let previewContainer = document.querySelector('.goods-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.main-goods__inner .main-goods__item').forEach(product => {
    product.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
        let target = preview.getAttribute('data-target');
            if(name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('.preview-close').onclick = () => {
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    }
});