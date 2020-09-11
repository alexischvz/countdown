import countdown from "./module/countdown.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    countdown("form-countdown", ".caja", ".countdown");
})