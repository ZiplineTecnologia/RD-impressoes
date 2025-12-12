document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // Join Team Form Handler
    const joinForm = document.getElementById('join-team-form');
    if (joinForm) {
        joinForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            // Format message for WhatsApp
            const message = `*Candidatura para Vaga*%0A%0A*Nome:* ${name}%0A*Email:* ${email}%0A*Telefone:* ${phone}`;
            const whatsappNumber = '555421412275';

            // Open WhatsApp
            const url = `https://wa.me/${whatsappNumber}?text=${message}`;
            window.open(url, '_blank');

            // Optional: Clear form
            joinForm.reset();
        });
    }
});

// Dynamic Portfolio Carousel Logic
const galleryData = {
    "Etiquetas": [
        "imagens/Etiquetas-20251212T125044Z-1-001/Etiquetas/etiquetas 02.jpeg",
        "imagens/Etiquetas-20251212T125044Z-1-001/Etiquetas/Etiquetas 01.jpeg",
        "imagens/Etiquetas-20251212T125044Z-1-001/Etiquetas/Etiquetas.jpeg",
        "imagens/Etiquetas-20251212T125044Z-1-001/Etiquetas/AC866279-6D01-4D50-AD53-50B481B54132.JPG",
        "imagens/Etiquetas-20251212T125044Z-1-001/Etiquetas/IMG_4924.JPG",
        "imagens/Etiquetas-20251212T125044Z-1-001/Etiquetas/IMG_4921.JPG",
        "imagens/Etiquetas-20251212T125044Z-1-001/Etiquetas/IMG_4923.JPG",
        "imagens/Etiquetas-20251212T125044Z-1-001/Etiquetas/IMG_4922.JPG"
    ],
    "Lonas": [
        "imagens/Lonas-20251212T125035Z-1-001/Lonas/Lona gaúcho.jpeg",
        "imagens/Lonas-20251212T125035Z-1-001/Lonas/Adesivo digital gaúcho.jpeg",
        "imagens/Lonas-20251212T125035Z-1-001/Lonas/Painel lona e adesivos vidros.jpg",
        "imagens/Lonas-20251212T125035Z-1-001/Lonas/IBDU.jpg",
        "imagens/Lonas-20251212T125035Z-1-001/Lonas/Fachada em lona com toldo embutido.jpg",
        "imagens/Lonas-20251212T125035Z-1-001/Lonas/C5D56486-0EC7-45BA-BC84-9D2234E99640.JPEG",
        "imagens/Lonas-20251212T125035Z-1-001/Lonas/A6A11B3F-B0BB-4A79-80E3-1BE0EB8DC2E5.JPEG",
        "imagens/Lonas-20251212T125035Z-1-001/Lonas/B94B6441-3E2A-4E65-B37A-F0815C327D78.JPEG",
        "imagens/Lonas-20251212T125035Z-1-001/Lonas/FDD69CFD-DDD4-4A35-911E-87206E37AB7F.JPEG",
        "imagens/Lonas-20251212T125035Z-1-001/Lonas/b9139713-00ef-4327-a803-4106c2b9bec9.JPG",
        "imagens/Lonas-20251212T125035Z-1-001/Lonas/65E672B3-4967-404D-849E-67401BAEFF12.JPEG",
        "imagens/Lonas-20251212T125035Z-1-001/Lonas/IBDU01.jpg",
        "imagens/Lonas-20251212T125035Z-1-001/Lonas/MVM02.jpg",
        "imagens/Lonas-20251212T125035Z-1-001/Lonas/Portela 01.jpg",
        "imagens/Lonas-20251212T125035Z-1-001/Lonas/C78BCC19-2B0F-446E-A236-3285542F19E1.JPEG",
        "imagens/Lonas-20251212T125035Z-1-001/Lonas/06.jpg",
        "imagens/Lonas-20251212T125035Z-1-001/Lonas/Portela.jpg",
        "imagens/Lonas-20251212T125035Z-1-001/Lonas/Portela02.jpg"
    ],
    "Lonas para Cavalete": [
        "imagens/Lonas para cavalete-20251212T125040Z-1-001/Lonas para cavalete/sesc10k 01.jpg",
        "imagens/Lonas para cavalete-20251212T125040Z-1-001/Lonas para cavalete/sesc 10k.jpg"
    ],
    "Placa ACM": [
        "imagens/Placa ACM-20251212T125030Z-1-001/Placa ACM/Placa de acm.jpg",
        "imagens/Placa ACM-20251212T125030Z-1-001/Placa ACM/IMG_4852.jpg"
    ],
    "Placas": [
        "imagens/Placas-20251212T125014Z-1-001/Placas/Placa em ACM com letra em acrílico prata espelhado.jpg",
        "imagens/Placas-20251212T125014Z-1-001/Placas/Placa em ACM e com letras em acrilicos branco.jpg"
    ],
    "Plotagem Móveis e Eletrodomésticos": [
        "imagens/Plotagem Moveis e eletrodomésticos-20251212T125009Z-1-001/Plotagem Moveis e eletrodomésticos/IMG_5054.jpg",
        "imagens/Plotagem Moveis e eletrodomésticos-20251212T125009Z-1-001/Plotagem Moveis e eletrodomésticos/IMG_5057.jpg",
        "imagens/Plotagem Moveis e eletrodomésticos-20251212T125009Z-1-001/Plotagem Moveis e eletrodomésticos/Geladeira.jpg",
        "imagens/Plotagem Moveis e eletrodomésticos-20251212T125009Z-1-001/Plotagem Moveis e eletrodomésticos/geladeira 01.jpg",
        "imagens/Plotagem Moveis e eletrodomésticos-20251212T125009Z-1-001/Plotagem Moveis e eletrodomésticos/Adesivo jateado.jpeg",
        "imagens/Plotagem Moveis e eletrodomésticos-20251212T125009Z-1-001/Plotagem Moveis e eletrodomésticos/Adevido digital em parede e plotegem de geladeira.jpg",
        "imagens/Plotagem Moveis e eletrodomésticos-20251212T125009Z-1-001/Plotagem Moveis e eletrodomésticos/IMG_5050.jpg",
        "imagens/Plotagem Moveis e eletrodomésticos-20251212T125009Z-1-001/Plotagem Moveis e eletrodomésticos/IMG_5051.jpg",
        "imagens/Plotagem Moveis e eletrodomésticos-20251212T125009Z-1-001/Plotagem Moveis e eletrodomésticos/IMG_5053.jpg",
        "imagens/Plotagem Moveis e eletrodomésticos-20251212T125009Z-1-001/Plotagem Moveis e eletrodomésticos/adesivo digital 03.jpg",
        "imagens/Plotagem Moveis e eletrodomésticos-20251212T125009Z-1-001/Plotagem Moveis e eletrodomésticos/Adesivo digital em parede e plotagem em geladeira01.jpg",
        "imagens/Plotagem Moveis e eletrodomésticos-20251212T125009Z-1-001/Plotagem Moveis e eletrodomésticos/IMG_5056.jpg",
        "imagens/Plotagem Moveis e eletrodomésticos-20251212T125009Z-1-001/Plotagem Moveis e eletrodomésticos/geladeira 05.jpg",
        "imagens/Plotagem Moveis e eletrodomésticos-20251212T125009Z-1-001/Plotagem Moveis e eletrodomésticos/geladeiora 04.jpg",
        "imagens/Plotagem Moveis e eletrodomésticos-20251212T125009Z-1-001/Plotagem Moveis e eletrodomésticos/Plotgem de geladeira.jpg",
        "imagens/Plotagem Moveis e eletrodomésticos-20251212T125009Z-1-001/Plotagem Moveis e eletrodomésticos/geladeira 03.jpg",
        "imagens/Plotagem Moveis e eletrodomésticos-20251212T125009Z-1-001/Plotagem Moveis e eletrodomésticos/IMG_5052.jpg",
        "imagens/Plotagem Moveis e eletrodomésticos-20251212T125009Z-1-001/Plotagem Moveis e eletrodomésticos/Sorveteira fischer fachada e balcão de acm 02.jpg",
        "imagens/Plotagem Moveis e eletrodomésticos-20251212T125009Z-1-001/Plotagem Moveis e eletrodomésticos/kente frio.jpeg",
        "imagens/Plotagem Moveis e eletrodomésticos-20251212T125009Z-1-001/Plotagem Moveis e eletrodomésticos/IMG_5055.jpg"
    ],
    "Plotagem de Automóvel": [
        "imagens/Plotagem de automovél-20251212T125012Z-1-001/Plotagem de automovél/00489c9c-ae4f-47b2-8e81-20b56252bead.JPG",
        "imagens/Plotagem de automovél-20251212T125012Z-1-001/Plotagem de automovél/158e731c-ebaf-4baf-a8ba-9e27d281046b.JPG",
        "imagens/Plotagem de automovél-20251212T125012Z-1-001/Plotagem de automovél/3EB35062-276F-490D-8677-6AED74950A52.JPG",
        "imagens/Plotagem de automovél-20251212T125012Z-1-001/Plotagem de automovél/pawissul4.jpg",
        "imagens/Plotagem de automovél-20251212T125012Z-1-001/Plotagem de automovél/personalização veicular bio.jpg",
        "imagens/Plotagem de automovél-20251212T125012Z-1-001/Plotagem de automovél/IMG_1160.JPG",
        "imagens/Plotagem de automovél-20251212T125012Z-1-001/Plotagem de automovél/IMG_1161.JPG",
        "imagens/Plotagem de automovél-20251212T125012Z-1-001/Plotagem de automovél/Projetos especiais - envelopamento veiculae - 2.PNG",
        "imagens/Plotagem de automovél-20251212T125012Z-1-001/Plotagem de automovél/pawissul5.jpg",
        "imagens/Plotagem de automovél-20251212T125012Z-1-001/Plotagem de automovél/158e731c-ebaf-4baf-a8ba-9e27d281046b(1).JPG",
        "imagens/Plotagem de automovél-20251212T125012Z-1-001/Plotagem de automovél/pawissul6.jpg",
        "imagens/Plotagem de automovél-20251212T125012Z-1-001/Plotagem de automovél/Projetos especiais - envelopamento veiculae - 3.PNG",
        "imagens/Plotagem de automovél-20251212T125012Z-1-001/Plotagem de automovél/93bf913c-17d4-459a-8044-30807cc6999a.JPG",
        "imagens/Plotagem de automovél-20251212T125012Z-1-001/Plotagem de automovél/c849529c-f05c-49b6-9c2d-8fe8db9a6dad.JPG",
        "imagens/Plotagem de automovél-20251212T125012Z-1-001/Plotagem de automovél/6bd9f3d4-0ccd-450f-9851-873c62c79452.JPG",
        "imagens/Plotagem de automovél-20251212T125012Z-1-001/Plotagem de automovél/dba903ca-5ba5-4e1e-951d-45a733409af2.JPG",
        "imagens/Plotagem de automovél-20251212T125012Z-1-001/Plotagem de automovél/ef3e2201-92c5-4df1-baf7-9ca961487af2.JPG",
        "imagens/Plotagem de automovél-20251212T125012Z-1-001/Plotagem de automovél/827d33ca-5f9d-4135-ac53-76a5776c2ec3.JPG",
        "imagens/Plotagem de automovél-20251212T125012Z-1-001/Plotagem de automovél/IMG_1162.JPG",
        "imagens/Plotagem de automovél-20251212T125012Z-1-001/Plotagem de automovél/IMG_1161(1).JPG"
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-portfolio-container');
    if (!container) return;

    Object.keys(galleryData).forEach((category, index) => {
        const images = galleryData[category];
        if (images.length === 0) return;

        // Create Carousel HTML
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'portfolio-category';

        const title = document.createElement('h3');
        title.textContent = category;
        categoryDiv.appendChild(title);

        const carouselContainer = document.createElement('div');
        carouselContainer.className = 'carousel-container';
        carouselContainer.id = `carousel-${index}`;

        images.forEach((imgSrc, i) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide fade';
            if (i === 0) slide.style.display = 'block';

            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `${category} - Imagem ${i + 1}`;
            img.onclick = () => openLightbox(imgSrc);

            slide.appendChild(img);
            carouselContainer.appendChild(slide);
        });

        // Controls
        const prevBtn = document.createElement('a');
        prevBtn.className = 'prev';
        prevBtn.innerHTML = '&#10094;';
        prevBtn.onclick = () => plusSlides(-1, index);

        const nextBtn = document.createElement('a');
        nextBtn.className = 'next';
        nextBtn.innerHTML = '&#10095;';
        nextBtn.onclick = () => plusSlides(1, index);

        carouselContainer.appendChild(prevBtn);
        carouselContainer.appendChild(nextBtn);
        categoryDiv.appendChild(carouselContainer);
        container.appendChild(categoryDiv);

        // Start Auto Show
        showSlides(1, index); // Init
        setInterval(() => {
            plusSlides(1, index);
        }, 3000 + (index * 500)); // Stagger animations slightly
    });
});

// Carousel State
let slideIndices = {};

function plusSlides(n, carouselIndex) {
    if (!slideIndices[carouselIndex]) slideIndices[carouselIndex] = 1;
    showSlides(slideIndices[carouselIndex] += n, carouselIndex);
}

function showSlides(n, carouselIndex) {
    if (!slideIndices[carouselIndex]) slideIndices[carouselIndex] = 1;

    const carousel = document.getElementById(`carousel-${carouselIndex}`);
    if (!carousel) return;

    const slides = carousel.getElementsByClassName("carousel-slide");
    if (n > slides.length) { slideIndices[carouselIndex] = 1 }
    if (n < 1) { slideIndices[carouselIndex] = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove('active');
    }

    slides[slideIndices[carouselIndex] - 1].style.display = "block";
    slides[slideIndices[carouselIndex] - 1].classList.add('active');
}

// Lightbox Logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-lightbox');

function openLightbox(src) {
    if (lightbox && lightboxImg) {
        lightbox.style.display = "block";
        lightboxImg.src = src;
    }
}

if (closeBtn) {
    closeBtn.onclick = function () {
        lightbox.style.display = "none";
    }
}

if (lightbox) {
    lightbox.onclick = function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    }
}
