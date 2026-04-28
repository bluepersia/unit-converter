import type { ConversionResult } from "./UnitConverter.types";
import {
  meterToFeet,
  feetToMeter,
  literToGallon,
  gallonToLiter,
  kgToPound,
  poundToKg,
} from "./UnitConverter.consts.js";

function convert(value: number): ConversionResult {
  return {
    feet: round(value * meterToFeet),
    meters: round(value * feetToMeter),
    gallons: round(value * literToGallon),
    liters: round(value * gallonToLiter),
    pounds: round(value * kgToPound),
    kilos: round(value * poundToKg),
  };
}

function round(value: number): number {
  return Math.round(value * 1000) / 1000;
}

export { convert };
