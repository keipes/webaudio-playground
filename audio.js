function doAnnoyingStuff() {
	var audioCtx = new AudioContext();

	var osc1 = audioCtx.createOscillator();
	var osc2 = audioCtx.createOscillator();
	var osc3 = audioCtx.createOscillator();

	var gainNode = audioCtx.createGain();

	osc1.frequency.value = 441;
	osc2.frequency.value = 40;
	osc3.frequency.value = 409;

	osc1.connect(gainNode);
	osc2.connect(gainNode);
	osc3.connect(gainNode);

	gainNode.connect(audioCtx.destination);

	osc1.start();
	osc2.start();
	osc3.start();
}

doAnnoyingStuff();