import type { ConversionResults } from "./UnitConv.types";
import {
  convertValue,
  generateLengthText,
  generateMassText,
  generateVolumeText,
} from "./UnitConv.utils.js";

export default function UnitConv(root: HTMLElement): void {
  const formEl: HTMLFormElement =
    root.querySelector<HTMLFormElement>("[data-form]")!;

  const lengthEl: HTMLElement = root.querySelector("[data-length]")!;
  const volumeEl: HTMLElement = root.querySelector("[data-volume]")!;
  const massEl: HTMLElement = root.querySelector("[data-mass]")!;

  formEl.addEventListener("submit", handleSubmit);

  function handleSubmit(e: SubmitEvent): void {
    e.preventDefault();

    if (!(e.target instanceof HTMLFormElement)) return;

    const formData: FormData = new FormData(e.target);

    const value = Number(formData.get("value"));

    const conversionResults: ConversionResults = convertValue(value);

    renderConversion(value, conversionResults);
  }

  function renderConversion(value: number, result: ConversionResults): void {
    lengthEl.textContent = generateLengthText(
      value,
      result.feet,
      result.meters,
    );

    volumeEl.textContent = generateVolumeText(
      value,
      result.gallons,
      result.liters,
    );

    massEl.textContent = generateMassText(value, result.pounds, result.kilos);
  }
}
