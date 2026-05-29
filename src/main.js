// Ждем полной загрузки DOM, прежде чем рисовать графики
document.addEventListener('DOMContentLoaded', () => {
    
    // Функция переключения страниц теперь гарантированно работает
    window.switchPage = function(pageId) {
        const pages = ['home', 'theory', 'research', 'tips'];
        
        pages.forEach(id => {
            const el = document.getElementById(`page-${id}`);
            if (id === pageId) {
                el.classList.remove('hidden');
                // Даем время на отрисовку перед изменением прозрачности
                setTimeout(() => {
                    el.classList.add('opacity-100');
                    el.classList.remove('opacity-0');
                }, 50);
            } else {
                el.classList.add('hidden');
                el.classList.add('opacity-0');
                el.classList.remove('opacity-100');
            }
        });

        // Навигация скрыта только на главной
        const nav = document.getElementById('site-nav');
        if (pageId === 'home') {
            nav.classList.add('hidden');
        } else {
            nav.classList.remove('hidden');
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // РИСУЕМ ГРАФИКИ СРАЗУ
    const ctx1 = document.getElementById('chart1').getContext('2d');
    new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Сильный стресс (80%)', 'Норма (20%)'],
            datasets: [{
                data: [16, 4],
                backgroundColor: ['#f43f5e', '#10b981'],
                borderWidth: 0,
                hoverOffset: 20
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom' } }
        }
    });

    const ctx2 = document.getElementById('chart2').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Усталость', 'Нарушение сна', 'Память', 'Тревога'],
            datasets: [{
                label: 'Студентов Т-15',
                data: [18, 15, 12, 16],
                backgroundColor: '#6366f1',
                borderRadius: 12
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true, max: 20 } }
        }
    });
});