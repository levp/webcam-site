main().catch(err => {
	console.error('[client] Uncaught error in main():', err);
});

async function main() {
	const devices = navigator.mediaDevices;
	if (!devices) {
		throw new Error('[navigator.mediaDevices] not supported in this browser.');
	}

	const stream = await devices.getUserMedia({
		audio: true,
		video: true,
	});

	const video = document.getElementById('webcam-view');
	video.srcObject = stream;
	video.onloadedmetadata = () => {
		video.play();
	};
}
