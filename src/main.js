import { Sidebar } from './components/Sidebar.js';
import { ContentArea } from './components/ContentArea.js';
import { UnityContentArea } from './components/UnityContentArea.js';
import './style.css';

/* ═══════════════════════════════════════════
   PARTICLE + LIGHTNING BACKGROUND SYSTEM
   ═══════════════════════════════════════════ */

class BackgroundFX {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.stars = [];
        this.mouse = { x: -9999, y: -9999 };
        this.lightnings = [];
        this.lightningTimer = 0;
        this.lightningFlash = 0;
        this.connectionRadius = 180;
        this.starCount = 160;
        this.running = true;
        this.resize();
        this.createStars();
        this.bindEvents();
        this.loop();
    }

    resize() {
        this.w = this.canvas.width = window.innerWidth;
        this.h = this.canvas.height = window.innerHeight;
    }

    createStars() {
        this.stars = [];
        for (let i = 0; i < this.starCount; i++) {
            this.stars.push({
                x: Math.random() * this.w,
                y: Math.random() * this.h,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                r: Math.random() * 1.8 + 0.5,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: Math.random() * 0.02 + 0.005
            });
        }
    }

    bindEvents() {
        window.addEventListener('resize', () => {
            this.resize();
            this.createStars();
        });
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        window.addEventListener('mouseleave', () => {
            this.mouse.x = -9999;
            this.mouse.y = -9999;
        });
    }

    generateLightning(x, y, angle, depth, maxDepth) {
        if (depth > maxDepth) return;
        const segments = 6 + Math.floor(Math.random() * 8);
        const segLen = 20 + Math.random() * 40;
        let cx = x, cy = y;
        const points = [{ x: cx, y: cy }];
        for (let i = 0; i < segments; i++) {
            const jitter = (Math.random() - 0.5) * 1.2;
            cx += Math.cos(angle + jitter) * segLen;
            cy += Math.sin(angle + jitter) * segLen;
            points.push({ x: cx, y: cy });
            if (Math.random() < 0.3 && depth < maxDepth) {
                const branchAngle = angle + (Math.random() - 0.5) * 1.5;
                this.generateLightning(cx, cy, branchAngle, depth + 1, maxDepth);
            }
        }
        this.lightnings.push({
            points,
            alpha: 0.7 + Math.random() * 0.3,
            width: Math.max(1, 3 - depth),
            life: 1.0,
            decay: 0.03 + Math.random() * 0.04
        });
    }

    spawnLightning() {
        const side = Math.random();
        let sx, sy, angle;
        if (side < 0.5) {
            sx = Math.random() * this.w;
            sy = -10;
            angle = Math.PI / 2 + (Math.random() - 0.5) * 0.8;
        } else {
            sx = Math.random() < 0.5 ? -10 : this.w + 10;
            sy = Math.random() * this.h * 0.4;
            angle = sx < 0 ? 0.3 : Math.PI - 0.3;
        }
        this.generateLightning(sx, sy, angle, 0, 2 + Math.floor(Math.random() * 2));
        this.lightningFlash = 0.15 + Math.random() * 0.1;
    }

    update() {
        for (const s of this.stars) {
            s.x += s.vx;
            s.y += s.vy;
            s.pulse += s.pulseSpeed;
            if (s.x < -10) s.x = this.w + 10;
            if (s.x > this.w + 10) s.x = -10;
            if (s.y < -10) s.y = this.h + 10;
            if (s.y > this.h + 10) s.y = -10;
        }

        this.lightningTimer++;
        if (this.lightningTimer > 200 + Math.random() * 400) {
            this.spawnLightning();
            this.lightningTimer = 0;
        }

        for (let i = this.lightnings.length - 1; i >= 0; i--) {
            this.lightnings[i].life -= this.lightnings[i].decay;
            if (this.lightnings[i].life <= 0) this.lightnings.splice(i, 1);
        }

        if (this.lightningFlash > 0) this.lightningFlash -= 0.008;
    }

    draw() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.w, this.h);

        if (this.lightningFlash > 0) {
            ctx.fillStyle = `rgba(180, 200, 255, ${this.lightningFlash * 0.08})`;
            ctx.fillRect(0, 0, this.w, this.h);
        }

        for (const bolt of this.lightnings) {
            if (bolt.points.length < 2) continue;
            ctx.beginPath();
            ctx.moveTo(bolt.points[0].x, bolt.points[0].y);
            for (let i = 1; i < bolt.points.length; i++) {
                ctx.lineTo(bolt.points[i].x, bolt.points[i].y);
            }
            const a = bolt.life * bolt.alpha;
            ctx.strokeStyle = `rgba(160, 180, 255, ${a * 0.6})`;
            ctx.lineWidth = bolt.width + 4;
            ctx.stroke();
            ctx.strokeStyle = `rgba(200, 220, 255, ${a})`;
            ctx.lineWidth = bolt.width;
            ctx.stroke();
            ctx.strokeStyle = `rgba(255, 255, 255, ${a * 0.8})`;
            ctx.lineWidth = Math.max(0.5, bolt.width - 1);
            ctx.stroke();
        }

        const mx = this.mouse.x;
        const my = this.mouse.y;
        const cr = this.connectionRadius;

        for (const s of this.stars) {
            const glow = 0.5 + Math.sin(s.pulse) * 0.3;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r * (1 + Math.sin(s.pulse) * 0.3), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(180, 200, 240, ${glow * 0.7})`;
            ctx.fill();

            const dx = s.x - mx;
            const dy = s.y - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < cr) {
                const alpha = (1 - dist / cr) * 0.5;
                ctx.beginPath();
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(mx, my);
                ctx.strokeStyle = `rgba(100, 160, 255, ${alpha})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r + 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(100, 160, 255, ${alpha * 0.4})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < this.stars.length; i++) {
            for (let j = i + 1; j < this.stars.length; j++) {
                const a = this.stars[i], b = this.stars[j];
                const dx = a.x - b.x, dy = a.y - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.strokeStyle = `rgba(80, 120, 180, ${(1 - dist / 100) * 0.12})`;
                    ctx.lineWidth = 0.4;
                    ctx.stroke();
                }
            }
        }

        if (mx > 0 && my > 0) {
            ctx.beginPath();
            ctx.arc(mx, my, 4, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(100, 180, 255, 0.6)';
            ctx.fill();
            ctx.beginPath();
            ctx.arc(mx, my, 20, 0, Math.PI * 2);
            const g = ctx.createRadialGradient(mx, my, 0, mx, my, 20);
            g.addColorStop(0, 'rgba(100, 180, 255, 0.15)');
            g.addColorStop(1, 'rgba(100, 180, 255, 0)');
            ctx.fillStyle = g;
            ctx.fill();
        }
    }

    loop() {
        if (!this.running) return;
        this.update();
        this.draw();
        requestAnimationFrame(() => this.loop());
    }

    destroy() {
        this.running = false;
    }
}

/* ═══════════════════════════════════════════
   APP INIT
   ═══════════════════════════════════════════ */

let bgFX = null;

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('bg-canvas');
    bgFX = new BackgroundFX(canvas);
    const app = document.getElementById('app');
    showEngineSelect(app);
});

function showEngineSelect(app) {
    app.innerHTML = '';
    app.className = '';

    const canvas = document.getElementById('bg-canvas');
    if (canvas) canvas.style.display = 'block';
    if (bgFX) bgFX.running = true;

    const screen = document.createElement('div');
    screen.className = 'engine-select-screen';
    screen.innerHTML = `
        <div class="es-glow-orb es-glow-1"></div>
        <div class="es-glow-orb es-glow-2"></div>
        <div class="es-header">
            <div class="es-badge">GAME DEV TRAINING</div>
            <h1 class="es-title">
                <span class="es-title-icon">⚡</span>
                Oyun Motoru Rehberi
            </h1>
            <p class="es-subtitle">Profesyonel oyun geliştirme eğitimi — motorunuzu seçin</p>
        </div>
        <div class="es-cards">
            <button class="es-card es-card-unreal" data-engine="unreal">
                <div class="es-card-glow"></div>
                <div class="es-card-inner">
                    <div class="es-card-logo">
                        <svg viewBox="0 0 64 64" class="es-ue-logo"><path d="M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28S47.464 4 32 4zm0 4c13.255 0 24 10.745 24 24S45.255 56 32 56 8 45.255 8 32 18.745 8 32 8zm-2 10v14l-6-4v12l8 6 8-6V28l-6 4V18h-4z" fill="currentColor"/></svg>
                    </div>
                    <h2 class="es-card-name">Unreal Engine 5</h2>
                    <p class="es-card-desc">Blueprint görsel scripting ile AAA kalitesinde oyun geliştirme</p>
                    <div class="es-card-stats">
                        <div class="es-stat"><span class="es-stat-num">1416</span><span class="es-stat-label">Rehber</span></div>
                        <div class="es-stat"><span class="es-stat-num">120</span><span class="es-stat-label">Kategori</span></div>
                    </div>
                    <div class="es-card-tags">
                        <span class="es-tag">Blueprint</span>
                        <span class="es-tag">Niagara</span>
                        <span class="es-tag">Lumen</span>
                        <span class="es-tag">Nanite</span>
                    </div>
                    <div class="es-card-arrow">→</div>
                </div>
            </button>
            <div class="es-divider">
                <span>veya</span>
            </div>
            <button class="es-card es-card-unity" data-engine="unity">
                <div class="es-card-glow"></div>
                <div class="es-card-inner">
                    <div class="es-card-logo">
                        <svg viewBox="0 0 64 64" class="es-unity-logo"><path d="M30.396 4L4 17.356v24.18L12.28 46l8.36-9.648V26.648L30.396 32l9.756-5.352V16.944L30.396 4zM33.604 4l-9.756 12.944v9.704L33.604 32l9.756-5.352v-9.704L51.72 22l8.28-4.644L33.604 4zM52 23.516l-8.36 4.132v10.704L33.604 32l-9.756 5.352v9.704L33.604 60 60 46.644v-18.48L52 23.516zM12 23.516L4 28.164v18.48L30.396 60l9.756-12.944v-9.704L30.396 32l-9.756 5.352V27.648L12 23.516z" fill="currentColor"/></svg>
                    </div>
                    <h2 class="es-card-name">Unity</h2>
                    <p class="es-card-desc">C# programlama ile cross-platform oyun geliştirme</p>
                    <div class="es-card-stats">
                        <div class="es-stat"><span class="es-stat-num">1324</span><span class="es-stat-label">Rehber</span></div>
                        <div class="es-stat"><span class="es-stat-num">109</span><span class="es-stat-label">Kategori</span></div>
                    </div>
                    <div class="es-card-tags">
                        <span class="es-tag">C#</span>
                        <span class="es-tag">Shader Graph</span>
                        <span class="es-tag">URP</span>
                        <span class="es-tag">DOTS</span>
                    </div>
                    <div class="es-card-arrow">→</div>
                </div>
            </button>
        </div>
        <div class="es-footer">
            <span>Toplam <strong>2740</strong> rehber</span>
            <span>•</span>
            <span>Sıfırdan ileri seviyeye</span>
            <span>•</span>
            <span>Türkçe içerik</span>
        </div>
    `;

    app.appendChild(screen);

    screen.querySelectorAll('.es-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.add('es-card-clicked');
            setTimeout(() => launchEngine(app, card.dataset.engine), 400);
        });
    });
}

function launchEngine(app, engine) {
    const canvas = document.getElementById('bg-canvas');
    if (canvas) canvas.style.display = 'none';

    app.innerHTML = '';

    const sidebarContainer = document.createElement('div');
    sidebarContainer.id = 'sidebar-container';

    const contentContainer = document.createElement('div');
    contentContainer.className = 'content-area';
    contentContainer.id = 'content-container';

    app.appendChild(sidebarContainer);
    app.appendChild(contentContainer);

    const contentArea = engine === 'unity'
        ? new UnityContentArea('content-container')
        : new ContentArea('content-container');

    const sidebar = new Sidebar('sidebar-container', (tabName) => {
        contentArea.render(tabName);
    }, engine, () => {
        showEngineSelect(app);
    });

    const defaultTab = engine === 'unity' ? 'components' : 'actors';
    contentArea.render(defaultTab);
}
