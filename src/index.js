import './styles/index.css';
import {
	config,
	getRandomNumber,
	getRandomWindowColor,
	prepareBuildings,
} from './utils';

const { intervalTime, isIntervalEnabled, canvasHeight, canvasWidth } = config;

const clearBtn = document.getElementById('clearBtn');
const stopBtn = document.getElementById('stopBtn');
const startBtn = document.getElementById('startBtn');
const coordinates = document.getElementById('coordinates');
const canvas = document.getElementById('canvas');

canvas.width = canvasWidth;
canvas.height = canvasHeight;
stopBtn.disabled = true;

const ctx = canvas.getContext('2d');

let intervalId = null;
const startY = canvasHeight;
const buildings = prepareBuildings();

const draw = (startX, startY, drawWidth, drawHeight, color) => {
	ctx.fillStyle = color;
	ctx.fillRect(startX, startY - drawHeight, drawWidth, drawHeight);
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
	draw(startX, startY, width, height, color);

	let startWindowY = startY - windowBottomPadding;

	let startWindowX = startX + windowRowPadding;

	// draw windows
	for (let index = 0; index < windowRowCount; index++) {
		for (let i = 1; i <= windowCountInRow; i++) {
			draw(
				startWindowX,
				startWindowY,
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

clearBtn.addEventListener('click', () => {
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
});

stopBtn.addEventListener('click', () => {
	clearInterval(intervalId);
	intervalId = null;
	stopBtn.disabled = true;
	startBtn.disabled = false;
});

startBtn.addEventListener('click', () => {
	if (isIntervalEnabled) {
		stopBtn.disabled = false;
		startBtn.disabled = true;
		intervalId = setInterval(drawBuilding, intervalTime);
	} else {
		drawBuilding();
	}
});

canvas.addEventListener('mousemove', (event) => {
	coordinates.innerHTML = `X: ${event.layerX} Y: ${event.layerY}`;
});
