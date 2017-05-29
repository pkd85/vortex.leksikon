var loveButton = document.getElementsByTagName('button')[0];
var healthButton = document.getElementsByTagName('button')[1];
var jobButton = document.getElementsByTagName('button')[2];
var moneyButton = document.getElementsByTagName('button')[3];
var relationsButton = document.getElementsByTagName('button')[4];

function displayAffirmation(e, target) {
	var affText = document.getElementById('aff-text');
	switch (e.target) {
		case loveButton: affText.textContent = 'Ljubav - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'; break;
		case healthButton: affText.textContent = 'Zdravlje - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'; break;
		case jobButton: affText.textContent = 'Posao - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'; break;
		case moneyButton: affText.textContent = 'Novac - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'; break;
		case relationsButton: affText.textContent = 'Odnosi - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'; break;
		default: affText.textContent = 'Dobar dan - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'; break;

	}
}

var btnListen = document.getElementById('btnListener');
btnListen.addEventListener('click', function(e) {
	displayAffirmation(e, e.target);
}, false);