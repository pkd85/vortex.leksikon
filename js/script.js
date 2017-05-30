var loveButton = document.getElementsByTagName('button')[0];
loveButton.affirmations = [
	"Ja sam voljena.",
	"Okruzena sam ljubavlju.",
	"Zasluzujem ljubav i dobijam je u izobilju.",
	"Kuda god krenem, nailazim na ljubav.",
	"Moj partner i ja savrseno odgovaramo jedno drugom, a ljubav izmedju nas je bozanska.",
	"Dajem ljubav, a ona se meni vraca uvijek uvecana.",
	"U ljubavi sam sa prekrasnom osobom koja je brizna, predana, odana, pouzdana i ima razumijevanje.",
]

var healthButton = document.getElementsByTagName('button')[1];
healthButton.affirmations = [
	"Svaka celija mog tijela je napunjena energijom i zdravljem.",
	"Ljubav prema sebi iscjeljuje moj zivot.",
	"Njegujem svoj um, tijelo i dusu.",
	"Moje tijelo je snazno i puno vitalnosti.",
	"Moje misli su u harmoniji.",
	"Ja sam aktivna, puna energije i moj zivot je u mojim rukama.",
	"Moje tijelo se lijeci brzo i lako.",
	"Ja u potpunosti prihvatam svoje tijelo.",
	"Ja se osjecam dobro iz dana u dan.",
]

var jobButton = document.getElementsByTagName('button')[2];
jobButton.affirmations = [
	"Sve svoje ciljeve ostvarujem s lakocom.",
	"Sve izazove pretvaram u dobre poslovne sanse.",
	"Imam prava uvjerenja koja me vode ka uspjehu.",
	"Stalno privlacim prave klijente u svoj biznis.",
	"Svakodnevno koristim nove ideje da unaprijedim svoj posao.",
	"Volim svoj posao.",
	"Zavrsavam sve svoje poslove na vrijeme.",
	"Radim posao koji volim i to me ispunjava.",
]

var moneyButton = document.getElementsByTagName('button')[3];
moneyButton.affirmations = [
	"Sada sam spremna da prihvatim neizmjerno materijalno i duhovno bogatstvo.",
	"Odlucno otpustam grc kojim sam sebe drzala u siromastvu i neznanju i otvaram svoje srce da prihvatim svo izobilje koje mi je na raspolaganju.",
	"Spremna sam da dajem jer i sto vise dajem, to vise imam novca i svega sto mi je potrebno.",
	"Meni dolaze raznovrsna bogatstva bez ikakvog napora.",
	"Moji prihodi se stalno uvecavaju.",
	"Ja sam srecna i bogata. Posezem za bozanskim izobiljem koje je svugdje oko mene.",
]

var relationsButton = document.getElementsByTagName('button')[4];
relationsButton.affirmations = [
	"Svi moji odnosi su dugi, trajni i puni ljubavi.",
	"Susrecem ljubav u svim svojim odnosima.",
	"U svim mojim odnosima (s mojim roditeljima, bracom i sestrama, mojim zivotnim partnerom, mojim prijateljima) ja samo dajem ljubav i trazim ljubav.",
	"Zahvalna sam na svim ljudima u svom zivotu koji me vole takvu kakva sam.",
	"Ljubav koju iskazujem i saljem drugima vraca mi se visestruko.",
	"Kada provodim vrijeme s drugim ljudima, moje srce ispunjava ljubav.",
]

var wishButton = document.getElementsByTagName('button')[5];

function displayAffirmation(e, target) {
	var affText = document.getElementById('aff-text');
	if (e.target != wishButton) {
		var affNum = Math.floor(Math.random()*e.target.affirmations.length);
		affText.textContent = e.target.affirmations[affNum];
	}
	else {
		affText.innerHTML = "<textarea name='wish' placeholder='Ovdje upisite svoju zelju'></textarea>";
		affText.innerHTML += "<button id='submit'>Posalji</button>";
		affText.innerHTML += "<div id='wish-submitted'></div>"

		function displaySubmissionMessage () {
			var wishSubmitted = document.getElementById('wish-submitted');
			wishSubmitted.textContent = 'Vasa zelja je poslana!'
		}

		var submitWishButton = document.getElementById('submit');
		submitWishButton.addEventListener('click', function() {
			displaySubmissionMessage()
		}, false);

	}
}

var btnListen = document.getElementById('btnListener');
btnListen.addEventListener('click', function(e) {
	displayAffirmation(e, e.target);
}, false);

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
