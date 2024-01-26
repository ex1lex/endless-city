const defaultIntervalTime = 60000 * 7.5; // каждые 7.5 секунд

export const config = {
	intervalTime: process.env.DEV ? 100 : defaultIntervalTime,
	canvasWidth: 600,
	canvasHeight: 500,
};
