// Accordion
document.querySelectorAll('.acc-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
        document.querySelectorAll('.acc-item').forEach(other => { if(other !== item) other.classList.remove('active'); });
    });
});

// 13 ƏDƏD YORUM - İNDİ HAMISI GÖRÜNƏCƏK
let reviews = [
    {n: "Murad A.", t: "Sistem mükəmməl işləyir!"},
    {n: "Aysel M.", t: "İlk qazancımı dünən çıxardım."},
    {n: "Fərid T.", t: "Hər kəsə tövsiyə edirəm."},
    {n: "Amil M.", t: "Mentor dəstəyi çox yaxşıdır."},
    {n: "Zaur E.", t: "Həyatım dəyişdi, çox sağ olun."},
    {n: "Nigar R.", t: "Peşəkar yanaşma, şəffaf sistem."},
    {n: "Orxan B.", t: "Freelance master kursu əladır."},
    {n: "Famil K.", t: "Maliyyə azadlığı üçün tək ünvan."},
    {n: "Emin V.", t: "Strategiyalar çox sadə izah olunub."},
    {n: "Səbinə Q.", t: "Dürüstlük hər şeydən önəmlidir, burada o var."},
    {n: "Kamran İ.", t: "Kripto təlimləri çox faydalıdır."},
    {n: "Aytən L.", t: "Tərəddüd etmədən qoşulun."},
    {n: "Rəşad H.", t: "Artıq dollarla qazanıram."}
];

let visible = 3; // İlk olaraq 3 dənə göstər
const grid = document.getElementById('testimonialGrid');
const nextBtn = document.getElementById('nextBtn');

function render() {
    grid.innerHTML = "";
    reviews.slice(0, visible).forEach(r => {
        grid.innerHTML += `
            <div class="card">
                <p style="font-style:italic; color:#ccc; margin-bottom:10px;">"${r.t}"</p>
                <span style="color:#00d4ff; font-weight:bold;">- ${r.n}</span>
            </div>
        `;
    });

    // Əgər göstəriləcək rəy qalmayıbsa düyməni gizlət
    if(visible >= reviews.length) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "inline-block";
    }
}

// Düyməyə basanda sayı 3-3 artır
nextBtn.onclick = () => {
    visible += 3;
    render();
};

document.getElementById('commentForm').onsubmit = function(e) {
    e.preventDefault();
    const n = document.getElementById('userName').value;
    const t = document.getElementById('userComment').value;
    reviews.unshift({n, t}); // Yeni rəyi siyahının başına qoy
    visible = 3; // Yenidən ilk 3-ü göstər
    render();
    this.reset();
};

render();
document.getElementById('counter').innerText = "875";

// Mobil Menyu Funksiyası
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.onclick = function() {
        navLinks.classList.toggle('active');
        
        // İkonu dəyişmək (Bars <-> Times)
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    };
}

// Linklərdən birinə basanda menyunu bağla
document.querySelectorAll('.nav-links a').forEach(link => {
    link.onclick = () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.replace('fa-times', 'fa-bars');
    };
});