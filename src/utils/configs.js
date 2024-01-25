const defaultIntervalTime = 1000 * 60 * 19;

export const config = {
	intervalTime: process.env.ENV === 'DEV' ? 100 : defaultIntervalTime,
	isIntervalEnabled: true,
	canvasWidth: 600,
	canvasHeight: 500,
};
