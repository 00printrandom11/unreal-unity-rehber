export class Sidebar {
    constructor(containerId, onNavigate, engine = 'unreal', onBack = null) {
        this.container = document.getElementById(containerId);
        this.onNavigate = onNavigate;
        this.engine = engine;
        this.onBack = onBack;
        this.init();
    }

    init() {
        const isUnity = this.engine === 'unity';
        const themeClass = isUnity ? 'sidebar unity-theme' : 'sidebar';
        const logoText = isUnity
            ? '<h1>Unity <span>Rehber</span></h1>'
            : '<h1>Unreal <span>Rehber</span></h1>';

        const tabs = isUnity ? `
            <button class="nav-btn active" data-tab="components">
                <span>🧩</span> Component Hiyerarşisi
            </button>
            <button class="nav-btn" data-tab="variables">
                <span>🎨</span> Değişkenler (C#)
            </button>
            <button class="nav-btn" data-tab="search">
                <span>🔍</span> API Ara
            </button>
            <button class="nav-btn" data-tab="guide">
                <span>📖</span> Rehber
            </button>
            <button class="nav-btn" data-tab="shortcuts">
                <span>⌨️</span> Kısayollar
            </button>
        ` : `
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
        `;

        this.container.innerHTML = `
            <div class="${themeClass}">
                <div class="logo-area">
                    ${logoText}
                </div>
                <nav class="nav-buttons">
                    ${tabs}
                </nav>
                <div class="sidebar-footer">
                    <button class="nav-btn engine-back-btn" id="engine-back-btn">
                        <span>↩️</span> Motor Seç
                    </button>
                </div>
            </div>
        `;

        this.addEventListeners();
    }

    addEventListeners() {
        const buttons = this.container.querySelectorAll('.nav-btn:not(.engine-back-btn)');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const tab = btn.dataset.tab;
                this.onNavigate(tab);
            });
        });

        const backBtn = this.container.querySelector('#engine-back-btn');
        if (backBtn && this.onBack) {
            backBtn.addEventListener('click', () => {
                this.onBack();
            });
        }
    }
}
