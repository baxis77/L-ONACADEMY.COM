let mode = 'register';

// Modalı açmaq
function openAuthModal(type) {
    mode = type;
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.style.display = 'flex';
        updateModalUI();
    }
}

// Modalı bağlamaq
function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Giriş və Qeydiyyat rejimləri arası keçid
function toggleAuthMode() {
    mode = (mode === 'register') ? 'login' : 'register';
    updateModalUI();
}

// Modalın görünüşünü (Yazılarını) yeniləmək
function updateModalUI() {
    const title = document.getElementById('modalTitle');
    const nameInputGroup = document.getElementById('nameInputGroup');
    const message = document.getElementById('toggleMessage');
    const button = document.getElementById('toggleBtn');

    if (mode === 'login') {
        title.innerText = "Daxil ol";
        if (nameInputGroup) nameInputGroup.style.display = "none";
        message.innerText = "Hesabınız yoxdur?";
        button.innerText = "Qeydiyyatdan keç";
    } else {
        title.innerText = "Qeydiyyat";
        if (nameInputGroup) nameInputGroup.style.display = "block";
        message.innerText = "Hesabınız var?";
        button.innerText = "Daxil ol";
    }
}

// Əsas Giriş/Qeydiyyat Funksiyası
function handleAuthentication(event) {
    event.preventDefault(); // Səhifənin refresh olmasını dayandırır
    
    const email = document.getElementById('authEmail').value;
    const password = document.getElementById('authPass').value;
    const nameInput = document.getElementById('authName');
    
    // Sadə yoxlanış
    if (!email || !password) {
        alert("Zəhmət olmasa bütün xanaları doldurun!");
        return;
    }

    // Əgər qeydiyyatdırsa, adı yadda saxla
    if (mode === 'register' && nameInput && nameInput.value) {
        localStorage.setItem('userName', nameInput.value);
    } else if (mode === 'login') {
        // Giriş zamanı simulyasiya üçün adı "İstifadəçi" kimi yadda saxlaya bilərik
        if (!localStorage.getItem('userName')) {
            localStorage.setItem('userName', 'İstifadəçi');
        }
    }

    // Yönləndirmə öncəsi vizual effekt
    const submitBtn = event.target.querySelector('button[type="submit"]');
    submitBtn.innerText = "Giriş edilir...";
    submitBtn.disabled = true;

    setTimeout(() => {
        // Sənin əsas səhifənə (kursların olduğu index.html) yönləndirmə
        window.location.href = "main.html"; 
    }, 1000);
}

// Modalın kənarına (boşluğa) klikləyəndə bağlanması
window.onclick = function(event) {
    const modal = document.getElementById('authModal');
    if (event.target === modal) {
        closeAuthModal();
    }
}

// ESC düyməsi ilə modalı bağlamaq (Bonus rahatlıq)
window.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeAuthModal();
    }
});
