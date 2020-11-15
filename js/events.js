const events = {
	hello(data) {
		console.log("Connected to Beat Saber");

		if (data.status.beatmap && data.status.performance) {
			ui.beatmap(data.status.beatmap, data.time, data.status.mod);
			ui.performance(data.status.performance);
			ui.show();
		}
		if (typeof op_hello !== "undefined") op_hello(data);
	},

	songStart(data) {
		ui.beatmap(data.status.beatmap, data.time, data.status.mod);
		ui.performance(data.status.performance);
		ui.show();
		if (typeof op_songStart !== "undefined") op_songStart(data);
	},

	noteCut(data) {
		ui.performance(data.status.performance);
		if (typeof op_noteCut !== "undefined") op_noteCut(data);
	},

	noteFullyCut(data) {
		ui.performance(data.status.performance);
		if (typeof op_noteFullyCut !== "undefined") op_noteFullyCut(data);
	},

	obstacleEnter(data) {
		ui.performance(data.status.performance);
		if (typeof op_obstacleEnter !== "undefined") op_obstacleEnter(data);
	},

	noteMissed(data) {
		ui.performance(data.status.performance);
		if (typeof op_noteMissed !== "undefined") op_noteMissed(data);
	},

	bombCut(data) {
		ui.performance(data.status.performance);
		if (typeof op_bombCut !== "undefined") op_bombCut(data);
	},

	pause(data) {
		ui.timer.pause(data.status.beatmap.paused + (Date.now() - data.time));
		if (typeof op_pause !== "undefined") op_pause(data);
	},

	resume(data) {
		ui.timer.start(data.status.beatmap.start + (Date.now() - data.time), data.status.beatmap.length);
		if (typeof op_resume !== "undefined") op_resume(data);
	},

	menu(data) {
		ui.timer.stop();
		if (disp_hidden) {
			ui.hide();
		}
		if (typeof op_menu !== "undefined") op_menu(data);
	}
}