import type { ConversionResult } from "./UnitConverter.types";
import { convert } from "./UnitConverter.utils.js";

export default function UnitConverter(root: HTMLElement): void {
  const form = root.querySelector<HTMLFormElement>("[data-form]")!;
  const lengthEl = root.querySelector("[data-length]")!;
  const volumeEl = root.querySelector("[data-volume]")!;
  const massEl = root.querySelector("[data-mass]")!;

  form.addEventListener("submit", handleSubmit);

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    const formData: FormData = new FormData(e.target as HTMLFormElement);

    const value = Number(formData.get("value"));
    const result: ConversionResult = convert(value);

    renderResults(value, result);
  }

  function renderResults(value: number, result: ConversionResult) {
    lengthEl.textContent = `${value} meters = ${result.feet} feet | ${value} feet = ${result.meters} meters`;
    volumeEl.textContent = `${value} liters = ${result.gallons} gallons | ${value} gallons = ${result.liters} liters`;
    massEl.textContent = `${value} kilos = ${result.pounds} pounds | ${value} pounds = ${result.kilos} kilos`;
  }
}
