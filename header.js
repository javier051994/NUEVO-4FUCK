var site = new Array(31)
site[0] = "https://yandex.com/search/?text=milf%20xxxstream&lr=115588"
site[1] = "https://yandex.com/search/?text=Porn%20xxx&lr=115588"
site[2] = "https://yandex.com/search/?text=porn%20fuck&lr=115588"
site[3] = "https://yandex.com/search/?text=porn%20tube&lr=115588"
site[4] = "https://yandex.com/search/?text=Tube%20XXX&lr=115588"
site[5] = "https://yandex.com/search/?text=porn%20free&lr=20960"
site[6] = "https://yandex.com/search/?text=FreePorno&lr=20960"
site[7] = "https://yandex.com/search/?text=Porn%20Movies&lr=20960"
site[8] = "https://yandex.com/search/?text=Kiss%20Porn%20Movies&lr=20960"
site[9] = "https://yandex.com/search/?text=Porn%20Film&lr=20960"
site[10] = "https://yandex.com/search/?text=XNXX&lr=20960"
site[11] = "https://yandex.com/search/?text=Teen%20xxx&lr=20960"
site[12] = "https://yandex.com/search/?text=free%20teen&lr=20960"
site[13] = "https://yandex.com/search/?text=Chineses%20xxx&lr=20960"
site[14] = "https://yandex.com/search/?text=porn%20chineses&lr=20960"
site[15] = "https://yandex.com/search/?text=Hard%20chineses%20porn&lr=20960"
siteNumber = Math.floor(Math.random()*15);
var ref= site[siteNumber];
delete window.document.referrer;
window.document.__defineGetter__('referrer', function () {
return ref;
});
