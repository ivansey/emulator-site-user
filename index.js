const Nightmare = require("nightmare");
const moment = require("moment");

let urlSite = "http://webstudio-natty.ru/";

let ua = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36",
    "Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.16",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36",
    "Mozilla/5.0 (Linux; Android 9; Pixel XL Build/PPP3.180510.008) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0",
];

let textSearch = [
    "разработка сайтов",
    "разработка сайтов",
    "разработка сайтов",
    "вебстудия",
    "вебстудия",
    "разработка сайта",
    "разработка сайта",
    "разработка сайта",
    "вебстудия",
    "вебстудия",
]

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

setInterval(() => {
    if (moment().hour() >= 10 && moment().hour() <= 21) {
        let page = Nightmare({
            gotoTimeout: 30 * 1000 * 1000,
            waitTimeout: 30 * 1000 * 1000,
        }).useragent(ua[randomInteger(0, ua.length - 1)]);

        console.log("Bot started");

        page.goto('https://ya.ru')
            // .cookies.set("yabs-sid", "2373564011588781375")
            // .cookies.set("yp", "1589386171.szm.1:1366x768:1294x637#1588867781.ln_tp.01")
            // .cookies.set("i", "G1UyVko4n5xeANtO87xwaZQtQVWA1gaYlpkIJfaD3UMkYTooS7glJJ0r07NvoJpDrQVpjyhE+Y3fX0RbBPosSUIRNV4=")
            // .cookies.set("ymex", "1904141375.yrts.1588781375")
            // .cookies.set("_ym_wasSynced", "%7B%22time%22%3A1588781375058%2C%22params%22%3A%7B%22eu%22%3A0%7D%2C%22bkParams%22%3A%7B%7D%7D")
            // .cookies.set("gdpr", "0")
            // .cookies.set("mda", "0")
            // .cookies.set("ys", "wprid.1588783525896135-483900059024840630700291-production-app-host-vla-web-yp-38")
            // .cookies.set("_ym_visorc_62476057", "w")
            // .cookies.set("_ym_isad", "2")
            // .cookies.set("_ym_d", "1588781779")
            // .cookies.set("_ym_uid", "1588781779319215261")
            // .cookies.set("yuidss", "5362911321588781369")
            // .cookies.set("yandexuid", "5362911321588781369")
            .goto("https://mail.yandex.ru")
            .evaluate(() => {
                document.querySelector("a.Logo-Yandex").removeAttribute("target");
                document.querySelector("a.Logo-Yandex").setAttribute("href", "//yandex.ru")
            })
            .wait(2000)
            .click("a[href=\"//yandex.ru\"]")
            .wait("input#text[name='text']")
            .type("input#text[name='text']", "разработка сайтов")
            .click("button.button_theme_websearch")
            .wait(5000)
            .evaluate(() => {
                try {
                    document.querySelector("a.link.serp-item__title-link").removeAttribute("target");
                    document.querySelector("a.link.serp-item__title-link").setAttribute("href", "http://webstudio-natty.ru/")
                    return document.querySelector(`a.link.serp-item__title-link[href='http://webstudio-natty.ru/']`)
                } catch (e) {
                    document.querySelector("a.link.link_cropped_no").removeAttribute("target");
                    document.querySelector("a.link.link_cropped_no").setAttribute("href", "http://webstudio-natty.ru/")
                    return document.querySelector(`a.link.link_cropped_no[href='http://webstudio-natty.ru/']`)
                }
            }, urlSite)
            .wait(3000)
            .mousedown(`a.link[href='http://webstudio-natty.ru/']`)
            .wait(1000)
            .click(`a.link[href='http://webstudio-natty.ru/']`)
            // Page actions
            .wait(randomInteger(9000, 12000))
            .scrollTo(718, 0)
            .wait(randomInteger(12000, 18000))
            .scrollTo(1019, 0)
            .wait(randomInteger(4000, 6000))
            .scrollTo(1457, 0)
            .wait(randomInteger(9000, 12000))
            .scrollTo(2046, 0)
        if (randomInteger(0, 1) === 1) {
            page.wait(randomInteger(9000, 12000))
                .mousedown(`a[data-tab-index=\"1\"]`)
                .click(`a[data-tab-index=\"1\"]`)
        }
        if (randomInteger(0, 1) === 1) {
            page.wait(randomInteger(9000, 12000))
                .mousedown(`a[data-tab-index=\"2\"]`)
                .click(`a[data-tab-index=\"2\"]`)
        }
        if (randomInteger(0, 1) === 1) {
            page.wait(randomInteger(9000, 12000))
                .mousedown(`a[data-tab-index=\"3\"]`)
                .click(`a[data-tab-index=\"3\"]`)
        }
        page.scrollTo(2727, 0)
            .wait(randomInteger(12000, 17000))
            .scrollTo(3368, 0)
            .wait(randomInteger(9000, 12000))
            .scrollTo(3617, 0)
            .wait(2000)
            .scrollTo(0, 0)
            .wait(1000)
            .goto("http://webstudio-natty.ru/services/landing-page/")
            .wait(randomInteger(12000, 17000))
            .scrollTo(720, 0)
            .wait(randomInteger(9000, 12000))
            .scrollTo(1325, 0)
            .wait(randomInteger(12000, 17000))
            .scrollTo(1759, 0)
            .wait(5000)
            .scrollTo(2590, 0)
            .wait(500)
            .scrollTo(0, 0)
            .wait(1000)
        if (randomInteger(0, 1) === 1) {
            page.goto("http://webstudio-natty.ru/services/sajt-pod-klyuch/")
                .wait(randomInteger(9000, 12000))
        }
        if (randomInteger(0, 1) === 1) {
            page.goto("http://webstudio-natty.ru/services/sajt-na-1s-bitriks/")
                .wait(randomInteger(9000, 12000))
        }
        if (randomInteger(0, 1) === 1) {
            page.goto("http://webstudio-natty.ru/services/sozdanie-biznes-sajta/")
                .wait(randomInteger(9000, 12000))
        }
        if (randomInteger(0, 1) === 1) {
            page.goto("http://webstudio-natty.ru/services/sajt-vizitki/")
                .wait(randomInteger(9000, 12000))
        }
        page.goto("http://webstudio-natty.ru/portfolio/")
            .wait(1000)
            .scrollTo(566, 0)
            .wait(randomInteger(9000, 12000))
            .wait(randomInteger(9000, 12000))
            .goto("http://webstudio-natty.ru/portfolio/lorem-ipsum/")
            .wait(3000)
            .scrollTo(249, 0)
            .wait(randomInteger(9000, 12000))
            .scrollTo(700, 0)
            .wait(randomInteger(12000, 17000))
            .scrollTo(1004, 0)
            .wait(randomInteger(9000, 12000))
            .scrollTo(1581, 0)
            .wait(randomInteger(9000, 12000))
            .scrollTo(2214, 0)
            .wait(randomInteger(9000, 12000))
            .scrollTo(2746, 0)
            .wait(randomInteger(9000, 12000))
            .scrollTo(3437, 0)
            .wait(randomInteger(9000, 12000))
            .scrollTo(3936, 0)
            .wait(randomInteger(9000, 12000))
            .scrollTo(4514, 0)
            .wait(randomInteger(17000, 25000))
            .scrollTo(0, 0)
            .wait(1000)
        if (randomInteger(0, 1) === 1) {
            page.goto("http://webstudio-natty.ru/blog/")
                .wait(5000)
                .scrollTo(489, 0)
                .wait(randomInteger(9000, 12000))
                .goto("http://webstudio-natty.ru/%d0%bf%d1%80%d0%b8%d0%b2%d0%b5%d1%82-%d0%bc%d0%b8%d1%80/")
                .wait(randomInteger(9000, 12000))
                .scrollTo(658, 0)
                .wait(randomInteger(17000, 25000))
                .scrollTo(1177, 0)
                .wait(randomInteger(25000, 30000))
                .scrollTo(1668, 0)
                .wait(randomInteger(12000, 17000))
                .scrollTo(2355, 0)
                .wait(randomInteger(9000, 12000))
                .scrollTo(2923, 0)
                .wait(randomInteger(17000, 25000))
                .scrollTo(3499, 0)
                .wait(randomInteger(25000, 30000))
                .scrollTo(0, 0)
        }
        page.wait(1000)
            .goto("http://webstudio-natty.ru/contact/")
            .scrollTo(575, 0)
            .wait(randomInteger(17000, 25000))
            .wait(2000)
            .scrollTo(0, 0)
            .wait(randomInteger(9000, 12000))
            .click("a[href='http://instagram.com/webstudionatty']")
            .click("a[href='https://vk.com/webstudionatty']")
            // End actions
            .evaluate(() => {
                return document
            })
            .end()
            .then((doctype) => {
                console.log(doctype);
            })

        page = null;
    }
}, 1000 * 60 * randomInteger(30, 100));