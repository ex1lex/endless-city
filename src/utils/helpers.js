import { config } from './configs';
import { SKY_COLORS } from './constants';

export const getRandomColor = () => {
	var hue = Math.floor(Math.random() * 360);
	var saturation = Math.floor(Math.random() * 21) + 20;
	var lightness = Math.floor(Math.random() * 21) + 20;
	return 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
};

export const getRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomWindowColor = () => {
	const colors = ['gray', 'darkgray', 'yellow', 'orange'];
	return colors[getRandomNumber(0, colors.length - 1)];
};

export const shuffleArray = (array) => {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
};

export const createNewBuilding = (index, drawWidth, drawHeight, range) => {
	const drawWindowWidth = getRandomNumber(2, 6);
	const drawWindowHeight = getRandomNumber(2, 6);
	const drawBottomPadding = getRandomNumber(4, 10);
	const drawWindowRowSeparator = getRandomNumber(2, 6);
	const drawWindowSeparator = getRandomNumber(2, 6);
	const drawWindowCountInRow = Math.floor(
		(drawWidth - drawWindowSeparator) / (drawWindowWidth + drawWindowSeparator)
	);
	const drawWindowRowCount = Math.floor(
		(drawHeight - drawBottomPadding) /
			(drawWindowHeight + drawWindowRowSeparator)
	);
	const drawWindowRowPadding =
		(drawWidth -
			(drawWindowCountInRow * drawWindowWidth +
				(drawWindowCountInRow - 1) * drawWindowSeparator)) /
		2;

	const { min, max } = range[getRandomNumber(0, range.length - 1)];

	return {
		id: `building_${index}`,
		width: drawWidth,
		height: drawHeight,
		color: getRandomColor(),
		windowWidth: drawWindowWidth,
		windowHeight: drawWindowHeight,
		windowSeparator: drawWindowSeparator,
		windowRowSeparator: drawWindowRowSeparator,
		windowCountInRow: drawWindowCountInRow,
		windowRowCount: drawWindowRowCount,
		windowBottomPadding: drawBottomPadding,
		windowRowPadding: drawWindowRowPadding,
		minStartX: min,
		maxStartX: max,
	};
};

export const prepareXRange = (drawHeight) => {
	const ranges = [];
	switch (true) {
		case drawHeight > 50 && drawHeight < 80:
			ranges.push(
				{
					min: 0,
					max: config.canvasWidth * 0.15,
				},
				{
					min: config.canvasWidth - config.canvasWidth * 0.15,
					max: config.canvasWidth,
				}
			);
			break;
		case drawHeight >= 80 && drawHeight < 150:
			ranges.push(
				{
					min: config.canvasWidth * 0.15,
					max: config.canvasWidth * 0.2,
				},
				{
					min: config.canvasWidth - config.canvasWidth * 0.2,
					max: config.canvasWidth - config.canvasWidth * 0.15,
				}
			);
			break;
		case drawHeight >= 150 && drawHeight < 200:
			ranges.push(
				{
					min: config.canvasWidth * 0.2,
					max: config.canvasWidth * 0.35,
				},
				{
					min: config.canvasWidth - config.canvasWidth * 0.35,
					max: config.canvasWidth - config.canvasWidth * 0.2,
				}
			);
			break;
		case drawHeight >= 200:
			ranges.push({
				min: config.canvasWidth * 0.35,
				max: config.canvasWidth - config.canvasWidth * 0.35,
			});
			break;
		case drawHeight >= 230 && drawHeight < 300:
			ranges.push({
				min: config.canvasWidth * 0.4,
				max: config.canvasWidth - config.canvasWidth * 0.4,
			});
			break;

		default:
			ranges.push({
				min: 0,
				max: config.canvasWidth,
			});
			break;
	}
	return ranges;
};

export const prepareBuildings = () => {
	const _buildings = [];
	const SIZES = [
		...prepareNewBuildingSizes(20, 10, 20, 10, 50),
		...prepareNewBuildingSizes(20, 10, 40, 20, 60),
		...prepareNewBuildingSizes(20, 20, 30, 40, 150),
		...prepareNewBuildingSizes(20, 10, 40, 140, 250),
		...prepareNewBuildingSizes(10, 10, 40, 240, 320),
	];
	for (let index = 0; index < SIZES.length; index++) {
		const { width, height } = SIZES[index];
		_buildings.push(
			createNewBuilding(index, width, height, prepareXRange(height))
		);
	}

	return shuffleArray(_buildings);
};

export const prepareNewBuildingSizes = (
	count,
	minWidth,
	maxWidth,
	minHeight,
	maxHeight
) => {
	const newBuildings = [];
	for (let index = 0; index < count; index++) {
		newBuildings.push({
			width: getRandomNumber(minWidth, maxWidth),
			height: getRandomNumber(minHeight, maxHeight),
		});
	}
	return newBuildings;
};

export const getSkyColorByNumber = (numberOfSky) => {
	return SKY_COLORS[numberOfSky];
};
