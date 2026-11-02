/* Coral Island TODO — checkbox persistence + progress + comments */

(function () {
  "use strict";

  var STORAGE_KEY = "coral-island-todo-v1";

  var COMMENTS = [
    { a: "@chenep23", l: 58, t: "Seri devam etsin diye haftalık tüm hype hakkımı bastım lütfen devam etsinnn" },
    { a: "@dilara1Pilavi", l: 39, t: "Çiçek dalında güzel dedikten sonra kasabadaki bütün çiçekleri flörtleri için koparan Alp" },
    { a: "@oneorzero9094", l: 27, t: "Bu seriye aşkı memnu ömrü diliyorum lütfen bitmesinnn" },
    { a: "@deniszmr", l: 28, t: "O kadar sabotaja ragmen gelen coral island" },
    { a: "@ebrarnurseda", l: 23, t: "şşş sessizlik, bugün en mutlu günüm (4 saatlik coral ısland videosu geldi)" },
    { a: "@ebrarnurseda", l: 15, t: "bu oyun ve siz o kadar mutlu ediyorsunuz ki hiç bitmesin bu seri ya valla hayat enerjimi yerine getiriyo" },
    { a: "@ferideakty", t: "Videoyu her kahvaltıda oturup izliyordum ama bugün akşama anca vakit buldum oda yayına denk geldi yorumumu yapıp yayına kaçıyorum Aşırı sarıyor seri mükemmel yaa" },
    { a: "@Mistakeu.25", t: "Bayılıyorum şu seriye devam etsin lütfenn" },
    { a: "@hanakou6505", t: "ördekli üste bayıldımmm çok tatlı olduu" },
    { a: "@eminecerenerkan", l: 13, t: "Seri devam etmeli çok güzel bir seri ve hypelarımın hepsini bastımmm" },
    { a: "@sudedogan680", t: "Ay haftaiçi internetim yoktu indirilenlerden izlemiştim şimdi geldim 3 hype da attım. Çok güzel seri. Özellikle kendimi kötü hissettiğim bir dönem olduğu için o kadar iyi geliyorki bu seri." },
    { a: "@qnunevreni", t: "Lütfennn devam etsinnn bayıldım bu seriyeeee" },
    { a: "@ms.meryyy", t: "lütfen bu seri hiç bitmesinnnnnn çok güzel bir oyunn çok beğendim" },
    { a: "@gokcendalgic", t: "Hayvanlarımız çok tatlııı kedi için sabırsızlanıyorum", s: true },
    { a: "@irmm_", l: 12, t: "yapamazsın dediler, hatta internetimiz bile kesildi" },
    { a: "@cerengul5724", l: 1, t: "Devam devam devam" },
    { a: "@ygtugce", t: "En sevdiğim seri en sevdiğim seriii" },
    { a: "@Gizemnrk", t: "Yayında izledim ama yine izleyeceğim çünkü çok güzel bi seri ve köpek inanılmaz tatlıydııı" },
    { a: "@cansuakyol7678", t: "Hoş geldin Beril Usta" },
    { a: "@ramazancakr-bu7dv", t: "güzel bir bölümdü." },
    { a: "@Artceng", l: 13, t: "Alp sende zanaat ürünleriyle uğraşabilirsin peynir tereyağı bal kumaş vs gibi ayrıca tanrıçanın adaklarını takip edip onları tamamlayabilirsin ve laboratuvardaki geliştirmeleri yapıp çiftliği geliştirebilirsin senin görevinde bunlar olabilir hem buralardaki gelişmeleri görmek de güzel olur", s: true },
    { a: "@lyphoph", l: 6, t: "Oyundaki sarılma animasyonları ın denk geldiği sahneler her seferinde çok dramatik oluyo kendimi film izliyormuş hissediyorum" },
    { a: "@Alienbluesz", t: "Oyunun içinde o kadar yapılacak şey varki her bölüm çok keyif veriyor" },
    { a: "@rashadeliyev3126", t: "Sonu gerçekten güzeldi" },
    { a: "@avataraang7109", l: 1, t: "Merhabalaar seriyi seviyoruuuz devamını da bekliyoruz" },
    { a: "@ilayda8770", t: "Milyoner olana kadar bitmesinnn" },
    { a: "@ahgase77", l: 5, t: "halkla ilişkiler okuyom mezun olunca alp baba olucam" },
    { a: "@Veritas_7", l: 4, t: "Aşşırı sevdiğim bi seri oldu ya uzun sürenin ardından youtube izlememin sebebi resmen" },
    { a: "@Timalayka", l: 1, t: "Yine güzel bi bölüm, bir sonraki bölümde sanki olaylar karışacak gibi heyecanla önümüzdeki bölümü bekliyorum" },
    { a: "@tekinoz5024", t: "Bitmesin bitmesin bitmesinnnnn" },
    { a: "@simayyuksel1808", l: 1, t: "En sevdigim seri lütfen devam edinnn" },
    { a: "@rmakakyol8670", t: "Bu seri bitmesinnnn" },
    { a: "@ajskjdjdkd8819", l: 1, t: "sırf seri devam etsin diye beğeniyorum hype atıyorum yorum atıyorummmmm" },
    { a: "@ecemy5448", t: "Bu oyunda en sevdiğim şey Alp'in 4 saatlik videonun 3 saatini date ile geçirmesi" },
    { a: "@Büşra-m7g", t: "Devam etsin bu seri" },
    { a: "@ygtugce", l: 2, t: "19:20 önümden çekil derken yanıma gel demek istemiş bence Grace" },
    { a: "@Caesalost", l: 3, t: "Bölümdeki favori sahnem alp ve korayın date yapması olabilir" },
    { a: "@Zeynepvedia", l: 1, t: "sizi izlerken o kadar canım çekti ki oyunu indirimde alıp birkaç günde size yetişmeye çalıştım bu seri bitmesin kalpimmm, ayrıca burcum okuyorsan çok çok güzel çok huzurlu çok sağlıklı bir hamilelik geçiriyorsundur umarım" },
    { a: "@gayeemert", l: 3, t: "Kızların yaz kombinlerine bayıldım bence çok iyi oldular" },
    { a: "@jangmisshi", t: "Bütün hypeları bu videoya bastım (buradan coral islandcı tayfaya selam olsun chatte buluşmak çok güzeldi)" },
    { a: "@Nothingcocoo", l: 5, t: "6:31 deniz hamsisi falan ayıp oluyo alp bey" },
    { a: "@Lorelai123", t: "Karşan ve Boi çok tatlııı 🥹🩷" },
    { a: "@semihs52", t: "Serinin devamı için yorum kasmaya geldim" },
    { a: "@sheyylll", t: "Video geldi ödevimi 4 saat erteledim :>" },
    { a: "@lmansalmanl9809", l: 5, t: "33:45 Alp baabaaa Alice e helalimsin öpücüğü mü attı?" },
    { a: "@ebruvensy", l: 4, t: "Bu serinin bitmesini hiç istemiyoruum <3" },
    { a: "@imalicechan", l: 1, t: "İzlemeden hemen başından yorum yapıyoruz efenimmmm geldi dizimizin yeni bölümü" },
    { a: "@w3dy_efl", l: 5, t: "steam bile alpin zayiflayacagini duyunca dayanamamış" },
    { a: "@senaylmaz1778", t: "Hep aradığım ama bulamadığım arkadaş grubu" },
    { a: "@burcakakyl6825", l: 1, t: "Seri devam etsin diye yorum yapmam gerekli sanırım" },
    { a: "@HaticeGölll", l: 1, t: "Coral island uzunnnnnnn bölümler her zaman güzel" },
    { a: "@banksy-r2k", l: 1, t: "Beklenen video geldi bu oyun o kadar sardı ki devamını hep bekliyoruz .Ve Pablo senden bunu beklemezdik adam yurimize yürüyor neyseki Alp baba halleder bu işi" },
    { a: "@lostkey5554", l: 2, t: "Beğeni, yorum, hype hepsini yaptım seri devam etsin plssss🥹🥹" },
    { a: "@iremn29", l: 2, t: "Tüm hafta bunu bekledim" },
    { a: "@ecemy5448", l: 1, t: "Bütün hypelar likeler atıldı bu seri bitmesinnn Coral islandımıza dokunmaaa" },
    { a: "@Kate_613", l: 1, t: "Cadılar bayramı etkinliğine vereceğiniz tepkiyi görmek için sabırsızlanıyorum", s: true },
    { a: "@eminecerenerkan", t: "1:43:38 Grace kombini çoook güzel olmuşşş" },
    { a: "@MarcoTheVineyard", l: 1, t: "Guzel seri" },
    { a: "@fatryangosling", t: "sonunda" }
  ];

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // ---- render comments ----
  function renderComments() {
    var list = document.getElementById("commentsList");
    document.getElementById("commentCount").textContent = "(" + COMMENTS.length + ")";
    list.innerHTML = COMMENTS.map(function (c) {
      var likes = c.l ? '<span class="comment__likes">' + c.l + ' 👍</span>' : "";
      var badge = c.s ? '<span class="suggest-badge">YENİ BÖLÜM ÖNERİSİ</span>' : "";
      return (
        '<div class="comment' + (c.s ? " suggested" : "") + '">' +
          '<div class="comment__head"><span class="comment__author">' + esc(c.a) + "</span>" + likes + badge + "</div>" +
          '<p class="comment__text">' + esc(c.t) + "</p>" +
        "</div>"
      );
    }).join("");
  }

  // ---- checkbox persistence + progress ----
  function loadState() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveState(state) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  function updateProgress() {
    var boxes = Array.from(document.querySelectorAll('.task input[type="checkbox"]'));
    var done = boxes.filter(function (b) { return b.checked; }).length;
    var total = boxes.length;
    document.getElementById("statDone").textContent = done;
    document.getElementById("statTotal").textContent = total;
    document.getElementById("progressBar").style.width = total ? (done / total * 100) + "%" : "0%";
  }

  function init() {
    renderComments();
    var state = loadState();
    document.querySelectorAll('.task input[type="checkbox"]').forEach(function (box) {
      var key = box.getAttribute("data-task");
      if (state[key]) box.checked = true;
      var label = box.closest(".task");
      if (box.checked) label.classList.add("done");
      box.addEventListener("change", function () {
        label.classList.toggle("done", box.checked);
        state[key] = box.checked;
        saveState(state);
        updateProgress();
      });
    });
    updateProgress();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
