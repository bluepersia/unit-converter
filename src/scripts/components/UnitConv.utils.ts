import {
  FEET_TO_METERS,
  GALLONS_TO_LITERS,
  KILOS_TO_POUNDS,
  LITERS_TO_GALLONS,
  METERS_TO_FEET,
  POUNDS_TO_KILOS,
} from "./UnitConv.consts.js";
import type { ConversionResults } from "./UnitConv.types";

function convertValue(value: number): ConversionResults {
  const result: ConversionResults = {
    feet: Math.round(value * METERS_TO_FEET * 100) / 100,
    meters: Math.round(value * FEET_TO_METERS * 100) / 100,
    gallons: Math.round(value * LITERS_TO_GALLONS * 100) / 100,
    liters: Math.round(value * GALLONS_TO_LITERS * 100) / 100,
    pounds: Math.round(value * KILOS_TO_POUNDS * 100) / 100,
    kilos: Math.round(value * POUNDS_TO_KILOS * 100) / 100,
  };

  return result;
}

function generateLengthText(
  value: number,
  feet: number,
  meters: number,
): string {
  return `${value} meters = ${feet} feet | ${value} feet = ${meters} meters`;
}

function generateVolumeText(
  value: number,
  gallons: number,
  liters: number,
): string {
  return `${value} liters = ${gallons} gallons | ${value} gallons = ${liters} liters`;
}

function generateMassText(
  value: number,
  pounds: number,
  kilos: number,
): string {
  return `${value} kilos = ${pounds} pounds | ${value} pounds = ${kilos} kilos`;
}

export {
  convertValue,
  generateLengthText,
  generateVolumeText,
  generateMassText,
};
