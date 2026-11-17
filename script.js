document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. СЛОВАРЬ ПЕРЕВОДОВ И ЛОГИКА СМЕНЫ ЯЗЫКА
    // ==========================================
    const translations = {
        cs: {
            badge_cs: "🇨🇿 Čeština", badge_tt: "<svg class='flag' viewBox='0 0 30 15' aria-hidden='true'><rect width='30' height='7' fill='#00a651' /><rect y='7' width='30' height='1' fill='#fff' /><rect y='8' width='30' height='7' fill='#e31e24' /></svg> Tatarština", badge_ru: "🇷🇺 Ruština", badge_en: "🇬🇧 Angličtina", badge_de: "🇩🇪 Němčina",
            hero_target: "Cíl: Čínština",
            nav_about: "Můj příběh", nav_projects: "IT Projekty", nav_life: "Život mimo IT", nav_praxe: "Praxe",
            hero_greeting: "Ahoj, jsem budoucí ",
            words: ["Backend Vývojář", "Elektrotechnik", "Softwarový Inženýr", "Polymat"],
            hero_desc: "Jsem hrdý Tatar pocházející z Petrohradu. Do Česka jsem se přestěhoval v červnu 2023 a za rok a půl jsem se z nuly naučil česky. Můj otec (Cloud Engineer) mi v 9 letech dal do ruky starý MacBook Pro a řekl: <em>„Tady ho máš, zkus přijít na to, jak funguje.“</em> Od té doby je IT mým životním směrem.",
            about_title: "Moje IT Cesta a Vzdělání",
            ach_1_title: "Univerzita ITMO (2021-2022)", ach_1_desc: "Absolvoval jsem tři intenzivní 96hodinové kurzy zaměřené na hardware/software, kancelářské aplikace a webdesign.",
            ach_2_desc: "Zúčastnil jsem se této prestižní soutěže a v městském kole (kategorie do 16 let) jsem obsadil skvělé 8. místo.",
            ach_3_title: "Hardware projekt (2021)", ach_3_desc: "Sestrojil jsem školní projekt na bázi Arduina určený ke sběru environmentálních dat (teplota, vlhkost, osvětlení).",
            ach_4_title: "AR Aplikace „БуквARик“ (2023)", ach_4_desc: "Absolventský projekt v 9. třídě: aplikace pro Android v <strong>Kotlinu</strong>, která pomocí rozšířené reality zobrazovala složité fyzikální jevy v prostoru, aby je spolužáci snáz pochopili. Kód je na <a href=\"https://github.com/timerbaka/augmentedschoolbooks\">GitHub</a>.",
            radar_title: "Můj Skillset", radar_labels: ['C# & .NET', 'Godot Engine', 'Jazyky (Polyglot)', 'Backend Logic', 'UI/UX (Avalonia)', 'Kotlin / Mobile'], radar_dataset: "Moje úroveň",
            proj_title: "Co aktuálně tvořím",
            proj_1_title: "Osobní AI společnice (lokální LLM)", proj_1_desc: "Webová aplikace v <strong>Pythonu (FastAPI)</strong> s chatem v prohlížeči ve stylu starého CRT monitoru. Odpovědi se streamují přes WebSocket, takže se text píše postupně. Na pozadí běží lokální jazykový model přes Ollamu (HTTP API). Má vlastní charakter, systém promptů a historii konverzací v SQLite; teď přidávám dlouhodobou paměť a ovládání chytré domácnosti. Dělám to hlavně proto, abych do hloubky pochopil, jak LLM fungují a jak se kolem nich staví aplikace.",
            proj_2_title: "Fyzikální hra v Godot Engine", proj_2_desc: "S kamarádem vyvíjíme hru. <strong>Koncept:</strong> Hráč musí před cestou na chatu naskládat do kufru starého „Žiguli“ 3x více věcí, než se tam vejde. Věci do sebe narážejí, z balkonu na vás křičí matka a běží časovač. Učíme se na tom práci v enginu.",
            life_title: "Život mimo obrazovku",
            life_1_title: "Věda a ekologie", life_1_desc: "Účastnil jsem se skutečných archeologických vykopávek z období paleolitu v Brjanské oblasti, kde jsem se setkal se známým antropologem S. Drobyshevským. Také jsem si zahrál hlavní roli v sociálním spotu o důležitosti recyklace baterií a ochraně planety.",
            life_2_title: "Hudba a umění", life_2_desc: "Moje maminka je kurátorkou v petrohradské Kunstkameře, takže mám blízko k muzeím a historii. 6 let jsem hrál na violoncello, několik let na klavír a chtěl bych se naučit na kytaru. Více než 10 let jsem také zpíval a koncertoval (i ve Finsku) s lidovým sborem \"GromGora\".",
            life_3_title: "Fotografie", life_3_desc: "Dva roky jsem byl členem fotoklubu. Miluji osamocené cesty do přírody, kde fotím krajiny.",
            life_4_title: "Sport a cestování", life_4_desc: "Udržuji se v kondici (chodím do posilovny, mám stříbrný odznak ruského programu fyzické zdatnosti GTO). Jezdil jsem na kajaku v Karélii a účastnil se cyklo-festivalu. Procestoval jsem mnoho zemí a mým snem je Japonsko.",
            fav_title: "Co mě baví:", fav_games: "Hry", fav_anime: "Anime", fav_books: "Knihy", fav_movies: "Hudba",
            gal_1: "Game Developers Session 2025", gal_2: "Weltmuseum ve Vídni", gal_3: "Francie 2024", gal_4: "Na kajaku po Karélii, 2021", gal_5: "Konec kurzu češtiny na Univerzitě Karlově, 2023", gal_6: "Vyřazení z 9. třídy s těmi nejlepšími", gal_7: "Paleolitické vykopávky v Judinovu, Brjanská oblast, 2021", gal_8: "S paleozoologem Michailem Sablinem na vykopávkách v Judinovu, 2022", gal_9: "Na fatbiku po Karélii, 2021", gal_10: "Sociální spot „Baterka“", gal_11: "Velký gottorpský glóbus v Kunstkameře, Petrohrad", gal_12: "Stavba první 3D tiskárny s nejlepším kamarádem, 2021", gal_13: "Jižní Korea 2025",
            gal_title: "Střípky z mého života",
            ach_5_title: "Elektrotechnika, COPAG (od 2024)", ach_5_desc: "Ve škole se učím pájet, měřit elektrické veličiny a hledat a opravovat závady v obvodech a zařízeních.",
            prax_title: "Hledám praxi 16.–29. 6. 2027", prax_desc: "Jsem ve 3. ročníku oboru Mechanik elektrotechnik na COPAGu a hledám souvislou odbornou praxi <strong>16.–29. 6. 2027</strong>. Nejvíc mě láká servis počítačů, správa IT a sítí nebo elektro. Rád se naučím cokoli nového a nebojím se ani rutinní práce.", prax_contact: "E-mail: <a href=\"mailto:timerbaka@gmail.com\">timerbaka@gmail.com</a><br />Ukázky kódu: <a href=\"https://github.com/timerbaka\">github.com/timerbaka</a>"
        },
        en: {
            badge_cs: "🇨🇿 Czech", badge_tt: "<svg class='flag' viewBox='0 0 30 15' aria-hidden='true'><rect width='30' height='7' fill='#00a651' /><rect y='7' width='30' height='1' fill='#fff' /><rect y='8' width='30' height='7' fill='#e31e24' /></svg> Tatar", badge_ru: "🇷🇺 Russian", badge_en: "🇬🇧 English", badge_de: "🇩🇪 German",
            hero_target: "Goal: Chinese",
            nav_about: "My Story", nav_projects: "IT Projects", nav_life: "Life outside IT", nav_praxe: "Internship",
            hero_greeting: "Hello, I'm a future ",
            words: ["Backend Developer", "Electrical Technician", "Software Engineer", "Polymath"],
            hero_desc: "I am a proud Tatar originally from St. Petersburg. I moved to the Czech Republic in June 2023 and learned Czech from scratch in a year and a half. My father (Cloud Engineer) gave me an old MacBook Pro when I was 9 and said: <em>'Here you go, figure out how it works.'</em> IT has been my life's direction ever since.",
            about_title: "My IT Journey & Education",
            ach_1_title: "ITMO University (2021-2022)", ach_1_desc: "Completed three intensive 96-hour courses focused on hardware/software, office apps, and web design.",
            ach_2_desc: "Participated in this prestigious competition and took a solid 8th place in the city round (under 16 category).",
            ach_3_title: "Hardware Project (2021)", ach_3_desc: "Built a school project using Arduino designed to collect environmental data (temperature, humidity, lighting).",
            ach_4_title: "AR App \"БуквARик\" (2023)", ach_4_desc: "My 9th-grade graduation project: an Android app in <strong>Kotlin</strong> that used augmented reality to show complex physics phenomena in 3D, so my classmates could understand them more easily. Code on <a href=\"https://github.com/timerbaka/augmentedschoolbooks\">GitHub</a>.",
            radar_title: "My Skillset", radar_labels: ['C# & .NET', 'Godot Engine', 'Languages (Polyglot)', 'Backend Logic', 'UI/UX (Avalonia)', 'Kotlin / Mobile'], radar_dataset: "My Level",
            proj_title: "What I'm building right now",
            proj_1_title: "Personal AI Companion (local LLM)", proj_1_desc: "A web app in <strong>Python (FastAPI)</strong> with a browser chat styled like an old CRT monitor. Replies stream over WebSocket, so the text appears gradually. A local language model runs in the background via Ollama (HTTP API). It has its own character, a prompt system and conversation history in SQLite; I am now adding long-term memory and smart home control. I am building it mainly to understand in depth how LLMs work and how applications are built around them.",
            proj_2_title: "Physics game in Godot Engine", proj_2_desc: "Developing a game with a friend. <strong>Concept:</strong> The player must pack 3x more stuff into an old 'Zhiguli' trunk than it can hold before a trip. Items collide, a mother screams from the balcony, and a timer ticks. Our goal is to master the engine.",
            life_title: "Life Outside the Screen",
            life_1_title: "Science & Ecology", life_1_desc: "Took part in real paleolithic archaeological digs in the Bryansk region, meeting famous anthropologist S. Drobyshevsky. I also played the lead role in a social ad about battery recycling.",
            life_2_title: "Music & Art", life_2_desc: "My mother is a curator at the Kunstkamera in St. Petersburg, so I'm close to museums and history. I played the cello for 6 years, piano for a few, and want to learn guitar. I also sang and toured (even in Finland) with the folk choir 'GromGora' for over 10 years.",
            life_3_title: "Photography", life_3_desc: "Member of a photo club for two years. I love solo trips into nature to shoot landscapes.",
            life_4_title: "Sports & Travel", life_4_desc: "I keep fit (gym, hold a silver GTO fitness badge). Kayaked in Karelia and joined a cycling festival. Traveled to many countries, my ultimate dream is Japan.",
            fav_title: "What I Enjoy:", fav_games: "Games", fav_anime: "Anime", fav_books: "Books", fav_movies: "Musics",
            gal_1: "Game Developers Session 2025", gal_2: "Weltmuseum Wien", gal_3: "France 2024", gal_4: "Kayaking through Karelia, 2021", gal_5: "End of the Czech language course, Charles University, 2023", gal_6: "9th-grade graduation with the best", gal_7: "Paleolithic excavations at Yudinovo, Bryansk region, 2021", gal_8: "With paleozoologist Mikhail Sablin at the Yudinovo excavations, 2022", gal_9: "Fatbike trip through Karelia, 2021", gal_10: "Social awareness film “Battery”", gal_11: "The Great Gottorf Globe at the Kunstkamera, St. Petersburg", gal_12: "Building my first 3D printer with my best friend, 2021", gal_13: "South Korea 2025",
            gal_title: "Snippets of My Life",
            ach_5_title: "Electrical Engineering, COPAG (since 2024)", ach_5_desc: "At school I learn soldering, measuring electrical quantities, and finding and fixing faults in circuits and devices.",
            prax_title: "Looking for an internship 16–29 June 2027", prax_desc: "I am a 3rd-year Electrical Technician student at COPAG looking for a work placement <strong>16–29 June 2027</strong>. I am most interested in computer service, IT and network administration, or electrical work. I am eager to learn anything new and happy to do routine tasks too.", prax_contact: "E-mail: <a href=\"mailto:timerbaka@gmail.com\">timerbaka@gmail.com</a><br />Code samples: <a href=\"https://github.com/timerbaka\">github.com/timerbaka</a>"
        },
        ru: {
            badge_cs: "🇨🇿 Чешский", badge_tt: "<svg class='flag' viewBox='0 0 30 15' aria-hidden='true'><rect width='30' height='7' fill='#00a651' /><rect y='7' width='30' height='1' fill='#fff' /><rect y='8' width='30' height='7' fill='#e31e24' /></svg> Татарский", badge_ru: "🇷🇺 Русский", badge_en: "🇬🇧 Английский", badge_de: "🇩🇪 Немецкий",
            hero_target: "Цель: Китайский",
            nav_about: "Мой путь", nav_projects: "IT Проекты", nav_life: "Вне экрана", nav_praxe: "Практика",
            hero_greeting: "Привет, я будущий ",
            words: ["Backend Разработчик", "Электротехник", "Инженер ПО", "Полимат"],
            hero_desc: "Я татарин, родом из Санкт-Петербурга. Переехал в Чехию в июне 2023 года и с нуля выучил чешский за полтора года. Мой отец (Cloud Engineer) дал мне старый MacBook Pro в 9 лет и сказал: <em>«Держи, разбирайся сам»</em>. С тех пор IT — это мой жизненный путь.",
            about_title: "Мой путь в IT и Образование",
            ach_1_title: "Университет ИТМО (2021-2022)", ach_1_desc: "Прошел три 96-часовых курса по аппаратному/программному обеспечению, офисным приложениям и веб-дизайну.",
            ach_2_desc: "Участвовал в престижном соревновании WorldSkills и занял 8-е место в городском этапе (до 16 лет).",
            ach_3_title: "Hardware проект (2021)", ach_3_desc: "Собрал школьный проект на Arduino для сбора данных об окружающей среде (температура, влажность, освещение).",
            ach_4_title: "AR Приложение «БуквARик» (2023)", ach_4_desc: "Выпускной проект 9-го класса: Android-приложение на <strong>Kotlin</strong>, которое с помощью дополненной реальности показывало сложные физические явления в пространстве, чтобы одноклассникам было проще их понять. Код на <a href=\"https://github.com/timerbaka/augmentedschoolbooks\">GitHub</a>.",
            radar_title: "Мой Skillset", radar_labels: ['C# & .NET', 'Godot Engine', 'Языки (Полиглот)', 'Backend Логика', 'UI/UX (Avalonia)', 'Kotlin / Mobile'], radar_dataset: "Мой уровень",
            proj_title: "Что я создаю прямо сейчас",
            proj_1_title: "Личная ИИ-компаньонка (локальная LLM)", proj_1_desc: "Веб-приложение на <strong>Python (FastAPI)</strong> с чатом в браузере в стиле старого CRT-монитора. Ответы стримятся через WebSocket, поэтому текст печатается постепенно. В фоне работает локальная языковая модель через Ollama (HTTP API). Свой характер, система промптов и история диалогов в SQLite; сейчас добавляю долговременную память и управление умным домом. Делаю это, чтобы глубоко понять, как работают LLM и как вокруг них строятся приложения.",
            proj_2_title: "Игра с физикой на Godot", proj_2_desc: "Делаем игру с другом. <strong>Концепт:</strong> Игрок должен упаковать в багажник старых «Жигулей» в 3 раза больше вещей, чем туда влезает. Вещи сталкиваются, мать кричит с балкона, таймер тикает. Цель — идеально освоить движок.",
            life_title: "Жизнь вне экрана",
            life_1_title: "Наука и экология", life_1_desc: "Участвовал в палеолитических раскопках в Брянской области, где встретил антрополога С. Дробышевского. Также сыграл главную роль в соц. ролике о переработке батареек.",
            life_2_title: "Музыка и искусство", life_2_desc: "Моя мама — хранитель в Кунсткамере (СПб), поэтому я близок к музеям. 6 лет играл на виолончели, немного на фортепиано, хочу освоить гитару. Более 10 лет пел и гастролировал с народным хором «ГромГора».",
            life_3_title: "Фотография", life_3_desc: "Два года состоял в фотоклубе. Люблю одиночные поездки на природу для съемки пейзажей.",
            life_4_title: "Спорт и путешествия", life_4_desc: "Держу себя в форме (зал, серебряный значок ГТО). Плавал на байдарках по Карелии. Объездил много стран (от Франции до Гонконга), моя мечта — Япония.",
            fav_title: "Что мне нравится:", fav_games: "Игры", fav_anime: "Аниме", fav_books: "Книги", fav_movies: "Музыка",
            gal_1: "Game Developers Session 2025", gal_2: "Музей мира (Weltmuseum), Вена", gal_3: "Франция 2024", gal_4: "Сплав на байдарках по Карелии, 2021", gal_5: "Окончание курса чешского в Карловом университете, 2023", gal_6: "Выпускной 9-го класса с лучшими", gal_7: "Палеолитические раскопки в Юдиново, Брянская обл., 2021", gal_8: "С палеозоологом Михаилом Саблиным на раскопках в Юдиново, 2022", gal_9: "На фэтбайках по Карелии, 2021", gal_10: "Социальный ролик «Батарейка»", gal_11: "Большой Готторпский глобус в Кунсткамере, Санкт-Петербург", gal_12: "Собираем первый 3D-принтер с лучшим другом, 2021", gal_13: "Южная Корея 2025",
            gal_title: "Моменты из жизни",
            ach_5_title: "Электротехника, COPAG (с 2024)", ach_5_desc: "В школе учусь паять, измерять электрические величины, искать и устранять неисправности в схемах и устройствах.",
            prax_title: "Ищу практику 16–29.06.2027", prax_desc: "Учусь на 3-м курсе по специальности «электромеханик» в COPAG и ищу место для производственной практики <strong>16–29 июня 2027</strong>. Больше всего интересуют сервис компьютеров, администрирование IT и сетей или электрика. Готов учиться новому и не боюсь рутинной работы.", prax_contact: "E-mail: <a href=\"mailto:timerbaka@gmail.com\">timerbaka@gmail.com</a><br />Примеры кода: <a href=\"https://github.com/timerbaka\">github.com/timerbaka</a>"
        },
        de: {
            hero_greeting: "Hallo, ich bin ein zukünftiger ",
            words: ["Backend-Entwickler", "Elektrotechniker", "Software-Ingenieur", "Polymath"]
        },
        tt: {
            hero_greeting: "Сәлам, мин булачак ",
            words: ["Backend Уйлап табучы", "Электротехник", "Программа Инженеры", "Полимат"]
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
            const lang = e.currentTarget.getAttribute('data-local-lang');
            if (lang === currentLocalLang) return;
            updateLocalLanguage(lang);
        });
    });

    // Слушатели для ГЛОБАЛЬНЫХ кнопок (в меню)
    const globalLangButtons = document.querySelectorAll('.global-lang-btn');
    globalLangButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            globalLangButtons.forEach(b => b.classList.remove('active-lang'));
            e.currentTarget.classList.add('active-lang');

            const lang = e.currentTarget.getAttribute('data-lang');
            if (lang === currentGlobalLang) return;
            currentGlobalLang = lang;

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if(translations[lang] && translations[lang][key] && key !== 'hero_greeting') {
                    el.innerHTML = translations[lang][key];
                }
            });

            document.documentElement.lang = lang;

            if(myRadarChart) {
                myRadarChart.data.labels = translations[currentGlobalLang].radar_labels;
                myRadarChart.data.datasets[0].label = translations[currentGlobalLang].radar_dataset;
                myRadarChart.update();
            }

            updateLocalLanguage(lang);
        });
    });

    // ==========================================
    // 2. АККОРДЕОН (галерея)
    // ==========================================
    const acc = document.getElementsByClassName("accordion");
    for (let j = 0; j < acc.length; j++) {
        acc[j].addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
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

    // ==========================================
    // 5. ИНТЕРАКТИВНЫЙ ФОН "НЕЙРОСЕТЬ"
    // ==========================================
    // Barvy pozadí a radaru (mění se v CRT režimu, viz sekce 7)
    const palette = {
        normal: { dot: '96, 165, 250', line: '59, 130, 246' },
        crt: { dot: '102, 255, 136', line: '51, 255, 102' },
    };
    let colors = palette.normal;

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
                c.fillStyle = `rgba(${colors.dot}, 0.5)`; c.fill();
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
                        c.beginPath(); c.strokeStyle = `rgba(${colors.line}, ${1 - distance/120})`;
                        c.lineWidth = 0.5; c.moveTo(particles[j].x, particles[j].y); c.lineTo(particles[k].x, particles[k].y); c.stroke();
                    }
                }
                if (mouse.x !== null) {
                    const dxm = particles[j].x - mouse.x; const dym = particles[j].y - mouse.y;
                    const distMouse = Math.sqrt(dxm * dxm + dym * dym);
                    if (distMouse < 150) {
                        c.beginPath(); c.strokeStyle = `rgba(${colors.dot}, ${1 - distMouse/150})`;
                        c.lineWidth = 1; c.moveTo(particles[j].x, particles[j].y); c.lineTo(mouse.x, mouse.y); c.stroke();
                    }
                }
            }
        }
        animateBg();
        window.addEventListener('resize', () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; });
    }

    // ==========================================
    // 6. ЛУПА В ГАЛЕРЕЕ
    // ==========================================
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

    // ==========================================
    // 7. ПАСХАЛКА: KONAMI-КОД → CRT-РЕЖИМ
    // ↑ ↑ ↓ ↓ ← → ← → B A
    // ==========================================
    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    let konamiPos = 0;
    const toast = document.getElementById('crt-toast');
    let toastTimer;

    function setRadarColors(rgb) {
        if (!myRadarChart) return;
        const ds = myRadarChart.data.datasets[0];
        ds.backgroundColor = `rgba(${rgb.line}, 0.25)`;
        ds.borderColor = `rgba(${rgb.line}, 1)`;
        ds.pointBackgroundColor = `rgba(${rgb.dot}, 1)`;
        ds.pointHoverBorderColor = `rgba(${rgb.dot}, 1)`;
        myRadarChart.update();
    }

    function toggleCrt() {
        const on = document.body.classList.toggle('crt');
        colors = on ? palette.crt : palette.normal;
        setRadarColors(colors);
        toast.textContent = on ? '> CRT MODE: ON_' : '> CRT MODE: OFF_';
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
    }

    document.addEventListener('keydown', (e) => {
        const key = e.code; // fyzická klávesa → funguje v CZ/RU/EN rozložení
        if (key === konami[konamiPos]) {
            konamiPos++;
            if (konamiPos === konami.length) {
                konamiPos = 0;
                toggleCrt();
            }
        } else {
            konamiPos = key === konami[0] ? 1 : 0;
        }
    });

    // Nápověda pro zvědavce, kteří otevřou DevTools
    console.log('%c> Zkuste ↑ ↑ ↓ ↓ ← → ← → B A', 'color:#33ff66;background:#020a02;font:14px monospace;padding:4px 8px');
});