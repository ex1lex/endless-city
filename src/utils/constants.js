import { config } from './configs';

const sunsetXRangeWidth = config.canvasWidth / 13;

const _MOON_COORDINATES = [
	{
		hour: 20,
		x: 0,
		y: Math.floor(config.canvasHeight / 2.5),
		color: 'white',
	},
	{
		hour: 21,
		x: sunsetXRangeWidth * 1 - (sunsetXRangeWidth - 50) / 2,
		y: Math.floor(config.canvasHeight / 3.5),
		color: 'white',
	},
	{
		hour: 22,
		x: sunsetXRangeWidth * 2 - (sunsetXRangeWidth - 50) / 2,
		y: Math.floor(config.canvasHeight / 4),
		color: 'white',
	},
	{
		hour: 23,
		x: sunsetXRangeWidth * 3 - (sunsetXRangeWidth - 50) / 2,
		y: Math.floor(config.canvasHeight / 4.3),
		color: 'white',
	},
	{
		hour: 0,
		x: sunsetXRangeWidth * 4 - (sunsetXRangeWidth - 50) / 2,
		y: Math.floor(config.canvasHeight / 4.5),
		color: 'white',
	},
	{
		hour: 1,
		x: sunsetXRangeWidth * 5.5 - (sunsetXRangeWidth - 50) / 2,
		y: Math.floor(config.canvasHeight / 4.7),
		color: 'white',
	},
	{
		hour: 2,
		x: sunsetXRangeWidth * 6.5 - (sunsetXRangeWidth - 50) / 2,
		y: Math.floor(config.canvasHeight / 4.7),
		color: 'white',
	},
	{
		hour: 3,
		x: sunsetXRangeWidth * 8 - (sunsetXRangeWidth - 50) / 2,
		y: Math.floor(config.canvasHeight / 4.5),
		color: 'white',
	},
	{
		hour: 4,
		x: sunsetXRangeWidth * 9 - (sunsetXRangeWidth - 50) / 2,
		y: Math.floor(config.canvasHeight / 4.3),
		color: 'white',
	},
	{
		hour: 5,
		x: sunsetXRangeWidth * 10 - (sunsetXRangeWidth - 50) / 2,
		y: Math.floor(config.canvasHeight / 4),
		color: 'white',
	},
	{
		hour: 6,
		x: sunsetXRangeWidth * 11 - (sunsetXRangeWidth - 50) / 2,
		y: Math.floor(config.canvasHeight / 3.5),
		color: 'white',
	},
	{
		hour: 7,
		x: sunsetXRangeWidth * 12,
		y: Math.floor(config.canvasHeight / 2.5),
		color: 'white',
	},
];

const _SUNSET_COORDINATES = [
	{
		hour: 8,
		x: 0,
		y: Math.floor(config.canvasHeight / 2.5),
		color: 'yellow',
	},
	{
		hour: 9,
		x: sunsetXRangeWidth * 1 - (sunsetXRangeWidth - 50) / 2,
		y: Math.floor(config.canvasHeight / 3.5),
		color: 'yellow',
	},
	{
		hour: 10,
		x: sunsetXRangeWidth * 2 - (sunsetXRangeWidth - 50) / 2,
		y: Math.floor(config.canvasHeight / 4),
		color: 'yellow',
	},
	{
		hour: 11,
		x: sunsetXRangeWidth * 3 - (sunsetXRangeWidth - 50) / 2,
		y: Math.floor(config.canvasHeight / 4.3),
		color: 'yellow',
	},
	{
		hour: 12,
		x: sunsetXRangeWidth * 4 - (sunsetXRangeWidth - 50) / 2,
		y: Math.floor(config.canvasHeight / 4.5),
		color: 'yellow',
	},
	{
		hour: 13,
		x: sunsetXRangeWidth * 5.5 - (sunsetXRangeWidth - 50) / 2,
		y: Math.floor(config.canvasHeight / 4.7),
		color: 'yellow',
	},
	{
		hour: 14,
		x: sunsetXRangeWidth * 6.5 - (sunsetXRangeWidth - 50) / 2,
		y: Math.floor(config.canvasHeight / 4.7),
		color: 'yellow',
	},
	{
		hour: 15,
		x: sunsetXRangeWidth * 8 - (sunsetXRangeWidth - 50) / 2,
		y: Math.floor(config.canvasHeight / 4.5),
		color: 'yellow',
	},
	{
		hour: 16,
		x: sunsetXRangeWidth * 9 - (sunsetXRangeWidth - 50) / 2,
		y: Math.floor(config.canvasHeight / 4.3),
		color: 'yellow',
	},
	{
		hour: 17,
		x: sunsetXRangeWidth * 10 - (sunsetXRangeWidth - 50) / 2,
		y: Math.floor(config.canvasHeight / 4),
		color: 'yellow',
	},
	{
		hour: 18,
		x: sunsetXRangeWidth * 11 - (sunsetXRangeWidth - 50) / 2,
		y: Math.floor(config.canvasHeight / 3.5),
		color: 'yellow',
	},
	{
		hour: 19,
		x: sunsetXRangeWidth * 12,
		y: Math.floor(config.canvasHeight / 2.5),
		color: 'yellow',
	},
];

const _HEAVENLY_BODY_COORDINATES = [
	..._SUNSET_COORDINATES,
	..._MOON_COORDINATES,
];

export const HEAVENLY_BODY_COORDINATES = _HEAVENLY_BODY_COORDINATES.sort(
	(firstItem, secondItem) => firstItem.hour - secondItem.hour
);

export const SKY_COLORS = [
	'rgba(20, 0, 133, 1)',
	'rgba(20, 0, 133, 1)',
	'rgba(20, 0, 133, 1)',
	'rgba(20, 0, 133, 1)',
	'rgba(27, 0, 179, 1)',
	'rgba(27, 0, 179, 1)',
	'rgba(36, 123, 255, 1)',
	'rgba(36, 123, 255, 1)',
	'rgba(163, 200, 255, 1)',
	'rgba(163, 200, 255, 1)',
	'rgba(163, 200, 255, 1)',
	'rgba(163, 200, 255, 1)',
	'rgba(163, 200, 255, 1)',
	'rgba(163, 200, 255, 1)',
	'rgba(163, 200, 255, 1)',
	'rgba(163, 200, 255, 1)',
	'rgba(163, 200, 255, 1)',
	'rgba(36, 123, 255, 1)',
	'rgba(36, 123, 255, 1)',
	'rgba(36, 123, 255, 1)',
	'rgba(36, 123, 255, 1)',
	'rgba(20, 0, 133, 1)',
	'rgba(20, 0, 133, 1)',
	'rgba(27, 0, 179, 1)',
];
