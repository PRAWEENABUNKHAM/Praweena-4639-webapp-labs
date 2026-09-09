document.addEventListener('DOMContentLoaded', () => {

    const section = document.querySelector('section');
    section.classList.add('container');

    const logo = section.querySelector('img');           
    logo.id = 'kku-logo';
    logo.src = 'https://www.stec.co.th/imgadmins/img_proref/TH_ref_20160516123534.jpg';
    logo.alt = 'Faculty of Engineering, Khon Kaen University';
    logo.classList.add('faculty-logo');

    const logoLink = document.createElement('a');
    logoLink.href = 'https://www.en.kku.ac.th';
    logoLink.target = '_blank';         
    logoLink.rel = 'noopener noreferrer'; 
    logoLink.title = 'Visit the Faculty of Engineering website';

    logo.parentNode.insertBefore(logoLink, logo);
    logoLink.appendChild(logo);

    const message = document.createElement('p');
    message.textContent = 'We hope you enjoy learning';
    message.classList.add('welcome-message');

    logoLink.insertAdjacentElement('afterend', message);

    const oldParagraph = section.querySelector('p:not(.welcome-message)');
    if (oldParagraph) {
        oldParagraph.remove();
    }
    document.title = 'KKU Engineering';
});