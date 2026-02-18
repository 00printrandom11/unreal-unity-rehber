export class Sidebar {
    constructor(containerId, onNavigate) {
        this.container = document.getElementById(containerId);
        this.onNavigate = onNavigate;
        this.init();
    }

    init() {
        this.container.innerHTML = `
            <div class="sidebar">
                <div class="logo-area">
                    <h1>Unreal <span>Rehber</span></h1>
                </div>
                <nav class="nav-buttons">
                    <button class="nav-btn active" data-tab="actors">
                        <span>🧊</span> Actor Hiyerarşisi
                    </button>
                    <button class="nav-btn" data-tab="variables">
                        <span>🎨</span> Değişkenler & Renkler
                    </button>
                    <button class="nav-btn" data-tab="search">
                        <span>🔍</span> Blueprint Ara
                    </button>
                    <button class="nav-btn" data-tab="guide">
                        <span>📖</span> Rehber
                    </button>
                    <button class="nav-btn" data-tab="shortcuts">
                        <span>⌨️</span> Kısayollar
                    </button>
                </nav>
            </div>
        `;

        this.addEventListeners();
    }

    addEventListeners() {
        const buttons = this.container.querySelectorAll('.nav-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const tab = btn.dataset.tab;
                this.onNavigate(tab);
            });
        });
    }
}
