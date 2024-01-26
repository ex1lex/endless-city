import { config } from './configs';
import { getRandomNumber, prepareXRange } from './helpers';

test('get random number', () => {
	const result = getRandomNumber(1, 10);
	expect(result).toBeGreaterThanOrEqual(1);
	expect(result).toBeLessThanOrEqual(10);
});

test('prepare x range for max height <= 50', () => {
	const [range] = prepareXRange(50);
	expect(range).toEqual({
		min: 0,
		max: config.canvasWidth,
	});
});

test('prepare x range for max height > 50 and < 80', () => {
	const [rangeOne, rangeTwo] = prepareXRange(70);
	expect(rangeOne).toEqual({
		min: 0,
		max: config.canvasWidth * 0.15,
	});
	expect(rangeTwo).toEqual({
		min: config.canvasWidth - config.canvasWidth * 0.15,
		max: config.canvasWidth,
	});
});

test('prepare x range for max height >= 80 and < 150', () => {
	const [rangeOne, rangeTwo] = prepareXRange(100);
	expect(rangeOne).toEqual({
		min: config.canvasWidth * 0.15,
		max: config.canvasWidth * 0.2,
	});
	expect(rangeTwo).toEqual({
		min: config.canvasWidth - config.canvasWidth * 0.2,
		max: config.canvasWidth - config.canvasWidth * 0.15,
	});
});

test('prepare x range for max height >= 150 and < 200', () => {
	const [rangeOne, rangeTwo] = prepareXRange(180);
	expect(rangeOne).toEqual({
		min: config.canvasWidth * 0.2,
		max: config.canvasWidth * 0.35,
	});
	expect(rangeTwo).toEqual({
		min: config.canvasWidth - config.canvasWidth * 0.35,
		max: config.canvasWidth - config.canvasWidth * 0.2,
	});
});

test('prepare x range for max height >= 200 and < 230', () => {
	const [range] = prepareXRange(220);
	expect(range).toEqual({
		min: config.canvasWidth * 0.35,
		max: config.canvasWidth - config.canvasWidth * 0.35,
	});
});

test('prepare x range for max height >= 230 and < 300', () => {
	const [range] = prepareXRange(250);
	expect(range).toEqual({
		min: config.canvasWidth * 0.4,
		max: config.canvasWidth - config.canvasWidth * 0.4,
	});
});
