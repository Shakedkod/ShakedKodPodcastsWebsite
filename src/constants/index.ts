export type RSSDataProps = {
    title: string;
    description: string;
    feed_url: string;
    site_url: string;
    language: string;
    image: string;
    copyright: string;
    categories: string[];
    editor: string;
    web_master: string;
    author: {
        name: string;
        email: string;
        link: string;
    };
    explicit: "yes" | "no" | "clean";
    type: "episodic" | "serial";
    episodes: {
        title: string;
        description: string;
        google_description: string;
        url: string;
        categories: string[];
        author: string;
        date: string;
        audio: {
            url: string;
            size: number;
            type: string;
        };
        subtitle: string;
        image: string;
        duration: string;
        explicit: "yes" | "no" | "clean";
        episodeType: "full" | "trailer" | "bonus";
        season: number;
    }[];
};

export const PODCASTS: { [name: string]: RSSDataProps } = {
    "PWAS": {
        title: "פודקאסט ללא נושא",
        description: "בפודקאסט זה, כל פרק על נושא אחר ומעניין",
        feed_url: "https://podcasts.shakedkod.tech/podcast/PWAS/feed",
        site_url: "https://podcasts.shakedkod.tech/podcast/PWAS",
        language: "he",
        image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/PWAS/logo.png",
        copyright: "©ShakedKod 2022",
        categories: [
            "History",
            "Education"
        ],
        editor: "ShakedKod",
        web_master: "ShakedKod",
        author: {
            name: "ShakedKod",
            email: "shakedkod@gmail.com",
            link: "https://shakedkod.tech"
        },
        explicit: "clean",
        type: "episodic",
        episodes: [
            // Episode 8
            {
                title: "על שודדים ויהודים",
                description: 'בפרק זה אנחנו נתחקה אחר הפיראטים היהודיים וסיפוריהם המרתקים, בנוסף נדבר על ספרד, מרוקו וכמה אנשים מרתקים.\nהאזנה נעימה,\n	שקד!\n\n_____\n<h2>-=קרדיטים=-</h2>\nכתיבה & קריינות & עריכה - <a href="https://shakedkod.tech" target="_blank">שקד קוד</a>\nעריכה לשונית - דורון ורוית קודמן\nעזרה בעריכה ותמיכה מורלית - דורון חיימפור\nעזרה נוספת - <a href="https://www.instagram.com/falconboop/" target="_blank">פאלקון</a>\n<br/>\n<a href="https://linktr.ee/Radio.benzvi" target="_blank">רדיו בן צבי - https://linktr.ee/Radio.benzvi</a>\n\n_____________________________\n<h2>-=מוזיקה=-</h2><br/>\n<h3>Licensees:</h3>\nthe licensees that are used for obtaining the tracks below(see the num of * besides each track):\n	* Licensed under Creative Commons BY Attribution 4.0 License - https://creativecommons.org/licenses/by/4.0/\n	** Royalty free for non-commercial use as a background music\n	*** The Arcadium\n<br/>\n<h3>Artists:</h3>\n* Alexander Nakarda:\n	- <a href="https://www.serpentsoundstudios.com" >Website - https://www.serpentsoundstudios.com</a>\n	- <a href="https://www.youtube.com/@anakarada" >Youtube - https://www.youtube.com/@anakarada</a>\n	- <a href="https://open.spotify.com/artist/43YoiP9iEsuqomUh9IdxXa" >Spotify - https://open.spotify.com/artist/43YoiP9iEsuqomUh9IdxXa</a>\n	- <a href="https://alexandernakarada.bandcamp.com" >BandCamp - https://alexandernakarada.bandcamp.com</a>\n	- <a href="https://twitter.com/thenakarada" >Twitter - https://twitter.com/thenakarada</a>\n* Denny Schneidemesser:\n	- <a href="http://www.dennyschneidemesser.com" >Website - http://www.dennyschneidemesser.com</a>\n	- <a href="https://www.youtube.com/@DennySchneidemesser" >Youtube - https://www.youtube.com/@DennySchneidemesser</a>\n	- <a href="https://open.spotify.com/artist/0CBDTLHnL2GQ93c8kdYY0s" >Spotify - https://open.spotify.com/artist/0CBDTLHnL2GQ93c8kdYY0s</a>\n	- <a href="https://twitter.com/Filmcomposer87" >Twitter - https://twitter.com/Filmcomposer87</a>\n* Fox Sailor:\n	- <a href="https://www.youtube.com/@FoxSailor" >Youtube - https://www.youtube.com/@FoxSailor</a>\n	- <a href="https://open.spotify.com/artist/6kolefro6D38Kv6Wa7dgRX" >Spotify - https://open.spotify.com/artist/6kolefro6D38Kv6Wa7dgRX</a>\n	- <a href="https://foxsailor.bandcamp.com" >BandCamp - https://foxsailor.bandcamp.com/</a>\n	- <a href="https://twitter.com/Fox_Sailor" >Twitter - https://twitter.com/Fox_Sailor</a>\n* Vindsvept:\n	- <a href="https://vindsvept.se" >Website - https://vindsvept.se</a>\n	- <a href="https://www.youtube.com/@Vindsvept" >Youtube - https://www.youtube.com/@Vindsvept</a>\n	- <a href="https://open.spotify.com/artist/2FVQ3P7dSKttngc7FaE83J" >Spotify - https://open.spotify.com/artist/2FVQ3P7dSKttngc7FaE83J</a>\n	- <a href="https://vindsvept.bandcamp.com" >BandCamp - https://vindsvept.bandcamp.com</a>\n* Luis Humanoide:\n	- <a href="https://www.youtube.com/@LuisHumanoide" >Youtube - https://www.youtube.com/@LuisHumanoide</a>\n	- <a href="https://open.spotify.com/artist/5a62vInNhpp2DYAbvzytdF" >Spotify - https://open.spotify.com/artist/5a62vInNhpp2DYAbvzytdF</a>\n	- <a href="https://music.apple.com/es/artist/luis-humanoide/1494771580" >Apple Music - https://music.apple.com/es/artist/luis-humanoide/1494771580</a>\n	- <a href="https://luishumanoide.bandcamp.com" >BandCamp - https://luishumanoide.bandcamp.com</a>\n	- <a href="https://twitter.com/LuisHumanoide" >Twitter - https://twitter.com/LuisHumanoide</a>\n* TheFatRat:\n	- <a href="https://www.youtube.com/@TheFatRat" >Youtube - https://www.youtube.com/@TheFatRat</a>\n	- <a href="https://open.spotify.com/artist/3OKg7YbOIatODzkRIbLJR4" >Spotify - https://open.spotify.com/artist/3OKg7YbOIatODzkRIbLJR4</a>\n	- <a href="https://music.apple.com/us/artist/thefatrat/395664545" >Apple Music - https://music.apple.com/us/artist/thefatrat/395664545</a>\n	- <a href="https://twitter.com/ThisIsTheFatRat" >Twitter - https://twitter.com/ThisIsTheFatRat</a>\n\n<h3>Tracks:</h3>\n    Alexander Nakarada - Percussive Intro *\n    Alexander Nakarada - Wanderer *\n    Denny Schneidemesser - Entering the Stronghold **\n    Fox Sailor - Treasure Hunt **\n    Denny Schneidemesser - Tiny Nomad **\n    Vindsvept - Naglfar, Ship of the Dead *\n    Luis Humanoide - The March of the Crazy Aliens **\n    TheFatRat & Cecilia Gault - Our Song (Instrumental) ***\n    Alexander Nakarada - Spacebuckler *\n    Vindsvept - Flying High *\n    Alexander Nakarada - Land of Pirates *\n    Vindsvept - The Long Awaited Return *\n    Luis Humanoide - Legends of the Highway **\n    Denney Schneidemesser - Thunderdome **\n    Alexander Nakarada - Bonfire *\n    Alexander Nakarada - Emotional Intro *\n    Alexander Nakarada - Nightmare *\n    Fox Sailor - Heart of Adventure **\n    Alexander Nakarada - The Great Battle *\n    Alexander Nakarada - The World\'s Most Epic Sea Shanty *\n_____________________________\n\n<h2>-=חלקי הפרק=-</h2>\n00:00 - פתיחה\n01:01 - גירוש ספרד\n02:42 - ברברוסה\n03:55 - סינאן היהודי\n06:48 - הליגה והאסטרטגיה\n08:00 - סמואל פאלאצ\'י\n09:10 - בחזרה לספרד\n10:59 - קשרים פה, קשרים שם\n13:28 - האינקוויזיציה והעולם החדש\n15:32 - משה כהן הנריקס\n16:22 - המלחמה בין ספרד להולנד\n17:39 - ברזיל ההולנדית\n18:46 - הסוף\n\n_____________________________\n\n©ShakedKod 2023',
                google_description: 'בפרק זה אנחנו נתחקה אחר הפיראטים היהודיים וסיפוריהם המרתקים, בנוסף נדבר על ספרד, מרוקו וכמה אנשים מרתקים.&#13;האזנה נעימה,&#13;    שקד!&#13;&#13;_____________________________________________________________&#13;## -=קרדיטים=-&#13;כתיבה, קריינות, עריכה - <a href="https://shakedkod.tech" target="_blank">שקד קוד</a>&#13;עריכה לשונית - דורון ורוית קודמן&#13;עזרה בעריכה ותמיכה מורלית - דורון חיימפור&#13;עזרה נוספת - <a href="https://www.instagram.com/falconboop/" target="_blank">פאלקון</a>&#13;&#13;<a href="https://linktr.ee/Radio.benzvi" target="_blank">רדיו בן צבי - https://linktr.ee/Radio.benzvi</a>&#13;&#13;_____________________________________________________________&#13;-=מוזיקה=-&#13;Licensees:&#13;the licensees that are used for obtaining the tracks below(see the num of * besides each track):&#13;    * Licensed under Creative Commons BY Attribution 4.0 License - https://creativecommons.org/licenses/by/4.0/ &#13;    ** Royalty free for non-commercial use as a background music&#13;    *** The Arcadium&#13;&#13;Artists:&#13;* Alexander Nakarda:&#13;    - <a href="https://www.serpentsoundstudios.com" >Website - https://www.serpentsoundstudios.com</a>&#13;    - <a href="https://www.youtube.com/@anakarada" >Youtube - https://www.youtube.com/@anakarada</a>&#13;    - <a href="https://open.spotify.com/artist/43YoiP9iEsuqomUh9IdxXa" >Spotify - https://open.spotify.com/artist/43YoiP9iEsuqomUh9IdxXa</a>&#13;    - <a href="https://alexandernakarada.bandcamp.com" >BandCamp - https://alexandernakarada.bandcamp.com</a>&#13;    - <a href="https://twitter.com/thenakarada" >Twitter - https://twitter.com/thenakarada</a>&#13;* Denny Schneidemesser:&#13;    - <a href="http://www.dennyschneidemesser.com" >Website - http://www.dennyschneidemesser.com</a>&#13;    - <a href="https://www.youtube.com/@DennySchneidemesser" >Youtube - https://www.youtube.com/@DennySchneidemesser</a>&#13;    - <a href="https://open.spotify.com/artist/0CBDTLHnL2GQ93c8kdYY0s" >Spotify - https://open.spotify.com/artist/0CBDTLHnL2GQ93c8kdYY0s</a>&#13;    - <a href="https://twitter.com/Filmcomposer87" >Twitter - https://twitter.com/Filmcomposer87</a>&#13;* Fox Sailor:&#13;    - <a href="https://www.youtube.com/@FoxSailor" >Youtube - https://www.youtube.com/@FoxSailor</a>&#13;    - <a href="https://open.spotify.com/artist/6kolefro6D38Kv6Wa7dgRX" >Spotify - https://open.spotify.com/artist/6kolefro6D38Kv6Wa7dgRX</a>&#13;    - <a href="https://foxsailor.bandcamp.com" >BandCamp - https://foxsailor.bandcamp.com/</a>&#13;    - <a href="https://twitter.com/Fox_Sailor" >Twitter - https://twitter.com/Fox_Sailor</a>&#13;* Vindsvept:&#13;    - <a href="https://vindsvept.se" >Website - https://vindsvept.se</a>&#13;    - <a href="https://www.youtube.com/@Vindsvept" >Youtube - https://www.youtube.com/@Vindsvept</a>&#13;    - <a href="https://open.spotify.com/artist/2FVQ3P7dSKttngc7FaE83J" >Spotify - https://open.spotify.com/artist/2FVQ3P7dSKttngc7FaE83J</a>&#13;    - <a href="https://vindsvept.bandcamp.com" >BandCamp - https://vindsvept.bandcamp.com</a>&#13;* Luis Humanoide:&#13;    - <a href="https://www.youtube.com/@LuisHumanoide" >Youtube - https://www.youtube.com/@LuisHumanoide</a>&#13;    - <a href="https://open.spotify.com/artist/5a62vInNhpp2DYAbvzytdF" >Spotify - https://open.spotify.com/artist/5a62vInNhpp2DYAbvzytdF</a>&#13;    - <a href="https://music.apple.com/es/artist/luis-humanoide/1494771580" >Apple Music - https://music.apple.com/es/artist/luis-humanoide/1494771580</a>&#13;    - <a href="https://luishumanoide.bandcamp.com" >BandCamp - https://luishumanoide.bandcamp.com</a>&#13;    - <a href="https://twitter.com/LuisHumanoide" >Twitter - https://twitter.com/LuisHumanoide</a>&#13;* TheFatRat:&#13;    - <a href="https://www.youtube.com/@TheFatRat" >Youtube - https://www.youtube.com/@TheFatRat</a>&#13;    - <a href="https://open.spotify.com/artist/3OKg7YbOIatODzkRIbLJR4" >Spotify - https://open.spotify.com/artist/3OKg7YbOIatODzkRIbLJR4</a>&#13;    - <a href="https://music.apple.com/us/artist/thefatrat/395664545" >Apple Music - https://music.apple.com/us/artist/thefatrat/395664545</a>&#13;    - <a href="https://twitter.com/ThisIsTheFatRat" >Twitter - https://twitter.com/ThisIsTheFatRat</a>&#13;&#13;Tracks:&#13;    Alexander Nakarada - Percussive Intro *&#13;    Alexander Nakarada - Wanderer *&#13;    Denny Schneidemesser - Entering the Stronghold **&#13;    Fox Sailor - Treasure Hunt **&#13;    Denny Schneidemesser - Tiny Nomad **&#13;    Vindsvept - Naglfar, Ship of the Dead *&#13;    Luis Humanoide - The March of the Crazy Aliens **&#13;    TheFatRat and Cecilia Gault - Our Song (Instrumental) ***&#13;    Alexander Nakarada - Spacebuckler *&#13;    Vindsvept - Flying High *&#13;    Alexander Nakarada - Land of Pirates *&#13;    Vindsvept - The Long Awaited Return *&#13;    Luis Humanoide - Legends of the Highway **&#13;    Denney Schneidemesser - Thunderdome **&#13;    Alexander Nakarada - Bonfire *&#13;    Alexander Nakarada - Emotional Intro *&#13;    Alexander Nakarada - Nightmare *&#13;    Fox Sailor - Heart of Adventure **&#13;    Alexander Nakarada - The Great Battle *&#13;    Alexander Nakarada - The World\'s Most Epic Sea Shanty *&#13;&#13;_____________________________________________________________&#13;&#13;-=חלקי הפרק=-&#13;00:00 - פתיחה&#13;01:01 - גירוש ספרד&#13;02:42 - ברברוסה&#13;03:55 - סינאן היהודי&#13;06:48 - הליגה והאסטרטגיה&#13;08:00 - סמואל פאלאצ\'י&#13;09:10 - בחזרה לספרד&#13;10:59 - קשרים פה, קשרים שם&#13;13:28 - האינקוויזיציה והעולם החדש&#13;15:32 - משה כהן הנריקס&#13;16:22 - המלחמה בין ספרד להולנד&#13;17:39 - ברזיל ההולנדית&#13;18:46 - הסוף&#13;&#13;_____________________________________________________________&#13;&#13;©ShakedKod 2023&#13;',
                url: "https://podcasts.shakedkod.tech/podcast/PWAS/Ep8",
                categories: [
                    "History",
                    "Education"
                ],
                author: "ShakedKod",
                date: "Tue, 20 Jun 2023 00:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/PWAS/audio/Ep8.mp3",
                    size: 1153000,
                    type: "audio/mp3",
                },
                subtitle: "בפרק זה אנחנו נתחקה אחר הפיראטים היהודיים וסיפוריהם המרתקים, בנוסף נדבר על ספרד, מרוקו וכמה אנשים מרתקים.&#13; האזנה נעימה,&#13; שקד!&#13;",
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/PWAS/images/Ep8.png",
                duration: "1153",
                explicit: "clean",
                episodeType: "full",
                season: 2
            },
            // Episode 7
            {
                title: "על פצצות ועוד כמה דברים, עם עודד נגבי",
                description: "ראיון של קבוצת המשצים עם עודד נגבי, חבלן בחטיבה 5.\n<br />\n_____________________________________________\n<br />\n<br />\nכל הזכויות שמורות לרדיו בן צבי ולשקד - 2022",
                google_description: "ראיון של קבוצת המשצים עם עודד נגבי, חבלן בחטיבה 5&#13;_____________________________________________&#13;&#13;כל הזכויות שמורות לרדיו בן צבי - 2022",
                url: "https://podcasts.shakedkod.tech/podcast/PWAS/Ep7",
                categories: [
                    "History",
                    "Education"
                ],
                author: "ShakedKod",
                date: "Thu, 1 Sep 2022 10:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/PWAS/audio/Ep7.mp3",
                    size: 1153000,
                    type: "audio/mp3",
                },
                subtitle: "ראיון של קבוצת המשצים עם עודד נגבי, חבלן בחטיבה 5&#13;_____________________________________________&#13;&#13;כל הזכויות שמורות לרדיו בן צבי - 2022",
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/PWAS/images/Ep7.png",
                duration: "1153",
                explicit: "clean",
                episodeType: "bonus",
                season: 1
            },
            // Episode 6
            {
                title: "לונדון שהיא לא לונדון",
                description: 'בפרק זה אני דיברתי על העיר שבתוך העיר שבמדינה שבתוך מדינה,\n<br />\nיותר לא אגלה,\n<br />\nהאזנה נעימה,\n<br />\nשקד\n<br />\n_____________________________________________\n<br />\nתודה רבה לכל מי שעזר לי עם כל הפרקים של העונה הזאת\n<br />\nהפרק הבא היה הפרק הראשון של העונה השניה והוא יגיע בערך שבוע לאחר החופש הגדול\n<br />\nועד אז,\n<br />\nתודה רבה לכולכם שהאזנתם!\n<br />\n_____________________________________________\n<br /><br />\n-=קרדיטים=-\n<br />\nנוצר על ידי שקד\n<br />\nפורסם על ידי רדיו בן צבי\n<br />\nהלוגו נוצר בבלנדר(על ידי שקד) - <a href="https://blender.org" rel="noopener">https://blender.org</a>\n<br /><br />\n-=מוזיקה=-\nLuis Humanoide - Waltz of the Souls\nSilentCrafter & OddKid - Hope\nLuis Humanoide - Evil Energy Vortex\nAlexander Nakarada - The Vikings\nVindsvept - Wayfarer\'s Journey\nApproaching Nirvana - Keystone\nבנוסף קיימת גם מוזיקה בפרק שאילטרתי בחמש שניות\n<br /><br />\n_____________________________________________\n<br /><br />\nכל הזכויות שמורות לרדיו בן צבי ולשקד - 2022',
                google_description: 'בפרק זה אני דיברתי על העיר שבתוך העיר שבמדינה שבתוך מדינה,&#13;יותר לא אגלה,&#13;האזנה נעימה,&#13;שקד&#13;_____________________________________________&#13;תודה רבה לכל מי שעזר לי עם כל הפרקים של העונה הזאת&#13;הפרק הבא היה הפרק הראשון של העונה השניה והוא יגיע בערך שבוע לאחר החופש הגדול&#13;ועד אז,&#13;תודה רבה לכולכם שהאזנתם!&#13;_____________________________________________&#13;&#13;-=קרדיטים=-&#13;נוצר על ידי שקד&#13;פורסם על ידי רדיו בן צבי&#13;הלוגו נוצר בבלנדר(על ידי שקד) - https://blender.org&#13;&#13;-=מוזיקה=-&#13;פס הקול של הפרק נוצר על ידי שקד, ויגיע בקרוב לכל הפלטפורמות&#13;פס הקול - [יעלה בקרוב]&#13;בנוסף לפס הקול, הנה הקרדיטים ליוצרי מוזיקות שונות שגם בהן השתמשתי בפרק זה:&#13;Luis Humanoide - Waltz of the Souls &#13;SilentCrafter &amp; OddKid - Hope&#13;Luis Humanoide - Evil Energy Vortex&#13;Alexander Nakarada - The Vikings&#13;Vindsvept - Wayfarer\'s Journey&#13;Approaching Nirvana - Keystone&#13;&#13;_____________________________________________&#13;&#13;כל הזכויות שמורות לרדיו בן צבי ולשקד - 2022',
                url: "https://podcasts.shakedkod.tech/podcast/PWAS/Ep6",
                categories: [
                    "History",
                    "Education"
                ],
                author: "ShakedKod",
                date: "Mon, 20 Jun 2022 10:00:03 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/PWAS/audio/Ep6.mp3",
                    size: 13578498,
                    type: "audio/mp3",
                },
                subtitle: "בפרק זה אני דיברתי על העיר שבתוך העיר שבמדינה שבתוך מדינה,&#13;יותר לא אגלה,&#13;האזנה נעימה,&#13;",
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/PWAS/images/Ep6.png",
                duration: "849",
                explicit: "clean",
                episodeType: "full",
                season: 1
            },
            // Episode 5
            {
                title: "בין הפרחים לידיים",
                url: "https://podcasts.shakedkod.tech/podcast/PWAS/Ep5",
                description: 'בפרק זה תוכלו לשמוע על הקמפיין ששינה את המדינה לחלוטין<br />קמפיין פרחי הבר!<br />וזה יותר מעניין משאתם חושבים,<br />האזנה נעימה,<br />שקד<br /><br />הערה - הקול ב-1:56 הוא לא של ס. יזהר<br /><br /><br />-=תודות=-<br />תודה לכל מי שעזר לי עם הפרק הזה, שכולל את סבי וסבתי<br /><br />רדיו בן צבי - <a href="https://sites.google.com/view/radiobenzvi/podcasts/PWAS" rel="noopener">https://sites.google.com/view/radiobenzvi/podcast/PWAS</a><br /><br />בלנדר - <a href="https://blender.org" rel="noopener">https://blender.org</a><br /><br />-=מוזיקה=-<br />Luis Humanoide - A Ride in an Automobile(brass)<br />Luis Humanoide - A Ship in the Clouds<br />Luis Humanoide - The Bridge of Eldevior<br />Luis Humanoide - Clocker Neighborhood <br />Alexander Nakarada - Magic Tavern<br />ג\'ין בורדו - ואלס לגנת הצומח(מתוך צו השעה)',
                google_description: 'בפרק זה תוכלו לשמוע על הקמפיין ששינה את המדינה לחלוטין&#13;קמפיין פרחי הבר!&#13;וזה יותר מעניין משאתם חושבים,&#13;האזנה נעימה,&#13;שקד&#13;&#13;הערה - הקול ב-1:56 הוא לא של ס. יזהר&#13;&#13;&#13;-=תודות=-&#13;תודה לכל מי שעזר לי עם הפרק הזה, שכולל את סבי וסבתי&#13;&#13;רדיו בן צבי - https://sites.google.com/view/radiobenzvi/podcasts/PWAS&#13;&#13;בלנדר - https://blender.org&#13;&#13;-=מוזיקה=-&#13;Luis Humanoide - A Ride in an Automobile(brass)&#13;Luis Humanoide - A Ship in the Clouds&#13;Luis Humanoide - The Bridge of Eldevior&#13;Luis Humanoide - Clocker Neighborhood &#13;Alexander Nakarada - Magic Tavern&#13;ג\'ין בורדו - ואלס לגנת הצומח(מתוך צו השעה)',
                categories: [
                    "History",
                    "Education"
                ],
                author: "ShakedKod",
                date: "Wed, 11 May 2022 15:00:02 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/PWAS/audio/Ep5.mp3",
                    size: 6777350,
                    type: "audio/mp3",
                },
                subtitle: "בפרק זה תוכלו לשמוע על הקמפיין ששינה את המדינה לחלוטין&#13;קמפיין פרחי הבר!&#13;וזה יותר מעניין משאתם חושבים,&#13;האזנה נעימה,&#13;",
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/PWAS/images/Ep5.png",
                duration: "424",
                explicit: "clean",
                episodeType: "full",
                season: 1
            },
            // Episode 4
            {
                title: "מצות ועוד מצות - חלק ב",
                url: "https://podcasts.shakedkod.tech/podcast/PWAS/Ep4",
                description: 'בחלק השני של מצות ועוד מצות התמקדתי בעלילות והדם והסיפור שלהם עם המצות<br /><br />הפרק הזה קצת יותר קריפי מבדרך כלל<br />אך מהנה לא פחות<br />האזנה נעימה,<br />שקד<br /><br />נ"ב: מצטער על איכות ההקלטה בשני הפרקים האחרונים, לא יכולתי להגיע לאולפן בפסח כדי להקליט<br /><br />-============-<br />רדיו בן צבי - <a href="https://sites.google.com/view/radiobenzvi" rel="noopener">https://sites.google.com/view/radiobenzvi</a><br /><br />לוגו נוצר בעזרת בלנדר - <a href="https://blender.org/" rel="noopener">https://blender.org/</a><br /><br />-=מוזיקה=-<br />Alexander Nakarda - Passing Greeting<br />Kevin MacLeod - Awkward Meeting<br />Kevin MacLeod - Bent And Broken<br />Dream Cave - The Great Ascent<br />Alexander Nakarda - Twin Explorers<br />Kevin MacLeod - Classic Horror 1<br />Kevin MacLeod - Controlled Chaos(No Percussion)<br />Kevin MacLeod - Echoes Of Time<br />Alexander Nakarda - Wanderer<br />פודקאסט ללא נושא - מצות ועוד מצות, חלק א\'<br />Vindsvept - Clarity<br />Vindsvept - Wanderer<br />Vindsvept - Quest\'s End<br />Approaching Nirvana - Keystone<br /><br />-============-<br />נוצר על ידי שקד<br />כל הזכויות שמורות לרדיו בן צבי',
                google_description: 'בחלק השני של מצות ועוד מצות התמקדתי בעלילות והדם והסיפור שלהם עם המצות&#13;&#13;הפרק הזה קצת יותר קריפי מבדרך כלל&#13;אך מהנה לא פחות&#13;האזנה נעימה,&#13;שקד&#13;&#13;נ"ב: מצטער על איכות ההקלטה בשני הפרקים האחרונים, לא יכולתי להגיע לאולפן בפסח כדי להקליט&#13;&#13;-============-&#13;רדיו בן צבי - https://sites.google.com/view/radiobenzvi&#13;&#13;לוגו נוצר בעזרת בלנדר - https://blender.org/&#13;&#13;-=מוזיקה=-&#13;Alexander Nakarda - Passing Greeting&#13;Kevin MacLeod - Awkward Meeting&#13;Kevin MacLeod - Bent And Broken&#13;Dream Cave - The Great Ascent&#13;Alexander Nakarda - Twin Explorers&#13;Kevin MacLeod - Classic Horror 1&#13;Kevin MacLeod - Controlled Chaos(No Percussion)&#13;Kevin MacLeod - Echoes Of Time&#13;Alexander Nakarda - Wanderer&#13;פודקאסט ללא נושא - מצות ועוד מצות, חלק א\'&#13;Vindsvept - Clarity&#13;Vindsvept - Wanderer&#13;Vindsvept - Quest\'s End&#13;Approaching Nirvana - Keystone&#13;&#13;-============-&#13;נוצר על ידי שקד&#13;כל הזכויות שמורות לרדיו בן צבי',
                categories: [
                    "History",
                    "Education"
                ],
                author: "ShakedKod",
                date: "Thu, 21 Apr 2022 13:00:03 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/PWAS/audio/Ep4.mp3",
                    size: 12912936,
                    type: "audio/mp3",
                },
                subtitle: "בחלק השני של מצות ועוד מצות התמקדתי בעלילות והדם והסיפור שלהם עם המצות&#13;הפרק הזה קצת יותר קריפי מבדרך כלל&#13;אך מהנה לא פחות&#13;האזנה נעימה,&#13;",
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/PWAS/images/Ep4.png",
                duration: "807",
                explicit: "clean",
                episodeType: "full",
                season: 1
            },
            // Episode 3
            {
                title: "מצות ועוד מצות - חלק א",
                url: "https://podcasts.shakedkod.tech/podcast/PWAS/Ep3",
                description: 'בפרק זה של פודקאסט ללא נושא, ספיישל פסח ואיתו הסיפור על המצות<br />מהתקופה התנכית ועד היום<br />זהו חלק אחד מתוך שניים, והשני יפורסם בערב חג שני<br />האזנה נעימה,<br />שקד<br /><br />-=מוזיקה=-<br />Fox Sailor - Fabula<br />Vindsvept - Lake of Light<br />Luis Humanoide - A Ride in an Automobile(strings)<br />Luis Humanoide - Clocker Neighborhood<br />Vindsvept - Filmbulwinter, Winter Following Winter<br />Luis Humanoide - The Bridge of Eldevior<br />די דיינו',
                google_description: 'בפרק זה של פודקאסט ללא נושא, ספיישל פסח ואיתו הסיפור על המצות&#13;מהתקופה התנכית ועד היום&#13;זהו חלק אחד מתוך שניים, והשני יפורסם בערב חג שני&#13;האזנה נעימה,&#13;שקד&#13;&#13;-=מוזיקה=-&#13;Fox Sailor - Fabula&#13;Vindsvept - Lake of Light&#13;Luis Humanoide - A Ride in an Automobile(strings)&#13;Luis Humanoide - Clocker Neighborhood&#13;Vindsvept - Filmbulwinter, Winter Following Winter&#13;Luis Humanoide - The Bridge of Eldevior&#13;די דיינו',
                categories: [
                    "History",
                    "Education"
                ],
                author: "ShakedKod",
                date: "Fri, 15 Apr 2022 13:26:42 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/PWAS/audio/Ep3.mp3",
                    size: 7025145,
                    type: "audio/mp3",
                },
                subtitle: "בפרק זה של פודקאסט ללא נושא, ספיישל פסח ואיתו הסיפור על המצות&#13;מהתקופה התנכית ועד היום&#13;זהו חלק אחד מתוך שניים, והשני יפורסם בערב חג שני&#13;האזנה נעימה,&#13;",
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/PWAS/images/Ep3.png",
                duration: "439",
                explicit: "clean",
                episodeType: "full",
                season: 1
            },
            // Episode 2
            {
                title: "אוטובוסים ועוד",
                description: 'בפרק קצר זה של פודקאסט ללא נושא, אני אדבר על ההיסטוריה, והעתיד של האוטובוסים ועוד כמה דברים,<br />האזנה נעימה,<br />שקד<br /><br /><br />נ"ב: מצטער שלקח כל כך הרבה זמן לפרק הזה להגיע, אין לי זמן <br />  <br /><br />------------------------------------------------------<br /><br />רדיו בן צבי - <a href="https://sites.google.com/view/radiobenzvi" rel="noopener">https://sites.google.com/view/radiobenzvi</a><br /><br />הלוגו נוצר בבלנדר - <a href="https://blender.org/" rel="noopener">https://blender.org/</a><br /><br />------------------------------------------------------<br />  <br />רשות למוזיקה<br />----<br />CC BY 4.0: <a href="https://creativecommons.org/licenses/by/4.0/" rel="noopener">https://creativecommons.org/licenses/by/4.0/</a> <br />The Diverse Free<br /><br />המוזיקה<br />-----  <br />Luis Humanoide - A Ride in an Automobile == <a href="https://youtu.be/xejIrCkkAks" rel="noopener">https://youtu.be/xejIrCkkAks</a> <br />Scott Joplin - The Entertainer(1902) == <a href="https://youtu.be/fPmruHc4S9Q" rel="noopener">https://youtu.be/fPmruHc4S9Q</a><br />Vindsvept - The Fall == <a href="https://youtu.be/7qTjny1qoXs" rel="noopener">https://youtu.be/7qTjny1qoXs</a><br />BrothaD - No Where == <a href="https://prosearch.tribeofnoise.com/artists/show/44327/23835" rel="noopener">https://prosearch.tribeofnoise.com/artists/show/44327/23835</a><br />Vindsvept - Across the Plains == <a href="https://youtu.be/ZDokgvuuS7E" rel="noopener">https://youtu.be/ZDokgvuuS7E</a><br />SilentCrafter - Dream == <a href="https://youtu.be/hnYDJ7wWWB4" rel="noopener">https://youtu.be/hnYDJ7wWWB4</a><br />  <br />-----------------------------------------<br />  <br />נוצר על ידי שקד<br />כל הזכויות שמורות לרדיו בן צבי',
                google_description: 'בפרק קצר זה של פודקאסט ללא נושא, אני אדבר על ההיסטוריה, והעתיד של האוטובוסים ועוד כמה דברים,&#13;האזנה נעימה,&#13;שקד&#13;&#13;&#13;נ"ב: מצטער שלקח כל כך הרבה זמן לפרק הזה להגיע, אין לי זמן &#13;  &#13;&#13;------------------------------------------------------&#13;&#13;רדיו בן צבי - https://sites.google.com/view/radiobenzvi&#13;&#13;הלוגו נוצר בבלנדר - https://blender.org/&#13;&#13;------------------------------------------------------&#13;  &#13;רשות למוזיקה&#13;----&#13;CC BY 4.0: https://creativecommons.org/licenses/by/4.0/ &#13;The Diverse Free&#13;&#13;המוזיקה&#13;-----  &#13;Luis Humanoide - A Ride in an Automobile == https://youtu.be/xejIrCkkAks &#13;Scott Joplin - The Entertainer(1902) == https://youtu.be/fPmruHc4S9Q&#13;Vindsvept - The Fall == https://youtu.be/7qTjny1qoXs&#13;BrothaD - No Where == https://prosearch.tribeofnoise.com/artists/show/44327/23835&#13;Vindsvept - Across the Plains == https://youtu.be/ZDokgvuuS7E&#13;SilentCrafter - Dream == https://youtu.be/hnYDJ7wWWB4&#13;  &#13;-----------------------------------------&#13;  &#13;נוצר על ידי שקד&#13;כל הזכויות שמורות לרדיו בן צבי',
                url: "https://podcasts.shakedkod.tech/podcast/PWAS/Ep2",
                categories: [
                    "History",
                    "Education"
                ],
                author: "ShakedKod",
                date: "Tue, 11 Jan 2022 15:45:17 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/PWAS/audio/Ep2.mp3",
                    size: 5765053,
                    type: "audio/mp3",
                },
                subtitle: "בפרק קצר זה של פודקאסט ללא נושא, אני אדבר על ההיסטוריה, והעתיד של האוטובוסים ועוד כמה דברים,&#13;האזנה נעימה,&#13;",
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/PWAS/images/Ep2.png",
                duration: "361",
                explicit: "clean",
                episodeType: "full",
                season: 1
            },
            // Episode 1
            {
                title: "הבעיה עם אור",
                description: 'בפרק זה של פודקאסט ללא נושא אני אדבר על זיהום אור, ולמה כל כך הרבה אור זה רע לנו<br />ועל לווייתנאים גם כן.<br />האזנה נעימה,<br />שקד<br />_____________________________________________________________________<br /><br />רדיו בן צבי - <a href="https://sites.google.com/view/radiobenzvi" rel="noopener">https://sites.google.com/view/radiobenzvi</a><br /><br /> ---={תודות וכתוביות}=---<br />הלוגו נוצר בבלנדר<br /><br />---={מוזיקה}=---                           <br />Vindsvept - Fimbulwinter, winter following winter<br />Vindsvept - Across the Plains<br />Vindsvept - Quest\'s End<br />Vindsvept - RAGNARÖK, Naglfar, ship of the dead<br />Vindsvept - Moonless Night<br />Vindsvept - Crystal Forest<br />Vindsvept - Hearthfire<br />Vindsvept - Woodland Lullaby<br />Vindsvept - The Fall<br />Vindsvept - Sleeper<br />Vindsvept - Clockwork<br />Vindsvept - Journey to the Middle of Nowhere<br />Phaera(The Arcadium) - Rejoice<br />RomanSenykMusic - Wonderland<br />SilentCrafter - Dream',
                google_description: 'בפרק זה של פודקאסט ללא נושא אני אדבר על זיהום אור, ולמה כל כך הרבה אור זה רע לנו&#13;ועל לווייתנאים גם כן.&#13;האזנה נעימה,&#13;שקד&#13;_____________________________________________________________________&#13;&#13;רדיו בן צבי - https://sites.google.com/view/radiobenzvi&#13;&#13; ---={תודות וכתוביות}=---&#13;הלוגו נוצר בבלנדר&#13;&#13;---={מוזיקה}=---                           &#13;Vindsvept - Fimbulwinter, winter following winter&#13;Vindsvept - Across the Plains&#13;Vindsvept - Quest\'s End&#13;Vindsvept - RAGNARÖK, Naglfar, ship of the dead&#13;Vindsvept - Moonless Night&#13;Vindsvept - Crystal Forest&#13;Vindsvept - Hearthfire&#13;Vindsvept - Woodland Lullaby&#13;Vindsvept - The Fall&#13;Vindsvept - Sleeper&#13;Vindsvept - Clockwork&#13;Vindsvept - Journey to the Middle of Nowhere&#13;Phaera(The Arcadium) - Rejoice&#13;RomanSenykMusic - Wonderland&#13;SilentCrafter - Dream',
                url: "https://podcasts.shakedkod.tech/podcast/PWAS/Ep1",
                categories: [
                    "History",
                    "Education"
                ],
                author: "ShakedKod",
                date: "Sun, 10 Oct 2021 11:45:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/PWAS/audio/Ep1.mp3",
                    size: 15984922,
                    type: "audio/mp3",
                },
                subtitle: "בפרק זה של פודקאסט ללא נושא אני אדבר על זיהום אור, ולמה כל כך הרבה אור זה רע לנו&#13;ועל לווייתנאים גם כן.&#13;האזנה נעימה,&#13;",
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/PWAS/images/Ep1.png",
                duration: "1000",
                explicit: "clean",
                episodeType: "full",
                season: 1
            }
        ]
    },
    "ATWAS": {
        title: "שיחה ללא נושא",
        description: "על החיים וכל השאר עם כל מיני אנשים משונים, מעניינים, ומוזרים בהנחיית שקד קוד.",
        feed_url: "https://podcasts.shakedkod.tech/podcasts/ATWAS/feed",
        site_url: "https://podcasts.shakedkod.tech/podcasts/ATWAS",
        language: "he",
        image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ATWAS/logo.png",
        copyright: "©Shakedkod 2023",
        categories: [
            "Society & Culture",
            "Comedy"
        ],
        editor: "ShakedKod",
        web_master: "ShakedKod",
        author: {
            name: "ShakedKod",
            email: "shakedkod@gmail.com",
            link: "https://shakedkod.tech"
        },
        explicit: "clean",
        type: "episodic",
        episodes: [
            // Episode 9
            {
                title: "דיון חסר תֶּמָה",
                description: 'הפרק התשיעי של שיחה ללא נושא עם שקד, גילי, ליעד, עומר, רוני, ושחר.\nסצנות מעניינות בשילוב עם סיפורים נחמדים, בפרק זה של שיחה ללא נושא האזינו לדיון באווירת סלון כזואלית.\n                האזנה נעימה!\n<br>\nהציעו נושאים לפרקים הבאים - <a href="https://form.jotform.com/shakedkod/Subjects">לחצו פה</a>\nקישור אלטרנטיבי - <a href="https://form.jotform.com/shakedkod/Subjects">https://form.jotform.com/shakedkod/Subjects</a>\n<br>\n\n<strong>-=חלקי הפרק=-</strong>\n00:00 - פתיח עם גילי\n02:00 - ליטרלי כל שאר הפרק\n29:51 - הסוף\n<br>\n\n<strong>-=קישורים=-</strong>\n<a href="https://linktr.ee/Radio.BenZvi">הפודקאסט בכל האתרים</a>\nקישור אלטרנטיבי - <a href="https://linktr.ee/Radio.BenZvi">https://linktr.ee/Radio.BenZvi</a>\n<br>\n<strong>© ShakedKod 2023</strong>',
                google_description: 'הפרק התשיעי של שיחה ללא נושא עם שקד, גילי, ליעד, עומר, רוני, ושחר.&#13;סצנות מעניינות בשילוב עם סיפורים נחמדים, בפרק זה של שיחה ללא נושא האזינו לדיון באווירת סלון כזואלית.&#13;                האזנה נעימה!&#13;&#13;הציעו נושאים לפרקים הבאים - <a href="https://form.jotform.com/shakedkod/Subjects">לחצו פה</a>&#13;קישור אלטרנטיבי - <a href="https://form.jotform.com/shakedkod/Subjects">https://form.jotform.com/shakedkod/Subjects</a>&#13;&#13;<strong>-=חלקי הפרק=-</strong>&#13;00:00 - פתיח עם גילי&#13;02:00 - ליטרלי כל שאר הפרק&#13;29:51 - הסוף&#13;&#13;<strong>-=קישורים=-</strong>&#13;<a href="https://linktr.ee/Radio.BenZvi">הפודקאסט בכל האתרים</a>&#13;קישור אלטרנטיבי - <a href="https://linktr.ee/Radio.BenZvi">https://linktr.ee/Radio.BenZvi</a>&#13;&#13;© ShakedKod 2023&#13;',
                url: "https://podcasts.shakedkod.tech/ATWAS/Ep9",
                categories: [
                    "Society & Culture",
                    "Comedy"
                ],
                author: "ShakedKod",
                date: "Thu, 23 Feb 2023 20:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ATWAS/audio/2309.mp3",
                    size: 1867000,
                    type: "audio/mp3",
                },
                subtitle: 'הפרק התשיעי של שיחה ללא נושא עם שקד, גילי, ליעד, עומר, רוני, ושחר.\nסצנות מעניינות בשילוב עם סיפורים נחמדים, בפרק זה של שיחה ללא נושא האזינו לדיון באווירת סלון כזואלית.\n                האזנה נעימה!\n',
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ATWAS/logo.png",
                duration: "1867",
                explicit: "clean",
                episodeType: "full",
                season: 1
            },
            // Episode 8
            {
                title: "קצת מזה וקצת מזה",
                description: 'הפרק השמיני של שיחה ללא נושא עם שקד, חדיב, ועמרי.\nכמה חזק הוא אנדרו טייט? האם האתר של בית הספר יעקב כהן הוא חלק מהאילומינטי?\nשאלות אלו ועוד יענו בפרק זה של שיחה ללא נושא!\n                האזנה נעימה!\n<br>\nהציעו נושאים לפרקים הבאים - <a href="https://form.jotform.com/shakedkod/Subjects">לחצו פה</a>\nקישור אלטרנטיבי - <a href="https://form.jotform.com/shakedkod/Subjects">https://form.jotform.com/shakedkod/Subjects</a>\n<br>\n<strong>-=קישורים=-</strong>\n<a href="https://linktr.ee/Radio.BenZvi">הפודקאסט בכל האתרים</a>\nקישור אלטרנטיבי - <a href="https://linktr.ee/Radio.BenZvi">https://linktr.ee/Radio.BenZvi</a>\n<br>\n<strong>© ShakedKod 2023</strong>',
                google_description: 'הפרק השביעי של שיחה ללא נושא עם שקד, חדיב, ועמרי.&#13;כמה חזק הוא אנדרו טייט? האם האתר של בית הספר יעקב כהן הוא חלק מהאילומינטי?&#13;שאלות אלו ועוד יענו בפרק זה של שיחה ללא נושא!&#13;                האזנה נעימה!&#13;&#13;הציעו נושאים לפרקים הבאים - <a href="https://form.jotform.com/shakedkod/Subjects">לחצו פה</a>&#13;קישור אלטרנטיבי - <a href="https://form.jotform.com/shakedkod/Subjects">https://form.jotform.com/shakedkod/Subjects</a>&#13;&#13;<strong>-=קישורים=-</strong>&#13;<a href="https://linktr.ee/Radio.BenZvi">הפודקאסט בכל האתרים</a>&#13;קישור אלטרנטיבי - <a href="https://linktr.ee/Radio.BenZvi">https://linktr.ee/Radio.BenZvi</a>&#13;&#13;© ShakedKod 2023&#13;',
                url: "https://podcasts.shakedkod.tech/ATWAS/Ep8",
                categories: [
                    "Society & Culture",
                    "Comedy"
                ],
                author: "ShakedKod",
                date: "Thu, 17 Jan 2023 12:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ATWAS/audio/2308.m4a",
                    size: 2598000,
                    type: "audio/mpeg",
                },
                subtitle: 'הפרק השמיני של שיחה ללא נושא עם שקד, חדיב, ועמרי.\nכמה חזק הוא אנדרו טייט? האם האתר של בית הספר יעקב כהן הוא חלק מהאילומינטי?\nשאלות אלו ועוד יענו בפרק זה של שיחה ללא נושא!\n                האזנה נעימה!\n',
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ATWAS/logo.png",
                duration: "2598",
                explicit: "clean",
                episodeType: "full",
                season: 1
            },
            // Episode 7
            {
                title: "על הממשלה, גרעינים, ועוד",
                description: 'הפרק השביעי של שיחה ללא נושא עם שקד, יואב, ואלעד.\nבפרק זה הם מדברים על הממשלה המיועדת, מלחמות גרעיניות, ועוד נושאים מוזרים ומשונים\n                האזנה נעימה!\n<br>\nענו על הטופס - <a href="https://form.jotform.com/shakedkod/ATWAS-7">לחצו פה</a>\nקישור אלטרנטיבי - <a href="https://form.jotform.com/shakedkod/ATWAS-7">https://form.jotform.com/shakedkod/ATWAS-7</a>\n<br>\nהציעו נושאים לפרקים הבאים - <a href="https://form.jotform.com/shakedkod/Subjects">לחצו פה</a>\nקישור אלטרנטיבי - <a href="https://form.jotform.com/shakedkod/Subjects">https://form.jotform.com/shakedkod/Subjects</a>\n<strong>-=קישורים=-</strong>\n<a href="https://linktr.ee/Radio.BenZvi">הפודקאסט בכל האתרים</a>\nקישור אלטרנטיבי - <a href="https://linktr.ee/Radio.BenZvi">https://linktr.ee/Radio.BenZvi</a>\n<br>\n<strong>-=מוזיקה=-</strong>\n* יותם רגב(<a href="https://www.instagram.com/yotam_regev_/">@yotam_regev_</a>)\n<br>\n<strong>© ShakedKod 2022</strong>',
                google_description: 'הפרק השביעי של שיחה ללא נושא עם שקד, יואב, ואלעד.&#13;בפרק זה הם מדברים על הממשלה המיועדת, מלחמות גרעיניות, ועוד נושאים מוזרים ומשונים&#13;                האזנה נעימה!&#13;&#13;ענו על הטופס - <a href="https://form.jotform.com/shakedkod/ATWAS-7">לחצו פה</a>&#13;קישור אלטרנטיבי - <a href="https://form.jotform.com/shakedkod/ATWAS-7">https://form.jotform.com/shakedkod/ATWAS-7</a>&#13;&#13;הציעו נושאים לפרקים הבאים - <a href="https://form.jotform.com/shakedkod/Subjects">לחצו פה</a>&#13;קישור אלטרנטיבי - <a href="https://form.jotform.com/shakedkod/Subjects">https://form.jotform.com/shakedkod/Subjects</a>&#13;<strong>-=קישורים=-</strong>&#13;<a href="https://linktr.ee/Radio.BenZvi">הפודקאסט בכל האתרים</a>&#13;קישור אלטרנטיבי - <a href="https://linktr.ee/Radio.BenZvi">https://linktr.ee/Radio.BenZvi</a>&#13;&#13;<strong>-=מוזיקה=-</strong>&#13;* יותם רגב(<a href="https://www.instagram.com/yotam_regev_/">@yotam_regev_</a>)&#13;&#13;© ShakedKod 2022&#13;',
                url: "https://podcasts.shakedkod.tech/ATWAS/Ep7",
                categories: [
                    "Society & Culture",
                    "Comedy"
                ],
                author: "ShakedKod",
                date: "Sun, 18 Dec 2022 12:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ATWAS/audio/2207.mp3",
                    size: 3357000,
                    type: "audio/mp3",
                },
                subtitle: 'הפרק השביעי של שיחה ללא נושא עם שקד, יואב, ואלעד.\nבפרק זה הם מדברים על הממשלה המיועדת, מלחמות גרעיניות, ועוד נושאים מוזרים ומשונים\n                האזנה נעימה!\n',
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ATWAS/logo.png",
                duration: "3357",
                explicit: "clean",
                episodeType: "full",
                season: 1
            },
            // Episode 6
            {
                title: "גילי אמרה לי לקרוא לפרק הזה \"שיחת בנות\" - למרות שהוא לא",
                description: 'הפרק השישי של שיחה ללא נושא עם שקד, גילי, עומר, רוני, ליעד, שחר ואוריאן.\nבפרק זה הם מדברים על לימודים, סדרות משונות, ופרקים קודמים\n                האזנה נעימה!\n<br>\n<strong>-=קישורים=-</strong>\n<a href="https://linktr.ee/Radio.BenZvi">הפודקאסט בכל האתרים</a>\n<br>\n<strong>-=מוזיקה=-</strong>\n* יותם רגב(<a href="https://www.instagram.com/yotam_regev_/">@yotam_regev_</a>)\n<br>\n<strong>© ShakedKod 2022</strong>',
                google_description: 'הפרק השלישי של שיחה ללא נושא עם שקד, גילי, עומר, רוני, ליעד, שחר ואוריאן.&#13;בפרק זה הם מדברים על לימודים, סדרות משונות, ופרקים קודמים&#13;האזנה נעימה!&#13;&#13;<strong>-=קישורים=-</strong>&#13;<a href="https://linktr.ee/Radio.BenZvi">הפודקאסט בכל האתרים</a>&#13;<strong>-=מוזיקה=-</strong>&#13;* יותם רגב(<a href="https://www.instagram.com/yotam_regev_/">@yotam_regev_</a>)&#13;&#13;© ShakedKod 2022&#13;',
                url: "https://podcasts.shakedkod.tech/ATWAS/Ep6",
                categories: [
                    "Society & Culture",
                    "Comedy"
                ],
                author: "ShakedKod",
                date: "Tue, 29 Nov 2022 12:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ATWAS/audio/2206.mp3",
                    size: 3059000,
                    type: "audio/mp3",
                },
                subtitle: 'הפרק השישי של שיחה ללא נושא עם שקד, גילי, עומר, רוני, ליעד, שחר ואוריאן.\nבפרק זה הם מדברים על לימודים, סדרות משונות, ופרקים קודמים\n                האזנה נעימה!\n',
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ATWAS/logo.png",
                duration: "3059",
                explicit: "clean",
                episodeType: "full",
                season: 1
            },
            // Episode 5
            {
                title: "מה שלא היה נכנס - פרק בונוס",
                description: 'הפרק הזה הינו כל מה שלא נכנס לפרקים הרגילים עם הודעה מיוחדת לרוני שחר\n                האזנה נעימה!\n<br>\n<strong>-=קישורים=-</strong>\nאתר - https://RadioBenZvi.github.io/\nיוטיוב - https://www.youtube.com/channel/UCS-d-xH0hS5D4RPLKBBe5og\nהפודקאסט בספוטיפי - https://open.spotify.com/show/00AVovDZ91dF3ccD2Tmhs8?si=d78a5bc5e0434392\nהפודקאסט בגוגל - https://podcasts.google.com/feed/aHR0cHM6Ly9zaGFrZWRrb2QuZ2l0aHViLmlvL0FUV0FTX1BvZGNhc3QvZmVlZC5yc3M/\nהפודקאסט באפל מיוזיק - https://podcasts.apple.com/podcast/id1654325732?app=podcast&at=1000lHKX&ct=linktree_http\nitscg=30200&itsct=lt_p&ls=1&mt=2/\nכל הפרקים ביוטיוב - https://youtube.com/playlist?list=PLGUNdKopvOVJhSI29vR9_IA_iscAWBelT/\n<br>\n<strong>-=מוזיקה=-</strong>\n* Howard Harper-Barnes - We All Need Adventures(The Center)\n<br>\n<strong>© Radio Ben Zvi 2022</strong>',
                google_description: ' הזה הינו כל מה שלא נכנס לפרקים הרגילים עם הודעה מיוחדת לרוני שחר&#13;האזנה נעימה!&#13;&#13;-=קישורים=-&#13;אתר - https://RadioBenZvi.github.io/&#13;יוטיוב - https://www.youtube.com/channel/UCS-d-xH0hS5D4RPLKBBe5og&#13;הפודקאסט בספוטיפי - https://open.spotify.com/show/00AVovDZ91dF3ccD2Tmhs8?si=d78a5bc5e0434392/&#13;הפודקאסט בגוגל - https://podcasts.google.com/feed/aHR0cHM6Ly9zaGFrZWRrb2QuZ2l0aHViLmlvL0FUV0FTX1BvZGNhc3QvZmVlZC5yc3M/&#13;כל הפרקים ביוטיוב - https://youtube.com/playlist?list=PLGUNdKopvOVJhSI29vR9_IA_iscAWBelT/&#13;&#13;-=מוזיקה=-&#13;* Howard Harper-Barnes - We All Need Adventures(The Center)&#13;&#13;© Radio Ben Zvi 2022&#13;',
                url: "https://podcasts.shakedkod.tech/ATWAS/Ep5",
                categories: [
                    "Society & Culture",
                    "Comedy"
                ],
                author: "ShakedKod",
                date: "Tue, 15 Nov 2022 16:30:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ATWAS/audio/2205.mp3",
                    size: 1260000,
                    type: "audio/mp3",
                },
                subtitle: 'הפרק הזה הינו כל מה שלא נכנס לפרקים הרגילים עם הודעה מיוחדת לרוני שחר\n                האזנה נעימה!\n',
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ATWAS/logo.png",
                duration: "1260",
                explicit: "clean",
                episodeType: "bonus",
                season: 1
            },
            // Episode 4
            {
                title: "לאן הגענו?",
                description: 'הפרק הרביעי של שיחה ללא נושא עם שקד, רוני, ליעד, שירה, רוטמן, גלעד וגם כפי שידוע לי ישו משום מה.\nבפרק זה הם מדברים על פוליטיקה, נועה קירל, ומלא דברים רנדומליים אחרים\n                האזנה נעימה!\n<br>\n<strong>-=קישורים=-</strong>\nאתר - https://RadioBenZvi.github.io/\nיוטיוב - \nהפודקאסט בספוטיפי - https://open.spotify.com/show/00AVovDZ91dF3ccD2Tmhs8?si=d78a5bc5e0434392\nהפודקאסט באפל מיוזיק - \nכל הפרקים ביוטיוב - \n<br>\n<strong>-=מוזיקה=-</strong>\n* TheFatRat - Xenogenesis\n<br>\n<strong>© Radio Ben Zvi 2022</strong>',
                google_description: 'הפרק השלישי של שיחה ללא נושא עם שקד,רוני, ליעד, שירה, רוטמן, גלעד וגם כפי שידוע לי ישו משום מה.&#13;בפרק זה הם מדברים על פוליטיקה, נועה קירל, ומלא דברים רנדומליים אחרים&#13;האזנה נעימה!&#13;&#13;-=קישורים=-&#13;אתר - https://RadioBenZvi.github.io/&#13;יוטיוב - &#13;הפודקאסט בספוטיפי - https://open.spotify.com/show/00AVovDZ91dF3ccD2Tmhs8?si=d78a5bc5e0434392/&#13;הפודקאסט באפל מיוזיק - &#13;כל הפרקים ביוטיוב - &#13;&#13;-=מוזיקה=-&#13;* TheFatRat - Xenogenesis&#13;&#13;© Radio Ben Zvi 2022&#13;',
                url: "https://podcasts.shakedkod.tech/ATWAS/Ep4",
                categories: [
                    "Society & Culture",
                    "Comedy"
                ],
                author: "ShakedKod",
                date: "Tue, 27 Oct 2022 12:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ATWAS/audio/2204.mp3",
                    size: 2343000,
                    type: "audio/mp3",
                },
                subtitle: 'הפרק הרביעי של שיחה ללא נושא עם שקד, רוני, ליעד, שירה, רוטמן, גלעד וגם כפי שידוע לי ישו משום מה.\nבפרק זה הם מדברים על פוליטיקה, נועה קירל, ומלא דברים רנדומליים אחרים\n                האזנה נעימה!\n',
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ATWAS/logo.png",
                duration: "2343",
                explicit: "clean",
                episodeType: "full",
                season: 1
            },
            // Episode 3
            {
                title: "מעולמות שונים",
                description: 'הפרק השלישי של שיחה ללא נושא עם שקד, טל, אלון, יואב, ליעד ואוריאן.\nבפרק זה הם מדברים על שירים, דברים רנדומליים, לימודים, קולה ועוד\n                האזנה נעימה!\n<br>\n<strong>-=קישורים=-</strong>\nאתר - https://RadioBenZvi.github.io/\nיוטיוב - \nהפודקאסט בספוטיפי - https://open.spotify.com/show/00AVovDZ91dF3ccD2Tmhs8?si=d78a5bc5e0434392\nהפודקאסט באפל מיוזיק - \nכל הפרקים ביוטיוב - \n<br>\n<strong>-=מוזיקה=-</strong>\n* Howard Harper-Barnes - We All Need Adventures(The Center)\n<br>\n<strong>© Radio Ben Zvi 2022</strong>',
                google_description: 'הפרק השלישי של שיחה ללא נושא עם שקד, טל, אלון, יואב, ליעד, ואוריאן&#13;בפרק זה הם מדברים על שירים, דברים רנדומליים, לימודים, קולה ועוד&#13;האזנה נעימה!&#13;&#13;-=קישורים=-&#13;אתר - https://RadioBenZvi.github.io/&#13;יוטיוב - &#13;הפודקאסט בספוטיפי - https://open.spotify.com/show/00AVovDZ91dF3ccD2Tmhs8?si=d78a5bc5e0434392/&#13;הפודקאסט באפל מיוזיק - &#13;כל הפרקים ביוטיוב - &#13;&#13;-=מוזיקה=-&#13;* Howard Harper-Barnes - We All Need Adventures(The Center)&#13;&#13;© Radio Ben Zvi 2022&#13;',
                url: "https://podcasts.shakedkod.tech/ATWAS/Ep3",
                categories: [
                    "Society & Culture",
                    "Comedy"
                ],
                author: "ShakedKod",
                date: "Tue, 27 Sep 2022 12:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ATWAS/audio/2203.mp3",
                    size: 2750000,
                    type: "audio/mp3",
                },
                subtitle: 'הפרק השלישי של שיחה ללא נושא עם שקד, טל, אלון, יואב, ליעד ואוריאן.\nבפרק זה הם מדברים על שירים, דברים רנדומליים, לימודים, קולה ועוד\n                האזנה נעימה!\n',
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ATWAS/logo.png",
                duration: "2750",
                explicit: "clean",
                episodeType: "full",
                season: 1
            },
            // Episode 2
            {
                title: "גרמנית, ג'אווה ועוד שירים",
                description: 'הפרק השני של שיחה ללא נושא עם שקד, טל, אלון, ושירה.\nבפרק זה הם מדברים על שפות מוזרות, על שירים, טניס ועוד\nהאזנה נעימה!\n<br>\n<strong>-=קישורים=-</strong>\nאתר - https://RadioBenZvi.github.io/\nיוטיוב - \nהפודקאסט בספוטיפי - <a herf="https://open.spotify.com/show/00AVovDZ91dF3ccD2Tmhs8?si=d78a5bc5e0434392">https://open\nspotify.com/show/00AVovDZ91dF3ccD2Tmhs8?si=d78a5bc5e0434392<a/>\nהפודקאסט באפל מיוזיק - \nכל הפרקים ביוטיוב - \n<br>\n<strong>-=מוזיקה=-</strong>\n* Howard Harper-Barnes - We All Need Adventures(The Center)\n<br>\n<strong>© Radio Ben Zvi 2022</strong>',
                google_description: 'הפרק השני של שיחה ללא נושא עם שקד, טל, אלון, ושירה.&#13;בפרק זה הם מדברים על שפות מוזרות, על שירים, טניס, ועוד&#13;האזנה נעימה!&#13;&#13;-=קישורים=-&#13;אתר - https://RadioBenZvi.github.io/&#13;יוטיוב - &#13;הפודקאסט בספוטיפי - https://open.spotify.com/show/00AVovDZ91dF3ccD2Tmhs8?si=d78a5bc5e0434392/&#13;הפודקאסט באפל מיוזיק - &#13;כל הפרקים ביוטיוב - &#13;&#13;-=מוזיקה=-&#13;* Howard Harper-Barnes - We All Need Adventures(The Center)&#13;&#13;© Radio Ben Zvi 2022&#13;',
                url: "https://podcasts.shakedkod.tech/ATWAS/Ep2",
                categories: [
                    "Society & Culture",
                    "Comedy"
                ],
                author: "ShakedKod",
                date: "Tue, 20 Sep 2022 12:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ATWAS/audio/2202.mp3",
                    size: 99038918,
                    type: "audio/mp3",
                },
                subtitle: 'הפרק השני של שיחה ללא נושא עם שקד, טל, אלון, ושירה.\nבפרק זה הם מדברים על שפות מוזרות, על שירים, טניס ועוד\nהאזנה נעימה!\n',
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ATWAS/logo.png",
                duration: "3742",
                explicit: "clean",
                episodeType: "full",
                season: 1
            },
            // Episode 1
            {
                title: "על מבחנים, החיים ושירים",
                description: 'הפרק הראשון של שיחה ללא נושא עם שקד, טל, ויואב.\nבפרק זה הם מדברים על המבחנים הבאים, על שירים, פרסומות ועוד\nהאזנה נעימה!\n\n<strong>-=קישורים=-</strong>\nאתר - https://RadioBenZvi.github.io/\n<a herf="">יוטיוב</a>\n<a herf="">הפודקאסט בספוטיפי</a>\n<a herf="">הפודקאסט באפל מיוזיק</a>\n<a herf="">כל הפרקים ביוטיוב</a>\n\n<strong>-=מוזיקה=-</strong>\n* <a herf="">Luis Humanoide - Clockwork Lands: Chronicles Aboard an Airship</a>\n    \n<strong>© Radio Ben Zvi 2022</strong>',
                google_description: 'הפרק הראשון של שיחה ללא נושא עם שקד, טל, ויואב.\nבפרק זה הם מדברים על המבחנים הבאים, על שירים, פרסומות ועוד\nהאזנה נעימה!\n\n<strong>-=קישורים=-</strong>\nאתר - https://RadioBenZvi.github.io/\n<a herf="">יוטיוב</a>\n<a herf="">הפודקאסט בספוטיפי</a>\n<a herf="">הפודקאסט באפל מיוזיק</a>\n<a herf="">כל הפרקים ביוטיוב</a>\n\n<strong>-=מוזיקה=-</strong>\n* <a herf="">Luis Humanoide - Clockwork Lands: Chronicles Aboard an Airship</a>\n    \n<strong>© Radio Ben Zvi 2022</strong>',
                url: "https://podcasts.shakedkod.tech/ATWAS/Ep1",
                categories: [
                    "Society & Culture",
                    "Comedy"
                ],
                author: "ShakedKod",
                date: "Tue, 13 Sep 2022 12:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ATWAS/audio/2201.mp3",
                    size: 99038918,
                    type: "audio/mp3",
                },
                subtitle: 'הפרק הראשון של שיחה ללא נושא עם שקד, טל, ויואב.\nבפרק זה הם מדברים על המבחנים הבאים, על שירים, פרסומות ועוד\nהאזנה נעימה!\n',
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ATWAS/logo.png",
                duration: "4127",
                explicit: "clean",
                episodeType: "full",
                season: 1
            },
        ]
    },
    "ST": {
        title: "התלמידים מדברים",
        description: "בחטיבת בן צבי, בשיעורי תקשורת, התלמידים מכינים פודקאסטים בכל שנה, הפודקאסטים של הקבוצות הנבחרות עולות לפה",
        feed_url: "https://podcasts.shakedkod.tech/ST/feed",
        site_url: "https://podcasts.shakedkod.tech/ST",
        language: "he",
        image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ST/logo.png",
        copyright: "©Radio Ben Zvi 2022",
        categories: [
            "Society & Culture",
            "Education"
        ],
        editor: "Or Choen",
        web_master: "ShakedKod",
        author: {
            name: "Radio Ben Zvi",
            email: "shakedkod@gmail.com",
            link: "https://RadioBenZvi.github.io"
        },
        explicit: "clean",
        type: "episodic",
        episodes: [
            //! 2023 !//

            // Episode 21
            {
                title: "האמת בפנים",
                description: 'בתי הספר בארץ כיום בוחנים את התלמידים באמצעות בחינות.  אך האם דרך זו עדכנית ורלוונטית? כינסנו את הפאנל שלנו כדי לענות על השאלה החשובה הזאת',
                google_description: 'בתי הספר בארץ כיום בוחנים את התלמידים באמצעות בחינות.  אך האם דרך זו עדכנית ורלוונטית? כינסנו את הפאנל שלנו כדי לענות על השאלה החשובה הזאת',
                url: "https://podcasts.shakedkod.tech/ST/Ep21",
                categories: [
                    "Society & Culture",
                    "Education"
                ],
                author: "גאי",
                date: "Sat, 17 Jun 2023 20:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ST/audio/2023/TestsInSchool.mp3",
                    size: 721000,
                    type: "audio/mp3",
                },
                subtitle: 'בתי הספר בארץ כיום בוחנים את התלמידים באמצעות בחינות.  אך האם דרך זו עדכנית ורלוונטית? כינסנו את הפאנל שלנו כדי לענות על השאלה החשובה הזאת',
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ST/images/2023/TestsInSchool.png",
                duration: "721",
                explicit: "clean",
                episodeType: "full",
                season: 2
            },
            // Episode 20
            {
                title: "דיקטטורה או חלטורה",
                description: 'מתעניינים בפוליטיקה? רוצים לדעת יותר על מה שקורה במדינה? היכנסו לפודקאסט!!\nהסכת זה עוסק בדילמה הציבורית הבולטת ביותר בזמן האחרון, הרפורמה/מהפכה/הפיכה המשפטית. \nמסגרת הסכת נארח פאנל תלמידים בעד ונגד הרפורמה.',
                google_description: 'מתעניינים בפוליטיקה? רוצים לדעת יותר על מה שקורה במדינה? היכנסו לפודקאסט!!\nהסכת זה עוסק בדילמה הציבורית הבולטת ביותר בזמן האחרון, הרפורמה/מהפכה/הפיכה המשפטית. \nמסגרת הסכת נארח פאנל תלמידים בעד ונגד הרפורמה.',
                url: "https://podcasts.shakedkod.tech/ST/Ep20",
                categories: [
                    "Society & Culture",
                    "Education"
                ],
                author: "Or Choen",
                date: "Sat, 17 Jun 2023 20:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ST/audio/2023/Dictatorship.mp3",
                    size: 1392000,
                    type: "audio/mp3",
                },
                subtitle: 'מתעניינים בפוליטיקה? רוצים לדעת יותר על מה שקורה במדינה? היכנסו לפודקאסט!!\nהסכת זה עוסק בדילמה הציבורית הבולטת ביותר בזמן האחרון, הרפורמה/מהפכה/הפיכה המשפטית. \nמסגרת הסכת נארח פאנל תלמידים בעד ונגד הרפורמה.',
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ST/images/2023/Dictatorship.png",
                duration: "1392",
                explicit: "clean",
                episodeType: "full",
                season: 2
            },
            // Episode 19
            {
                title: "מגרש משלה",
                description: "רויות הספורט השונות, ומה ההבדלים בין נשים וגברים בתחום(מבחינה גופנית, מנטלית ומבחינת מודעות לספורט) שיתפנו דעות שונות ודומות הסכמות ואי הסכמות, וכמובן נשמח לדעת מה דעתכם.",
                google_description: "רויות הספורט השונות, ומה ההבדלים בין נשים וגברים בתחום(מבחינה גופנית, מנטלית ומבחינת מודעות לספורט) שיתפנו דעות שונות ודומות הסכמות ואי הסכמות, וכמובן נשמח לדעת מה דעתכם.",
                url: "https://podcasts.shakedkod.tech/ST/Ep19",
                categories: [
                    "Society & Culture",
                    "Education"
                ],
                author: "רוני | רימון | תליה | מאיה | ניר",
                date: "Sat, 17 Jun 2023 20:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ST/audio/2023/HerOwnCourt.mp3",
                    size: 795000,
                    type: "audio/mp3",
                },
                subtitle: "רויות הספורט השונות, ומה ההבדלים בין נשים וגברים בתחום(מבחינה גופנית, מנטלית ומבחינת מודעות לספורט) שיתפנו דעות שונות ודומות הסכמות ואי הסכמות, וכמובן נשמח לדעת מה דעתכם.",
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ST/images/2023/HerOwnCourt.png",
                duration: "795",
                explicit: "clean",
                episodeType: "full",
                season: 2
            },
            // Episode 18
            {
                title: "בוחן פתע",
                description: 'ההסכת שלנו מדבר על שיטת המבחנים, שהיא שיטת הערכה נפוצה בבתי הספר. נבדוק האם הם יעילים היום,  האם הם תורמים לתלמידים.ות, ונשמע על הערכות מידע חליפיות, שעשויות להחליף אותם.',
                google_description: 'ההסכת שלנו מדבר על שיטת המבחנים, שהיא שיטת הערכה נפוצה בבתי הספר. נבדוק האם הם יעילים היום,  האם הם תורמים לתלמידים.ות, ונשמע על הערכות מידע חליפיות, שעשויות להחליף אותם.',
                url: "https://podcasts.shakedkod.tech/ST/Ep18",
                categories: [
                    "Society & Culture",
                    "Education"
                ],
                author: "Or Choen",
                date: "Sat, 17 Jun 2023 20:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ST/audio/2023/Tests.mp3",
                    size: 1178000,
                    type: "audio/mp3",
                },
                subtitle: 'ההסכת שלנו מדבר על שיטת המבחנים, שהיא שיטת הערכה נפוצה בבתי הספר. נבדוק האם הם יעילים היום,  האם הם תורמים לתלמידים.ות, ונשמע על הערכות מידע חליפיות, שעשויות להחליף אותם.',
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ST/images/2023/Tests.png",
                duration: "1178",
                explicit: "clean",
                episodeType: "full",
                season: 2
            },
            // Episode 17
            {
                title: "רפואה דחופה",
                description: 'רפואה בטיפול נמרץ בבית חולים הינה מקצוע מאתגר ומורכב, המביא איתו חוויות מפחידות ומלהיבות כאחד. הרופאים בתחום עובדים במסגרת קשה באופן קשה לתיאור, ועשויים להתמודד עם מקרים מורכבים וקשים מאוד. הצטרפו אלינו היום לשיחה עם רופא במחלקת טיפול נמרץ לב על עבודתו וחייו המורכבים.',
                google_description: 'רפואה בטיפול נמרץ בבית חולים הינה מקצוע מאתגר ומורכב, המביא איתו חוויות מפחידות ומלהיבות כאחד. הרופאים בתחום עובדים במסגרת קשה באופן קשה לתיאור, ועשויים להתמודד עם מקרים מורכבים וקשים מאוד. הצטרפו אלינו היום לשיחה עם רופא במחלקת טיפול נמרץ לב על עבודתו וחייו המורכבים.',
                url: "https://podcasts.shakedkod.tech/ST/Ep17",
                categories: [
                    "Society & Culture",
                    "Education"
                ],
                author: "Or Choen",
                date: "Sat, 17 Jun 2023 20:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ST/audio/2023/Medic.mp3",
                    size: 691000,
                    type: "audio/mp3",
                },
                subtitle: 'רפואה בטיפול נמרץ בבית חולים הינה מקצוע מאתגר ומורכב, המביא איתו חוויות מפחידות ומלהיבות כאחד. הרופאים בתחום עובדים במסגרת קשה באופן קשה לתיאור, ועשויים להתמודד עם מקרים מורכבים וקשים מאוד. הצטרפו אלינו היום לשיחה עם רופא במחלקת טיפול נמרץ לב על עבודתו וחייו המורכבים.',
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ST/images/2023/Medic.png",
                duration: "691",
                explicit: "clean",
                episodeType: "full",
                season: 2
            },
            // Episode 16
            {
                title: "התחממות גלובלית וזיהום סביבתי",
                description: '-זיהום וגזי חממה וההשפעה שלהם\n-תחליפים לייצור אנרגיה מנפט ופחם\n-תעשיית הבשר משפיעה יותר משחושבים\n-אנרגיה ירוקה ומכוניות חשמליות\n\nאנחנו רוצים להעלות מודעות לנושא מפני שכולם יודעים עליו אבל בסופו של דבר לא חושבים עליו מספיק ובסוף שוכחים לרוב אז אנחנו באנו להזכיר שהמצב עוד קיים והוא לא הכי משתפר ועל הדרך לדבר ולהסביר לאלה ששכחו או לא יודעים מה הגורמים מה מתכננים לעשות במידה בינלאומית ומה לעשות בעצמם כדי לעזור.',
                google_description: '-זיהום וגזי חממה וההשפעה שלהם\n-תחליפים לייצור אנרגיה מנפט ופחם\n-תעשיית הבשר משפיעה יותר משחושבים\n-אנרגיה ירוקה ומכוניות חשמליות\n\nאנחנו רוצים להעלות מודעות לנושא מפני שכולם יודעים עליו אבל בסופו של דבר לא חושבים עליו מספיק ובסוף שוכחים לרוב אז אנחנו באנו להזכיר שהמצב עוד קיים והוא לא הכי משתפר ועל הדרך לדבר ולהסביר לאלה ששכחו או לא יודעים מה הגורמים מה מתכננים לעשות במידה בינלאומית ומה לעשות בעצמם כדי לעזור.',
                url: "https://podcasts.shakedkod.tech/ST/Ep16",
                categories: [
                    "Society & Culture",
                    "Education"
                ],
                author: "דור | יובל | מאור | גיל | אילי",
                date: "Sat, 17 Jun 2023 20:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ST/audio/2023/GlobalWarming.mp3",
                    size: 770000,
                    type: "audio/mp3",
                },
                subtitle: '-זיהום וגזי חממה וההשפעה שלהם\n-תחליפים לייצור אנרגיה מנפט ופחם\n-תעשיית הבשר משפיעה יותר משחושבים\n-אנרגיה ירוקה ומכוניות חשמליות\n\nאנחנו רוצים להעלות מודעות לנושא מפני שכולם יודעים עליו אבל בסופו של דבר לא חושבים עליו מספיק ובסוף שוכחים לרוב אז אנחנו באנו להזכיר שהמצב עוד קיים והוא לא הכי משתפר ועל הדרך לדבר ולהסביר לאלה ששכחו או לא יודעים מה הגורמים מה מתכננים לעשות במידה בינלאומית ומה לעשות בעצמם כדי לעזור.',
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ST/images/2023/GlobalWarming.png",
                duration: "770",
                explicit: "clean",
                episodeType: "full",
                season: 2
            },
            // Episode 15
            {
                title: "מלחמת אוקריינה-רוסיה מהצד של ישראל",
                description: "בראיון  ראיינו את יואב בסטריצקי שהיה סגן שגריר ישראל באוקראינה והוא סיפר לנו כיצד ישראל עזרה ותרמה לאוקראינה. הוא התחיל ופירט על איך בכלל התחילה המלחמה ומה קרה עם הישראלים שהיו שם. לאחר מכן הוסיף על בית החולים שדה \"כוכב מאיר\" שהקימו באוקראינה, והתרומה הרבה לאוקראינים.",
                google_description: "בראיון  ראיינו את יואב בסטריצקי שהיה סגן שגריר ישראל באוקראינה והוא סיפר לנו כיצד ישראל עזרה ותרמה לאוקראינה. הוא התחיל ופירט על איך בכלל התחילה המלחמה ומה קרה עם הישראלים שהיו שם. לאחר מכן הוסיף על בית החולים שדה \"כוכב מאיר\" שהקימו באוקראינה, והתרומה הרבה לאוקראינים.",
                url: "https://podcasts.shakedkod.tech/ST/Ep15",
                categories: [
                    "Society & Culture",
                    "Education"
                ],
                author: "אורי זלצמן | אביב שלב | נועה וופנר | דוד | מיקה",
                date: "Sat, 17 Jun 2023 20:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ST/audio/2023/TheUqrainWar.mp3",
                    size: 703000,
                    type: "audio/mp3",
                },
                subtitle: "בראיון  ראיינו את יואב בסטריצקי שהיה סגן שגריר ישראל באוקראינה והוא סיפר לנו כיצד ישראל עזרה ותרמה לאוקראינה. הוא התחיל ופירט על איך בכלל התחילה המלחמה ומה קרה עם הישראלים שהיו שם. לאחר מכן הוסיף על בית החולים שדה \"כוכב מאיר\" שהקימו באוקראינה, והתרומה הרבה לאוקראינים.",
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ST/images/2023/TheUqrainWar.png",
                duration: "703",
                explicit: "clean",
                episodeType: "full",
                season: 2
            },
            // Episode 14
            {
                title: "מסע בזמן | אלפרד נובל",
                description: 'אלפרד נובל היה כימאי צעיר כשגילה על הניטרוגליצרין. הוא התנסה עם החומר ולמד איך לשלוט בו תוך שאיבד דברים חשובים לו כמו משפחה אך למרות הכל המשיך עד שהצליח לשלוט בפיצוץ הניטרוגליצרין. הוא קרא להמצאה שלו "דינמיט". הדינמיט גרמה להרס ואבדנות רבים בעולם ולכן אלפרד החליט להקים עם הירושה שלו קרן שאנחנו מכירים בתור "פרס נובל" אשר תעניק מדי שנה פרסים לאנשים פורצי דרך שעזרו לעולם בשלל תחומים כגון שלום. \nבפודקאסט גם נדבר על תקרית טובה ותקרית רעה שקרו בעקבות המצאת הדינמיט ומה ההשלכות שלהן על העולם. האזנה נעימה!',
                google_description: 'אלפרד נובל היה כימאי צעיר כשגילה על הניטרוגליצרין. הוא התנסה עם החומר ולמד איך לשלוט בו תוך שאיבד דברים חשובים לו כמו משפחה אך למרות הכל המשיך עד שהצליח לשלוט בפיצוץ הניטרוגליצרין. הוא קרא להמצאה שלו "דינמיט". הדינמיט גרמה להרס ואבדנות רבים בעולם ולכן אלפרד החליט להקים עם הירושה שלו קרן שאנחנו מכירים בתור "פרס נובל" אשר תעניק מדי שנה פרסים לאנשים פורצי דרך שעזרו לעולם בשלל תחומים כגון שלום. \nבפודקאסט גם נדבר על תקרית טובה ותקרית רעה שקרו בעקבות המצאת הדינמיט ומה ההשלכות שלהן על העולם. האזנה נעימה!',
                url: "https://podcasts.shakedkod.tech/ST/Ep14",
                categories: [
                    "Society & Culture",
                    "Education"
                ],
                author: "דן",
                date: "Sat, 17 Jun 2023 20:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ST/audio/2023/Nobel.mp3",
                    size: 380000,
                    type: "audio/mp3",
                },
                subtitle: 'אלפרד נובל היה כימאי צעיר כשגילה על הניטרוגליצרין. הוא התנסה עם החומר ולמד איך לשלוט בו תוך שאיבד דברים חשובים לו כמו משפחה אך למרות הכל המשיך עד שהצליח לשלוט בפיצוץ הניטרוגליצרין. הוא קרא להמצאה שלו "דינמיט". הדינמיט גרמה להרס ואבדנות רבים בעולם ולכן אלפרד החליט להקים עם הירושה שלו קרן שאנחנו מכירים בתור "פרס נובל" אשר תעניק מדי שנה פרסים לאנשים פורצי דרך שעזרו לעולם בשלל תחומים כגון שלום. \nבפודקאסט גם נדבר על תקרית טובה ותקרית רעה שקרו בעקבות המצאת הדינמיט ומה ההשלכות שלהן על העולם. האזנה נעימה!',
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ST/images/2023/Nobel.png",
                duration: "380",
                explicit: "clean",
                episodeType: "full",
                season: 2
            },
            // Episode 13
            {
                title: "נושאים לחיים | שילוב",
                description: 'מה  קורה בבית עם ילדים בחינוך מיוחד? מה קורה עם ההורים שלהם? מה קרה בקורונה שכל המדינה הייתה בבית? איך הם משתלבים בבתי הספר? כל זה מנקודת המבט של מטפלת.',
                google_description: 'מה  קורה בבית עם ילדים בחינוך מיוחד? מה קורה עם ההורים שלהם? מה קרה בקורונה שכל המדינה הייתה בבית? איך הם משתלבים בבתי הספר? כל זה מנקודת המבט של מטפלת.',
                url: "https://podcasts.shakedkod.tech/ST/Ep13",
                categories: [
                    "Society & Culture",
                    "Education"
                ],
                author: "Or Choen",
                date: "Sat, 17 Jun 2023 20:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ST/audio/2023/Intercetions.mp3",
                    size: 1400000,
                    type: "audio/mp3",
                },
                subtitle: 'מה  קורה בבית עם ילדים בחינוך מיוחד? מה קורה עם ההורים שלהם? מה קרה בקורונה שכל המדינה הייתה בבית? איך הם משתלבים בבתי הספר? כל זה מנקודת המבט של מטפלת.',
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ST/images/2023/Intercetions.png",
                duration: "1400",
                explicit: "clean",
                episodeType: "full",
                season: 2
            },
            // Episode 12
            {
                title: "טרנדים ברשת",
                description: 'בפאנל זה נדון בשאלה הגדולה למה כל כך מתלהבים מטרנדים והאם זה דבר טוב ושווה. כל אחד מחברי הפאנל יביע את דעתו וכך נחליט האם טרנדים זה דבר טוב ובכלל האם שווה להוציא עליהם את הכסף שלנו. נדון בטרנדים הקשורים למאכלים ובטרנדים שהם בעצם מעין "אתגרים"',
                google_description: 'בפאנל זה נדון בשאלה הגדולה למה כל כך מתלהבים מטרנדים והאם זה דבר טוב ושווה. כל אחד מחברי הפאנל יביע את דעתו וכך נחליט האם טרנדים זה דבר טוב ובכלל האם שווה להוציא עליהם את הכסף שלנו. נדון בטרנדים הקשורים למאכלים ובטרנדים שהם בעצם מעין "אתגרים"',
                url: "https://podcasts.shakedkod.tech/ST/Ep12",
                categories: [
                    "Society & Culture",
                    "Education"
                ],
                author: "כפיר | יאיר",
                date: "Sat, 17 Jun 2023 20:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ST/audio/2023/Trends.mp3",
                    size: 420000,
                    type: "audio/mp3",
                },
                subtitle: 'בפאנל זה נדון בשאלה הגדולה למה כל כך מתלהבים מטרנדים והאם זה דבר טוב ושווה. כל אחד מחברי הפאנל יביע את דעתו וכך נחליט האם טרנדים זה דבר טוב ובכלל האם שווה להוציא עליהם את הכסף שלנו. נדון בטרנדים הקשורים למאכלים ובטרנדים שהם בעצם מעין "אתגרים"',
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ST/images/2023/Trends.png",
                duration: "420",
                explicit: "clean",
                episodeType: "full",
                season: 2
            },
            // Episode 11
            {
                title: "האנושות בחלל והתיישבות במאדים",
                description: 'אי פעם שאלתם את עצמכם מה האתגרים בהתיישבות על מאדים? או הציפיות המרכזיות של האנושות בחלל ? ובכן הגעתם למקום הנכון. בפודקאסט האנושות בחלל וההתיישבות במאדים" יש מגוון רחב של תשובות הנוגעות לנושאים הללו, איתנו יהיה ממדריך בכיר מהפלנטניה, אלעד לרנר בכור מרתק שנושם את החלל מידי יום. אם אתם אנשים שאוהבים את החלל ונושמים אותו אתם מוזמנים להאזין ולהתרשם.',
                google_description: 'אי פעם שאלתם את עצמכם מה האתגרים בהתיישבות על מאדים? או הציפיות המרכזיות של האנושות בחלל ? ובכן הגעתם למקום הנכון. בפודקאסט האנושות בחלל וההתיישבות במאדים" יש מגוון רחב של תשובות הנוגעות לנושאים הללו, איתנו יהיה ממדריך בכיר מהפלנטניה, אלעד לרנר בכור מרתק שנושם את החלל מידי יום. אם אתם אנשים שאוהבים את החלל ונושמים אותו אתם מוזמנים להאזין ולהתרשם.',
                url: "https://podcasts.shakedkod.tech/ST/Ep11",
                categories: [
                    "Society & Culture",
                    "Education"
                ],
                author: "Or Choen",
                date: "Sat, 17 Jun 2023 20:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ST/audio/2023/Mars.mp3",
                    size: 926000,
                    type: "audio/mp3",
                },
                subtitle: 'אי פעם שאלתם את עצמכם מה האתגרים בהתיישבות על מאדים? או הציפיות המרכזיות של האנושות בחלל ? ובכן הגעתם למקום הנכון. בפודקאסט האנושות בחלל וההתיישבות במאדים" יש מגוון רחב של תשובות הנוגעות לנושאים הללו, איתנו יהיה ממדריך בכיר מהפלנטניה, אלעד לרנר בכור מרתק שנושם את החלל מידי יום. אם אתם אנשים שאוהבים את החלל ונושמים אותו אתם מוזמנים להאזין ולהתרשם.',
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ST/images/2023/Mars.png",
                duration: "926",
                explicit: "clean",
                episodeType: "full",
                season: 2
            },
            // Episode 10
            {
                title: "הרפורמה המשפטית",
                description: 'ההסכת שלנו הוא בנושא המהפכה המשפטית במדינת ישראל. אנו נציג מהי בכלל הרפורמה המשפטית ונקיים דיון בנושא וננסה להציג את שני הצדדים. ( גילוי נאות- אנחנו כולנו נגד המהפכה המשפטית).',
                google_description: 'ההסכת שלנו הוא בנושא המהפכה המשפטית במדינת ישראל. אנו נציג מהי בכלל הרפורמה המשפטית ונקיים דיון בנושא וננסה להציג את שני הצדדים. ( גילוי נאות- אנחנו כולנו נגד המהפכה המשפטית).',
                url: "https://podcasts.shakedkod.tech/ST/Ep10",
                categories: [
                    "Society & Culture",
                    "Education"
                ],
                author: "Or Choen",
                date: "Sat, 17 Jun 2023 20:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ST/audio/2023/TheJustisSystem.mp3",
                    size: 399000,
                    type: "audio/mp3",
                },
                subtitle: 'ההסכת שלנו הוא בנושא המהפכה המשפטית במדינת ישראל. אנו נציג מהי בכלל הרפורמה המשפטית ונקיים דיון בנושא וננסה להציג את שני הצדדים. ( גילוי נאות- אנחנו כולנו נגד המהפכה המשפטית).',
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ST/images/2023/TheJustisSystem.png",
                duration: "399",
                explicit: "clean",
                episodeType: "full",
                season: 2
            },
            // Episode 9
            {
                title: "מצעד הגאווה",
                description: 'מצעד הגאווה מעורר הרבה מחלוקות ושאלות, והיום אנחנו ננסה לענות על רובן, היום נזמין לפודקאסט את גלעד שחמון, שיענה לנו על השאלות.',
                google_description: 'מצעד הגאווה מעורר הרבה מחלוקות ושאלות, והיום אנחנו ננסה לענות על רובן, היום נזמין לפודקאסט את גלעד שחמון, שיענה לנו על השאלות.',
                url: "https://podcasts.shakedkod.tech/ST/Ep9",
                categories: [
                    "Society & Culture",
                    "Education"
                ],
                author: "Or Choen",
                date: "Sat, 17 Jun 2023 20:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ST/audio/2023/LGBTQ.mp3",
                    size: 618000,
                    type: "audio/mp3",
                },
                subtitle: 'מצעד הגאווה מעורר הרבה מחלוקות ושאלות, והיום אנחנו ננסה לענות על רובן, היום נזמין לפודקאסט את גלעד שחמון, שיענה לנו על השאלות.',
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ST/images/2023/LGBTQ.png",
                duration: "618",
                explicit: "clean",
                episodeType: "full",
                season: 2
            },
            // Episode 8
            {
                title: "יציאה בשאלה | התהליך של שרה לסטר",
                description: 'הפודקאסט עוסק על בתהליך של שרה לסטר ביציאתה בשאלה.\nמסופר שם כיצד היא התמודדה עם התהליך, מה היו השאיפות שלה\nומדוע רצתה לצאת ולעזוב את החברה החרדית. סיפור מאוד מעניין, לא כדאי\nלאף אחד לפספס',
                google_description: 'הפודקאסט עוסק על בתהליך של שרה לסטר ביציאתה בשאלה.\nמסופר שם כיצד היא התמודדה עם התהליך, מה היו השאיפות שלה\nומדוע רצתה לצאת ולעזוב את החברה החרדית. סיפור מאוד מעניין, לא כדאי\nלאף אחד לפספס',
                url: "https://podcasts.shakedkod.tech/ST/Ep8",
                categories: [
                    "Society & Culture",
                    "Education"
                ],
                author: "Or Choen",
                date: "Sat, 17 Jun 2023 20:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ST/audio/2023/FromReligusToNot.mp3",
                    size: 780000,
                    type: "audio/mp3",
                },
                subtitle: 'הפודקאסט עוסק על בתהליך של שרה לסטר ביציאתה בשאלה.\nמסופר שם כיצד היא התמודדה עם התהליך, מה היו השאיפות שלה\nומדוע רצתה לצאת ולעזוב את החברה החרדית. סיפור מאוד מעניין, לא כדאי\nלאף אחד לפספס',
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ST/images/2023/FromReligusToNot.png",
                duration: "780",
                explicit: "clean",
                episodeType: "full",
                season: 2
            },

            //! 2022 !//
            // Episode 7
            {
                title: "שימוש באלכוהול וסמים בקרב בני נוער",
                description: "",
                google_description: "",
                url: "https://podcasts.shakedkod.tech/ST/Ep7",
                categories: [
                    "Society & Culture",
                    "Education"
                ],
                author: "Or Choen",
                date: "Sat, 17 Jun 2022 20:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ST/audio/2022/drugsWitrhTeens.mp3",
                    size: 7457623,
                    type: "audio/mp3",
                },
                subtitle: "",
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ST/logo.png",
                duration: "466",
                explicit: "clean",
                episodeType: "full",
                season: 1
            },
            // Episode 6
            {
                title: "רפורמת הבגרויות",
                description: "",
                google_description: "",
                url: "https://podcasts.shakedkod.tech/ST/Ep6",
                categories: [
                    "Society & Culture",
                    "Education"
                ],
                author: "Or Choen",
                date: "Sat, 17 Jun 2022 20:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ST/audio/2022/Bagrot.mp3",
                    size: 8104506,
                    type: "audio/mp3",
                },
                subtitle: "",
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ST/logo.png",
                duration: "507",
                explicit: "clean",
                episodeType: "full",
                season: 1
            },
            // Episode 5
            {
                title: "שיח על תקופת מבחנים",
                description: "",
                google_description: "",
                url: "https://podcasts.shakedkod.tech/ST/Ep5",
                categories: [
                    "Society & Culture",
                    "Education"
                ],
                author: "Or Choen",
                date: "Sat, 17 Jun 2022 20:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ST/audio/2022/Tests.mp3",
                    size: 10436902,
                    type: "audio/mp3",
                },
                subtitle: "",
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ST/logo.png",
                duration: "653",
                explicit: "clean",
                episodeType: "full",
                season: 1
            },
            // Episode 4
            {
                title: "צמחונות וטבעונות",
                description: "",
                google_description: "",
                url: "https://podcasts.shakedkod.tech/ST/Ep4",
                categories: [
                    "Society & Culture",
                    "Education"
                ],
                author: "Or Choen",
                date: "Sat, 17 Jun 2022 20:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ST/audio/2022/Vegetarian.mp3",
                    size: 16417160,
                    type: "audio/mp3",
                },
                subtitle: "",
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ST/logo.png",
                duration: "1026",
                explicit: "clean",
                episodeType: "full",
                season: 1
            },
            // Episode 3
            {
                title: "החזקת נשק בארהב",
                description: "",
                google_description: "",
                url: "https://podcasts.shakedkod.tech/ST/Ep3",
                categories: [
                    "Society & Culture",
                    "Education"
                ],
                author: "Or Choen",
                date: "Sat, 17 Jun 2022 20:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ST/audio/2022/GunInUS.mp3",
                    size: 7261120,
                    type: "audio/mp3",
                },
                subtitle: "",
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ST/logo.png",
                duration: "454",
                explicit: "clean",
                episodeType: "full",
                season: 1
            },
            // Episode 2
            {
                title: "הבעת דעה במרחב הציבורי",
                description: "",
                google_description: "",
                url: "https://podcasts.shakedkod.tech/ST/Ep2",
                categories: [
                    "Society & Culture",
                    "Education"
                ],
                author: "ShakedKod | Doron | Omri",
                date: "Sat, 17 Jun 2022 20:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ST/audio/2022/Opinions.mp3",
                    size: 5173222,
                    type: "audio/mp3",
                },
                subtitle: "",
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ST/logo.png",
                duration: "323",
                explicit: "clean",
                episodeType: "full",
                season: 1
            },
            // Episode 1
            {
                title: "מותגים",
                description: "",
                google_description: "",
                url: "https://podcasts.shakedkod.tech/ST/Ep1",
                categories: [
                    "Society & Culture",
                    "Education"
                ],
                author: "Or Choen",
                date: "Sat, 17 Jun 2022 20:00:00 +0000",
                audio: {
                    url: "https://github.com/Shakedkod/Podcasts.ShakedKod.tech/raw/main/public/podcast-assets/ST/audio/2022/Companies.mp3",
                    size: 11393545,
                    type: "audio/mp3",
                },
                subtitle: "",
                image: "https://raw.githubusercontent.com/Shakedkod/Podcasts.ShakedKod.tech/main/public/podcast-assets/ST/logo.png",
                duration: "712",
                explicit: "clean",
                episodeType: "full",
                season: 1
            }
        ]
    },
};