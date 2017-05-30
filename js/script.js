var loveButton = document.getElementsByTagName('button')[0];
loveButton.affirmations = [
	"Ja sam voljena.",
	"Okružena sam ljubavlju.",
	"Zaslužujem ljubav i dobijam je u izobilju.",
	"Kuda god krenem, nailazim na ljubav.",
	"Moj partner i ja savršeno odgovaramo jedno drugom, a ljubav između nas je božanska.",
	"Dajem ljubav, a ona se meni vraća uvijek uvećana.",
	"U ljubavi sam sa prekrasnom osobom koja je brižna, predana, odana, pouzdana i ima razumijevanje.",
]

var healthButton = document.getElementsByTagName('button')[1];
healthButton.affirmations = [
	"Svaka ćelija mog tijela je napunjena energijom i zdravljem.",
	"Ljubav prema sebi iscjeljuje moj život.",
	"Njegujem svoj um, tijelo i dušu.",
	"Moje tijelo je snažno i puno vitalnosti.",
	"Moje misli su u harmoniji.",
	"Ja sam aktivna, puna energije i moj život je u mojim rukama.",
	"Moje tijelo se liječi brzo i lako.",
	"Ja u potpunosti prihvatam svoje tijelo.",
	"Ja se osjećam dobro iz dana u dan.",
]

var jobButton = document.getElementsByTagName('button')[2];
jobButton.affirmations = [
	"Sve svoje ciljeve ostvarujem s lakoćom.",
	"Sve izazove pretvaram u dobre poslovne šanse.",
	"Imam prava uvjerenja koja me vode ka uspjehu.",
	"Stalno privlačim prave klijente u svoj biznis.",
	"Svakodnevno koristim nove ideje da unaprijedim svoj posao.",
	"Volim svoj posao.",
	"Završavam sve svoje poslove na vrijeme.",
	"Radim posao koji volim i to me ispunjava.",
]

var moneyButton = document.getElementsByTagName('button')[3];
moneyButton.affirmations = [
	"Sada sam spremna da prihvatim neizmjerno materijalno i duhovno bogatstvo.",
	"Odlučno otpuštam grč kojim sam sebe držala u siromaštvu i neznanju i otvaram svoje srce da prihvatim svo izobilje koje mi je na raspolaganju.",
	"Spremna sam da dajem jer i što više dajem, to više imam novca i svega što mi je potrebno.",
	"Meni dolaze raznovrsna bogatstva bez ikakvog napora.",
	"Moji prihodi se stalno uvećavaju.",
	"Ja sam srećna i bogata. Posežem za božanskim izobiljem koje je svugdje oko mene.",
]

var relationsButton = document.getElementsByTagName('button')[4];
relationsButton.affirmations = [
	"Svi moji odnosi su dugi, trajni i puni ljubavi.",
	"Susrećem ljubav u svim svojim odnosima.",
	"U svim mojim odnosima (s mojim roditeljima, braćom i sestrama, mojim životnim partnerom, mojim prijateljima) ja samo dajem ljubav i tražim ljubav.",
	"Zahvalna sam na svim ljudima u svom životu koji me vole takvu kakva sam.",
	"Ljubav koju iskazujem i šaljem drugima vraća mi se višestruko.",
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
		affText.innerHTML = "<textarea name='wish' placeholder='Ovdje upišite svoju želju'></textarea>";
		affText.innerHTML += "<button id='submit'>Pošalji</button>";
		affText.innerHTML += "<div id='wish-submitted'></div>"

		function displaySubmissionMessage () {
			var wishSubmitted = document.getElementById('wish-submitted');
			wishSubmitted.textContent = 'Vaša želja je poslana :)'
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
