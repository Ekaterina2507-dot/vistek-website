// Расширенный список нецензурных слов на английском, польском и русском
const profanityList = {
    en: [
        "2g1c", "acrotomophilia", "anal", "anilingus", "anus", "apeshit",
        "arsehole", "ass", "asshole", "assmunch", "autoerotic", "babeland",
        "bangbros", "bareback", "barenaked", "bastard", "bastardo", "bastinado",
        "bbw", "bdsm", "beaner", "beaners", "bestiality", "bimbos", "birdlock",
        "bitch", "bitches", "blowjob", "blumpkin", "bollocks", "bondage",
        "boner", "boob", "boobs", "bukkake", "bulldyke", "bullshit", "bunghole",
        "busty", "butt", "buttcheeks", "butthole", "camgirl", "camslut",
        "camwhore", "carpetmuncher", "circlejerk", "clit", "clitoris",
        "clusterfuck", "cock", "cocks", "coprolagnia", "coprophilia", "cornhole",
        "coon", "coons", "creampie", "cum", "cumming", "cunnilingus", "cunt",
        "darkie", "daterape", "deepthroat", "dendrophilia", "dick", "dildo",
        "dingleberry", "dingleberries", "doggiestyle", "doggystyle", "dolcett",
        "domination", "dominatrix", "dommes", "dvda", "ecchi", "ejaculation",
        "erotic", "erotism", "escort", "eunuch", "faggot", "fecal", "felch",
        "fellatio", "feltch", "femdom", "figging", "fingerbang", "fingering",
        "fisting", "footjob", "frotting", "fuck", "fucked", "fuckin", "fucking",
        "fucktards", "fudgepacker", "futanari", "genitals", "goatcx", "goatse",
        "gokkun", "goodpoop", "goregasm", "grope", "g-spot", "guro", "handjob",
        "hardcore", "hentai", "homoerotic", "honkey", "hooker", "humping",
        "incest", "intercourse", "jailbait", "jigaboo", "jiggaboo", "jiggerboo",
        "jizz", "juggs", "kike", "kinbaku", "kinkster", "kinky", "knobbing",
        "lolita", "lovemaking", "masturbate", "milf", "motherfucker",
        "muffdiving", "nambla", "nawashi", "negro", "neonazi", "nigga",
        "nigger", "nimphomania", "nipple", "nipples", "nude", "nudity",
        "nympho", "nymphomania", "octopussy", "omorashi", "orgasm", "orgy",
        "paedophile", "paki", "panties", "panty", "pedobear", "pedophile",
        "pegging", "penis", "pissing", "pisspig", "playboy", "ponyplay",
        "poof", "poon", "poontang", "punany", "poopchute", "porn", "porno",
        "pornography", "pthc", "pubes", "pussy", "queaf", "queef", "quim",
        "raghead", "rape", "raping", "rapist", "rectum", "rimjob", "rimming",
        "sadism", "santorum", "scat", "schlong", "scissoring", "semen", "sex",
        "sexo", "sexy", "shemale", "shibari", "shit", "shitblimp", "shitty",
        "shota", "shrimping", "skeet", "slanteye", "slut", "s&m", "smut",
        "snatch", "snowballing", "sodomize", "sodomy", "spic", "splooge",
        "spooge", "spunk", "strapon", "strappado", "suck", "sucks", "swastika",
        "swinger", "threesome", "throating", "tit", "tits", "titties", "titty",
        "topless", "tosser", "towelhead", "tranny", "tribadism", "tubgirl",
        "tushy", "twat", "twink", "twinkie", "undressing", "upskirt",
        "urophilia", "vagina", "vibrator", "vorarephilia", "voyeur", "vulva",
        "wank", "wetback", "xx", "xxx", "yaoi", "yiffy", "zoophilia"
    ],

    pl: [
        // Прямые переводы и польские эквиваленты
        "analny", "anillingus", "odbyt", "dupek", "dupa", "kutas", "kutас",
        "bękart", "dziwka", "kurwa", "suka", "cipka", "chuj", "fiut",
        "jebać", "pierdolić", "pieprzyć", "ruchać", "ssać", "cycki", "cycek",
        "gówno", "łajno", "srać", "seks", "porno", "pornografia", "majtki",
        "orgazm", "orgia", "gwałt", "gwałcić", "pedofil", "penis", "pochwa",
        "wagina", "masturbacja", "masturbować", "cipsko", "kurew", "kurewski",
        "skurwysyn", "skurwiel", "pierdoła", "pierdziel", "zasraniec",
        "gówniarz", "ciota", "pedał", "pizda", "jebany", "wyjebany",
        "chujowy", "pierdolony", "zajebisty", "wkurwiony", "sikać",
        "szczać", "sraczka", "dup", "dupe", "dupcia", "tyłek", "zadek",
        "rzyć", "blowjob", "loda", "obciągać", "lizać", "penetracja",
        "erotyczny", "erotyka", "zboczeniec", "zboczony", "nagi", "nago",
        "nagość", "nimfomanka", "sutki", "sutek", "cipaty", "piździec",
        "jaja", "jajca", "czarnuch", "żyd", "żydek", "pedalski", "pedałek"
    ],

    ru: [
        // Прямые переводы и русские эквиваленты
        "анальный", "анилингус", "задница", "жопа", "сука", "ублюдок",
        "мудак", "урод", "дерьмо", "говно", "хуй", "хер", "член", "пенис",
        "вагина", "влагалище", "пизда", "пиздец", "блять", "блядь", "ебать",
        "трахать", "ебаный", "ебанутый", "ебля", "ебло", "сиськи", "сиська",
        "титьки", "грудь", "соски", "сосок", "минет", "отсос", "сосать",
        "лизать", "мастурбация", "дрочить", "кончать", "оргазм", "оргия",
        "изнасилование", "насильник", "педофил", "педик", "пидор", "гомик",
        "пидарас", "козел", "сволочь", "сучка", "шлюха", "проститутка",
        "бля", "бляди", "ебал", "наебал", "заебал", "доебал", "выебал",
        "проебал", "хуета", "хуйня", "пиздато", "охуенно", "заебись",
        "дрочка", "секс", "порно", "порнография", "эротика", "извращенец",
        "голый", "нагота", "нимфоманка", "ебарь", "ебака", "залупа",
        "манда", "мудила", "мудак", "мудило", "пидрила", "обосраться",
        "обсираться", "срать", "ссать", "моча", "кал", "какать", "срака",
        "жопошник", "жополиз", "мандавошка", "ебнутый", "долбоеб", "еблан",
        "уебок", "хуесос", "пизданутый", "ссыкло", "ссыкун", "гандон",
        "презерватив", "шаромыга", "жид", "черномазый", "хачик", "чурка",
        "азиат", "узкоглазый", "ниггер", "негр", "арап"
    ]
};

// Экспортируем для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = profanityList;
}