document.addEventListener('DOMContentLoaded', function() {

    const socialBtn = document.getElementById('socialBtn');
    const projectsBtn = document.getElementById('projectsBtn');
    const funBtn = document.getElementById('funBtn');
    
    if (socialBtn) {
        socialBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'socials.html';
        });
    }
    
    if (projectsBtn) {
        projectsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'projects.html';
        });
    }
    
    if (funBtn) {
        funBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://files.voicy.network/public/Content/SoundGIFs/Video/ac8277fc-e871-45c8-bddf-dcbbe2eec911.mp4', '_blank');
        });
    }
});