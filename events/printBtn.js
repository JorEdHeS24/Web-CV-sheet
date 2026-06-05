
const printBtn = document.getElementById("print-button");

if (printBtn) {
    printBtn.addEventListener("click", () => {
        window.print();
    });
}
