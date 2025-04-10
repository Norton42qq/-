
document.addEventListener('DOMContentLoaded', function() {
    const mainPageBtn = document.getElementById('mainPageBtn');
    
    if (mainPageBtn) {
        mainPageBtn.addEventListener('click', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            
            setTimeout(function() {
                window.location.href = 'ti_lox.html';
            }, 500);
        });
    }
});