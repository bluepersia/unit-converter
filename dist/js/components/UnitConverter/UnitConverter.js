import { convert } from "./UnitConverter.utils.js";
export default function UnitConverter(root) {
    const form = root.querySelector("[data-form]");
    const lengthEl = root.querySelector("[data-length]");
    const volumeEl = root.querySelector("[data-volume]");
    const massEl = root.querySelector("[data-mass]");
    form.addEventListener("submit", handleSubmit);
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const value = Number(formData.get("value"));
        const result = convert(value);
        renderResults(value, result);
    }
    function renderResults(value, result) {
        lengthEl.textContent = `${value} meters = ${result.feet} feet | ${value} feet = ${result.meters} meters`;
        volumeEl.textContent = `${value} liters = ${result.gallons} gallons | ${value} gallons = ${result.liters} liters`;
        massEl.textContent = `${value} kilos = ${result.pounds} pounds | ${value} pounds = ${result.kilos} kilos`;
    }
}
