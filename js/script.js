var loveButton = document.getElementsByTagName('button')[0];
loveButton.affirmations = [
"Ja sam voljena.",
"Okružena sam ljubavlju.",
"Zaslužujem ljubav i dobijam je u izobilju.",
"Kuda god krenem, nailazim na ljubav.",
"Moj partner i ja savršeno odgovaramo jedno drugom, a ljubav između nas je božanska.",
"Dajem ljubav, a ona se meni vraća uvijek uvećana.",
"U ljubavi sam sa prekrasnom osobom koja je brižna, predana, odana, pouzdana i ima razumijevanje.",
"Ja sam potpuno vrijedna ljubavi.",
"Moje srce je uvijek otvoreno i ja odišem ljubavlju.",
"Sve vidim očima ljubavi i volim sve što vidim.",
"Moj partner je ljubav mog života i centar moga svemira.",
"U životu dobijam ono što dajem, a ja uvijek dajem ljubav.",
"Pronalazim ljubav u svim svojim odnosima.",
"Zaslužujem ljubav i dobijam je u izobilju.",
"U svoj život privlačim osobe pune ljubavi.",
"Volim sebe i sve oko sebe, a zauzvrat svi vole mene.",
"Gdje god pođem pronalazim ljubav.",
"Moj partner i ja smo savršeni jedno za drugo i ljubav između nas je božanska.",
"Dajem čistu, bezuslovnu ljubav svom partneru i on je meni uzvraća.",
"Ljubav i praštanje su temelj mojih veza.",
"Slobodno i sa radošću dajem i primam ljubav",
"Vidim sebe kao osobu ispunjenu ljubavlju i srećom.",
"Prihvatam da ne moram ništa učiniti da bih bila voljena i srećna.",
"Ja sam prirodno voljena.",
"Volim sebe u potpunosti.",
"Prihvatam ljubav i sreću u svakom trenutku.",
"Ja sam voljena. Ja sam voljena. Ja sam voljena.",
"Odnos sa mojim partnerom svakim danom postaje sve dublji i ispunjeniji ljubavlju.",
"Moj partner me voli i prihvata baš onakvu kakva sam.",
"Uživam biti u srećnoj vezi ispunjenoj ljubavlju i podrškom.",
"Osjećam se sigurno i zaštićeno uz svog partnera.",
"Sada prihvatam savršenu božansku ljubav.",
"Kroz život idem znajući da sam voljena.",
"Uživam u tome što me partner obasipa ljubavlju.",
"Ljubav me slijedi gdje god pođem.",
"Moje srce je uvijek otvoreno za ljubav.",
"Prirodno privlačim ljubav gdje god pođem.",
"Dočekujem ljubav raširenih ruku.",
"U svoj život privlačim ljubav i romantiku sa lakoćom.",
"Volim sebe, svog partnera i sve oko sebe.",
"Zahvalna sam za obilje ljubavi u mom životu.",
"Što više volim sebe, to više ljubavi dobijam.",
"Moje srce je otvoreno i spremno za ljubav.",
"Sve što radim je usklađeno sa vibracijom ljubavi.",
"Vidim ljubav. Osjećam ljubav. Ja sam ljubav.",
"Voljena sam zbog onog što jesam.",
"Volim sebe bezuslovno.",
"Ljubav ispunjava moje srce toplinom.",
"Zaslužujem ljubav koju dobijam.",
"Zaslužujem ljubav i sve dobro što život ima da mi ponudi.",
'U srećnoj sam vezi sa osobom koja me istinski voli.',
'Moj partner je ljubav moga života. Obožavamo jedno drugo.',
'Trajne veze ispunjene ljubavlju uljepšavaju moj život.',
'Privlačim ljubav u svoj život i prihvatam je raširenih ruku.',
'Moja ljubav je bezuslovna.',
'Vrijedna sam ljubavi i zaslužujem da budem bezuslovno voljena.',
'Otvorena sam za ljubav u svim oblicima.',
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
"Posjedujem savršeno zdravlje i moje tijelo i duh se ponašaju u skladu sa zakonom univerzalnog sklada.",
'Volim sebe i savršeno sam zdrava.',
'Puna sam energije i vitalnosti.',
'Jedem hranu koja je zdrava za moje tijelo i pijem velike količine vode koje ga pročišćavaju.',
'Zdravlje je moje prirodno pravo.',
'Imam snažno srce i čelično tijelo. Jaka sam, puna energije i vitalnosti.',
'Dišem duboko, vježbam redovno i u svoje tijelo unosim samo zdravu hranu.',
'Spremna sam da uživam u savršenom zdravlju.',
'Sposobna sam i spremna da izliječim svoje tijelo.',
'Zaslužujem da živim zdravim životom.',
'Svakoga dana privlačim savršeno zdravlje.',
'Volim vježbati i jesti zdravu hranu.',
'Svakim trenutkom se osjećam sve bolje i bolje.',
'Zahvalna sam za iscjeljenje svoga tijela.',
'Vodim brigu o svom tijelu sa poštovanjem i ljubavlju.',
'Dopuštam sebi da budem potpuno zdrava.',
'Poznata sam po svojoj pozitivnoj energiji i zdravom životnom stilu.',
'Uvijek biram stvari koje su najbolje za moje zdravlje.',
'Volim voditi brigu o sebi.',
'Zdravim životnim stilom ostvarujem čudesne rezultate.',
'Okružena sam ljudima koji me ohrabruju da vodim zdrav život.',
'Slušam poruke koje mi moje tijelo šalje.',
'Odgovaram na poruke koje mi moje tijelo šalje sa strpljenjem i razumijevanjem.',
'Biram sreću i zdravlje u svom životu.',
'Slavim život svakog dana.',
'Čuda i magija me prate gdje god da krenem.',
'Moje tijelo iscjeljuje ovoga trenutka.',
'Moje tijelo ima prirodnu sposobnost da iscjeljuje.',
'Moj imuni sistem je snažan, inteligentan i posvećen zaštitnik mog tijela.',
'Moj imuni sistem lako razlikuje korisno od štetnog.',
'Svaka ćelija mog tijela zrači vitalnošću.',
'Duboko sam opuštena i mirna.',
'Dišem duboko i lako.',
'Svaki organ u mom tijelu funkcioniše baš kako treba.',
'U potpunosti otpuštam emocije, stavove i navike koje mi više ne služe.',
'Radim sve da živim dug i zdrav život.',
'Moj osmjeh odražava radost i strast za zdravim životnim stilom.',
'Posvećena sam poboljšanju svog zdravlja.',
'Imam zdravu vezu između tijela i uma.',
'Imam pozitivan stav prema svom zdravlju.',
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
'Moja radost mi omogućava da izrazim svoje talente i sposobnosti i ja sam zahvalna na ovom poslu.',
'Radost koju pronalazim u svom poslu se odražava na moju životnu sreću.',
'Moje kolege i ja potičemo jedni druge na rast i uspjeh.',
'Kad se ujutro probudim, planiram imati dobar dan. Moja očekivanja mi privlače pozitivna iskustva.',
'Savršen posao me traži i pronalazi.',
'Volim svoj posao jer mi omogućava da rastem i steknem bogatstvo.',
'U stanju sam da izbalansiram svoju karijeru i porodični život tako da budu u harmoniji.',
'Ja sam cijenjena osoba na svom radnom mjestu i moj glas se uvijek sasluša sa poštovanjem',
'Imam odlične odnose sa kolegama i šefom.',
'Srećna sam što posao koji radim koristi i meni i zajednici u kojoj živim.',
'Uvijek privlačim najbolje projekte i najbolje ljude zbog svog pozitivnog stava.',
'Ja sam rođeni preduzetnik. Prepoznajem i iskorištavam prilike kada se pojave.',
'Ja sam vješt prodavač. Moji klijenti me vole i imaju povjerenja u mene i moja knjiga narudžbi je prepuna.',
'Moje radne navike mi obezbjeđuju redovna unaprjeđenja i novčane nagrade.',
'Disciplina je moja jača strana. Na radnom mjestu, posao je moj prioritet, a kod kuće, porodica je moj prioritet.',
'Plodovi mog rada su tako slatki.',
'Vjerujem u sebe i u svoju sposobnost da uspijem.',
'Uživam u svom poslu danas i optimistično gledam u budućnost.',
'Svemir je pun beskrajnih mogućnosti za mene i moju karijeru.',
'Uvijek sam otvorena za istraživanje novih puteva do uspjeha.',
'Kad mi je potrebna pomoć, sa lakoćom privlačim savršene izvore i rješenja.',
'Dobro sam organizovana i upravljam svojim vremenom savršeno efikasno.',
'Predana sam postizanju uspjeha u svim područjima života.',
'Moje ambicije su u savršenom odnosu sa mojim ličnim vrijednostima.',
'Radim sa ljudima koji me inspirišu i koji dijele moj entuzijazam.',
'Dok se suočavam sa novim izazovima, osjećam se smireno, samopouzdano i snažno.',
'Pronalaženje rješenja mi dolazi prirodno.',
'Uvijek privlačim uspješne ljude koji me razumiju i ohrabruju.',
'Svaki izazov prepoznajem kao novu priliku.',
'Slavim svaki postignuti cilj sa radošću i zahvalnošću.',
'Stalno privlačim prave okolnosti u pravom trenutku.',
'Zahvalna sam za svo obilje koje ulazi u moj život.',
'Vjerujem svojoj intuiciji koja me vodi u donošenju pravih odluka.',
'Svaki dan je ispunjen novim idejama koje me inspirišu i motivišu.',
'Ističem se u svemu što radim i uspjeh mi lako dolazi.',
'Privlačim brilijantne mentore koji ljubazno dijele svoju mudrost i vođstvo.',
'Izlazim iz svoje zone komfora sa hrabrošću i samopouzdanjem.',
'Imam beskrajnu zalihu novih ideja koje mi pomažu da budem sve uspješnija.',
'Otpuštam sva ograničavajuća uvjerenja o mojoj sposobnosti da uspijem.',
'Svakog dana se pripremam za uspjeh u tijelu, umu i duhu.',
'Sanjam velike snove bez sudržavanja.',
'Uspješno ostvarujem svoj potencijal.',
'Zahvalna sam na svom finansijskom uspjehu.',
'Živim svoj san.',
]

var moneyButton = document.getElementsByTagName('button')[3];
moneyButton.affirmations = [
"Sada sam spremna da prihvatim neizmjerno materijalno i duhovno bogatstvo.",
"Odlučno otpuštam grč kojim sam sebe držala u siromaštvu i neznanju i otvaram svoje srce da prihvatim svo izobilje koje mi je na raspolaganju.",
"Spremna sam da dajem jer i što više dajem, to više imam novca i svega što mi je potrebno.",
"Meni dolaze raznovrsna bogatstva bez ikakvog napora.",
"Moji prihodi se stalno uvećavaju.",
"Ja sam srećna i bogata. Posežem za božanskim izobiljem koje je svugdje oko mene.",
'Osjećam se bogato.',
'Volim novac i novac voli mene.',
'Srećna sam i zahvalna što mi novac stalno dolazi u rastućim količinama iz različitih izvora.',
'Novca imam više nego dovoljno.',
'Spremna sam da primam novac.',
'Ja sam magnet za novac.',
'Novac mi sada dolazi iz neočekivanih izvora i ja sam zahvalna na tome.',
'Moji prihodi se stalno uvaćavaju.',
'Imam sposobnost da privlačim novac.',
'Novac mi dolazi sa lakoćom.',
'Dozvoljavam svojim prihodima da se stalno uvećavaju i da mi život bude udoban i radostan.',
'Svemir mi stalno šalje novac i imam ga uvijek dovoljno da zadovoljim svoje potrebe.',
'Sve aktivnosti koje preduzimam mi donose zaradu i moj novčanik je uvijek pun.',
'Stanje na mom bankovnom računu se svakodnevno uvećava i uvijek imam dovoljno novca za sebe.',
'Ja i novac smo u prijateljskim odnosima i naše prijateljstvo traje zauvijek.',
'Ja sam magnet za novac koji stalno sebi privlači sve više i više novca.',
'Svakoga dana ja privlačim i imam sve više i više novca ušteđeno.',
'Ja imam pozitivan odnos prema novcu.',
'Privlačenje novca mi ide od ruke.',
'Novac je energija. Novac je dobar.',
'Zarađujem novac radeći ono što volim.',
'Novac mi dolazi iz očekivanih i neočekivanih izvora.',
'Moja zarada se stalno povećava.',
'Moj novčanik je pun novca.',
'Otvoreno i spremno dočekujem novac u svoj život.',
'Uvijek sebi mogu kupiti sve što mi je potrebno.',
'Volim novac.',
'Uživam u zarađivanju novca radeći posao koji volim.',
'Novac mi dolazi lako, često i u velikim količinama.',
'Mogu zaraditi neograničene količine novca.',
'Sa radošću posmatram kako su svi moji računi plaćeni.',
'Moji prihodi prevazilaze moje troškove.',
'Moje zahvalno srce je magnet koji privlači sve što poželim.',
'Neustrašivo dajem novac znajući da je Svemir nepresušan izvor.',
'Novac trošim pametno i neustrašivo znajući su moji izvori nepresušni.',
'Srećno uživam u luksuznom životnom stilu.',
'Ovaj Svemir je bogat i ima dovoljno novca za sve nas.',
'Uvijek ostavljam otvoren prolaz kako bi mi novac dolazio u izobilju.',
'Novac koji stalno imam u novčaniku služi kao magnet za privlačenje još većih bogatstava.',
'Novac koji trošim na sebe i druge mi se uvijek vraća višestruko uvećan.',
'Novac koji trošim i zarađujem mi donosi radost.',
'Otpuštam sva negativna uvjerenja o novcu i prizivam bogatstvo u svoj život.',
'Sve blokade koje su me sprečavale da primam novac su sada uklonjene.',
'Imam sve što mi je potrebno da stvorim bogatstvo.',
'Ja sam bogataš.',
'Volim sebe kao bogatu osobu.',
'Privlačim idealne okolnosti i prilike da povećam svoje bogatstvo.',
'Svemir je izabrao da budem bogata kako bih svojim bogatstvom pomogla drugima.',
'Ako drugi mogu biti bogati, mogu i ja.',
'Bogatstvo je moje prirodno pravo i sada ga prisvajam za sebe.',
'Bogatstvo je pozitivan izraz božanske energije.',
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

		function displayWriteWishMessage () {
			var wishSubmitted = document.getElementById('wish-submitted');
			wishSubmitted.textContent = 'Upišite svoju želju prije nego je pošaljete'
		}

		var wishText = document.getElementsByTagName('textarea')[0];
		wishText.focus();
		var submitWishButton = document.getElementById('submit');
		submitWishButton.addEventListener('click', function() {
			if (wishText.value != '') {
				displaySubmissionMessage()
			}
			else displayWriteWishMessage();
		}, false);

	}
}

var btnListen = document.getElementById('btnListener');
btnListen.addEventListener('click', function(e) {
	displayAffirmation(e, e.target);
}, false);
