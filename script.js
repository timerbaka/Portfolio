document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. СЛОВАРЬ ПЕРЕВОДОВ И ЛОГИКА СМЕНЫ ЯЗЫКА
    // ==========================================
    const translations = {
        cs: {
            badge_cs: "🇨🇿 Čeština", badge_tt: "🇮🇷 Tatarština", badge_ru: "🇷🇺 Ruština", badge_en: "🇬🇧 Angličtina", badge_de: "🇩🇪 Němčina",
            hero_target: " Cíl: Čínština",
            nav_about: "Můj příběh", nav_projects: "IT Projekty", nav_life: "Život mimo IT", nav_vision: "Proč SSPŠ",
            hero_greeting: "Ahoj, jsem budoucí ",
            words: ["Backend Vývojář", "Student SSPŠ", "Softwarový Inženýr", "Polymat"],
            hero_desc: "Jsem hrdý Tatar pocházející z Petrohradu. Do Česka jsem se přestěhoval v červnu 2023 a za rok a půl jsem se z nuly naučil česky. Můj otec (Cloud Engineer) mi v 9 letech dal do ruky starý MacBook Pro a řekl: <em>„Tady ho máš, zkus přijít na to, jak funguje.“</em> Od té doby je IT mým životním směrem.",
            hero_target: " Cíl: Čínština",
            about_title: "Moje IT Cesta a Vzdělání",
            about_desc: " Můj zájem o technologie se postupně vyvíjel přes kurzy, soutěže a vlastní projekty:",
            ach_1_title: "Univerzita ITMO (2021-2022)", ach_1_desc: "Absolvoval jsem tři intenzivní 96hodinové kurzy zaměřené na hardware/software, kancelářské aplikace a webdesign.",
            ach_2_desc: "Zúčastnil jsem se této prestižní soutěže a v městském kole (kategorie do 16 let) jsem obsadil skvělé 8. místo.",
            ach_3_title: "Hardware projekt (2021)", ach_3_desc: "Sestrojil jsem školní projekt na bázi Arduina určený ke sběru environmentálních dat (teplota, vlhkost, osvětlení).",
            ach_4_title: "AR Aplikace „БуквARик“ (2023)", ach_4_desc: "Můj absolventský projekt v 9. třídě. Aplikace v Kotlinu (Android) s využitím rozšířené reality vizualizovala složité fyzikální jevy v prostoru.",
            radar_title: "Můj Skillset", radar_labels: ['C# & .NET', 'Godot Engine', 'Jazyky (Polyglot)', 'Backend Logic', 'UI/UX (Avalonia)', 'Kotlin / Mobile'], radar_dataset: "Moje úroveň",
            proj_title: "Co aktuálně tvořím",
            proj_1_title: " Vlastní AI asistent (LLM)", proj_1_desc: "Aplikace s UI napsaným v <strong>C# (Avalonia MVVM)</strong>. Pod kapotou běží lokální jazykový model, se kterým komunikuji přes HTTP požadavky. Naprogramoval jsem pro něj oddělenou paměť a systém promptů. Dělám to hlavně proto, abych do hloubky pochopil architekturu LLM modelů.",
            proj_2_title: " Fyzikální hra v Godot Engine", proj_2_desc: "S kamarádem vyvíjíme hru. <strong>Koncept:</strong> Hráč musí před cestou na chatu naskládat do kufru starého „Žiguli“ 3x více věcí, než se tam vejde. Věci do sebe narážejí, z balkonu na vás křičí matka a běží časovač. Učíme se na tom práci v enginu.",
            proj_3_title: " AR Aplikace „БуквARик“", proj_3_desc: "Projekt v <strong>Kotlinu</strong> pro Android. Vytvořil jsem aplikaci s rozšířenou realitou (AR). Aplikace vizualizovala složité fyzikální jevy v prostoru, aby byly snáze pochopitelné pro mě i spolužáky.",
            life_title: "Život mimo obrazovku", life_desc: "Věřím, že dobrý vývojář musí mít široký rozhled. Můj život není jen o kódu:",
            life_1_title: " Věda a ekologie", life_1_desc: "Účastnil jsem se skutečných archeologických vykopávek z období paleolitu v Brjanské oblasti, kde jsem se setkal se známým antropologem S. Drobyshevským. Také jsem si zahrál hlavní roli v sociálním spotu o důležitosti recyklace baterií a ochraně planety.",
            life_2_title: " Hudba a umění", life_2_desc: "Moje maminka je kurátorkou v petrohradské Kunstkameře, takže mám blízko k muzeím a historii. 6 let jsem hrál na violoncello, několik let na klavír a chtěl bych se naučit na kytaru. Více než 10 let jsem také zpíval a koncertoval (i ve Finsku) s lidovým sborem \"GromGora\".",
            life_3_title: " Fotografie", life_3_desc: "Dva roky jsem byl členem fotoklubu. Miluji osamocené cesty do přírody, kde fotím krajiny.",
            life_4_title: " Sport a cestování", life_4_desc: "Udržuji se v kondici (chodím do posilovny, mám stříbrný odznak ruského programu fyzické zdatnosti GTO). Jezdil jsem na kajaku v Karélii a účastnil se cyklo-festivalu. Procestoval jsem mnoho zemí a mým snem je Japonsko.",
            fav_title: "Co mě baví:", fav_games: " Hry", fav_anime: " Anime", fav_books: " Knihy", fav_movies: " Hudba",
            gal_title: "Střípky z mého života",
            vis_title: "Proč Smíchovská SPŠ?", vis_desc: "Do budoucna plánuji studovat IT na české univerzitě a stát se špičkovým backend vývojářem. Hledám školu, která je moderní, kde učí mladí odborníci z praxe a kde panuje tah na branku. Vím, že na Smíchovské SPŠ funguje systém <strong>studentských lektorů</strong> – to je přesně to, co mě zajímá. Rád lidem vysvětluji látku, kterou sám pochopím, a baví mě tvořit výukové materiály. Rád bych se do tohoto systému zapojil.",
            faq_title: "Často kladené dotazy (Q&A)",
            faq_1_q: "Proč chci odejít z aktuální školy (COPAG)?", faq_1_a: "Na aktuální škole jsem se naučil užitečné základy elektrotechniky a hardwaru, za což jsem rád. Plně jsem si ale uvědomil, že můj hlavní směr je čisté IT a vývoj softwaru. Na současné škole mi navíc trochu chybí proaktivní komunita studentů – chci být v prostředí, kde lidé IT oborem žijí a vzájemně se motivují, což vaše škola perfektně splňuje.",
            faq_2_q: "Kde mám ukázky kódu a proč je můj GitHub prázdný?", faq_2_a: "To je naprosto oprávněná otázka. Doteď jsem většinu svých projektů dělal lokálně \"do šuplíku\", abych pochopil technologii. Aktuálně ale měním přístup. Jak hru v Godotu, tak C# AI asistenta nyní připravuji k nahrání na GitHub, protože si uvědomuji, že open-source a viditelné portfolio je pro moderního vývojáře základ."
        },
        en: {
            badge_cs: "🇨🇿 Czech", badge_tt: "🇮🇷 Tatar", badge_ru: "🇷🇺 Russian", badge_en: "🇬🇧 English", badge_de: "🇩🇪 German",
            hero_target: " Goal: Chinese",
            nav_about: "My Story", nav_projects: "IT Projects", nav_life: "Life outside IT", nav_vision: "Why SSPŠ",
            hero_greeting: "Hello, I'm a future ",
            words: ["Backend Developer", "SSPŠ Student", "Software Engineer", "Polymath"],
            hero_desc: "I am a proud Tatar originally from St. Petersburg. I moved to the Czech Republic in June 2023 and learned Czech from scratch in a year and a half. My father (Cloud Engineer) gave me an old MacBook Pro when I was 9 and said: <em>'Here you go, figure out how it works.'</em> IT has been my life's direction ever since.",
            hero_target: " Goal: Chinese",
            about_title: "My IT Journey & Education",
            about_desc: "My interest in technology has developed through courses, competitions, and personal projects:",
            ach_1_title: "ITMO University (2021-2022)", ach_1_desc: "Completed three intensive 96-hour courses focused on hardware/software, office apps, and web design.",
            ach_2_desc: "Participated in this prestigious competition and took a solid 8th place in the city round (under 16 category).",
            ach_3_title: "Hardware Project (2021)", ach_3_desc: "Built a school project using Arduino designed to collect environmental data (temperature, humidity, lighting).",
            ach_4_title: "AR App \"БуквARик\" (2023)", ach_4_desc: "My 9th-grade graduation project. An Android app written in Kotlin using Augmented Reality to visualize complex physics phenomena.",
            radar_title: "My Skillset", radar_labels: ['C# & .NET', 'Godot Engine', 'Languages (Polyglot)', 'Backend Logic', 'UI/UX (Avalonia)', 'Kotlin / Mobile'], radar_dataset: "My Level",
            proj_title: "What I'm building right now",
            proj_1_title: " Custom AI Assistant (LLM)", proj_1_desc: "App with a UI written in <strong>C# (Avalonia MVVM)</strong>. Under the hood runs a local language model communicating via HTTP. I programmed isolated memory and a prompt system. I'm building this mainly to understand LLM architecture.",
            proj_2_title: " Physics game in Godot Engine", proj_2_desc: "Developing a game with a friend. <strong>Concept:</strong> The player must pack 3x more stuff into an old 'Zhiguli' trunk than it can hold before a trip. Items collide, a mother screams from the balcony, and a timer ticks. Our goal is to master the engine.",
            proj_3_title: " AR App \"БуквARик\"", proj_3_desc: "Android project in <strong>Kotlin</strong>. Created an Augmented Reality (AR) app to visualize spatial physics concepts to help myself and my classmates understand them better.",
            life_title: "Life Outside the Screen", life_desc: "I believe a good developer must have a broad perspective. My life isn't just about code:",
            life_1_title: " Science & Ecology", life_1_desc: "Took part in real paleolithic archaeological digs in the Bryansk region, meeting famous anthropologist S. Drobyshevsky. I also played the lead role in a social ad about battery recycling.",
            life_2_title: " Music & Art", life_2_desc: "My mother is a curator at the Kunstkamera in St. Petersburg, so I'm close to museums and history. I played the cello for 6 years, piano for a few, and want to learn guitar. I also sang and toured (even in Finland) with the folk choir 'GromGora' for over 10 years.",
            life_3_title: " Photography", life_3_desc: "Member of a photo club for two years. I love solo trips into nature to shoot landscapes.",
            life_4_title: " Sports & Travel", life_4_desc: "I keep fit (gym, hold a silver GTO fitness badge). Kayaked in Karelia and joined a cycling festival. Traveled to many countries, my ultimate dream is Japan.",
            fav_title: "What I Enjoy:", fav_games: " Games", fav_anime: " Anime", fav_books: " Books", fav_movies: " Musics",
            gal_title: "Snippets of My Life",
            vis_title: "Why Smíchovská SPŠ?", vis_desc: "I plan to study IT at a Czech university and become a top-tier backend developer. I'm looking for a modern school with young experts from the industry and strong drive. I know SSPŠ has a <strong>student lecturer</strong> system – this is exactly what interests me. I love explaining things and creating study materials.",
            faq_title: "Frequently Asked Questions (Q&A)",
            faq_1_q: "Why am I transferring from my current school (COPAG)?", faq_1_a: "I learned useful hardware basics there, but I realized my true passion is pure IT and software development. My current school lacks a proactive student community – I want an environment where people live and breathe IT, which SSPŠ offers.",
            faq_2_q: "Where is my code and why is my GitHub empty?", faq_2_a: "A fair question. Until now, I built projects locally just to learn the tech. Now I'm changing my approach. I'm preparing to upload both the Godot game and C# AI assistant to GitHub, as I know open-source portfolios are essential today."
        },
        ru: {
            badge_cs: "🇨🇿 Чешский", badge_tt: "🇮🇷 Татарский", badge_ru: "🇷🇺 Русский", badge_en: "🇬🇧 Английский", badge_de: "🇩🇪 Немецкий",
            hero_target: " Цель: Китайский",
            nav_about: "Мой путь", nav_projects: "IT Проекты", nav_life: "Вне экрана", nav_vision: "Почему SSPŠ",
            hero_greeting: "Привет, я будущий ",
            words: ["Backend Разработчик", "Студент SSPŠ", "Инженер ПО", "Полимат"],
            hero_desc: "Я татарин, родом из Санкт-Петербурга. Переехал в Чехию в июне 2023 года и с нуля выучил чешский за полтора года. Мой отец (Cloud Engineer) дал мне старый MacBook Pro в 9 лет и сказал: <em>«Держи, разбирайся сам»</em>. С тех пор IT — это мой жизненный путь.",
            hero_target: " Цель: Китайский",
            about_title: "Мой путь в IT и Образование",
            about_desc: "Мой интерес к технологиям развивался через курсы, соревнования и проекты:",
            ach_1_title: "Университет ИТМО (2021-2022)", ach_1_desc: "Прошел три 96-часовых курса по аппаратному/программному обеспечению, офисным приложениям и веб-дизайну.",
            ach_2_desc: "Участвовал в престижном соревновании WorldSkills и занял 8-е место в городском этапе (до 16 лет).",
            ach_3_title: "Hardware проект (2021)", ach_3_desc: "Собрал школьный проект на Arduino для сбора данных об окружающей среде (температура, влажность, освещение).",
            ach_4_title: "AR Приложение «БуквARик» (2023)", ach_4_desc: "Выпускной проект 9 класса. Приложение на Kotlin с дополненной реальностью для визуализации физики.",
            radar_title: "Мой Skillset", radar_labels: ['C# & .NET', 'Godot Engine', 'Языки (Полиглот)', 'Backend Логика', 'UI/UX (Avalonia)', 'Kotlin / Mobile'], radar_dataset: "Мой уровень",
            proj_title: "Что я создаю прямо сейчас",
            proj_1_title: " Свой ИИ-ассистент (LLM)", proj_1_desc: "Приложение на <strong>C# (Avalonia MVVM)</strong>. Под капотом работает локальная LLM модель. Я написал для неё отдельную память и систему промптов. Делаю это, чтобы глубоко понять архитектуру языковых моделей.",
            proj_2_title: " Игра с физикой на Godot", proj_2_desc: "Делаем игру с другом. <strong>Концепт:</strong> Игрок должен упаковать в багажник старых «Жигулей» в 3 раза больше вещей, чем туда влезает. Вещи сталкиваются, мать кричит с балкона, таймер тикает. Цель — идеально освоить движок.",
            proj_3_title: " AR Приложение «БуквARик»", proj_3_desc: "Проект на <strong>Kotlin</strong>. Создал приложение с дополненной реальностью (AR) для визуализации физических явлений, чтобы помочь себе и одноклассникам лучше их понимать.",
            life_title: "Жизнь вне экрана", life_desc: "Хороший разработчик должен иметь широкий кругозор. Моя жизнь — это не только код:",
            life_1_title: " Наука и экология", life_1_desc: "Участвовал в палеолитических раскопках в Брянской области, где встретил антрополога С. Дробышевского. Также сыграл главную роль в соц. ролике о переработке батареек.",
            life_2_title: " Музыка и искусство", life_2_desc: "Моя мама — хранитель в Кунсткамере (СПб), поэтому я близок к музеям. 6 лет играл на виолончели, немного на фортепиано, хочу освоить гитару. Более 10 лет пел и гастролировал с народным хором «ГромГора».",
            life_3_title: " Фотография", life_3_desc: "Два года состоял в фотоклубе. Люблю одиночные поездки на природу для съемки пейзажей.",
            life_4_title: " Спорт и путешествия", life_4_desc: "Держу себя в форме (зал, серебряный значок ГТО). Плавал на байдарках по Карелии. Объездил много стран (от Франции до Гонконга), моя мечта — Япония.",
            fav_title: "Что мне нравится:", fav_games: " Игры", fav_anime: " Аниме", fav_books: " Книги", fav_movies: " Музыка",
            gal_title: "Моменты из жизни",
            vis_title: "Почему Smíchovská SPŠ?", vis_desc: "В будущем планирую изучать IT в чешском вузе и стать крутым backend разработчиком. Ищу современную школу с молодыми практиками. Я знаю, что в SSPŠ есть система <strong>студенческих лекторов</strong> – это именно то, что мне нужно. Мне нравится объяснять материал и создавать учебные пособия.",
            faq_title: "Частые вопросы (Q&A)",
            faq_1_q: "Почему я ухожу из текущей школы (COPAG)?", faq_1_a: "Там я выучил основы электротехники и железа. Но понял, что мое главное направление — чистый софт. В текущей школе не хватает проактивного комьюнити — я хочу быть в среде, где люди живут IT, и ваша школа это предлагает.",
            faq_2_q: "Где мой код и почему пустой GitHub?", faq_2_a: "Справедливый вопрос. До сих пор я делал проекты «в стол» для изучения технологий. Сейчас я меняю подход и готовлю игру на Godot и C# ассистента к публикации на GitHub, так как понимаю важность open-source портфолио."
        },
        de: {
            hero_greeting: "Hallo, ich bin ein zukünftiger ", 
            words: ["Backend-Entwickler", "SSPŠ-Student", "Software-Ingenieur", "Polymath"] 
        },
        tt: {
            hero_greeting: "Сәлам, мин булачак ", 
            words: ["Backend Уйлап табучы", "SSPŠ Студенты", "Программа Инженеры", "Полимат"] 
        }
    };

    let currentGlobalLang = 'cs';
    let currentLocalLang = 'cs';
    let wordsArray = translations[currentLocalLang].words;
    let wordIndex = 0; 
    let currentWord = "";
    let isDeleting = false;
    let typingTimer;

    const greetingEl = document.getElementById('greeting');
    const typewriterEl = document.getElementById('typewriter');
    let myRadarChart;

    function typeLoop() {
        const fullWord = wordsArray[wordIndex];
        if (isDeleting) currentWord = fullWord.substring(0, currentWord.length - 1);
        else currentWord = fullWord.substring(0, currentWord.length + 1);

        typewriterEl.innerHTML = currentWord;
        let typeSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && currentWord === fullWord) {
            typeSpeed = 2000; isDeleting = true;
        } else if (isDeleting && currentWord === "") {
            isDeleting = false; wordIndex++;
            if (wordIndex >= wordsArray.length) wordIndex = 0;
            typeSpeed = 400; 
        }
        typingTimer = setTimeout(typeLoop, typeSpeed);
    }
    typeLoop();

    // Функция обновления локального языка (только приветствие)
    function updateLocalLanguage(lang) {
        currentLocalLang = lang;
        
        document.querySelectorAll('.local-lang-btn').forEach(b => {
            b.classList.remove('active-local-lang');
            if(b.getAttribute('data-local-lang') === lang) {
                b.classList.add('active-local-lang');
            }
        });

        greetingEl.innerHTML = translations[lang].hero_greeting;
        wordsArray = translations[lang].words;
        clearTimeout(typingTimer);
        wordIndex = 0; currentWord = ""; isDeleting = false; typewriterEl.innerHTML = "";
        typeLoop();
    }

    // Слушатели для ЛОКАЛЬНЫХ кнопок (в бейджиках)
    const localLangButtons = document.querySelectorAll('.local-lang-btn');
    localLangButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-local-lang');
            if (lang === currentLocalLang) return;
            updateLocalLanguage(lang);
        });
    });

    // Слушатели для ГЛОБАЛЬНЫХ кнопок (в меню)
    const globalLangButtons = document.querySelectorAll('.global-lang-btn');
    globalLangButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            globalLangButtons.forEach(b => b.classList.remove('active-lang'));
            e.target.classList.add('active-lang');

            const lang = e.target.getAttribute('data-lang');
            if (lang === currentGlobalLang) return; 
            currentGlobalLang = lang;

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if(translations[lang] && translations[lang][key] && key !== 'hero_greeting') {
                    el.innerHTML = translations[lang][key];
                }
            });

            // Вот здесь была опечатка! Теперь используется currentGlobalLang
            if(myRadarChart) {
                myRadarChart.data.labels = translations[currentGlobalLang].radar_labels;
                myRadarChart.data.datasets[0].label = translations[currentGlobalLang].radar_dataset;
                myRadarChart.update();
            }

            updateLocalLanguage(lang);
        });
    });

    // ==========================================
    // 2. АККОРДЕОН FAQ
    // ==========================================
    const acc = document.getElementsByClassName("accordion");
    for (let j = 0; j < acc.length; j++) {
        acc[j].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }

    // ==========================================
    // 3. 3D НАКЛОН КАРТОЧEK
    // ==========================================
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;  
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -8; 
            const rotateY = ((x - centerX) / centerX) * 8;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            card.style.transition = 'none';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.transition = 'transform 0.5s ease';
        });
    });

    // ==========================================
    // 4. RADAR CHART (График скиллов)
    // ==========================================
    const ctx = document.getElementById('skillsChart');
    if(ctx) {
        myRadarChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: translations[currentGlobalLang].radar_labels,
                datasets: [{
                    label: translations[currentGlobalLang].radar_dataset,
                    data: [20, 40, 75, 30, 40, 50],
                    backgroundColor: 'rgba(59, 130, 246, 0.25)', 
                    borderColor: 'rgba(59, 130, 246, 1)',
                    pointBackgroundColor: 'rgba(96, 165, 250, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(96, 165, 250, 1)',
                    borderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                scales: {
                    r: {
                        min: 0, max: 100,
                        angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        pointLabels: { color: '#cbd5e1', font: { size: 13, family: "'Segoe UI', sans-serif" } },
                        ticks: { display: false, stepSize: 20 }
                    }
                },
                plugins: { legend: { display: false } }
            }
        });
    }

    // // ==========================================
    // // 5. ИНТЕРАКТИВНЫЙ ФОН "НЕЙРОСЕТЬ"
    // // ==========================================
    const canvas = document.getElementById('neural-bg');
    if(canvas) {
        const c = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        let particles = [];
        const maxParticles = window.innerWidth < 768 ? 40 : 80; 
        
        let mouse = { x: null, y: null };
        window.addEventListener('mousemove', (e) => { mouse.x = e.x; mouse.y = e.y; });
        window.addEventListener('mouseout', () => { mouse.x = null; mouse.y = null; });

        class Particle {
            constructor() {
                this.x = Math.random() * width; this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 1.5; this.vy = (Math.random() - 0.5) * 1.5;
                this.radius = Math.random() * 2 + 1;
            }
            update() {
                this.x += this.vx; this.y += this.vy;
                if (this.x < 0 || this.x > width) this.vx = -this.vx;
                if (this.y < 0 || this.y > height) this.vy = -this.vy;
            }
            draw() {
                c.beginPath(); c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                c.fillStyle = 'rgba(96, 165, 250, 0.5)'; c.fill();
            }
        }

        for (let j = 0; j < maxParticles; j++) particles.push(new Particle());

        function animateBg() {
            requestAnimationFrame(animateBg);
            c.clearRect(0, 0, width, height);

            for (let j = 0; j < particles.length; j++) {
                particles[j].update(); particles[j].draw();
                for (let k = j; k < particles.length; k++) {
                    const dx = particles[j].x - particles[k].x; const dy = particles[j].y - particles[k].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 120) {
                        c.beginPath(); c.strokeStyle = `rgba(59, 130, 246, ${1 - distance/120})`;
                        c.lineWidth = 0.5; c.moveTo(particles[j].x, particles[j].y); c.lineTo(particles[k].x, particles[k].y); c.stroke();
                    }
                }
                if (mouse.x && mouse.y) {
                    const dxm = particles[j].x - mouse.x; const dym = particles[j].y - mouse.y;
                    const distMouse = Math.sqrt(dxm * dxm + dym * dym);
                    if (distMouse < 150) {
                        c.beginPath(); c.strokeStyle = `rgba(96, 165, 250, ${1 - distMouse/150})`;
                        c.lineWidth = 1; c.moveTo(particles[j].x, particles[j].y); c.lineTo(mouse.x, mouse.y); c.stroke();
                    }
                }
            }
        }
        animateBg();
        window.addEventListener('resize', () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; });
    }
    // Находим все картинки в нашей галерее
    const galleryImages = document.querySelectorAll('.gallery-item img');

    galleryImages.forEach(img => {
        // Когда мышка двигается по картинке
        img.addEventListener('mousemove', function(e) {
            // Получаем размеры и позицию самой картинки
            const rect = e.target.getBoundingClientRect();
            
            // Считаем координаты мыши в процентах (от 0% до 100%)
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            // Передаем координаты в наш CSS
            e.target.style.setProperty('--x', `${x}%`);
            e.target.style.setProperty('--y', `${y}%`);
        });

        // Когда мышка уходит, возвращаем фокус в центр
        img.addEventListener('mouseleave', function(e) {
            e.target.style.setProperty('--x', '50%');
            e.target.style.setProperty('--y', '50%');
        });
    });
});