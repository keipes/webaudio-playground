function initAudio() {
	var audioCtx = new AudioContext();

	var gainNode = audioCtx.createGain();

	for (var i = 0; i < numOscillators; i ++) {
		doMeANewOscillator(audioCtx, gainNode, 40);
	}
	// doMeANewOscillator(audioCtx, gainNode, 40);
	// doMeANewOscillator(audioCtx, gainNode, 200);
	// doMeANewOscillator(audioCtx, gainNode, 300);
	// doMeANewOscillator(audioCtx, gainNode, 440);

	gainNode.connect(audioCtx.destination);

}

function doMeANewOscillator(audioCtx, gainNode, frequency) {
	var oscillator = audioCtx.createOscillator();
	oscillator.frequency.value = frequency;
	oscillator.connect(gainNode);
	oscillator.start();
	oscillators.push(oscillator);
}

var oscillators = [];

var tonalRange = [30, 600];
var spreadRange = [1, 10];
var numOscillators = 3;

addEventListener("mousemove", function(e) {
	var rootFrequency = (e.x / window.innerWidth) * (tonalRange[1] - tonalRange[0]) + tonalRange[0];
	var spread = (e.y / window.innerHeight) * (spreadRange[1] - spreadRange[0]) + spreadRange[0];
	console.log(rootFrequency);
	for (var i = 0; i < oscillators.length; i++) {
		oscillator = oscillators[i];
		oscillator.frequency.value = rootFrequency + (i * spread);
	}
});

initAudio();