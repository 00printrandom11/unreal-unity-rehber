// Unity Rehber - Unreal data.js yapısının Unity karşılığı
// ES Module export

export const componentData = [
    {
        id: 'GameObject',
        name: 'GameObject',
        color: '#4CAF50',
        icon: '🟢',
        badge: 'Core',
        description: 'Unity sahnesinin "Atom" parçacığıdır. Kısaca: Hierarchy\'de gördüğünüz her satır bir GameObject\'tir.\n\n🤔 NEDİR BU?\nBoş bir çantadır. Tek başına konum, dönüş veya görünüm taşımaz; bunları "Component" (Bileşen) ekleyerek kazanır. Her GameObject en az bir Transform bileşenine sahiptir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nSahneye koyacağınız her şey için. Boş GameObject oluşturup üzerine script, ışık veya collider ekleyerek kullanın.',
        properties: [
            { name: 'name', type: 'string', desc: 'Objenin Hierarchy\'deki adı' },
            { name: 'tag', type: 'string', desc: 'Etiket (arama ve filtreleme)' },
            { name: 'layer', type: 'int', desc: 'Katman (çarpışma ve ışık maskesi)' },
            { name: 'activeSelf', type: 'bool', desc: 'Obje aktif mi?' }
        ],
        events: [],
        methods: [
            { name: 'SetActive', desc: 'Objeyi açıp kapatır' },
            { name: 'CompareTag', desc: 'Etiket eşleşmesi kontrol eder' },
            { name: 'GetComponent', desc: 'Ekli bileşeni döndürür' }
        ],
        inspectorNotes: 'Hierarchy\'de sağ tık > Create Empty ile boş GameObject. Add Component ile bileşen ekleyin.',
        examples: [
            '🎯 Oyun içi hedef veya checkpoint',
            '📦 Toplanabilir eşya (Collectible)',
            '🚪 Açılır kapanır kapı',
            '💥 Patlama spawn noktası',
            '🎵 Ses kaynağı taşıyıcısı'
        ],
        children: [
            {
                id: 'Transform',
                name: 'Transform',
                color: '#FF9800',
                icon: '📐',
                badge: 'Required',
                description: 'Her GameObject\'in sahip olduğu zorunlu bileşendir. Konum, dönüş ve ölçek bilgisini tutar.\n\n🤔 NEDİR BU?\nObjenin dünyadaki yerini (position), yönünü (rotation) ve boyutunu (scale) saklar. Parent-Child ilişkisi de Transform üzerinden kurulur; child hareket edince parent\'a göre konum alır.\n\n💡 NE ZAMAN KULLANMALIYIM?\nHer zaman otomatik vardır. Kodda taşıma, döndürme veya ölçekleme yapacaksanız transform referansını kullanın.',
                properties: [
                    { name: 'position', type: 'Vector3', desc: 'Dünya konumu' },
                    { name: 'rotation', type: 'Quaternion', desc: 'Dünya dönüşü' },
                    { name: 'localScale', type: 'Vector3', desc: 'Ölçek (parent\'a göre)' },
                    { name: 'parent', type: 'Transform', desc: 'Üst obje' }
                ],
                events: [],
                methods: [
                    { name: 'Translate', desc: 'Belirtilen yönde hareket ettirir' },
                    { name: 'Rotate', desc: 'Eksen etrafında döndürür' },
                    { name: 'LookAt', desc: 'Hedefe doğru döndürür' }
                ],
                inspectorNotes: 'Inspector\'da Position/Rotation/Scale alanları. W/E/R ile taşı, döndür, ölçekle.',
                examples: [
                    '📍 Karakter veya düşman konumu',
                    '🎯 Silahın namlu ucu (child transform)',
                    '🔄 Dönen platform veya kapı',
                    '📏 Büyüyüp küçülen UI elemanı',
                    '🔗 Kemik veya eklem hiyerarşisi'
                ],
                children: []
            },
            {
                id: 'MonoBehaviour',
                name: 'MonoBehaviour',
                color: '#2196F3',
                icon: '📜',
                badge: 'Script Base',
                description: 'C# scriptlerinizin türediği temel sınıftır. Oyun mantığınızı yazdığınız yerdir.\n\n🤔 NEDİR BU?\nUnity\'de "kod" demek çoğunlukla MonoBehaviour demektir. Bu sınıftan türeyen scripti bir GameObject\'e eklediğinizde Awake, Start, Update gibi yaşam döngüsü fonksiyonları otomatik çağrılır.\n\n💡 NE ZAMAN KULLANMALIYIM?\nOyuncu kontrolü, düşman AI, UI mantığı, etkileşim — neredeyse tüm oyun mantığı için.',
                properties: [
                    { name: 'enabled', type: 'bool', desc: 'Script çalışıyor mu?' },
                    { name: 'gameObject', type: 'GameObject', desc: 'Bağlı olduğu obje' },
                    { name: 'transform', type: 'Transform', desc: 'Objenin transform\'u' }
                ],
                events: [
                    { name: 'Awake', desc: 'Obje oluşturulduğunda (script yüklendiğinde) bir kez' },
                    { name: 'Start', desc: 'İlk kareden önce bir kez' },
                    { name: 'Update', desc: 'Her karede çağrılır' }
                ],
                methods: [
                    { name: 'Invoke', desc: 'Belirtilen süre sonra metot çağırır' },
                    { name: 'StartCoroutine', desc: 'Coroutine başlatır' },
                    { name: 'StopCoroutine', desc: 'Coroutine durdurur' }
                ],
                inspectorNotes: 'Yeni C# script oluşturup GameObject\'e sürükleyin. Inspector\'da public değişkenler görünür.',
                examples: [
                    '🎮 Oyuncu girişi ve hareket',
                    '👾 Düşman davranışı ve saldırı',
                    '🚪 Kapı veya tuş mantığı',
                    '📊 Skor ve can yönetimi',
                    '🎵 Ses ve efekt tetikleme'
                ],
                children: [
                    {
                        id: 'PlayerController',
                        name: 'PlayerController',
                        color: '#42A5F5',
                        icon: '🎮',
                        badge: 'Example',
                        description: 'Oyuncunun karakteri veya aracı kontrol etmesini sağlayan script örneğidir.\n\n🤔 NEDİR BU?\nMonoBehaviour\'dan türeyen, Input (klavye/joystick) okuyup hareket ve aksiyonlara çeviren sınıftır. Genelde tek bir oyuncu için "Player" tag\'lı objede çalışır.\n\n💡 NE ZAMAN KULLANMALIYIM?\nFPS/TPS veya araç kontrolü yapıyorsanız. Input.GetAxis / GetButton ile giriş alıp Rigidbody veya CharacterController ile hareket uygularsınız.',
                        properties: [
                            { name: 'moveSpeed', type: 'float', desc: 'Hareket hızı' },
                            { name: 'jumpForce', type: 'float', desc: 'Zıplama kuvveti' },
                            { name: 'mouseSensitivity', type: 'float', desc: 'Fare hassasiyeti' }
                        ],
                        events: [
                            { name: 'Start', desc: 'Başlangıçta kamera ve referansları al' },
                            { name: 'Update', desc: 'Giriş oku ve hareket uygula' }
                        ],
                        methods: [
                            { name: 'Move', desc: 'Yön vektörüne göre hareket' },
                            { name: 'Jump', desc: 'Zıplama kuvveti uygula' },
                            { name: 'Look', desc: 'Fare ile bakış açısı' }
                        ],
                        inspectorNotes: 'Player\'a ekleyin. Project Settings > Input ile Axis/Action eşleştirin.',
                        examples: [
                            '🏃 Üçüncü şahıs karakter kontrolü',
                            '🔫 Birinci şahıs nişancı',
                            '🚗 Araç veya tank sürme',
                            '🕹️ 2D platform karakteri',
                            '✈️ Uçak veya uzay gemisi'
                        ],
                        children: []
                    },
                    {
                        id: 'EnemyAI',
                        name: 'EnemyAI',
                        color: '#42A5F5',
                        icon: '👾',
                        badge: 'Example',
                        description: 'Düşman veya NPC\'nin yapay zeka davranışını yöneten script örneğidir.\n\n🤔 NEDİR BU?\nOyuncuyu takip etme, saldırı mesafesi, patrol (devriye) veya duruma göre kaçma gibi davranışları kodlayan MonoBehaviour türevidir. NavMeshAgent ile yol bulma sık kullanılır.\n\n💡 NE ZAMAN KULLANMALIYIM?\nDüşman, dost NPC veya hayvan AI\'ı için. State machine (Idle, Chase, Attack) yapısı yaygındır.',
                        properties: [
                            { name: 'target', type: 'Transform', desc: 'Takip edilecek hedef (oyuncu)' },
                            { name: 'attackRange', type: 'float', desc: 'Saldırı mesafesi' },
                            { name: 'moveSpeed', type: 'float', desc: 'Hareket hızı' }
                        ],
                        events: [
                            { name: 'Start', desc: 'NavMeshAgent veya referansları al' },
                            { name: 'Update', desc: 'Hedefe mesafe hesapla, duruma göre hareket et' }
                        ],
                        methods: [
                            { name: 'ChaseTarget', desc: 'Hedefe doğru hareket' },
                            { name: 'Attack', desc: 'Saldırı animasyonu ve hasar' },
                            { name: 'Patrol', desc: 'Belirli noktalar arası dolaş' }
                        ],
                        inspectorNotes: 'Düşman GameObject\'ine ekleyin. Target alanına Player\'ı sürükleyin.',
                        examples: [
                            '🧟 Oyuncuyu kovalayan zombi',
                            '🛡️ Belirli bölgede devriye gezen gardiyan',
                            '🐺 Sürü halinde hareket eden hayvan',
                            '🤖 Boss fazlarına göre davranış değiştiren AI',
                            '🚁 Oyuncuya ateş eden helikopter'
                        ],
                        children: []
                    }
                ]
            },
            {
                id: 'Rigidbody',
                name: 'Rigidbody',
                color: '#9C27B0',
                icon: '⚙️',
                badge: 'Physics',
                description: '3D fizik motoruna objeyi bağlar. Yerçekimi, çarpışma ve kuvvetlerle hareket sağlar.\n\n🤔 NEDİR BU?\nObjenin kütlesini, sürtünmesini ve yerçekimini tanımlar. AddForce veya velocity ile itme verirsiniz; motor geri kalanını hesaplar.\n\n💡 NE ZAMAN KULLANMALIYIM?\nYuvarlanan toplar, düşen kutular, fırlatılan mermiler veya araç fizikleri için. Tam fizik simülasyonu istiyorsanız Rigidbody şart.',
                properties: [
                    { name: 'mass', type: 'float', desc: 'Kütle (kg)' },
                    { name: 'drag', type: 'float', desc: 'Hava sürtünmesi' },
                    { name: 'useGravity', type: 'bool', desc: 'Yerçekimi uygulansın mı?' },
                    { name: 'velocity', type: 'Vector3', desc: 'Anlık hız vektörü' }
                ],
                events: [
                    { name: 'OnCollisionEnter', desc: 'Başka bir collider\'a çarptığında' },
                    { name: 'OnCollisionStay', desc: 'Temas devam ederken her kare' },
                    { name: 'OnCollisionExit', desc: 'Temastan çıkıldığında' }
                ],
                methods: [
                    { name: 'AddForce', desc: 'Kuvvet uygular' },
                    { name: 'AddExplosionForce', desc: 'Patlama merkezinden itme' },
                    { name: 'MovePosition', desc: 'Kinematik hareket (kinematic modda)' }
                ],
                inspectorNotes: 'Physics kullanacak 3D objelere ekleyin. Collider ile birlikte olmalı.',
                examples: [
                    '⚽ Yuvarlanan veya zıplayan top',
                    '📦 Devrilebilen kutular',
                    '🚗 Araç tekerlekleri veya gövde',
                    '💣 Patlayan varil',
                    '🎱 Bilardo topu'
                ],
                children: []
            },
            {
                id: 'Rigidbody2D',
                name: 'Rigidbody2D',
                color: '#9C27B0',
                icon: '⚙️',
                badge: 'Physics',
                description: '2D fizik motoru için kütle ve hareket bileşenidir. Sadece X-Y düzleminde çalışır.\n\n🤔 NEDİR BU?\nRigidbody\'nin 2D karşılığı. Z ekseni yok sayılır; yerçekimi ve kuvvetler 2D oyunlar için optimize edilmiştir.\n\n💡 NE ZAMAN KULLANMALIYIM?\n2D platform, top-down veya puzzle oyunlarında fiziksel hareket gerekiyorsa.',
                properties: [
                    { name: 'bodyType', type: 'RigidbodyType2D', desc: 'Dynamic, Kinematic veya Static' },
                    { name: 'gravityScale', type: 'float', desc: 'Yerçekimi çarpanı' },
                    { name: 'velocity', type: 'Vector2', desc: 'Hız' }
                ],
                events: [
                    { name: 'OnCollisionEnter2D', desc: '2D çarpışmada giriş' },
                    { name: 'OnCollisionExit2D', desc: '2D çarpışmadan çıkış' }
                ],
                methods: [
                    { name: 'AddForce', desc: '2D kuvvet uygular' },
                    { name: 'AddTorque', desc: 'Dönme (tork) uygular' }
                ],
                inspectorNotes: '2D objelere ekleyin. BoxCollider2D / CircleCollider2D ile kullanın.',
                examples: [
                    '🦘 2D zıplayan karakter',
                    '🍎 Düşen meyve (Angry Birds tarzı)',
                    '🎱 2D top oyunu',
                    '🧱 Yıkılan bloklar',
                    '🚀 2D roket veya mermi'
                ],
                children: []
            },
            {
                id: 'Collider',
                name: 'Collider',
                color: '#FF5722',
                icon: '📦',
                badge: 'Physics',
                description: '3D çarpışma hacmini tanımlayan bileşenlerin temelidir. Fizik ve raycast için gerekli.\n\n🤔 NEDİR BU?\nObjenin "duvarını" tanımlar. Rigidbody ile birlikte fizik çarpışması, yoksa sadece trigger veya raycast isabeti için kullanılır.\n\n💡 NE ZAMAN KULLANMALIYIM?\nHer fiziksel veya etkileşimli objede bir collider olmalı. Şekle göre Box, Sphere, Capsule veya Mesh seçin.',
                properties: [
                    { name: 'isTrigger', type: 'bool', desc: 'Trigger mı (geçilebilir alan)?' },
                    { name: 'material', type: 'PhysicMaterial', desc: 'Sürtünme ve zıplama' },
                    { name: 'bounds', type: 'Bounds', desc: 'Hacim sınırları (sadece okunur)' }
                ],
                events: [
                    { name: 'OnTriggerEnter', desc: 'Trigger alanına biri girdiğinde' },
                    { name: 'OnTriggerExit', desc: 'Trigger alanından çıkıldığında' }
                ],
                methods: [
                    { name: 'ClosestPoint', desc: 'Belirtilen noktaya en yakın yüzey noktası' },
                    { name: 'Raycast', desc: 'Işın atıp bu collider\'da kesişim bulur' }
                ],
                inspectorNotes: 'Rigidbody kullanıyorsanız en az bir Collider ekleyin. Trigger için işaretleyin.',
                examples: [
                    '🚪 Geçiş alanı (trigger)',
                    '🎯 Nişan alınan hedef',
                    '🛡️ Duvar veya zemin',
                    '💊 Toplanacak eşya alanı',
                    '🔥 Hasar bölgesi'
                ],
                children: [
                    {
                        id: 'BoxCollider',
                        name: 'BoxCollider',
                        color: '#FF5722',
                        icon: '📦',
                        badge: '3D',
                        description: 'Kutu şeklinde çarpışma alanı. En sık kullanılan 3D collider.\n\n🤔 NEDİR BU?\nDikdörtgen prizma hacmi. Center ve Size ile konum ve boyut ayarlanır. Performanslı ve tahmin edilebilir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nKutular, kapılar, masalar veya genel amaçlı 3D objeler için.',
                        properties: [
                            { name: 'center', type: 'Vector3', desc: 'Merkez ofset' },
                            { name: 'size', type: 'Vector3', desc: 'X,Y,Z boyutları' }
                        ],
                        events: [
                            { name: 'OnCollisionEnter', desc: 'Çarpışma girişi' },
                            { name: 'OnTriggerEnter', desc: 'Trigger girişi' }
                        ],
                        methods: [
                            { name: 'ClosestPoint', desc: 'En yakın nokta' }
                        ],
                        inspectorNotes: 'Kutu şeklindeki objelere uygun. Size ile sınırları ayarlayın.',
                        examples: ['Kutu', 'Kapı çerçevesi', 'Platform', 'Dolap', 'Varil'],
                        children: []
                    },
                    {
                        id: 'SphereCollider',
                        name: 'SphereCollider',
                        color: '#FF5722',
                        icon: '⭕',
                        badge: '3D',
                        description: 'Küre şeklinde çarpışma. Tek parametre (radius) ile hızlı ayarlanır.\n\n🤔 NEDİR BU?\nMerkez ve yarıçap ile tanımlı küre. Hesaplaması ucuz ve her yönde eşit.\n\n💡 NE ZAMAN KULLANMALIYIM?\nToplar, bombalar, projektiller veya yuvarlak karakterler için.',
                        properties: [
                            { name: 'center', type: 'Vector3', desc: 'Merkez ofset' },
                            { name: 'radius', type: 'float', desc: 'Yarıçap' }
                        ],
                        events: [
                            { name: 'OnCollisionEnter', desc: 'Çarpışma' },
                            { name: 'OnTriggerEnter', desc: 'Trigger' }
                        ],
                        methods: [
                            { name: 'ClosestPoint', desc: 'En yakın nokta' }
                        ],
                        inspectorNotes: 'Radius tek değer; tüm yönlerde aynı. Top ve bombalar için ideal.',
                        examples: ['Top', 'Bomba', 'Karakter kapsülü (yaklaşık)', 'Projektil', 'Pickup alanı'],
                        children: []
                    },
                    {
                        id: 'CapsuleCollider',
                        name: 'CapsuleCollider',
                        color: '#FF5722',
                        icon: '💊',
                        badge: '3D',
                        description: 'Kapsül (silindir + yarım küre uçlar) çarpışma. Karakterler için ideal.\n\n🤔 NEDİR BU?\nİnsan gövdesine benzer şekil; merdiven ve eğimlerde takılmayı azaltır. Height ve radius ile ayarlanır.\n\n💡 NE ZAMAN KULLANMALIYIM?\nÜçüncü şahıs veya FPS karakter gövdesi için standart seçim.',
                        properties: [
                            { name: 'center', type: 'Vector3', desc: 'Merkez' },
                            { name: 'radius', type: 'float', desc: 'Yarıçap' },
                            { name: 'height', type: 'float', desc: 'Toplam yükseklik' }
                        ],
                        events: [
                            { name: 'OnCollisionEnter', desc: 'Çarpışma' },
                            { name: 'OnTriggerEnter', desc: 'Trigger' }
                        ],
                        methods: [
                            { name: 'ClosestPoint', desc: 'En yakın nokta' }
                        ],
                        inspectorNotes: 'Karakter controller ile birlikte sık kullanılır. Height karakter boyuna göre ayarlayın.',
                        examples: ['FPS/TPS karakter', 'NPC', 'Ragdoll gövde', 'Robot', 'Hayvan'],
                        children: []
                    },
                    {
                        id: 'MeshCollider',
                        name: 'MeshCollider',
                        color: '#FF5722',
                        icon: '🔷',
                        badge: '3D',
                        description: 'Mesh\'in üçgenlerini kullanarak tam şekilde çarpışma. Doğruluk yüksek, maliyet yüksek olabilir.\n\n🤔 NEDİR BU?\n3D modelin yüzeyini bire bir çarpışma alanı yapar. Convex açıksa hareketli objelerde, kapalıysa sadece statik mesh\'lerde kullanılır.\n\n💡 NE ZAMAN KULLANMALIYIM?\nKarmaşık şekilli statik ortam (mağara, kayalık) veya convex hareketli objeler için.',
                        properties: [
                            { name: 'sharedMesh', type: 'Mesh', desc: 'Kullanılacak mesh' },
                            { name: 'convex', type: 'bool', desc: 'Dışbükey (hareketli için gerekli)' }
                        ],
                        events: [
                            { name: 'OnCollisionEnter', desc: 'Çarpışma' },
                            { name: 'OnTriggerEnter', desc: 'Trigger' }
                        ],
                        methods: [
                            { name: 'ClosestPoint', desc: 'En yakın nokta' }
                        ],
                        inspectorNotes: 'Convex işaretli olmadan Rigidbody ile kullanılamaz. Performans için basit mesh tercih edin.',
                        examples: ['Kayalık', 'Mağara duvarı', 'Organik şekilli obje', 'Statik arazi', 'Karmaşık dekor'],
                        children: []
                    }
                ]
            },
            {
                id: 'Collider2D',
                name: 'Collider2D',
                color: '#FF5722',
                icon: '⬜',
                badge: 'Physics',
                description: '2D çarpışma alanlarının temel sınıfı. Sadece X-Y düzleminde etkileşim.\n\n🤔 NEDİR BU?\n2D oyunlarda çarpışma ve trigger için kullanılan bileşenlerin üst tipi. Rigidbody2D ile birlikte fizik, tek başına trigger veya raycast için kullanılır.\n\n💡 NE ZAMAN KULLANMALIYIM?\nTüm 2D fizik ve etkileşimlerde. Şekle göre Box, Circle veya Polygon seçin.',
                properties: [
                    { name: 'isTrigger', type: 'bool', desc: 'Trigger mı?' },
                    { name: 'offset', type: 'Vector2', desc: 'Merkez ofset' },
                    { name: 'bounds', type: 'Bounds', desc: 'Sınırlar (okunur)' }
                ],
                events: [
                    { name: 'OnCollisionEnter2D', desc: '2D çarpışma girişi' },
                    { name: 'OnTriggerEnter2D', desc: '2D trigger girişi' }
                ],
                methods: [
                    { name: 'OverlapPoint', desc: 'Nokta bu collider içinde mi?' },
                    { name: 'Raycast', desc: '2D ışın atar' }
                ],
                inspectorNotes: '2D objelere ekleyin. Rigidbody2D ile fizik, yoksa trigger/raycast için.',
                examples: [
                    '2D platform zemin',
                    'Platform karakter hitbox',
                    'Toplanabilir eşya alanı',
                    'Düşman vuruş alanı',
                    'Checkpoint bölgesi'
                ],
                children: [
                    {
                        id: 'BoxCollider2D',
                        name: 'BoxCollider2D',
                        color: '#FF5722',
                        icon: '⬜',
                        badge: '2D',
                        description: '2D dikdörtgen çarpışma. 2D oyunlarda en yaygın kullanılan.\n\n🤔 NEDİR BU?\nRect (veya size) ile tanımlı dikdörtgen alan. Hızlı ve tahmin edilebilir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nPlatformlar, bloklar, kapılar ve genel 2D objeler için.',
                        properties: [
                            { name: 'size', type: 'Vector2', desc: 'Genişlik ve yükseklik' },
                            { name: 'offset', type: 'Vector2', desc: 'Merkez ofset' }
                        ],
                        events: [
                            { name: 'OnCollisionEnter2D', desc: 'Çarpışma' },
                            { name: 'OnTriggerEnter2D', desc: 'Trigger' }
                        ],
                        methods: [
                            { name: 'OverlapPoint', desc: 'Nokta içinde mi?' }
                        ],
                        inspectorNotes: 'Size ile hitbox boyutunu sprite\'a göre ayarlayın.',
                        examples: ['Platform', 'Duvar', 'Kutu', 'Kapı', 'Zemin'],
                        children: []
                    },
                    {
                        id: 'CircleCollider2D',
                        name: 'CircleCollider2D',
                        color: '#FF5722',
                        icon: '⭕',
                        badge: '2D',
                        description: '2D daire çarpışma. Tek parametre (radius) ile ayarlanır.\n\n🤔 NEDİR BU?\nMerkez ve yarıçap ile daire. Hesaplaması ucuz.\n\n💡 NE ZAMAN KULLANMALIYIM?\n2D toplar, karakterler (basit), mermiler veya pickup alanları için.',
                        properties: [
                            { name: 'radius', type: 'float', desc: 'Yarıçap' },
                            { name: 'offset', type: 'Vector2', desc: 'Merkez ofset' }
                        ],
                        events: [
                            { name: 'OnCollisionEnter2D', desc: 'Çarpışma' },
                            { name: 'OnTriggerEnter2D', desc: 'Trigger' }
                        ],
                        methods: [
                            { name: 'OverlapPoint', desc: 'Nokta içinde mi?' }
                        ],
                        inspectorNotes: 'Yuvarlak sprite\'lar için ideal. Radius\'u sprite yarıçapına göre verin.',
                        examples: ['2D top', 'Karakter (basit)', 'Mermi', 'Coin alanı', 'Patlama yarıçapı'],
                        children: []
                    },
                    {
                        id: 'PolygonCollider2D',
                        name: 'PolygonCollider2D',
                        color: '#FF5722',
                        icon: '🔶',
                        badge: '2D',
                        description: 'Serbest çokgen şeklinde 2D çarpışma. Köşe noktalarıyla özelleştirilebilir.\n\n🤔 NEDİR BU?\nNokta listesi ile tanımlı çokgen. Karmaşık 2D şekiller (ör. karakter silüeti) için kullanılır.\n\n💡 NE ZAMAN KULLANMALIYIM?\nSprite şekline tam uyan hitbox istiyorsanız. Otomatik üretim (Edit Collider) veya elle nokta ekleyebilirsiniz.',
                        properties: [
                            { name: 'points', type: 'Vector2[]', desc: 'Çokgen köşe noktaları' },
                            { name: 'pathCount', type: 'int', desc: 'Delikli alan sayısı' }
                        ],
                        events: [
                            { name: 'OnCollisionEnter2D', desc: 'Çarpışma' },
                            { name: 'OnTriggerEnter2D', desc: 'Trigger' }
                        ],
                        methods: [
                            { name: 'SetPath', desc: 'Yol (nokta listesi) atar' },
                            { name: 'OverlapPoint', desc: 'Nokta içinde mi?' }
                        ],
                        inspectorNotes: 'Edit Collider ile sprite üzerinden otomatik çiz veya manuel nokta ekleyin.',
                        examples: ['Karakter silüeti', 'Karmaşık platform', 'Gemi veya araç', 'Düşman hitbox', 'Bölge (trigger)'],
                        children: []
                    }
                ]
            },
            {
                id: 'Camera',
                name: 'Camera',
                color: '#607D8B',
                icon: '📷',
                badge: 'Rendering',
                description: 'Sahneyi oyuncuya gösteren görüntü penceresidir. Olmadan ekran siyahtır.\n\n🤔 NEDİR BU?\n3D/2D dünyayı 2D ekrana yansıtan bileşen. FOV, near/far plane, culling mask ve depth ile ayarlanır. Birden fazla kamera (split screen, minimap) kullanılabilir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nAna oyun kamerası, minimap kamerası, UI kamerası veya sinematik kamera için. Sahnede en az bir tane olmalı.',
                properties: [
                    { name: 'fieldOfView', type: 'float', desc: 'Görüş açısı (derece)' },
                    { name: 'nearClipPlane', type: 'float', desc: 'Yakın kesim düzlemi' },
                    { name: 'farClipPlane', type: 'float', desc: 'Uzak kesim düzlemi' },
                    { name: 'depth', type: 'float', desc: 'Çizim sırası (büyük = önde)' }
                ],
                events: [],
                methods: [
                    { name: 'ScreenToWorldPoint', desc: 'Ekran koordinatını dünya koordinatına çevirir' },
                    { name: 'WorldToScreenPoint', desc: 'Dünya koordinatını ekrana çevirir' },
                    { name: 'ViewportPointToRay', desc: 'Viewport noktasından ışın döndürür' }
                ],
                inspectorNotes: 'Ana kamera genelde Main Camera tag\'lıdır. Cinemachine ile takip/şablon kullanılabilir.',
                examples: [
                    '🎮 Oyuncu takip kamerası',
                    '🗺️ Minimap veya harita kamerası',
                    '📺 UI veya overlay kamerası',
                    '🎬 Sinematik sekans kamerası',
                    '👁️ Birinci şahıs kamera'
                ],
                children: []
            },
            {
                id: 'Light',
                name: 'Light',
                color: '#FFC107',
                icon: '💡',
                badge: 'Rendering',
                description: 'Sahneyi aydınlatan ışık kaynaklarının temelidir. Işık yoksa obje siyah veya düz görünür.\n\n🤔 NEDİR BU?\nGerçek zamanlı veya baked ışık verir. Tip (Directional, Point, Spot, Area) ve renk, şiddet, gölge ayarları vardır.\n\n💡 NE ZAMAN KULLANMALIYIM?\nHer sahne en az bir ışık (genelde Directional) içermeli. Ampul, el feneri, ateş için Point/Spot kullanın.',
                properties: [
                    { name: 'type', type: 'LightType', desc: 'Directional, Point, Spot, Area' },
                    { name: 'color', type: 'Color', desc: 'Işık rengi' },
                    { name: 'intensity', type: 'float', desc: 'Parlaklık' },
                    { name: 'shadowStrength', type: 'float', desc: 'Gölge koyuluğu' }
                ],
                events: [],
                methods: [
                    { name: 'Reset', desc: 'Varsayılan değerlere döner' }
                ],
                inspectorNotes: 'Hierarchy > Create > Light. Baking için Mixed veya Baked seçin; Performans için az sayıda realtime.',
                examples: [
                    'Güneş (Directional)',
                    'Ampul (Point)',
                    'El feneri (Spot)',
                    'Alan aydınlatması (Area)',
                    'Neon tabela'
                ],
                children: [
                    {
                        id: 'DirectionalLight',
                        name: 'DirectionalLight',
                        color: '#FFC107',
                        icon: '☀️',
                        badge: 'Light',
                        description: 'Güneş veya ay gibi sonsuz uzaklıktan gelen paralel ışık. Yönü önemli, konumu değil.\n\n🤔 NEDİR BU?\nTüm sahneyi aynı açıyla aydınlatır. Genelde tek bir tane ana güneş ışığı olarak kullanılır.\n\n💡 NE ZAMAN KULLANMALIYIM?\nAçık dünya, dış mekan veya genel ambient için.',
                        properties: [
                            { name: 'intensity', type: 'float', desc: 'Şiddet' },
                            { name: 'color', type: 'Color', desc: 'Renk' },
                            { name: 'shadowType', type: 'LightShadowResolution', desc: 'Gölge kalitesi' }
                        ],
                        events: [],
                        methods: [],
                        inspectorNotes: 'Rotation ile güneş açısını ayarlayın. Pozisyon önemsiz.',
                        examples: ['Gündüz güneşi', 'Gece ay ışığı', 'Stüdyo key light', 'Genel sahne aydınlatması'],
                        children: []
                    },
                    {
                        id: 'PointLight',
                        name: 'PointLight',
                        color: '#FFC107',
                        icon: '🔆',
                        badge: 'Light',
                        description: 'Her yöne yayılan küresel ışık (ampul). Mesafeye göre zayıflar.\n\n🤔 NEDİR BU?\nBir noktadan 360 derece ışık yayar. Range ve intensity ile kontrol edilir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nAmpul, mum, ateş, ekran parlaması için.',
                        properties: [
                            { name: 'range', type: 'float', desc: 'Işığın ulaştığı mesafe' },
                            { name: 'intensity', type: 'float', desc: 'Şiddet' },
                            { name: 'color', type: 'Color', desc: 'Renk' }
                        ],
                        events: [],
                        methods: [],
                        inspectorNotes: 'Range ile etki alanını sınırlayın. Performans için range düşük tutulabilir.',
                        examples: ['Ampul', 'Mum', 'Ateş', 'Ekran ışığı', 'Projektör'],
                        children: []
                    },
                    {
                        id: 'SpotLight',
                        name: 'SpotLight',
                        color: '#FFC107',
                        icon: '🔦',
                        badge: 'Light',
                        description: 'Koni şeklinde yönlü ışık. El feneri veya sahne spotu gibi.\n\n🤔 NEDİR BU?\nBelirli yönde açı (spotAngle) ve range ile sınırlı ışık. Transform.forward yönünde yayılır.\n\n💡 NE ZAMAN KULLANMALIYIM?\nEl feneri, araç farı, sahne spotu, uyarı ışığı için.',
                        properties: [
                            { name: 'range', type: 'float', desc: 'Uzaklık' },
                            { name: 'spotAngle', type: 'float', desc: 'Koni açısı (derece)' },
                            { name: 'intensity', type: 'float', desc: 'Şiddet' }
                        ],
                        events: [],
                        methods: [],
                        inspectorNotes: 'Rotation ışık yönünü belirler. Spot Angle 1–179 arası.',
                        examples: ['El feneri', 'Araç farı', 'Sahne spotu', 'Lamba', 'Arama ışığı'],
                        children: []
                    },
                    {
                        id: 'AreaLight',
                        name: 'AreaLight',
                        color: '#FFC107',
                        icon: '▢',
                        badge: 'Light',
                        description: 'Dikdörtgen bir yüzeyden yayılan yumuşak ışık. Sadece baked (pişirme) ile kullanılır.\n\n🤔 NEDİR BU?\nGerçek zamanlı değil; ışık haritasına pişirilir. Yumuşak gölgeler ve dolgu ışığı için idealdir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nPencere ışığı, ekran parlaması veya stüdyo dolgu ışığı için (baked).',
                        properties: [
                            { name: 'width', type: 'float', desc: 'Alan genişliği' },
                            { name: 'height', type: 'float', desc: 'Alan yüksekliği' },
                            { name: 'intensity', type: 'float', desc: 'Şiddet' }
                        ],
                        events: [],
                        methods: [],
                        inspectorNotes: 'Sadece Baked mode. Realtime oyunlarda kullanılmaz; lightmapping gerekir.',
                        examples: ['Pencere ışığı', 'Tavan paneli', 'Ekran aydınlatması', 'Yumuşak dolgu ışığı'],
                        children: []
                    }
                ]
            },
            {
                id: 'AudioSource',
                name: 'AudioSource',
                color: '#E91E63',
                icon: '🔊',
                badge: 'Audio',
                description: 'Ses çalmak için kullanılan bileşen. Clip atanır, Play() ile oynatılır.\n\n🤔 NEDİR BU?\nGameObject\'e bağlı ses kaynağı. Tek seferlik veya döngüsel ses (müzik, ambient) için. 3D uzamsal ses (mesafeye göre ses) desteği vardır.\n\n💡 NE ZAMAN KULLANMALIYIM?\nAdım sesi, silah sesi, patlama, müzik, ortam sesi için. Her ses kaynağı için bir AudioSource veya paylaşılan bir tane kullanılabilir.',
                properties: [
                    { name: 'clip', type: 'AudioClip', desc: 'Çalınacak ses dosyası' },
                    { name: 'volume', type: 'float', desc: 'Ses şiddeti (0-1)' },
                    { name: 'loop', type: 'bool', desc: 'Döngüye alınsın mı?' },
                    { name: 'spatialBlend', type: 'float', desc: '0=2D, 1=3D uzamsal' }
                ],
                events: [],
                methods: [
                    { name: 'Play', desc: 'Sesi oynatır' },
                    { name: 'Stop', desc: 'Sesi durdurur' },
                    { name: 'PlayOneShot', desc: 'Tek seferlik çalar (üst üste binebilir)' }
                ],
                inspectorNotes: 'AudioClip atayın. 3D ses için Spatial Blend 1 ve Min/Max Distance ayarlayın.',
                examples: [
                    'Adım sesleri',
                    'Silah ve patlama',
                    'Arka plan müziği',
                    'Ortam sesi (rüzgar, su)',
                    'UI tıklama sesi'
                ],
                children: []
            },
            {
                id: 'AudioListener',
                name: 'AudioListener',
                color: '#E91E63',
                icon: '👂',
                badge: 'Audio',
                description: 'Sahnedeki sesleri "duyan" tek nokta. Genelde ana kamerada bulunur.\n\n🤔 NEDİR BU?\n3D sesin nereden dinlendiğini belirler. Sahnede yalnızca bir tane olmalı; çoğunlukla Main Camera\'ya eklenir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nVarsayılan olarak kamera üzerinde gelir. Split-screen için her kamera kendi listener\'ına sahip olabilir (tek aktif).',
                properties: [
                    { name: 'velocityUpdateMode', type: 'AudioVelocityUpdateMode', desc: 'Hız güncelleme (Doppler için)' }
                ],
                events: [],
                methods: [],
                inspectorNotes: 'Sahnede tek AudioListener. Genelde Main Camera\'da bırakın.',
                examples: ['Ana kamera dinleyicisi', 'Split-screen her oyuncu kamerası'],
                children: []
            },
            {
                id: 'Animator',
                name: 'Animator',
                color: '#00BCD4',
                icon: '🎬',
                badge: 'Animation',
                description: 'Animator Controller atanarak state machine ile animasyon oynatır. Mecanim sisteminin kalbi.\n\n🤔 NEDİR BU?\nAnimator Controller (state machine) ve Animation Clip\'leri kullanır. Geçişler, blend tree ve parametreler (bool, float, int, trigger) ile kontrol edilir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nKarakter, NPC veya karmaşık animasyonlu her obje için. Animator.SetTrigger / SetFloat ile kod tarafından kontrol.',
                properties: [
                    { name: 'runtimeAnimatorController', type: 'RuntimeAnimatorController', desc: 'Atanmış controller' },
                    { name: 'avatar', type: 'Avatar', desc: 'İnsanoid iskelet eşlemesi' },
                    { name: 'applyRootMotion', type: 'bool', desc: 'Kök hareketi uygulansın mı?' }
                ],
                events: [],
                methods: [
                    { name: 'SetTrigger', desc: 'Trigger parametresi tetikler' },
                    { name: 'SetFloat', desc: 'Float parametre değeri atar' },
                    { name: 'SetBool', desc: 'Bool parametre atar' },
                    { name: 'Play', desc: 'State adıyla doğrudan oynatır' }
                ],
                inspectorNotes: 'Animator Controller atayın. Controller penceresinde state ve transition\'ları tanımlayın.',
                examples: [
                    'Karakter yürüme/koşma/zıplama',
                    'Düşman saldırı ve ölüm',
                    'Kapı açılma',
                    'Araç tekerlek animasyonu',
                    'UI animasyonu'
                ],
                children: []
            },
            {
                id: 'Animation',
                name: 'Animation',
                color: '#00BCD4',
                icon: '🎞️',
                badge: 'Animation',
                description: 'Eski (legacy) animasyon sistemidir. Basit tek clip veya crossfade için kullanılır.\n\n🤔 NEDİR BU?\nAnimator\'dan önce gelen sistem. Birden fazla AnimationClip atanıp Play(\"clipName\") ile oynatılır. Yeni projelerde Animator tercih edilir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nLegacy projeler veya çok basit (tek clip) animasyonlar için. Yeni içerikte Mecanim (Animator) kullanın.',
                properties: [
                    { name: 'clip', type: 'AnimationClip', desc: 'Varsayılan clip' },
                    { name: 'wrapMode', type: 'WrapMode', desc: 'Loop, Once vb.' },
                    { name: 'playAutomatically', type: 'bool', desc: 'Oyun başında otomatik oynat' }
                ],
                events: [],
                methods: [
                    { name: 'Play', desc: 'Clip adıyla oynatır' },
                    { name: 'Stop', desc: 'Durdurur' },
                    { name: 'CrossFade', desc: 'Başka clip\'e yumuşak geçiş' }
                ],
                inspectorNotes: 'Legacy Animation. Yeni projelerde Animator + Animator Controller kullanın.',
                examples: ['Eski karakter animasyonu', 'Basit obje dönme', 'Legacy cutscene'],
                children: []
            },
            {
                id: 'SpriteRenderer',
                name: 'SpriteRenderer',
                color: '#795548',
                icon: '🖼️',
                badge: '2D',
                description: '2D sprite (görsel) çizer. Sprite atanır, renk ve sorting order ile sıralanır.\n\n🤔 NEDİR BU?\nTexture\'dan kesilmiş Sprite\'ı sahnede gösterir. 2D oyunların temel çizim bileşenidir. Sorting Layer ve Order in Layer ile ön/arka sıra belirlenir.\n\n💡 NE ZAMAN KULLANMALIYIM?\n2D karakter, düşman, platform, arka plan veya efekt sprite\'ı için.',
                properties: [
                    { name: 'sprite', type: 'Sprite', desc: 'Gösterilecek sprite' },
                    { name: 'color', type: 'Color', desc: 'Renk çarpanı' },
                    { name: 'sortingOrder', type: 'int', desc: 'Çizim sırası (büyük = önde)' },
                    { name: 'sortingLayerName', type: 'string', desc: 'Sorting layer adı' }
                ],
                events: [],
                methods: [
                    { name: 'DrawBounds', desc: 'Sınırları çizer (gizmo)' }
                ],
                inspectorNotes: 'Sprite alanına 2D sprite atayın. Sorting Layer ile katman oluşturun.',
                examples: [
                    '2D karakter ve düşman',
                    'Platform ve zemin',
                    'Arka plan katmanları',
                    'Efekt ve parçacık sprite',
                    'UI dışı 2D elemanlar'
                ],
                children: []
            },
            {
                id: 'MeshRenderer',
                name: 'MeshRenderer',
                color: '#795548',
                icon: '🔷',
                badge: '3D',
                description: '3D mesh\'i sahneye çizer. Material ve mesh ile görünüm oluşturur.\n\n🤔 NEDİR BU?\nMeshFilter\'daki mesh\'i, atanmış material(lar) ile render eder. Işık, gölge ve shader bu bileşen üzerinden uygulanır.\n\n💡 NE ZAMAN KULLANMALIYIM?\nHer görünür 3D model için. MeshFilter + MeshRenderer birlikte kullanılır.',
                properties: [
                    { name: 'material', type: 'Material', desc: 'Kullanılan material (instance)' },
                    { name: 'sharedMaterial', type: 'Material', desc: 'Paylaşılan material' },
                    { name: 'shadowCastingMode', type: 'ShadowCastingMode', desc: 'Gölge dökme' },
                    { name: 'receiveShadows', type: 'bool', desc: 'Gölge alıyor mu?' }
                ],
                events: [],
                methods: [
                    { name: 'GetBounds', desc: 'Dünya sınırlarını döndürür' }
                ],
                inspectorNotes: 'MeshFilter\'da mesh, MeshRenderer\'da material atayın. Cast/Receive Shadows ile gölge.',
                examples: [
                    'Duvarlar ve zemin',
                    'Araç ve silah modeli',
                    'Dekoratif objeler',
                    'Procedural mesh',
                    '3D karakter gövdesi'
                ],
                children: []
            },
            {
                id: 'MeshFilter',
                name: 'MeshFilter',
                color: '#795548',
                icon: '📐',
                badge: '3D',
                description: 'Render edilecek 3D mesh geometrisini tutar. MeshRenderer ile birlikte kullanılır.\n\n🤔 NEDİR BU?\nObjenin "şeklini" (üçgen listesi) saklar. Mesh atanır; MeshRenderer bu mesh\'i çizer. Kodla Mesh oluşturup atayarak procedural mesh yapılabilir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nHer 3D modelde MeshFilter + MeshRenderer olmalı. Model import edildiğinde otomatik gelir.',
                properties: [
                    { name: 'mesh', type: 'Mesh', desc: 'Kullanılan mesh (okunur/yazılır)' },
                    { name: 'sharedMesh', type: 'Mesh', desc: 'Paylaşılan mesh referansı' }
                ],
                events: [],
                methods: [],
                inspectorNotes: 'Mesh atayın veya kodla Mesh oluşturup atayın. MeshRenderer ile birlikte kullanın.',
                examples: [
                    'Import edilen 3D model',
                    'Procedural zemin/duvar',
                    'Basit şekil (küp, silindir)',
                    'LOD mesh',
                    'Deformable mesh'
                ],
                children: []
            },
            {
                id: 'SkinnedMeshRenderer',
                name: 'SkinnedMeshRenderer',
                color: '#795548',
                icon: '🦴',
                badge: '3D',
                description: 'Kemik (bone) ile deforme olan mesh\'i çizer. Karakter ve canlı modeller için.\n\n🤔 NEDİR BU?\nİskelet kemiklerine bağlı vertex\'lerle şekil değiştiren mesh. Animator ile kemik hareket edince mesh bükülür.\n\n💡 NE ZAMAN KULLANMALIYIM?\nKarakter, yaratık veya her türlü iskelet animasyonlu model için.',
                properties: [
                    { name: 'sharedMesh', type: 'Mesh', desc: 'Skinned mesh' },
                    { name: 'bones', type: 'Transform[]', desc: 'Kemik referansları' },
                    { name: 'rootBone', type: 'Transform', desc: 'Kök kemik' },
                    { name: 'quality', type: 'SkinQuality', desc: 'Cilt kalitesi (bone sayısı etkisi)' }
                ],
                events: [],
                methods: [
                    { name: 'BakeMesh', desc: 'Anlık mesh\'i statik mesh olarak pişirir' },
                    { name: 'GetBlendShapeWeight', desc: 'Blend shape ağırlığını okur' }
                ],
                inspectorNotes: 'Rig ve mesh import ayarlarında bone eşlemesi yapın. Animator ile kullanın.',
                examples: [
                    'Karakter gövdesi ve kıyafet',
                    'Düşman ve canavar',
                    'Hayvan modeli',
                    'Mekanik kol (kemikli)',
                    'Yüz ifadesi (blend shapes)'
                ],
                children: []
            },
            {
                id: 'Canvas',
                name: 'Canvas',
                color: '#3F51B5',
                icon: '📋',
                badge: 'UI',
                description: 'UI elemanlarının çizildiği yüzey. Render Mode (Screen Space / World Space) ve scaler ile boyutlanır.\n\n🤔 NEDİR BU?\nTüm UI (Image, Text, Button vb.) bir Canvas altında olmalı. EventSystem ile tıklama ve giriş işlenir. Canvas Scaler çözünürlüğe göre ölçekler.\n\n💡 NE ZAMAN KULLANMALIYIM?\nHUD, menü, diyalog veya dünya içi UI (health bar, isim) için. Hierarchy > UI > Canvas ile oluşturulur.',
                properties: [
                    { name: 'renderMode', type: 'RenderMode', desc: 'Screen Space / World Space / Camera' },
                    { name: 'pixelPerfect', type: 'bool', desc: 'Piksel hassas çizim' },
                    { name: 'sortingOrder', type: 'int', desc: 'Çizim sırası' },
                    { name: 'worldCamera', type: 'Camera', desc: 'Camera mode\'da kullanılacak kamera' }
                ],
                events: [],
                methods: [
                    { name: 'ForceUpdateCanvases', desc: 'Layout\'u hemen günceller' },
                    { name: 'GetDefaultCanvasMaterial', desc: 'Varsayılan UI material' }
                ],
                inspectorNotes: 'UI elemanları Canvas altında olmalı. Canvas Scaler ile farklı çözünürlüklere uyum.',
                examples: [
                    'Ana menü ve ayarlar',
                    'Oyun içi HUD (can, skor)',
                    'Diyalog kutuları',
                    'Dünya içi health bar',
                    'Minimap çerçevesi'
                ],
                children: [
                    {
                        id: 'CanvasScaler',
                        name: 'CanvasScaler',
                        color: '#3F51B5',
                        icon: '📐',
                        badge: 'UI',
                        description: 'Canvas\'ın farklı çözünürlüklerde nasıl ölçekleneceğini ayarlar.\n\n🤔 NEDİR BU?\nScale With Screen Size, Constant Pixel Size veya Scale With Physical Size modları. Reference Resolution (örn. 1920x1080) ve match (width/height) ile oran korunur.\n\n💡 NE ZAMAN KULLANMALIYIM?\nHer Canvas\'ta olmalı. Scale With Screen Size + match 0.5 genelde iyi sonuç verir.',
                        properties: [
                            { name: 'uiScaleMode', type: 'ScaleMode', desc: 'Ölçekleme modu' },
                            { name: 'referenceResolution', type: 'Vector2', desc: 'Referans çözünürlük' },
                            { name: 'matchWidthOrHeight', type: 'float', desc: '0=genişlik, 1=yükseklik öncelik' }
                        ],
                        events: [],
                        methods: [],
                        inspectorNotes: 'Reference Resolution tasarım çözünürlüğünüz olsun. Match ile en-boy oranına göre dengeleyin.',
                        examples: ['Responsive HUD', 'Farklı ekran oranları', 'Mobil ve masaüstü'],
                        children: []
                    },
                    {
                        id: 'GraphicRaycaster',
                        name: 'GraphicRaycaster',
                        color: '#3F51B5',
                        icon: '🖱️',
                        badge: 'UI',
                        description: 'Canvas üzerindeki UI elemanlarına tıklama/hover tespiti yapar. EventSystem ile çalışır.\n\n🤔 NEDİR BU?\nFare/touch ışınını Canvas\'a atar, hangi Graphic (Image, Text, Button vb.) isabet ettiyse event\'leri tetikler.\n\n💡 NE ZAMAN KULLANMALIYIM?\nCanvas\'a varsayılan eklenir. Özel UI tıklaması için gerekli.',
                        properties: [
                            { name: 'ignoreReversedGraphics', type: 'bool', desc: 'Arkaya dönük grafikleri yok say' },
                            { name: 'blockingObjects', type: 'BlockingObjects', desc: 'Hangi objeler ışını keser' }
                        ],
                        events: [],
                        methods: [
                            { name: 'Raycast', desc: 'Manuel ışın atar' }
                        ],
                        inspectorNotes: 'Canvas ile birlikte gelir. Blocking Objects ile 3D objelerin UI\'ı engellemesini ayarlayın.',
                        examples: ['Buton tıklama', 'Sürükle-bırak', 'Hover bilgisi', 'Touch girişi'],
                        children: []
                    }
                ]
            },
            {
                id: 'RectTransform',
                name: 'RectTransform',
                color: '#3F51B5',
                icon: '▢',
                badge: 'UI',
                description: 'UI elemanlarının Transform karşılığı. Anchor, pivot ve rect ile konum/boyut.\n\n🤔 NEDİR BU?\nTransform\'dan türer; anchor (min/max), pivot, sizeDelta ve anchoredPosition ile UI yerleşimi yapılır. Parent RectTransform\'a göre hizalama ve stretch.\n\n💡 NE ZAMAN KULLANMALIYIM?\nTüm UI elemanları (Image, Text, Button vb.) RectTransform kullanır. Anchor\'lar responsive tasarım için kritik.',
                properties: [
                    { name: 'anchorMin', type: 'Vector2', desc: 'Anchor sol alt' },
                    { name: 'anchorMax', type: 'Vector2', desc: 'Anchor sağ üst' },
                    { name: 'pivot', type: 'Vector2', desc: 'Dönüş ve ölçek merkezi' },
                    { name: 'sizeDelta', type: 'Vector2', desc: 'Boyut (anchor\'a göre)' },
                    { name: 'anchoredPosition', type: 'Vector2', desc: 'Anchor\'a göre konum' }
                ],
                events: [],
                methods: [
                    { name: 'SetSizeWithCurrentAnchors', desc: 'Mevcut anchor\'larla boyut ayarlar' },
                    { name: 'ForceUpdateRectTransforms', desc: 'Layout\'u günceller' }
                ],
                inspectorNotes: 'Anchor\'ları ekran köşesine veya ortaya sabitleyerek responsive yapın. Pivot hizalama için.',
                examples: [
                    'Tam ekran panel',
                    'Sol üstte sabit can barı',
                    'Ortalanmış diyalog',
                    'Alt bar (skill bar)',
                    'Dinamik liste elemanı'
                ],
                children: []
            },
            {
                id: 'Image',
                name: 'Image',
                color: '#3F51B5',
                icon: '🖼️',
                badge: 'UI',
                description: 'UI\'da renk veya sprite gösterir. Button arka planı, ikon, çerçeve için kullanılır.\n\n🤔 NEDİR BU?\nGraphic türevi. Sprite atanabilir veya sadece color ile düz renk çizilir. Raycast Target ile tıklanabilir yapılabilir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nButon arka planı, ikon, çerçeve, progress bar dolgusu veya dekoratif panel.',
                properties: [
                    { name: 'sprite', type: 'Sprite', desc: 'Gösterilecek sprite (opsiyonel)' },
                    { name: 'color', type: 'Color', desc: 'Renk' },
                    { name: 'raycastTarget', type: 'bool', desc: 'Tıklamaya açık mı?' },
                    { name: 'imageType', type: 'Image.Type', desc: 'Simple, Sliced, Tiled, Filled' }
                ],
                events: [],
                methods: [
                    { name: 'SetNativeSize', desc: 'Sprite boyutuna göre Rect\'i ayarlar' }
                ],
                inspectorNotes: 'Sprite veya sadece Color. Sliced için 9-slice sprite kullanın. Filled ile dolum animasyonu.',
                examples: [
                    'Buton arka planı',
                    'İkon ve avatar',
                    'Progress bar dolgusu',
                    'Panel ve çerçeve',
                    'Basit şekil (renk blok)'
                ],
                children: []
            },
            {
                id: 'TextMeshProUGUI',
                name: 'Text / TextMeshProUGUI',
                color: '#3F51B5',
                icon: '📝',
                badge: 'UI',
                description: 'UI metin göstermek için. Text (legacy) veya TextMeshPro - TMP daha kaliteli tipografi ve performans sunar.\n\n🤔 NEDİR BU?\nTextMeshProUGUI, font asset ve material ile zengin metin (bold, renk, sprite) ve güzel font rendering sağlar. Legacy Text bileşeni de mevcuttur.\n\n💡 NE ZAMAN KULLANMALIYIM?\nSkor, isim, diyalog, buton etiketi, her türlü UI metin. Yeni projelerde TMP tercih edin.',
                properties: [
                    { name: 'text', type: 'string', desc: 'Gösterilen metin' },
                    { name: 'font', type: 'Font / TMP_FontAsset', desc: 'Font' },
                    { name: 'fontSize', type: 'float', desc: 'Yazı boyutu' },
                    { name: 'color', type: 'Color', desc: 'Renk' },
                    { name: 'alignment', type: 'TextAlignmentOptions', desc: 'Hizalama' }
                ],
                events: [],
                methods: [
                    { name: 'SetText', desc: 'Metni günceller (TMP\'de performanslı)' },
                    { name: 'ForceMeshUpdate', desc: 'Layout\'u zorla günceller' }
                ],
                inspectorNotes: 'TextMeshPro için Font Asset atayın. Overflow (Overflow, Ellipsis) ve wrapping ayarlayın.',
                examples: [
                    'Skor ve can metni',
                    'Diyalog ve alt yazı',
                    'Buton etiketleri',
                    'Envanter sayıları',
                    'Hata ve bilgi mesajları'
                ],
                children: []
            },
            {
                id: 'Button',
                name: 'Button',
                color: '#3F51B5',
                icon: '🔘',
                badge: 'UI',
                description: 'Tıklanabilir UI butonu. OnClick listesine fonksiyon atanır veya kodla dinlenir.\n\n🤔 NEDİR BU?\nSelectable türevi. Normal/Highlighted/Pressed/Disabled renk veya sprite ile görsel durum. Button.onClick.AddListener() ile kod tarafında dinlenir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nMenü butonları, onay/cancel, yetenek tuşları, envanter slotu. Navigation ile klavye/controller desteği eklenebilir.',
                properties: [
                    { name: 'interactable', type: 'bool', desc: 'Etkileşime açık mı?' },
                    { name: 'transition', type: 'Selectable.Transition', desc: 'Color / Sprite / Animation' },
                    { name: 'onClick', type: 'Button.ButtonClickedEvent', desc: 'Tıklanınca çağrılacak olaylar' }
                ],
                events: [
                    { name: 'onClick', desc: 'Tıklandığında tetiklenir' }
                ],
                methods: [
                    { name: 'onClick.AddListener', desc: 'Dinleyici ekler' }
                ],
                inspectorNotes: 'On Click () listesine obje ve fonksiyon atayın veya kodda AddListener kullanın.',
                examples: [
                    'Oyuna başla / Ayarlar',
                    'Evet / Hayır diyalog',
                    'Yetenek veya silah seçimi',
                    'Envanter kullan / bırak',
                    'Pause menü butonları'
                ],
                children: []
            },
            {
                id: 'NavMeshAgent',
                name: 'NavMeshAgent',
                color: '#009688',
                icon: '🧭',
                badge: 'AI',
                description: 'NavMesh üzerinde otomatik yol bulup hareket eden bileşen. AI karakterler için standart.\n\n🤔 NEDİR BU?\nBaked NavMesh\'e göre engellerden dolaşarak hedefe gider. Speed, angular speed, stopping distance ve obstacle avoidance ayarlanır.\n\n💡 NE ZAMAN KULLANMALIYIM?\nDüşman takibi, NPC yürüyüşü, strateji birimleri veya her türlü "engelden kaçınan" hareket.',
                properties: [
                    { name: 'destination', type: 'Vector3', desc: 'Hedef konum' },
                    { name: 'speed', type: 'float', desc: 'Hareket hızı' },
                    { name: 'stoppingDistance', type: 'float', desc: 'Hedeften durma mesafesi' },
                    { name: 'isStopped', type: 'bool', desc: 'Durduruldu mu?' }
                ],
                events: [],
                methods: [
                    { name: 'SetDestination', desc: 'Hedef konum atar' },
                    { name: 'ResetPath', desc: 'Mevcut yolu temizler' },
                    { name: 'Warp', desc: 'Agent\'ı anında konuma ışınlar' }
                ],
                inspectorNotes: 'Sahneye NavMesh bake edin (Window > AI > Navigation). Agent\'ı GameObject\'e ekleyin, hedefi kodla SetDestination ile verin.',
                examples: [
                    'Düşman oyuncuyu kovalama',
                    'NPC patrol veya takip',
                    'RTS birim hareketi',
                    'Kalabalık yürüyüşü',
                    'Otomatik parkur koşucusu'
                ],
                children: []
            },
            {
                id: 'NavMeshObstacle',
                name: 'NavMeshObstacle',
                color: '#009688',
                icon: '🚧',
                badge: 'AI',
                description: 'NavMesh üzerinde dinamik engel. Hareket eden objelerin AI yolunu bloke etmesi için.\n\n🤔 NEDİR BU?\nCarve veya tek bir nokta ile agent\'ların bu alandan geçmemesini sağlar. Açılıp kapanan kapı, hareket eden platform için kullanılır.\n\n💡 NE ZAMAN KULLANMALIYIM?\nAçılır kapanır kapı, hareketli kutu, geçici barikat veya dinamik engel gerektiğinde.',
                properties: [
                    { name: 'carving', type: 'bool', desc: 'NavMesh\'ten oyulacak mı?' },
                    { name: 'shape', type: 'NavMeshObstacleShape', desc: 'Capsule veya Box' },
                    { name: 'velocity', type: 'Vector3', desc: 'Hareket tahmini (carving için)' }
                ],
                events: [],
                methods: [
                    { name: 'Enable / Disable', desc: 'Engeli geçici kapatır/açar' }
                ],
                inspectorNotes: 'Hareket eden engel objesine ekleyin. Carving açıksa NavMesh otomatik güncellenir.',
                examples: [
                    'Açılır kapanır kapı',
                    'Hareket eden platform',
                    'Dinamik barikat',
                    'Sürüklenen kutu',
                    'Geçici duvar'
                ],
                children: []
            },
            {
                id: 'ParticleSystem',
                name: 'ParticleSystem',
                color: '#FF4081',
                icon: '✨',
                badge: 'VFX',
                description: 'Parçacık efektleri (ateş, duman, kıvılcım, kar) oluşturur. Main module ve sub-modüllerle ayarlanır.\n\n🤔 NEDİR BU?\nParçacıkların ömrü, hızı, boyutu, rengi ve sayısı ayarlanır. Emission, Shape, Color over Lifetime, Size over Lifetime gibi modüller eklenebilir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nPatlama, ateş, duman, sihir, kan, kar, yaprak vb. tüm parçacık efektleri için.',
                properties: [
                    { name: 'duration', type: 'float', desc: 'Döngü süresi' },
                    { name: 'startLifetime', type: 'ParticleSystem.MinMaxCurve', desc: 'Parçacık ömrü' },
                    { name: 'startSpeed', type: 'float', desc: 'Başlangıç hızı' },
                    { name: 'maxParticles', type: 'int', desc: 'Maksimum parçacık sayısı' }
                ],
                events: [],
                methods: [
                    { name: 'Play', desc: 'Sistemi oynatır' },
                    { name: 'Stop', desc: 'Durdurur' },
                    { name: 'Emit', desc: 'Belirtilen sayıda parçacık üretir' }
                ],
                inspectorNotes: 'Particle System ekleyin, Main ve diğer modülleri açıp ayarlayın. Prefab yapıp Instantiate ile spawn edin.',
                examples: [
                    'Patlama ve ateş',
                    'Duman ve buhar',
                    'Kıvılcım ve sihir',
                    'Kan ve toz',
                    'Kar ve yaprak'
                ],
                children: []
            },
            {
                id: 'TrailRenderer',
                name: 'TrailRenderer',
                color: '#FF4081',
                icon: '🌠',
                badge: 'VFX',
                description: 'Objenin arkasında iz (trail) bırakır. Kılıç, mermi veya hızlı hareket için.\n\n🤔 NEDİR BU?\nTransform\'un geçtiği noktaları çizgi veya mesh olarak çizer. Zamanla solma (time) veya mesafeye göre (min vertex distance) kontrol edilir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nKılıç çizgisi, mermi izi, koşucu izi, kuyruklu yıldız veya hızlı hareket eden her obje.',
                properties: [
                    { name: 'time', type: 'float', desc: 'İzin görünür kalma süresi' },
                    { name: 'startWidth', type: 'float', desc: 'Başlangıç kalınlığı' },
                    { name: 'endWidth', type: 'float', desc: 'Bitiş kalınlığı' },
                    { name: 'material', type: 'Material', desc: 'Çizgi material\'i' }
                ],
                events: [],
                methods: [
                    { name: 'Clear', desc: 'Mevcut izi temizler' }
                ],
                inspectorNotes: 'Material atayın (örn. Unlit ile yumuşak çizgi). Time ve width ile iz yoğunluğunu ayarlayın.',
                examples: [
                    'Kılıç savurma izi',
                    'Mermi veya ok izi',
                    'Koşucu ayak izi',
                    'Kuyruklu yıldız',
                    'Hızlı araç izi'
                ],
                children: []
            },
            {
                id: 'LineRenderer',
                name: 'LineRenderer',
                color: '#FF4081',
                icon: '📏',
                badge: 'VFX',
                description: 'Noktalar arasında çizgi çizer. Lazer, kablo, yol çizgisi veya çizim için.\n\n🤔 NEDİR BU?\nSetPosition ile verilen noktaları sırayla birleştirir. Genişlik (start/end width), renk ve material ayarlanır. 2D veya 3D kullanılabilir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nLazer nişan, kablo/ip, çizilen yol, grafik çizgisi veya her türlü dinamik çizgi.',
                properties: [
                    { name: 'positionCount', type: 'int', desc: 'Nokta sayısı' },
                    { name: 'startWidth', type: 'float', desc: 'Başlangıç kalınlığı' },
                    { name: 'endWidth', type: 'float', desc: 'Bitiş kalınlığı' },
                    { name: 'useWorldSpace', type: 'bool', desc: 'Dünya uzayı mı yerel mi?' }
                ],
                events: [],
                methods: [
                    { name: 'SetPosition', desc: 'İndeksteki noktayı atar' },
                    { name: 'SetPositions', desc: 'Tüm noktaları dizi ile atar' }
                ],
                inspectorNotes: 'Material atayın. Kodda positionCount ve SetPosition/SetPositions ile noktaları güncelleyin.',
                examples: [
                    'Lazer nişan çizgisi',
                    'Kablo veya ip',
                    'Çizilen yol (parmakla)',
                    'Grafik çizgisi',
                    'Bağlantı çizgisi (grafik)'
                ],
                children: []
            },
            {
                id: 'CharacterController',
                name: 'CharacterController',
                color: '#4CAF50',
                icon: '🧍',
                badge: 'Physics',
                description: 'Fizik kullanmadan karakter hareketi sağlar. Yerçekimi, çarpışma ve merdiven için optimize.\n\n🤔 NEDİR BU?\nRigidbody yerine "motor" gibi çalışır. Move() ile yer değiştirme verirsiniz; motor çarpışma ve zemine yapışmayı halleder. Capsule collider içerir.\n\n💡 NE ZAMAN KULLANMALIYIM?\nFPS/TPS karakteri, NPC veya platform karakteri için. Tam fizik (Rigidbody) istemiyorsanız tercih edin.',
                properties: [
                    { name: 'height', type: 'float', desc: 'Kapsül yüksekliği' },
                    { name: 'radius', type: 'float', desc: 'Kapsül yarıçapı' },
                    { name: 'stepOffset', type: 'float', desc: 'Merdiven çıkma yüksekliği' },
                    { name: 'slopeLimit', type: 'float', desc: 'Tırmanılabilecek eğim (derece)' },
                    { name: 'isGrounded', type: 'bool', desc: 'Yerde mi? (okunur)' }
                ],
                events: [],
                methods: [
                    { name: 'Move', desc: 'Yer değiştirme uygular (yerçekimi dahil değil)' },
                    { name: 'SimpleMove', desc: 'Yerçekimli basit hareket' }
                ],
                inspectorNotes: 'Karaktere ekleyin. Move veya SimpleMove ile script\'ten hareket verin. Rigidbody ile birlikte kullanmayın.',
                examples: [
                    'FPS/TPS karakter',
                    'Platform karakteri',
                    'NPC yürüyüşü',
                    'Puzzle karakteri',
                    'Merdiven ve eğim tırmanma'
                ],
                children: []
            },
            {
                id: 'Terrain',
                name: 'Terrain',
                color: '#8BC34A',
                icon: '🏔️',
                badge: 'World',
                description: 'Büyük açık arazi (heightmap ve texture) oluşturur. Ağaç, çim ve detay paint edilebilir.\n\n🤔 NEDİR BU?\nYükseklik haritası ile dağ/tepe, farklı texture\'lar ile zemin boyama, ağaç ve detay (ot, taş) yerleştirme. LOD ve uzak mesafe optimizasyonu vardır.\n\n💡 NE ZAMAN KULLANMALIYIM?\nAçık dünya, koşu parkuru, harita veya her türlü doğal zemin için.',
                properties: [
                    { name: 'terrainData', type: 'TerrainData', desc: 'Yükseklik ve texture verisi' },
                    { name: 'treeDistance', type: 'float', desc: 'Ağaçların görünme mesafesi' },
                    { name: 'detailObjectDistance', type: 'float', desc: 'Detay (ot vb.) mesafesi' },
                    { name: 'heightmapPixelError', type: 'float', desc: 'LOD hata payı' }
                ],
                events: [],
                methods: [
                    { name: 'SampleHeight', desc: 'Belirtilen noktada yükseklik örnekler' },
                    { name: 'GetPosition', desc: 'Terrain konumu' }
                ],
                inspectorNotes: 'Terrain oluştur (GameObject > 3D Object > Terrain). Paint terrain ile yükseklik ve texture boyayın.',
                examples: [
                    'Açık dünya arazi',
                    'Dağ ve vadi',
                    'Koşu ve yarış parkuru',
                    'RTS haritası',
                    'Doğal peyzaj'
                ],
                children: []
            },
            {
                id: 'WindZone',
                name: 'WindZone',
                color: '#8BC34A',
                icon: '💨',
                badge: 'World',
                description: 'Rüzgar alanı tanımlar. Ağaç ve çim animasyonu ile vegetation\'ı sallar.\n\n🤔 NEDİR BU?\nDirectional veya Spherical rüzgar. Main wind (sahne geneli) veya local zone olarak kullanılır. Terrain ve tree shader\'ları bu veriyi kullanır.\n\n💡 NE ZAMAN KULLANMALIYIM?\nAçık hava sahnesinde ağaç ve ot hareketi, fırlatılan bayrak veya rüzgar hissi için.',
                properties: [
                    { name: 'mode', type: 'WindZoneMode', desc: 'Directional veya Spherical' },
                    { name: 'windMain', type: 'float', desc: 'Ana rüzgar şiddeti' },
                    { name: 'windTurbulence', type: 'float', desc: 'Türbülans' },
                    { name: 'windPulseMagnitude', type: 'float', desc: 'Nabız şiddeti' }
                ],
                events: [],
                methods: [],
                inspectorNotes: 'Terrain ve ağaçların rüzgar destekleyen shader kullanması gerekir. Zone mode ile lokal rüzgar alanı yapılabilir.',
                examples: [
                    'Açık alan rüzgarı',
                    'Ağaç ve çim sallanması',
                    'Bayrak dalgalanması',
                    'Lokal fırtına alanı',
                    'Rüzgar türbini'
                ],
                children: []
            },
            {
                id: 'Tilemap',
                name: 'Tilemap',
                color: '#8BC34A',
                icon: '🧱',
                badge: '2D',
                description: '2D tile tabanlı seviye çizmek için. Grid ve Tile Palette ile hızlı seviye tasarımı.\n\n🤔 NEDİR BU?\nGrid altında Tilemap bileşeni; Tile asset\'leri ile x,y hücrelere boya yaparsınız. Rule Tile ve Animated Tile ile kurallı/animasyonlu tile\'lar kullanılabilir.\n\n💡 NE ZAMAN KULLANMALIYIM?\n2D platform, top-down veya tile tabanlı puzzle oyunları için. Sprite\'ları tile olarak atayıp palette\'ten boyayın.',
                properties: [
                    { name: 'layoutGrid', type: 'GridLayout', desc: 'Bağlı grid' },
                    { name: 'tileAnchor', type: 'Vector3', desc: 'Tile anchor' },
                    { name: 'orientation', type: 'Tilemap.Orientation', desc: 'XY, XZ vb.' },
                    { name: 'animationFrameRate', type: 'float', desc: 'Animasyonlu tile FPS' }
                ],
                events: [],
                methods: [
                    { name: 'SetTile', desc: 'Hücreye tile atar' },
                    { name: 'GetTile', desc: 'Hücredeki tile\'ı döndürür' },
                    { name: 'SetTiles', desc: 'Toplu tile atar' }
                ],
                inspectorNotes: 'Grid + Tilemap oluşturun. Tile Palette ile tile\'ları seçip sahneye boyayın. Rule Tile ile otomatik kenar birleştirme.',
                examples: [
                    '2D platform zemin ve duvar',
                    'Top-down zemin ve duvar',
                    'Puzzle oyunu tahtası',
                    'Roguelike oda yerleşimi',
                    'Taktik oyun ızgarası'
                ],
                children: []
            }
        ]
    }
];

export const variableData = [
    {
        name: 'bool',
        color: '#8B0000',
        description: 'En basit karar tipidir. Sadece true (doğru) veya false (yanlış) değer alır. Koşul ve bayrak tutmak için kullanılır.',
        examples: [
            'isDead (Öldü mü?)',
            'hasKey (Anahtarı var mı?)',
            'isGrounded (Yerde mi?)',
            'canJump (Zıplayabilir mi?)'
        ]
    },
    {
        name: 'int',
        color: '#1565C0',
        description: 'Tam sayı tutar. Virgüllü değer alamaz; mermi sayısı, level, skor gibi tamsayılar için idealdir.',
        examples: [
            'ammoCount (Mermi: 30)',
            'levelIndex (Bölüm: 1, 2, 3)',
            'goldAmount (Altın: 150)',
            'killCount (Öldürme: 5)'
        ]
    },
    {
        name: 'float',
        color: '#2E7D32',
        description: 'Ondalıklı sayı. Can, hız, süre gibi kesirli değerler ve yumuşak hesaplamalar için kullanılır.',
        examples: [
            'health (Can: 95.5)',
            'speed (Hız: 6.5)',
            'timer (Süre: 2.53 saniye)',
            'critChance (Kritik şansı: 0.15f)'
        ]
    },
    {
        name: 'string',
        color: '#6A1B9A',
        description: 'Metin (yazı) tipi. Oyuncu adı, diyalog, log mesajı gibi karakter dizilerini tutar.',
        examples: [
            'playerName ("Oyuncu1")',
            'questDescription ("Görev: Kaleyi Koru")',
            'dialogueLine ("Merhaba!")'
        ]
    },
    {
        name: 'char',
        color: '#4A148C',
        description: 'Tek bir karakter tutar. Klavye girişi veya kısa kod için kullanılır.',
        examples: [
            'grade (\'A\')',
            'keyCode',
            'inputChar'
        ]
    },
    {
        name: 'Vector2',
        color: '#00695C',
        description: '2D koordinat veya yön. X ve Y bileşenleri vardır. 2D oyunlarda konum ve hız için yaygındır.',
        examples: [
            'position2D (2D konum)',
            'inputAxis (WASD yönü)',
            'screenPoint (Ekran koordinatı)'
        ]
    },
    {
        name: 'Vector3',
        color: '#00838F',
        description: '3D koordinat veya yön. Konum (position), hız (velocity), ölçek (scale) için kullanılır.',
        examples: [
            'transform.position (Konum)',
            'velocity (Hız vektörü)',
            'localScale (Boyut)'
        ]
    },
    {
        name: 'Quaternion',
        color: '#4E342E',
        description: '3D dönüşü temsil eder. Ölçeksiz, gimbal lock\'suz. transform.rotation bu tiptedir.',
        examples: [
            'transform.rotation (Dönüş)',
            'targetRotation (Hedef açı)',
            'LookRotation (Yöne bakış)'
        ]
    },
    {
        name: 'Color',
        color: '#BF360C',
        description: 'RGBA renk değeri. UI, ışık, material ve sprite renklendirme için kullanılır.',
        examples: [
            'Color.red',
            'new Color(1f, 0.5f, 0f)',
            'image.color (UI rengi)'
        ]
    },
    {
        name: 'GameObject',
        color: '#1B5E20',
        description: 'Sahnedeki bir objeye referans. Instantiate, Destroy veya GetComponent için kullanılır.',
        examples: [
            'target (Hedef obje)',
            'player (Oyuncu referansı)',
            'prefab (Spawn edilecek prefab)'
        ]
    },
    {
        name: 'List / Array',
        color: '#E65100',
        description: 'Aynı tipte birden fazla eleman tutar. List<T> veya T[] ile envanter, düşman listesi vb.',
        examples: [
            'List<GameObject> enemies',
            'int[] scores',
            'List<Item> inventory'
        ]
    },
    {
        name: 'Dictionary',
        color: '#AD1457',
        description: 'Anahtar-değer çiftleri. ID\'den eşya, isimden skor gibi hızlı erişim için kullanılır.',
        examples: [
            'Dictionary<int, Item> itemDatabase',
            'Dictionary<string, int> playerScores',
            'Dictionary<string, GameObject> prefabs'
        ]
    },
    {
        name: 'enum',
        color: '#33691E',
        description: 'Sabit seçenek listesi. Durum makinesi, silah tipi, zorluk seviyesi için idealdir.',
        examples: [
            'enum GameState { Menu, Playing, Paused }',
            'enum WeaponType { Sword, Bow, Staff }',
            'enum Difficulty { Easy, Normal, Hard }'
        ]
    },
    {
        name: 'struct',
        color: '#0D47A1',
        description: 'Bir arada tutulan veri paketi. Hafif ve değer tipi (kopyalanır). Transform bilgisi veya istatistik grubu için.',
        examples: [
            'struct PlayerStats { int health; float speed; }',
            'struct HitInfo { Vector3 point; float damage; }',
            'Vector3 as struct (x, y, z)'
        ]
    }
];

export const nodeData = [
    // === EVENTS (Olaylar) ===
    { name: 'Awake()', type: 'event', description: 'Script ilk yüklendiğinde bir kez çalışır. Referansları burada alın. Obje pasif olsa bile çağrılır.', tags: ['başla', 'init', 'ilk', 'referans', 'awake'], examples: ['rb = GetComponent<Rigidbody>();', 'Awake tüm script\'lerde Start\'tan önce çalışır.'] },
    { name: 'Start()', type: 'event', description: 'İlk kareden önce bir kez çalışır. Başlangıç mantığı ve ayarlar için. Awake\'ten sonra.', tags: ['başla', 'start', 'ilk', 'baslangic'], examples: ['transform.position = spawnPoint;', 'Referanslar Awake\'te, ayarlar Start\'ta.'] },
    { name: 'Update()', type: 'event', description: 'Her karede (frame) çalışır. Input okuma, hareket, oyun mantığı. Frame hızına bağlı; Time.deltaTime kullanın.', tags: ['güncelle', 'update', 'frame', 'sürekli', 'loop'], examples: ['float h = Input.GetAxis("Horizontal");', 'transform.Translate(dir * speed * Time.deltaTime);'] },
    { name: 'FixedUpdate()', type: 'event', description: 'Sabit fizik adımında çalışır (varsayılan 0.02s). Rigidbody hareketi ve fizik işlemleri burada yapılmalı.', tags: ['fizik', 'fixed', 'rigidbody', 'physics'], examples: ['rb.AddForce(dir * force);', 'rb.MovePosition(rb.position + vel * Time.fixedDeltaTime);'] },
    { name: 'LateUpdate()', type: 'event', description: 'Tüm Update\'ler bittikten sonra çalışır. Kamera takibi için ideal.', tags: ['kamera', 'late', 'takip', 'camera', 'follow'], examples: ['cam.position = player.position + offset;'] },
    { name: 'OnEnable()', type: 'event', description: 'Obje veya bileşen aktif olduğunda çalışır. Event abonelikleri burada açılır.', tags: ['aktif', 'enable', 'abone'], examples: ['CanSistemi.onOlum += OlumHandler;'] },
    { name: 'OnDisable()', type: 'event', description: 'Obje veya bileşen pasif olduğunda çalışır. Event abonelikleri burada kapatılır.', tags: ['pasif', 'disable', 'abone', 'çıkış'], examples: ['CanSistemi.onOlum -= OlumHandler;'] },
    { name: 'OnDestroy()', type: 'event', description: 'Obje yok edilmeden hemen önce çalışır. Temizlik, kaynak bırakma, referans sıfırlama.', tags: ['yok', 'destroy', 'sil', 'temizlik'], examples: ['Destroy sırasında coroutine\'ler otomatik durur.'] },
    { name: 'OnCollisionEnter(Collision)', type: 'event', description: 'Rigidbody ile fiziksel çarpışma. Collision bilgisi: contact point, impulse, diğer obje.', tags: ['çarpışma', 'collision', 'çarp', 'temas', 'fizik'], examples: ['void OnCollisionEnter(Collision c) { Debug.Log(c.gameObject.name); }'] },
    { name: 'OnCollisionStay(Collision)', type: 'event', description: 'Çarpışma sürdükçe her fizik adımında çağrılır. Sürekli temas gereken mekanikler için.', tags: ['çarpışma', 'stay', 'sürekli', 'temas'], examples: ['Sürtünme, basınç plakası.'] },
    { name: 'OnCollisionExit(Collision)', type: 'event', description: 'Çarpışma bittiğinde çağrılır. Temastan ayrılma anı.', tags: ['çarpışma', 'exit', 'ayrıl', 'bırak'], examples: ['Platform üzerinden ayrılma tespiti.'] },
    { name: 'OnTriggerEnter(Collider)', type: 'event', description: 'Trigger collider alanına giriş. Is Trigger açık olmalı. Eşya toplama, alan kontrolü.', tags: ['trigger', 'giriş', 'topla', 'alan', 'tetik'], examples: ['void OnTriggerEnter(Collider c) { if(c.CompareTag("Player")) Topla(); }'] },
    { name: 'OnTriggerStay(Collider)', type: 'event', description: 'Trigger alanında kaldıkça her fizik adımında. Hasar alanı, iyileşme bölgesi.', tags: ['trigger', 'stay', 'alan', 'sürekli'], examples: ['Zehirli alan: sürekli hasar.'] },
    { name: 'OnTriggerExit(Collider)', type: 'event', description: 'Trigger alanından çıkış. Bölge terk edildiğinde.', tags: ['trigger', 'exit', 'çıkış', 'terk'], examples: ['Güvenli bölgeden çıkınca uyarı.'] },
    { name: 'OnApplicationQuit()', type: 'event', description: 'Uygulama kapanırken çağrılır. Son kayıt işlemleri.', tags: ['çıkış', 'quit', 'kapat', 'kaydet'], examples: ['PlayerPrefs.Save();'] },
    { name: 'OnApplicationPause(bool)', type: 'event', description: 'Uygulama arka plana atıldığında (mobil). true=durakladı, false=döndü.', tags: ['pause', 'duraklat', 'mobil', 'arka'], examples: ['Mobil: arka plana geçince otomatik kaydet.'] },
    { name: 'OnGUI()', type: 'event', description: 'Legacy GUI çizimi. Her karede çağrılır. Debug ve prototip için; üretimde UI Canvas kullanın.', tags: ['gui', 'arayüz', 'legacy', 'debug'], examples: ['GUI.Label(rect, "FPS: " + fps);'] },
    { name: 'OnDrawGizmos()', type: 'event', description: 'Scene görünümünde her zaman Gizmo çizer. Debug ve görselleştirme.', tags: ['gizmo', 'debug', 'çiz', 'scene'], examples: ['Gizmos.DrawWireSphere(pos, radius);'] },
    { name: 'OnDrawGizmosSelected()', type: 'event', description: 'Obje seçili iken Scene\'de Gizmo çizer. Mesafe, alan gösterimi.', tags: ['gizmo', 'debug', 'seçili', 'scene'], examples: ['AI algılama menzili gösterimi.'] },
    { name: 'OnBecameVisible() / Invisible()', type: 'event', description: 'Renderer herhangi kameradan görünür/görünmez olduğunda. Optimizasyon.', tags: ['görünür', 'kamera', 'render', 'visible'], examples: ['Görünmeyince AI mantığını durdur.'] },
    // === FLOW CONTROL (Akış Kontrolü) ===
    { name: 'StartCoroutine()', type: 'flow', description: 'IEnumerator döndüren fonksiyonu coroutine olarak başlatır. Zamanlı işlemler için.', tags: ['coroutine', 'başlat', 'zaman', 'bekle', 'async'], examples: ['StartCoroutine(BekleVeAtes());'] },
    { name: 'yield return WaitForSeconds(t)', type: 'flow', description: 'Coroutine içinde t saniye bekler, sonra devam eder. Gecikme, timer.', tags: ['bekle', 'saniye', 'gecikme', 'delay', 'wait'], examples: ['yield return new WaitForSeconds(2f);'] },
    { name: 'yield return null', type: 'flow', description: 'Bir kare bekler. Her frame bir şey yapmak ama Update dışında kalmak için.', tags: ['bekle', 'frame', 'kare', 'yield'], examples: ['while(true) { /* iş */ yield return null; }'] },
    { name: 'yield return WaitForFixedUpdate', type: 'flow', description: 'Sonraki fizik adımına kadar bekler. Fizik ile senkron coroutine.', tags: ['bekle', 'fizik', 'fixed'], examples: ['yield return new WaitForFixedUpdate();'] },
    { name: 'yield return WaitUntil(predicate)', type: 'flow', description: 'Koşul true olana kadar bekler. Dinamik bekleme.', tags: ['bekle', 'koşul', 'until', 'şart'], examples: ['yield return new WaitUntil(() => isReady);'] },
    { name: 'yield return WaitWhile(predicate)', type: 'flow', description: 'Koşul true olduğu sürece bekler, false olunca devam.', tags: ['bekle', 'koşul', 'while', 'süre'], examples: ['yield return new WaitWhile(() => isLoading);'] },
    { name: 'StopCoroutine() / StopAllCoroutines()', type: 'flow', description: 'Belirli veya tüm coroutine\'leri durdurur. Obje destroy olunca otomatik durur.', tags: ['durdur', 'coroutine', 'stop', 'iptal'], examples: ['StopCoroutine(myCoroutine);'] },
    { name: 'Invoke("FonkAdı", delay)', type: 'flow', description: 'Belirtilen süre sonra fonksiyonu çağırır. Basit gecikme için. String isim; typo riski.', tags: ['gecikme', 'delay', 'çağır', 'invoke', 'zamanlı'], examples: ['Invoke("Patla", 3f);'] },
    { name: 'InvokeRepeating("Fn", delay, interval)', type: 'flow', description: 'Belirtilen gecikmeden sonra, belirli aralıklarla tekrarlar. Otomatik ateş, spawn.', tags: ['tekrar', 'repeating', 'otomatik', 'spawn', 'zamanlı'], examples: ['InvokeRepeating("SpawnDusman", 1f, 5f);'] },
    { name: 'CancelInvoke()', type: 'flow', description: 'Tüm Invoke\'ları iptal eder veya isimle belirli birini.', tags: ['iptal', 'cancel', 'invoke', 'durdur'], examples: ['CancelInvoke("SpawnDusman");'] },
    { name: 'SceneManager.LoadScene()', type: 'flow', description: 'Sahne yükler. Build Settings\'e eklenmiş sahne adı veya index. using UnityEngine.SceneManagement.', tags: ['sahne', 'yükle', 'scene', 'load', 'geçiş'], examples: ['SceneManager.LoadScene("MainMenu");'] },
    { name: 'SceneManager.LoadSceneAsync()', type: 'flow', description: 'Arka planda sahne yükler. AsyncOperation ile ilerleme takibi. Yükleme ekranı.', tags: ['sahne', 'async', 'yükleme', 'arka', 'loading'], examples: ['AsyncOperation op = SceneManager.LoadSceneAsync("Level2");'] },
    { name: 'Application.Quit()', type: 'flow', description: 'Uygulamayı kapatır. Editör\'de çalışmaz. Build\'de oyun kapanır.', tags: ['çıkış', 'kapat', 'quit'], examples: ['Application.Quit();'] },
    { name: 'Time.timeScale', type: 'flow', description: '0 = duraklat, 1 = normal, 0.5 = ağır çekim. Pause menü ve slow-mo için.', tags: ['zaman', 'duraklat', 'pause', 'slowmo', 'ölçek'], examples: ['Time.timeScale = 0f; // duraklat'] },
    // === FUNCTIONS (Fonksiyonlar) ===
    { name: 'GetComponent<T>()', type: 'function', description: 'Aynı objedeki T tipli component\'i döndürür. Bulamazsa null. Awake\'te cache\'leyin.', tags: ['component', 'bileşen', 'al', 'referans', 'get'], examples: ['Rigidbody rb = GetComponent<Rigidbody>();'] },
    { name: 'GetComponentInChildren<T>()', type: 'function', description: 'Bu obje ve child\'larında T tipli ilk component\'i arar.', tags: ['component', 'child', 'alt', 'ara'], examples: ['Renderer r = GetComponentInChildren<Renderer>();'] },
    { name: 'GetComponentInParent<T>()', type: 'function', description: 'Bu obje ve parent zincirinde T tipli ilk component\'i arar.', tags: ['component', 'parent', 'üst', 'ara'], examples: ['CanSistemi can = GetComponentInParent<CanSistemi>();'] },
    { name: 'GetComponents<T>()', type: 'function', description: 'Aynı objedeki T tipli TÜM component\'leri array olarak döndürür.', tags: ['component', 'hepsi', 'dizi', 'array', 'çoğul'], examples: ['Collider[] cols = GetComponents<Collider>();'] },
    { name: 'GameObject.Find("isim")', type: 'function', description: 'Sahnede isimle obje bulur. YAVAŞ; sadece Awake/Start\'ta kullanın.', tags: ['bul', 'find', 'isim', 'ara', 'obje'], examples: ['GameObject player = GameObject.Find("Player");'] },
    { name: 'GameObject.FindWithTag("tag")', type: 'function', description: 'Tag ile obje bulur. Find\'dan hızlı. Tag atanmış olmalı.', tags: ['bul', 'tag', 'etiket', 'hızlı', 'ara'], examples: ['GameObject player = GameObject.FindWithTag("Player");'] },
    { name: 'FindObjectOfType<T>()', type: 'function', description: 'Sahnedeki T tipli ilk component\'i bulur. Manager pattern için.', tags: ['bul', 'tip', 'type', 'manager', 'ara'], examples: ['GameManager gm = FindObjectOfType<GameManager>();'] },
    { name: 'FindObjectsOfType<T>()', type: 'function', description: 'Sahnedeki T tipli TÜM component\'leri döndürür. Pahalı; cache\'leyin.', tags: ['bul', 'hepsi', 'tip', 'tümü', 'ara'], examples: ['Enemy[] enemies = FindObjectsOfType<Enemy>();'] },
    { name: 'Instantiate(prefab, pos, rot)', type: 'function', description: 'Prefab\'tan yeni obje oluşturur. Mermi, düşman, efekt spawn.', tags: ['oluştur', 'spawn', 'instantiate', 'klon', 'yeni'], examples: ['Instantiate(mermiPrefab, namlu.position, namlu.rotation);'] },
    { name: 'Destroy(obj, delay)', type: 'function', description: 'Obje veya component\'i siler. delay ile gecikmeli. 0 = frame sonu.', tags: ['sil', 'yok', 'destroy', 'kaldır'], examples: ['Destroy(gameObject, 5f); // 5 sn sonra sil'] },
    { name: 'DontDestroyOnLoad(obj)', type: 'function', description: 'Sahne geçişinde objeyi korur. Singleton manager, müzik için.', tags: ['koru', 'sahne', 'geçiş', 'singleton', 'kalıcı'], examples: ['DontDestroyOnLoad(gameObject);'] },
    { name: 'gameObject.SetActive(bool)', type: 'function', description: 'Objeyi aktif/pasif yapar. Pasif obje görünmez ve güncellenmez.', tags: ['aktif', 'pasif', 'gizle', 'göster', 'toggle'], examples: ['panel.SetActive(true); // göster'] },
    { name: 'CompareTag("tag")', type: 'function', description: 'Tag karşılaştırma. == operatöründen hızlı ve GC-free.', tags: ['tag', 'etiket', 'karşılaştır', 'kontrol'], examples: ['if (other.CompareTag("Enemy")) HasarVer();'] },
    { name: 'transform.SetParent(parent)', type: 'function', description: 'Objeyi başka objenin child\'ı yapar. Ekipman takma, asansör.', tags: ['parent', 'child', 'ebeveyn', 'alt', 'hiyerarşi'], examples: ['silah.transform.SetParent(elSocket);'] },
    { name: 'Physics.Raycast(origin, dir, hit, dist)', type: 'function', description: 'Görünmez ışın atar; ilk çarpılan collider bilgisini verir. Silah, etkileşim, AI görüş.', tags: ['raycast', 'ışın', 'nişan', 'çizgi', 'kontrol'], examples: ['if (Physics.Raycast(transform.position, transform.forward, out hit, 100f)) ...'] },
    { name: 'Physics.OverlapSphere(pos, radius)', type: 'function', description: 'Küre içindeki tüm collider\'ları döndürür. Patlama hasarı, algılama.', tags: ['küre', 'alan', 'overlap', 'patlama', 'algılama'], examples: ['Collider[] hits = Physics.OverlapSphere(pos, 5f);'] },
    { name: 'Rigidbody.AddForce(force, mode)', type: 'function', description: 'Fiziksel kuvvet uygular. ForceMode: Force, Impulse, VelocityChange, Acceleration.', tags: ['kuvvet', 'itme', 'fizik', 'force', 'hareket'], examples: ['rb.AddForce(Vector3.up * 500f, ForceMode.Impulse);'] },
    { name: 'Rigidbody.MovePosition(pos)', type: 'function', description: 'Kinematik hareket. FixedUpdate\'te kullanın. Collider\'ları doğru iter.', tags: ['hareket', 'kinematik', 'pozisyon', 'fizik'], examples: ['rb.MovePosition(rb.position + dir * speed * Time.fixedDeltaTime);'] },
    { name: 'Debug.Log() / LogWarning() / LogError()', type: 'function', description: 'Console\'a mesaj yazar. Log=beyaz, Warning=sarı, Error=kırmızı.', tags: ['debug', 'log', 'konsol', 'mesaj', 'hata'], examples: ['Debug.Log($"Can: {health}");'] },
    { name: 'Debug.DrawRay(origin, dir, color)', type: 'function', description: 'Scene görünümünde renkli çizgi çizer. Raycast debug için.', tags: ['debug', 'çizgi', 'ray', 'görsel'], examples: ['Debug.DrawRay(pos, transform.forward * 10, Color.red);'] },
    // === MATH (Matematik) ===
    { name: 'Vector3.Distance(a, b)', type: 'math', description: 'İki nokta arası mesafe. AI algılama, menzil kontrolü.', tags: ['mesafe', 'uzaklık', 'distance', 'ara'], examples: ['float d = Vector3.Distance(transform.position, hedef.position);'] },
    { name: 'Vector3.Lerp(a, b, t)', type: 'math', description: 'İki nokta arası yumuşak geçiş. t=0 başlangıç, t=1 bitiş.', tags: ['yumuşak', 'geçiş', 'lerp', 'interpolasyon'], examples: ['transform.position = Vector3.Lerp(baslangic, bitis, t);'] },
    { name: 'Vector3.MoveTowards(cur, target, maxStep)', type: 'math', description: 'Mevcut noktadan hedefe sabit hızla. Takip, AI hareket.', tags: ['hareket', 'hedef', 'takip', 'sabit', 'adım'], examples: ['pos = Vector3.MoveTowards(pos, hedef, hiz * Time.deltaTime);'] },
    { name: 'Vector3.SmoothDamp(cur, target, ref vel, time)', type: 'math', description: 'Yumuşak takip. Kamera sistemi için ideal. Referans velocity gerektirir.', tags: ['yumuşak', 'takip', 'kamera', 'smooth', 'damp'], examples: ['cam.position = Vector3.SmoothDamp(cam.position, hedef, ref vel, 0.3f);'] },
    { name: 'Quaternion.LookRotation(dir)', type: 'math', description: 'Yön vektöründen dönüş oluşturur. Hedefe bakma.', tags: ['dönüş', 'bak', 'yön', 'quaternion', 'rotation'], examples: ['transform.rotation = Quaternion.LookRotation(hedefYon);'] },
    { name: 'Quaternion.Slerp(a, b, t)', type: 'math', description: 'İki dönüş arası küresel yumuşak geçiş. AI döndürme.', tags: ['dönüş', 'yumuşak', 'slerp', 'rotation'], examples: ['transform.rotation = Quaternion.Slerp(rot, hedefRot, hiz * Time.deltaTime);'] },
    { name: 'Quaternion.Euler(x, y, z)', type: 'math', description: 'Euler açılarından Quaternion oluşturur. Derece cinsinden.', tags: ['dönüş', 'euler', 'derece', 'açı'], examples: ['transform.rotation = Quaternion.Euler(0, 90, 0);'] },
    { name: 'Mathf.Lerp(a, b, t)', type: 'math', description: 'İki float arası yumuşak geçiş. Can barı, fade, ses seviyesi.', tags: ['yumuşak', 'geçiş', 'lerp', 'float'], examples: ['slider.value = Mathf.Lerp(0, 1, t);'] },
    { name: 'Mathf.Clamp(val, min, max)', type: 'math', description: 'Değeri min-max arasına sıkıştırır. Can 0-100, açı sınırı.', tags: ['sınırla', 'clamp', 'limit', 'sıkıştır'], examples: ['health = Mathf.Clamp(health, 0, maxHealth);'] },
    { name: 'Mathf.PingPong(t, length)', type: 'math', description: 'İleri-geri gider. 0→length→0. Nefes efekti, hareketli engel.', tags: ['ileri-geri', 'salınım', 'pingpong', 'tekrar'], examples: ['float y = Mathf.PingPong(Time.time, 2f);'] },
    { name: 'Mathf.Sin() / Cos()', type: 'math', description: 'Trigonometri. Dalga, dairesel hareket, salınım efekti.', tags: ['sin', 'cos', 'trigonometri', 'dalga', 'salınım'], examples: ['float y = Mathf.Sin(Time.time * 2f) * amplitude;'] },
    { name: 'Mathf.PerlinNoise(x, y)', type: 'math', description: 'Yumuşak rastgele gürültü 0-1. Arazi, meşale titreşimi, doğal hareket.', tags: ['noise', 'gürültü', 'rastgele', 'perlin', 'doğal'], examples: ['float n = Mathf.PerlinNoise(x * 0.1f, y * 0.1f);'] },
    { name: 'Random.Range(min, max)', type: 'math', description: 'Rastgele sayı. int: min dahil, max hariç. float: ikisi dahil.', tags: ['rastgele', 'random', 'şans', 'olasılık'], examples: ['int dmg = Random.Range(10, 25);'] },
    { name: 'Random.insideUnitSphere', type: 'math', description: 'Birim küre içinde rastgele nokta. Dağılım, sarsıntı, scatter.', tags: ['rastgele', 'küre', 'dağılım', 'scatter'], examples: ['Vector3 offset = Random.insideUnitSphere * radius;'] },
    { name: 'Mathf.Approximately(a, b)', type: 'math', description: 'Float eşitlik kontrolü. Kayan nokta hataları yüzünden == güvenilmez.', tags: ['eşit', 'kontrol', 'float', 'yaklaşık'], examples: ['if (Mathf.Approximately(hp, 0)) Die();'] },
    // === VARIABLE (Değişken Erişim) ===
    { name: 'transform.position', type: 'variable', description: 'Objenin dünya konumu (Vector3). Doğrudan atanabilir veya okunabilir.', tags: ['konum', 'pozisyon', 'yer', 'dünya'], examples: ['transform.position = new Vector3(0, 5, 0);'] },
    { name: 'transform.localPosition', type: 'variable', description: 'Parent\'a göre yerel konum. Child objelerde önemli.', tags: ['konum', 'yerel', 'local', 'parent'], examples: ['transform.localPosition = Vector3.zero;'] },
    { name: 'transform.rotation', type: 'variable', description: 'Objenin dönüşü (Quaternion). Quaternion.Euler ile atanır.', tags: ['dönüş', 'rotation', 'yön'], examples: ['transform.rotation = Quaternion.Euler(0, 90, 0);'] },
    { name: 'transform.eulerAngles', type: 'variable', description: 'Dönüş derece cinsinden (Vector3). Okuma kolay ama atama dikkatli.', tags: ['dönüş', 'euler', 'derece', 'açı'], examples: ['float yaw = transform.eulerAngles.y;'] },
    { name: 'transform.localScale', type: 'variable', description: 'Obje ölçeği. Vector3.one = normal boyut. Negatif = aynalama.', tags: ['boyut', 'ölçek', 'scale', 'büyüklük'], examples: ['transform.localScale = Vector3.one * 2f;'] },
    { name: 'transform.forward / right / up', type: 'variable', description: 'Objenin bakış yönü (mavi), sağı (kırmızı), yukarısı (yeşil).', tags: ['yön', 'ileri', 'forward', 'sağ', 'yukarı'], examples: ['rb.AddForce(transform.forward * hiz);'] },
    { name: 'gameObject.name', type: 'variable', description: 'Objenin Hierarchy\'deki adı (string).', tags: ['isim', 'ad', 'name'], examples: ['Debug.Log(gameObject.name);'] },
    { name: 'gameObject.tag', type: 'variable', description: 'Objenin tag\'ı. CompareTag() daha performanslı.', tags: ['tag', 'etiket'], examples: ['if (gameObject.CompareTag("Player")) ...'] },
    { name: 'gameObject.layer', type: 'variable', description: 'Layer numarası (int). Raycast filtreleme, collision matrix.', tags: ['layer', 'katman', 'fizik', 'filtre'], examples: ['gameObject.layer = LayerMask.NameToLayer("Enemy");'] },
    { name: 'gameObject.activeSelf', type: 'variable', description: 'Obje aktif mi (bool). SetActive ile değiştirin.', tags: ['aktif', 'durum', 'active'], examples: ['if (!gameObject.activeSelf) return;'] },
    { name: 'Time.deltaTime', type: 'variable', description: 'Son frame süresi (saniye). Frame bağımsız hareket için çarpan.', tags: ['zaman', 'frame', 'süre', 'delta', 'hız'], examples: ['pos += dir * speed * Time.deltaTime;'] },
    { name: 'Time.fixedDeltaTime', type: 'variable', description: 'Fizik adım süresi. FixedUpdate\'te kullanılır.', tags: ['zaman', 'fizik', 'fixed', 'süre'], examples: ['rb.MovePosition(rb.position + vel * Time.fixedDeltaTime);'] },
    { name: 'Time.time', type: 'variable', description: 'Oyun başlangıcından itibaren geçen süre (saniye). Timer, animasyon.', tags: ['zaman', 'süre', 'time', 'toplam'], examples: ['float elapsed = Time.time - startTime;'] },
    { name: 'Time.timeScale', type: 'variable', description: '0=duraklat, 1=normal, 2=hızlı. Pause menü, slow-motion.', tags: ['zaman', 'hız', 'duraklat', 'slowmo'], examples: ['Time.timeScale = isPaused ? 0f : 1f;'] },
    { name: 'Input.mousePosition', type: 'variable', description: 'Fare ekran konumu (Vector3). z her zaman 0. ScreenToWorldPoint ile dünyaya çevirin.', tags: ['fare', 'mouse', 'konum', 'ekran', 'input'], examples: ['Vector3 mp = Input.mousePosition;'] },
    { name: 'Screen.width / height', type: 'variable', description: 'Ekran çözünürlüğü piksel cinsinden.', tags: ['ekran', 'çözünürlük', 'boyut', 'screen'], examples: ['Vector3 center = new Vector3(Screen.width/2, Screen.height/2);'] },
    { name: 'Application.targetFrameRate', type: 'variable', description: 'Hedef FPS. -1 = sınırsız. Mobilde 30 veya 60.', tags: ['fps', 'performans', 'frame', 'hız'], examples: ['Application.targetFrameRate = 60;'] },
    { name: 'Camera.main', type: 'variable', description: 'MainCamera tag\'lı kamera. Cache\'leyin; her çağrıda arama yapar.', tags: ['kamera', 'ana', 'main', 'camera'], examples: ['Camera cam = Camera.main;'] },
    // === NETWORK (Ağ) ===
    { name: 'UnityWebRequest.Get(url)', type: 'network', description: 'HTTP GET isteği. Coroutine ile kullanılır. API çağrısı, veri indirme.', tags: ['web', 'http', 'get', 'api', 'internet'], examples: ['UnityWebRequest www = UnityWebRequest.Get("https://api.example.com");'] },
    { name: 'UnityWebRequest.Post(url, data)', type: 'network', description: 'HTTP POST isteği. Form verisi gönderme.', tags: ['web', 'http', 'post', 'gönder'], examples: ['UnityWebRequest www = UnityWebRequest.Post(url, form);'] },
    { name: 'NetworkManager.StartHost()', type: 'network', description: 'Netcode: Host olarak başlat (server + client). Multiplayer.', tags: ['multiplayer', 'host', 'server', 'ağ'], examples: ['NetworkManager.Singleton.StartHost();'] },
    { name: 'NetworkManager.StartClient()', type: 'network', description: 'Netcode: Client olarak bağlan. Multiplayer.', tags: ['multiplayer', 'client', 'bağlan', 'ağ'], examples: ['NetworkManager.Singleton.StartClient();'] },
    { name: 'NetworkVariable<T>', type: 'network', description: 'Ağ üzerinden otomatik senkronize değişken. Server değiştirir.', tags: ['multiplayer', 'senkron', 'değişken', 'ağ'], examples: ['NetworkVariable<int> score = new();'] },
    { name: '[ServerRpc] / [ClientRpc]', type: 'network', description: 'Ağ fonksiyon çağrıları. Server→Client veya Client→Server.', tags: ['multiplayer', 'rpc', 'çağrı', 'ağ'], examples: ['[ServerRpc] void ShootServerRpc() { ... }'] },
    // === FUNCTION (Ek Fonksiyonlar) ===
    { name: 'PlayerPrefs.SetInt/GetInt(key, val)', type: 'function', description: 'Basit veri kaydetme. Ayarlar, yüksek skor. Disk\'e yazar.', tags: ['kaydet', 'prefs', 'ayar', 'skor', 'save'], examples: ['PlayerPrefs.SetInt("HighScore", score);'] },
    { name: 'PlayerPrefs.SetFloat/GetFloat(key, val)', type: 'function', description: 'Float kaydetme/okuma. Ses seviyesi, hassasiyet.', tags: ['kaydet', 'prefs', 'float', 'ayar'], examples: ['float vol = PlayerPrefs.GetFloat("Volume", 1f);'] },
    { name: 'PlayerPrefs.DeleteAll()', type: 'function', description: 'Tüm kayıtlı verileri siler. Sıfırlama.', tags: ['sil', 'sıfırla', 'prefs', 'temizle'], examples: ['PlayerPrefs.DeleteAll();'] },
    { name: 'JsonUtility.ToJson(obj)', type: 'function', description: 'C# objesini JSON string\'e çevirir. Kaydetme sistemi.', tags: ['json', 'kaydet', 'serialize', 'dönüştür'], examples: ['string json = JsonUtility.ToJson(saveData);'] },
    { name: 'JsonUtility.FromJson<T>(json)', type: 'function', description: 'JSON string\'den C# objesi oluşturur. Yükleme sistemi.', tags: ['json', 'yükle', 'deserialize', 'oku'], examples: ['SaveData data = JsonUtility.FromJson<SaveData>(json);'] },
    { name: 'AudioSource.PlayOneShot(clip)', type: 'function', description: 'Mevcut sesi kesmeden tek seferlik clip çalar. Silah, adım sesi.', tags: ['ses', 'çal', 'audio', 'efekt', 'sound'], examples: ['audioSource.PlayOneShot(atesSesi);'] },
    { name: 'AudioSource.Play() / Stop()', type: 'function', description: 'Atanmış clip\'i oynatır/durdurur. Müzik, ambient.', tags: ['ses', 'müzik', 'çal', 'durdur', 'audio'], examples: ['GetComponent<AudioSource>().Play();'] },
    { name: 'Animator.SetBool/SetFloat/SetTrigger', type: 'function', description: 'Animator parametrelerini ayarlar. Animasyon geçişi tetikleme.', tags: ['animasyon', 'animator', 'parametre', 'geçiş'], examples: ['anim.SetBool("IsRunning", speed > 0.1f);'] },
    { name: 'Animator.Play("StateName")', type: 'function', description: 'Doğrudan animasyon state\'ine geçiş. Geçiş kuralını bypass.', tags: ['animasyon', 'oynat', 'state', 'direkt'], examples: ['anim.Play("Attack");'] },
    { name: 'NavMeshAgent.SetDestination(pos)', type: 'function', description: 'AI yol bulma. NavMesh bake edilmiş sahne gerekir. Hedefe yürütme.', tags: ['ai', 'yol', 'navmesh', 'agent', 'takip'], examples: ['agent.SetDestination(player.position);'] },
    { name: 'NavMeshAgent.ResetPath()', type: 'function', description: 'Mevcut rotayı iptal eder. AI durdurma.', tags: ['ai', 'durdur', 'navmesh', 'iptal'], examples: ['agent.ResetPath();'] },
    { name: 'Camera.ScreenToWorldPoint(pos)', type: 'function', description: 'Ekran koordinatını dünya koordinatına çevirir. Fare ile obje yerleştirme.', tags: ['kamera', 'ekran', 'dünya', 'mouse', 'dönüştür'], examples: ['Vector3 world = Camera.main.ScreenToWorldPoint(Input.mousePosition);'] },
    { name: 'Camera.ScreenPointToRay(pos)', type: 'function', description: 'Ekran noktasından dünyaya doğru ışın (Ray) oluşturur. Tıklama ile raycast.', tags: ['kamera', 'ray', 'ışın', 'tıklama', 'mouse'], examples: ['Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);'] },
    { name: 'LayerMask.GetMask("LayerName")', type: 'function', description: 'Layer adından bit maskesi oluşturur. Raycast filtreleme.', tags: ['layer', 'maske', 'filtre', 'raycast'], examples: ['int mask = LayerMask.GetMask("Enemy", "Obstacle");'] },
    { name: 'Resources.Load<T>(path)', type: 'function', description: 'Assets/Resources klasöründen runtime\'da asset yükler. Dinamik içerik.', tags: ['yükle', 'resource', 'asset', 'dinamik'], examples: ['GameObject prefab = Resources.Load<GameObject>("Prefabs/Mermi");'] },
    { name: 'Object.FindObjectsOfType<T>()', type: 'function', description: 'Sahnedeki tüm T tipli objeleri bulur. Pahalı; seyrek kullanın.', tags: ['bul', 'hepsi', 'sahne', 'tümü'], examples: ['Enemy[] all = FindObjectsOfType<Enemy>();'] },
    { name: 'ParticleSystem.Play() / Stop()', type: 'function', description: 'Partikül efektini başlatır/durdurur. Patlama, duman, ateş.', tags: ['partikül', 'efekt', 'particle', 'başlat'], examples: ['GetComponent<ParticleSystem>().Play();'] }
];

export const shortcutData = [
    {
        category: '🏠 Genel Editör',
        description: 'Unity editöründe her zaman geçerli olan genel kısayollar.',
        shortcuts: [
            { keys: 'Ctrl + S', description: 'Sahneyi kaydeder. Sık sık kullanın; Play modundan önce mutlaka!' },
            { keys: 'Ctrl + Shift + S', description: 'Sahneyi farklı kaydet (Save As).' },
            { keys: 'Ctrl + N', description: 'Yeni boş sahne açar.' },
            { keys: 'Ctrl + O', description: 'Sahne dosyası açma diyalogu.' },
            { keys: 'Ctrl + Z', description: 'Geri al (Undo). Birden fazla kez basabilirsiniz.' },
            { keys: 'Ctrl + Y', description: 'İleri al (Redo).' },
            { keys: 'Ctrl + Shift + B', description: 'Build Settings penceresini açar.' },
            { keys: 'Ctrl + Tab', description: 'Açık pencereler/sekmeler arasında geçiş.' },
            { keys: 'Ctrl + 1/2/3/4', description: '1: Scene, 2: Game, 3: Inspector, 4: Hierarchy penceresine odaklan.' },
            { keys: 'Ctrl + Shift + C', description: 'Console penceresini açar.' },
            { keys: 'Ctrl + F', description: 'Aktif pencerede arama.' }
        ]
    },
    {
        category: '🎥 Sahne Görünümü & Navigasyon',
        description: 'Scene (sahne) penceresinde kamerayı kontrol etme ve obje yerleştirme.',
        shortcuts: [
            { keys: 'Sağ Tık + WASD', description: 'FPS tarzı uçarak gezinme. Shift ile hız artırır.' },
            { keys: 'Orta Fare Tuşu + Sürükle', description: 'Sahne görünümünü kaydır (Pan).' },
            { keys: 'Alt + Sol Tık', description: 'Seçili obje etrafında orbit (dönerek bakma).' },
            { keys: 'Alt + Sağ Tık', description: 'Sahne kamerasını yaklaştırma/uzaklaştırma.' },
            { keys: 'Scroll', description: 'Zoom in/out (yakınlaştır/uzaklaştır).' },
            { keys: 'F', description: 'Seçili objeye odaklan (Frame). En çok kullanılan!' },
            { keys: 'Shift + F', description: 'Seçili objeyi sürekli takip et.' },
            { keys: 'Q', description: 'El aracı (Hand Tool). Viewport kaydırma.' },
            { keys: 'W', description: 'Taşıma aracı (Move). Objeyi x/y/z ekseninde taşı.' },
            { keys: 'E', description: 'Döndürme aracı (Rotate). Objeyi eksen etrafında döndür.' },
            { keys: 'R', description: 'Ölçekleme aracı (Scale). Objeyi büyüt/küçült.' },
            { keys: 'T', description: 'Rect aracı (UI düzenleme).' },
            { keys: 'Y', description: 'Transform aracı (Taşı + Döndür + Ölçekle birlikte).' },
            { keys: 'V', description: 'Vertex snap. Köşe noktasına yapıştırarak taşıma.' },
            { keys: 'Ctrl + sürükle', description: 'Grid snap ile taşıma. Edit > Grid Settings ile ayarlayın.' },
            { keys: 'Ctrl + Shift + F', description: 'Kamerayı seçili objenin konumuna hizala (Align View).' },
            { keys: '2D/3D Toggle', description: 'Scene üst çubuğunda 2D modu açıp kapama.' }
        ]
    },
    {
        category: '📋 Hierarchy & Obje Yönetimi',
        description: 'Sahnedeki objeleri listeleme, oluşturma ve yönetme.',
        shortcuts: [
            { keys: 'Ctrl + Shift + N', description: 'Yeni boş GameObject oluşturur.' },
            { keys: 'Ctrl + D', description: 'Seçili objeyi kopyalar (Duplicate).' },
            { keys: 'Delete', description: 'Seçili objeyi siler.' },
            { keys: 'F2', description: 'Seçili objenin adını düzenler.' },
            { keys: 'Ctrl + C / Ctrl + V', description: 'Objeyi kopyala ve yapıştır.' },
            { keys: 'Alt + Sol/Sağ Ok', description: 'Hierarchy\'de parent/child aç/kapa.' },
            { keys: 'Shift + tık', description: 'Çoklu seçim (aralık).' },
            { keys: 'Ctrl + tık', description: 'Seçime ekle/çıkar.' },
            { keys: 'Ctrl + Shift + F', description: 'Objeyi Scene kameranın baktığı yere taşı.' }
        ]
    },
    {
        category: '🔍 Inspector & Component',
        description: 'Seçili objenin özelliklerini görme ve düzenleme.',
        shortcuts: [
            { keys: 'Kilit İkonu (Inspector)', description: 'Inspector\'ı kilitler; seçim değişse bile aynı objede kalır.' },
            { keys: 'Add Component (buton)', description: 'Inspector altında. Arama ile hızlıca component ekleyin.' },
            { keys: 'Üç çizgi menüsü', description: 'Component kopyala, yapıştır, sıfırla veya kaldır.' },
            { keys: 'Sağ tık > Copy/Paste Component', description: 'Component değerlerini başka objeye aktarma.' },
            { keys: 'Debug Mode', description: 'Inspector sağ üst > Debug. Private değişkenler de görünür.' },
            { keys: 'Reset', description: 'Component değerlerini varsayılana döndürür.' },
            { keys: 'Ctrl + tık (değer)', description: 'Sayısal alana tıklayıp değer yazma.' },
            { keys: 'Sürükle (değer)', description: 'Sayısal alanda fare ile sürükleyerek değer değiştirme.' }
        ]
    },
    {
        category: '▶️ Oynatma & Test',
        description: 'Oyunu test etme, duraklama ve frame frame ilerleme.',
        shortcuts: [
            { keys: 'Ctrl + P', description: 'Play modunu başlat/durdur. En sık kullanılan kısayol!' },
            { keys: 'Ctrl + Shift + P', description: 'Oynatmayı duraklat (Pause). Inspector\'da inceleme yapın.' },
            { keys: 'Ctrl + Alt + P', description: 'Bir kare ilerlet (Step). Pause modunda frame frame debug.' },
            { keys: 'Escape', description: 'Play modunda fare kilidini aç (Cursor.lockState ise).' },
            { keys: 'Maximize on Play', description: 'Game penceresinde bu seçenek aktifken tam ekran test.' },
            { keys: 'Stats (Game penceresi)', description: 'FPS, draw call, triangle sayısı gibi performans bilgileri.' }
        ]
    },
    {
        category: '📁 Project & Asset',
        description: 'Proje dosyaları ve asset\'ler ile çalışma.',
        shortcuts: [
            { keys: 'Ctrl + D', description: 'Project penceresinde asset kopyalama.' },
            { keys: 'Delete', description: 'Seçili asset\'i silme.' },
            { keys: 'F2', description: 'Asset\'i yeniden adlandırma.' },
            { keys: 'Ctrl + R', description: 'Seçili asset\'i yeniden import etme (Reimport).' },
            { keys: 'Sağ tık > Create', description: 'C# Script, Material, Folder, Shader vb. oluşturma.' },
            { keys: 'Sağ tık > Show in Explorer', description: 'Dosyayı Windows gezgininde açma.' },
            { keys: 'Arama Kutusu', description: 't:Script, t:Material, t:Prefab gibi filtreler ile arama.' },
            { keys: 'Sürükle-Bırak', description: 'Asset\'i sahneye veya Inspector\'a sürükleyerek atama.' }
        ]
    },
    {
        category: '💻 Script Editörü (Visual Studio / Rider)',
        description: 'C# script yazarken kullanılan editör kısayolları.',
        shortcuts: [
            { keys: 'Ctrl + Space', description: 'Otomatik tamamlama (IntelliSense). Fonksiyon ve değişken önerileri.' },
            { keys: 'F12', description: 'Tanıma git (Go to Definition). Fonksiyonun kaynağına.' },
            { keys: 'Ctrl + .', description: 'Hızlı düzeltme (Quick Fix). using ekleme, hata çözme.' },
            { keys: 'Ctrl + Shift + F', description: 'Projede arama (Find in Files).' },
            { keys: 'Ctrl + / ', description: 'Seçili satırları yorum yap/yorumu kaldır.' },
            { keys: 'Ctrl + D', description: 'Satırı kopyala (VS Code).' },
            { keys: 'F5', description: 'Debug başlat (Attach to Unity). Breakpoint ile debug.' },
            { keys: 'F9', description: 'Breakpoint ekle/kaldır. Satırda duraksatma noktası.' },
            { keys: 'F10', description: 'Step Over. Debug\'da satır satır ilerle.' },
            { keys: 'F11', description: 'Step Into. Fonksiyonun içine gir.' }
        ]
    },
    {
        category: '🎬 Animasyon & Timeline',
        description: 'Animation penceresi ve Timeline kontrolleri.',
        shortcuts: [
            { keys: 'Ctrl + 6', description: 'Animation penceresini açar.' },
            { keys: 'K', description: 'Seçili property\'lere keyframe ekler.' },
            { keys: 'Record (kırmızı buton)', description: 'Record modunda obje değişiklikleri otomatik keyframe olur.' },
            { keys: 'Sol/Sağ Ok', description: 'Timeline\'da frame frame ilerleme.' },
            { keys: 'Alt + Sol/Sağ Ok', description: 'Önceki/sonraki keyframe\'e atla.' },
            { keys: 'Ctrl + A', description: 'Tüm keyframe\'leri seç.' },
            { keys: 'Space', description: 'Animation preview oynat/duraklat.' },
            { keys: 'Add Property (buton)', description: 'Animasyonlanacak yeni property ekle.' }
        ]
    }
];
