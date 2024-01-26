import './styles/index.css';
import {
	HEAVENLY_BODY_COORDINATES,
	config,
	getRandomNumber,
	getRandomWindowColor,
	getSkyColorByNumber,
	prepareBuildings,
} from './utils';

const { intervalTime, canvasHeight, canvasWidth } = config;

const canvas = document.getElementById('canvas');
const canvasBackground = document.getElementById('canvas__background');

canvas.width = canvasWidth;
canvas.height = canvasHeight;
canvasBackground.width = canvasWidth;
canvasBackground.height = canvasHeight;

const mainCtx = canvas.getContext('2d');
const backgroundCtx = canvasBackground.getContext('2d');

const startY = canvasHeight;
const buildings = prepareBuildings();

const draw = (ctx, startX, startY, drawWidth, drawHeight, color) => {
	ctx.fillStyle = color;
	ctx.fillRect(startX, startY, drawWidth, drawHeight);
};

const drawBuilding = () => {
	const numberOfBuilding = getRandomNumber(0, buildings.length - 1);
	const building = buildings[numberOfBuilding];
	const {
		width,
		height,
		color,
		windowWidth,
		windowHeight,
		windowSeparator,
		windowRowCount,
		windowCountInRow,
		windowRowSeparator,
		windowBottomPadding,
		windowRowPadding,
		minStartX,
		maxStartX,
	} = building;

	const startX = getRandomNumber(minStartX, maxStartX);

	// draw building
	draw(mainCtx, startX, startY - height, width, height, color);

	let startWindowY = startY - windowBottomPadding;

	let startWindowX = startX + windowRowPadding;

	// draw windows
	for (let index = 0; index < windowRowCount; index++) {
		for (let i = 1; i <= windowCountInRow; i++) {
			draw(
				mainCtx,
				startWindowX,
				startWindowY - windowHeight,
				windowWidth,
				windowHeight,
				getRandomWindowColor()
			);
			startWindowX = startWindowX + (windowWidth + windowSeparator);
		}
		startWindowX = startX + windowRowPadding;
		startWindowY = startWindowY - windowRowSeparator - windowHeight;
	}
};

const drawSky = () => {
	const skyIndex = new Date().getHours();

	// clear canvas
	backgroundCtx.clearRect(0, 0, canvasWidth, canvasHeight);

	// draw sky
	const skyColor = getSkyColorByNumber(skyIndex);
	draw(backgroundCtx, 0, 0, canvasWidth, canvasHeight, skyColor);

	// draw sunset or moon
	const { x, y, color } = HEAVENLY_BODY_COORDINATES[skyIndex];
	draw(backgroundCtx, x, y, 50, 50, color);
};

setInterval(drawBuilding, intervalTime);
setInterval(drawSky, intervalTime);
