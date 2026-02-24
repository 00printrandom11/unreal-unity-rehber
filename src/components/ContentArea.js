import { actorData, variableData, nodeData, shortcutData } from '../data.js';
import { guideData } from '../guideData.js';

export class ContentArea {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    render(tabName) {
        this.container.innerHTML = ''; // Clear content

        switch (tabName) {
            case 'actors':
                this.renderActors();
                break;
            case 'variables':
                this.renderVariables();
                break;
            case 'search':
                this.renderSearch();
                break;
            case 'guide':
                this.renderGuide();
                break;
            case 'shortcuts':
                this.renderShortcuts();
                break;
            default:
                this.renderWelcome();
        }
    }

    renderWelcome() {
        this.container.innerHTML = `
            <div class="welcome-message">
                <h2>Hoş Geldiniz!</h2>
                <p>Başlamak için soldan bir kategori seçin.</p>
            </div>
        `;
    }

    renderActors() {
        const container = document.createElement('div');
        container.className = 'actor-container';

        const sidebar = document.createElement('div');
        sidebar.className = 'actor-tree-sidebar';

        const searchBox = document.createElement('div');
        searchBox.className = 'actor-search-box';
        searchBox.innerHTML = `
            <div class="actor-search-wrapper">
                <span class="actor-search-icon">🔍</span>
                <input type="text" id="actor-search-input" class="actor-search-input" placeholder="Actor ara..." autocomplete="off" />
            </div>
        `;
        sidebar.appendChild(searchBox);

        const treeContainer = document.createElement('div');
        treeContainer.className = 'actor-tree-container';
        treeContainer.id = 'actor-tree-container';
        this.buildActorTree(actorData, treeContainer, 0);
        sidebar.appendChild(treeContainer);

        const detail = document.createElement('div');
        detail.className = 'actor-detail-panel';
        detail.id = 'actor-detail-panel';

        const countNodes = (nodes) => {
            let n = nodes.length;
            nodes.forEach(node => {
                if (node.children && node.children.length > 0) n += countNodes(node.children);
            });
            return n;
        };
        const totalActors = countNodes(actorData);

        detail.innerHTML = `
            <div class="actor-welcome">
                <h2>🎭 Actor Hiyerarşisi</h2>
                <p>Soldaki arama kutusunu kullanarak veya ağaçtan bir aktör seçerek detayları görüntüleyin.</p>
                <div class="actor-stats">
                    <div class="actor-stat-item">
                        <span class="actor-stat-number">${actorData.length}</span>
                        <span class="actor-stat-label">Ana sınıf</span>
                    </div>
                    <div class="actor-stat-item">
                        <span class="actor-stat-number">${totalActors}</span>
                        <span class="actor-stat-label">Toplam aktör</span>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(sidebar);
        container.appendChild(detail);
        this.container.appendChild(container);

        this._initActorSearch();
    }

    buildActorTree(nodes, parent, depth) {
        if (!nodes || !nodes.length) return;
        nodes.forEach(node => {
            const nodeWrap = document.createElement('div');
            nodeWrap.className = 'actor-tree-node';
            nodeWrap.dataset.actorName = (node.name || '').toLowerCase();
            nodeWrap.style.setProperty('--node-color', node.color || 'var(--accent-color)');

            const hasChildren = node.children && node.children.length > 0;

            const btn = document.createElement('button');
            btn.className = 'actor-tree-item' + (hasChildren ? '' : ' no-children');
            btn.type = 'button';
            btn.innerHTML = `
                ${hasChildren ? '<span class="actor-tree-arrow" aria-hidden="true">▶</span>' : '<span class="actor-tree-arrow placeholder"></span>'}
                <span class="actor-tree-item-icon">${node.icon || '🎭'}</span>
                <span class="actor-tree-item-name">${node.name || ''}</span>
                ${(node.badge && node.badge.trim()) ? `<span class="actor-tree-item-badge">${node.badge}</span>` : ''}
            `;

            const onSelect = () => {
                document.querySelectorAll('.actor-tree-item').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.showActorDetail(node);
            };

            const arrow = btn.querySelector('.actor-tree-arrow');
            if (hasChildren && arrow) {
                arrow.addEventListener('click', (e) => {
                    e.stopPropagation();
                    nodeWrap.classList.toggle('collapsed');
                });
            }
            btn.addEventListener('click', (e) => {
                if (e.target.closest('.actor-tree-arrow')) return;
                onSelect();
            });

            nodeWrap.appendChild(btn);

            if (hasChildren) {
                const childrenEl = document.createElement('div');
                childrenEl.className = 'actor-tree-children';
                this.buildActorTree(node.children, childrenEl, depth + 1);
                nodeWrap.appendChild(childrenEl);
            }

            parent.appendChild(nodeWrap);
        });
    }

    showActorDetail(node) {
        const panel = document.getElementById('actor-detail-panel');
        panel.style.animation = 'none';
        panel.offsetHeight;
        panel.style.animation = 'fadeIn 0.3s ease';

        const desc = (node.description || '').replace(/\n/g, '<br>');

        let propsHtml = '';
        if (node.properties && node.properties.length > 0) {
            propsHtml = `<div class="actor-section">
                <h3 class="actor-section-title">📋 Properties</h3>
                <div class="actor-props-grid">
                    ${node.properties.map(p => `
                        <div class="actor-prop-item">
                            <span class="actor-prop-type">${(p.type || '').trim() || '—'}</span>
                            <span class="actor-prop-name">${p.name || ''}</span>
                            <span class="actor-prop-desc">${p.desc || ''}</span>
                        </div>
                    `).join('')}
                </div>
            </div>`;
        }

        let eventsHtml = '';
        if (node.events && node.events.length > 0) {
            eventsHtml = `<div class="actor-section">
                <h3 class="actor-section-title">⚡ Events</h3>
                <div class="actor-events-list">
                    ${node.events.map(e => `
                        <div class="actor-event-item">
                            <span class="actor-event-name">${e.name || ''}</span>
                            <span class="actor-event-desc">${e.desc || ''}</span>
                        </div>
                    `).join('')}
                </div>
            </div>`;
        }

        let methodsHtml = '';
        if (node.methods && node.methods.length > 0) {
            methodsHtml = `<div class="actor-section">
                <h3 class="actor-section-title">🔧 Methods</h3>
                <div class="actor-methods-list">
                    ${node.methods.map(m => `
                        <div class="actor-method-item">
                            <span class="actor-method-name">${m.name || ''}</span>
                            <span class="actor-method-desc">${m.desc || ''}</span>
                        </div>
                    `).join('')}
                </div>
            </div>`;
        }

        let bpNotesHtml = '';
        if (node.blueprintNotes) {
            bpNotesHtml = `<div class="actor-section actor-bp-notes">
                <h3 class="actor-section-title">🔷 Blueprint Notları</h3>
                <p>${(node.blueprintNotes || '').replace(/\n/g, '<br>')}</p>
            </div>`;
        }

        let examplesHtml = '';
        if (node.examples && node.examples.length > 0) {
            examplesHtml = `<div class="actor-section actor-examples-section">
                <h3 class="actor-section-title">💡 Örnek Kullanımlar</h3>
                <ul class="actor-examples-list">
                    ${node.examples.map(ex => `<li>${ex}</li>`).join('')}
                </ul>
            </div>`;
        }

        panel.innerHTML = `
            <div class="actor-detail-header" style="--actor-color: ${node.color || '#4a9eff'}">
                <div class="actor-detail-icon">${node.icon || '🎭'}</div>
                <div class="actor-detail-title-area">
                    <h2>${node.name || ''}</h2>
                    <span class="actor-detail-badge">${node.badge || ''}</span>
                </div>
            </div>
            <div class="actor-detail-desc">${desc}</div>
            ${propsHtml}
            ${eventsHtml}
            ${methodsHtml}
            ${bpNotesHtml}
            ${examplesHtml}
        `;
    }

    _initActorSearch() {
        const input = document.getElementById('actor-search-input');
        const treeContainer = document.getElementById('actor-tree-container');
        if (!input || !treeContainer) return;

        const normalize = (str) => (str || '').toLowerCase()
            .replace(/ı/g, 'i').replace(/ğ/g, 'g').replace(/ü/g, 'u')
            .replace(/ş/g, 's').replace(/ö/g, 'o').replace(/ç/g, 'c');

        const setVisible = (el, visible) => {
            el.classList.toggle('visible', visible);
            el.classList.toggle('hidden', !visible);
        };

        const filterTree = (query) => {
            const q = normalize(query);
            const nodes = Array.from(treeContainer.querySelectorAll('.actor-tree-node'));
            const getDepth = (n) => {
                let d = 0;
                let p = n.parentElement;
                while (p && p !== treeContainer) {
                    if (p.classList.contains('actor-tree-node')) d++;
                    p = p.parentElement;
                }
                return d;
            };
            nodes.sort((a, b) => getDepth(b) - getDepth(a));
            nodes.forEach(node => {
                const name = normalize(node.dataset.actorName || '');
                const selfMatch = !q || name.includes(q);
                const childrenEl = node.querySelector('.actor-tree-children');
                const childNodes = childrenEl ? Array.from(childrenEl.children).filter(c => c.classList.contains('actor-tree-node')) : [];
                const childMatch = childNodes.length > 0 && childNodes.some(c => c.classList.contains('visible'));
                setVisible(node, selfMatch || childMatch);
                if (q && (selfMatch || childMatch)) {
                    node.classList.remove('collapsed');
                }
            });
        };

        input.addEventListener('input', () => filterTree(input.value.trim()));
        input.addEventListener('focus', () => filterTree(input.value.trim()));

        filterTree('');
    }

    renderVariables() {
        const grid = document.createElement('div');
        grid.className = 'variables-grid';

        variableData.forEach(variable => {
            const card = document.createElement('div');
            card.className = 'variable-card';
            card.style.setProperty('--card-color', variable.color);

            card.innerHTML = `
                <div class="variable-header">
                    <div class="color-dot"></div>
                    <h3>${variable.name}</h3>
                </div>
                <p class="variable-desc">${variable.description}</p>
                <div class="variable-examples">
                    <small style="color: #888; display: block; margin-bottom: 5px;">KULLANIM ÖRNEKLERİ:</small>
                    ${variable.examples.map(ex => `<code>• ${ex}</code>`).join('')}
                </div>
            `;

            grid.appendChild(card);
        });

        this.container.appendChild(grid);
    }

    renderSearch() {
        const wrapper = document.createElement('div');
        wrapper.className = 'search-container';

        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'search-box';
        input.placeholder = 'Blueprint Node Ara... (Örn: Print String, Event)';
        input.focus();

        const resultsArea = document.createElement('div');
        resultsArea.className = 'node-results';

        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            this.performSearch(query, resultsArea);
        });

        wrapper.appendChild(input);
        wrapper.appendChild(resultsArea);
        this.container.appendChild(wrapper);

        this.performSearch('', resultsArea);
    }

    performSearch(query, container) {
        container.innerHTML = '';

        const filtered = nodeData.filter(node =>
            node.name.toLowerCase().includes(query) ||
            node.tags.some(tag => tag.includes(query))
        );

        if (filtered.length === 0) {
            container.innerHTML = '<p style="text-align:center; color: #666;">Sonuç bulunamadı.</p>';
            return;
        }

        const typeOrder = ['event', 'network', 'flow', 'function', 'math', 'variable'];
        const typeTitles = {
            'event': '🔴 EVENTS (Olaylar)',
            'network': '🟣 NETWORKING (MMO & Server)',
            'flow': '⚪ FLOW CONTROL (Akış Kontrolü)',
            'function': '🔵 FUNCTIONS (Fonksiyonlar)',
            'math': '🟢 MATH (Matematik)',
            'variable': '🟠 VARIABLES (Değişken Erişim)'
        };

        const grouped = filtered.reduce((acc, node) => {
            const type = node.type || 'function'; // default
            if (!acc[type]) acc[type] = [];
            acc[type].push(node);
            return acc;
        }, {});

        typeOrder.forEach(type => {
            if (grouped[type] && grouped[type].length > 0) {
                const header = document.createElement('h3');
                header.className = 'section-header';
                header.textContent = typeTitles[type] || type.toUpperCase();
                header.style.cssText = 'color: var(--text-secondary); margin: 20px 0 10px 0; border-bottom: 1px solid #333; padding-bottom: 5px; font-size: 0.9rem; letter-spacing: 1px;';
                container.appendChild(header);

                grouped[type].forEach(node => {
                    const card = document.createElement('div');
                    card.className = 'node-card';

                    if (node.type) {
                        card.setAttribute('data-type', node.type);
                    }

                    card.innerHTML = `
                        <div class="node-name" style="color: inherit;">${node.name}</div>
                        <div class="node-desc">${node.description}</div>
                        ${node.examples && node.examples.length > 0 ? `
                            <div class="node-examples">
                                <small style="display:block; color:var(--text-secondary); margin-bottom:5px;">💡 ÖRNEK SENARYOLAR:</small>
                                ${node.examples.map(ex => `<div class="example-line">• ${ex}</div>`).join('')}
                            </div>
                        ` : ''}
                        ${node.type ? `<span class="node-type-badge">${node.type.toUpperCase()}</span>` : ''}
                    `;
                    container.appendChild(card);
                });
            }
        });
    }

    renderGuide() {
        const guideContainer = document.createElement('div');
        guideContainer.className = 'guide-container';

        const sidebar = document.createElement('div');
        sidebar.className = 'guide-sidebar';

        const searchBox = document.createElement('div');
        searchBox.className = 'guide-search-box';
        searchBox.innerHTML = `
            <div class="guide-search-wrapper">
                <span class="guide-search-icon">🔍</span>
                <input type="text" id="guide-search-input" class="guide-search-input" placeholder="Rehber ara... (ör: karakter, silah, AI)" autocomplete="off" />
                <button id="guide-search-clear" class="guide-search-clear" style="display:none">✕</button>
            </div>
            <div class="guide-filter-row">
                <button class="guide-filter-btn active" data-filter="all">Tümü</button>
                <button class="guide-filter-btn" data-filter="Başlangıç">Başlangıç</button>
                <button class="guide-filter-btn" data-filter="Orta">Orta</button>
                <button class="guide-filter-btn" data-filter="İleri">İleri</button>
            </div>
            <div id="guide-search-results" class="guide-search-results" style="display:none"></div>
        `;
        sidebar.appendChild(searchBox);

        const detailPanel = document.createElement('div');
        detailPanel.className = 'guide-detail';
        detailPanel.id = 'guide-detail-panel';

        const totalGuides = guideData.reduce((sum, cat) => sum + cat.guides.length, 0);
        const totalSteps = guideData.reduce((sum, cat) => sum + cat.guides.reduce((s, g) => s + g.steps.length, 0), 0);
        const diffCounts = { 'Başlangıç': 0, 'Orta': 0, 'İleri': 0 };
        guideData.forEach(cat => cat.guides.forEach(g => { if (diffCounts[g.difficulty] !== undefined) diffCounts[g.difficulty]++; }));

        detailPanel.innerHTML = `
            <div class="guide-welcome">
                <h2>📖 Unreal Engine Rehberi</h2>
                <p>Soldaki arama kutusunu kullanarak veya kategorilerden bir rehber seçerek başlayın.</p>
                <div class="guide-stats">
                    <div class="guide-stat-item">
                        <span class="guide-stat-number">${guideData.length}</span>
                        <span class="guide-stat-label">Kategori</span>
                    </div>
                    <div class="guide-stat-item">
                        <span class="guide-stat-number">${totalGuides}</span>
                        <span class="guide-stat-label">Rehber</span>
                    </div>
                    <div class="guide-stat-item">
                        <span class="guide-stat-number">${totalSteps}</span>
                        <span class="guide-stat-label">Adım</span>
                    </div>
                </div>
                <div class="guide-diff-summary">
                    <span class="guide-diff-chip guide-diff-baslangic">🟢 Başlangıç: ${diffCounts['Başlangıç']}</span>
                    <span class="guide-diff-chip guide-diff-orta">🟡 Orta: ${diffCounts['Orta']}</span>
                    <span class="guide-diff-chip guide-diff-ileri">🔴 İleri: ${diffCounts['İleri']}</span>
                </div>
            </div>
        `;

        const categoriesContainer = document.createElement('div');
        categoriesContainer.id = 'guide-categories-container';

        guideData.forEach(category => {
            const catSection = document.createElement('div');
            catSection.className = 'guide-category';
            catSection.dataset.catName = category.category;

            const catHeader = document.createElement('button');
            catHeader.className = 'guide-category-header';
            catHeader.innerHTML = `<span class="guide-cat-icon">${category.icon}</span> ${category.category} <span class="guide-cat-count">${category.guides.length}</span>`;
            catHeader.addEventListener('click', () => {
                catSection.classList.toggle('collapsed');
            });

            const catItems = document.createElement('div');
            catItems.className = 'guide-category-items';

            category.guides.forEach(guide => {
                const btn = document.createElement('button');
                btn.className = 'guide-item-btn';
                btn.dataset.title = guide.title.toLowerCase();
                btn.dataset.desc = (guide.description || '').toLowerCase();
                btn.dataset.difficulty = guide.difficulty;
                btn.dataset.keywords = (guide.steps || []).map(s => s.title).join(' ').toLowerCase();
                btn.innerHTML = `
                    <span class="guide-item-title">${guide.title}</span>
                    <span class="guide-item-difficulty guide-diff-${guide.difficulty.toLowerCase().replace('ı', 'i').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}">${guide.difficulty}</span>
                `;
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.guide-item-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    this.showGuideDetail(guide);
                });
                catItems.appendChild(btn);
            });

            catSection.appendChild(catHeader);
            catSection.appendChild(catItems);
            categoriesContainer.appendChild(catSection);
        });

        sidebar.appendChild(categoriesContainer);
        guideContainer.appendChild(sidebar);
        guideContainer.appendChild(detailPanel);
        this.container.appendChild(guideContainer);

        this._initGuideSearch();
    }

    _initGuideSearch() {
        const input = document.getElementById('guide-search-input');
        const clearBtn = document.getElementById('guide-search-clear');
        const resultsBox = document.getElementById('guide-search-results');
        const catContainer = document.getElementById('guide-categories-container');
        const filterBtns = document.querySelectorAll('.guide-filter-btn');
        let activeFilter = 'all';

        const allGuides = [];
        guideData.forEach(cat => {
            cat.guides.forEach(g => {
                allGuides.push({ ...g, categoryName: cat.category, categoryIcon: cat.icon });
            });
        });

        const normalize = (str) => str.toLowerCase()
            .replace(/ı/g, 'i').replace(/ğ/g, 'g').replace(/ü/g, 'u')
            .replace(/ş/g, 's').replace(/ö/g, 'o').replace(/ç/g, 'c')
            .replace(/İ/g, 'i').replace(/Ğ/g, 'g').replace(/Ü/g, 'u')
            .replace(/Ş/g, 's').replace(/Ö/g, 'o').replace(/Ç/g, 'c');

        const doSearch = () => {
            const raw = input.value.trim();
            const q = normalize(raw);
            clearBtn.style.display = raw ? 'flex' : 'none';

            if (!q && activeFilter === 'all') {
                resultsBox.style.display = 'none';
                catContainer.style.display = '';
                return;
            }

            catContainer.style.display = 'none';
            resultsBox.style.display = '';

            let matches = allGuides;
            if (activeFilter !== 'all') {
                matches = matches.filter(g => g.difficulty === activeFilter);
            }
            if (q) {
                matches = matches.filter(g => {
                    const haystack = normalize(
                        g.title + ' ' + (g.description || '') + ' ' +
                        (g.steps || []).map(s => s.title + ' ' + s.content).join(' ') + ' ' +
                        g.categoryName
                    );
                    return q.split(/\s+/).every(word => haystack.includes(word));
                });
            }

            if (matches.length === 0) {
                resultsBox.innerHTML = `
                    <div class="guide-search-empty">
                        <span>🔍</span>
                        <p>"${raw || activeFilter}" ile eşleşen rehber bulunamadı.</p>
                    </div>`;
                return;
            }

            const grouped = {};
            matches.forEach(g => {
                const key = g.categoryName;
                if (!grouped[key]) grouped[key] = { icon: g.categoryIcon, guides: [] };
                grouped[key].guides.push(g);
            });

            let html = `<div class="guide-search-count">${matches.length} rehber bulundu</div>`;
            for (const [catName, data] of Object.entries(grouped)) {
                html += `<div class="guide-search-group">
                    <div class="guide-search-group-title">${data.icon} ${catName}</div>`;
                data.guides.forEach(g => {
                    const diffClass = `guide-diff-${g.difficulty.toLowerCase().replace('ı', 'i').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`;
                    html += `<button class="guide-search-result-btn" data-guide-id="${g.id}">
                        <span class="guide-item-title">${this._highlightMatch(g.title, raw)}</span>
                        <span class="guide-item-difficulty ${diffClass}">${g.difficulty}</span>
                    </button>`;
                });
                html += `</div>`;
            }
            resultsBox.innerHTML = html;

            resultsBox.querySelectorAll('.guide-search-result-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const gid = btn.dataset.guideId;
                    const found = allGuides.find(g => g.id === gid);
                    if (found) {
                        resultsBox.querySelectorAll('.guide-search-result-btn').forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                        this.showGuideDetail(found);
                    }
                });
            });
        };

        input.addEventListener('input', doSearch);
        clearBtn.addEventListener('click', () => {
            input.value = '';
            activeFilter = 'all';
            filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
            doSearch();
            input.focus();
        });

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                activeFilter = btn.dataset.filter;
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                doSearch();
            });
        });
    }

    _highlightMatch(text, query) {
        if (!query) return text;
        const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${escaped})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    showGuideDetail(guide) {
        const panel = document.getElementById('guide-detail-panel');
        panel.style.animation = 'none';
        panel.offsetHeight;
        panel.style.animation = 'fadeIn 0.3s ease';

        const diffClass = `guide-diff-${guide.difficulty.toLowerCase().replace('ı', 'i').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`;

        let stepsHtml = guide.steps.map((step, i) => `
            <div class="guide-step">
                <div class="guide-step-number">${i + 1}</div>
                <div class="guide-step-content">
                    <h4>${step.title}</h4>
                    <p>${step.content.replace(/\n/g, '<br>')}</p>
                </div>
            </div>
        `).join('');

        let blueprintsHtml = '';
        if (guide.blueprintFlow && guide.blueprintFlow.length > 0) {
            blueprintsHtml = `<div class="guide-blueprints"><h3>🔗 Blueprint Bağlantı Şemaları</h3>`;
            blueprintsHtml += guide.blueprintFlow.map(bp => {
                let varsHtml = '';
                if (bp.variables && bp.variables.length > 0) {
                    varsHtml = `<div class="bp-vars-table"><h5>📌 Değişkenler</h5><div class="bp-vars-grid">`;
                    varsHtml += bp.variables.map(v =>
                        `<div class="bp-var-item"><span class="bp-var-type bp-type-${v.type}">${v.type}</span><span class="bp-var-name">${v.name}</span><span class="bp-var-desc">${v.desc || ''}</span></div>`
                    ).join('');
                    varsHtml += `</div></div>`;
                }
                let eventsHtml = '';
                if (bp.events && bp.events.length > 0) {
                    eventsHtml = `<div class="bp-events-list"><h5>⚡ Kullanılan Event'ler</h5>`;
                    eventsHtml += bp.events.map(e =>
                        `<div class="bp-event-item"><span class="bp-event-name">${e.name}</span><span class="bp-event-desc">${e.desc || ''}</span></div>`
                    ).join('');
                    eventsHtml += `</div>`;
                }
                const tags = (bp.tags || []).map(t =>
                    `<span class="bp-tag bp-tag-${t.type}">${t.label}</span>`
                ).join('');
                return `<div class="bp-flow-block">
                    <div class="bp-flow-block-header"><h4>${bp.title}</h4>${tags}</div>
                    ${bp.desc ? `<div class="bp-flow-desc">${bp.desc}</div>` : ''}
                    <div class="bp-flow-diagram">${bp.flow}</div>
                    ${varsHtml}${eventsHtml}
                </div>`;
            }).join('');
            blueprintsHtml += `</div>`;
        }

        let tipsHtml = '';
        if (guide.tips && guide.tips.length > 0) {
            tipsHtml = `
                <div class="guide-section guide-tips">
                    <h3>💡 İpuçları</h3>
                    <ul>${guide.tips.map(t => `<li>${t}</li>`).join('')}</ul>
                </div>
            `;
        }

        let warningsHtml = '';
        if (guide.warnings && guide.warnings.length > 0) {
            warningsHtml = `
                <div class="guide-section guide-warnings">
                    <h3>⚠️ Uyarılar</h3>
                    <ul>${guide.warnings.map(w => `<li>${w}</li>`).join('')}</ul>
                </div>
            `;
        }

        panel.innerHTML = `
            <div class="guide-detail-header">
                <h2>${guide.title}</h2>
                <span class="guide-detail-difficulty ${diffClass}">${guide.difficulty}</span>
            </div>
            <p class="guide-detail-desc">${guide.description}</p>
            <div class="guide-steps-container">
                <h3>📋 Adımlar</h3>
                ${stepsHtml}
            </div>
            ${blueprintsHtml}
            ${tipsHtml}
            ${warningsHtml}
        `;
    }

    renderShortcuts() {
        const wrapper = document.createElement('div');
        wrapper.className = 'shortcuts-container';

        shortcutData.forEach(section => {
            const header = document.createElement('h3');
            header.className = 'shortcut-section-title';
            header.textContent = section.category;
            header.style.cssText = 'color: #00BFFF; margin: 30px 0 15px 0; border-bottom: 2px solid #333; padding-bottom: 8px; font-size: 1.1rem; letter-spacing: 1px;';
            wrapper.appendChild(header);

            if (section.description) {
                const desc = document.createElement('p');
                desc.textContent = section.description;
                desc.style.cssText = 'color: #888; margin-bottom: 15px; font-style: italic;';
                wrapper.appendChild(desc);
            }

            const grid = document.createElement('div');
            grid.className = 'shortcuts-grid';

            section.items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'shortcut-card';

                card.innerHTML = `
                    <div class="shortcut-key">${item.key}</div>
                    <div class="shortcut-desc">${item.description}</div>
                `;
                grid.appendChild(card);
            });

            wrapper.appendChild(grid);
        });

        this.container.appendChild(wrapper);
    }
}
