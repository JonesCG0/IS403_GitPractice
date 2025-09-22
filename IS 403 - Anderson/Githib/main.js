(function () {
    const yearSpan = document.getElementById("year");
    const costOutput = document.getElementById("costOutput");
    const upgradeOutput = document.getElementById("upgradeOutput");
    const toggles = Array.from(document.querySelectorAll(".toggle input[type='checkbox']"));

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    function formatCurrency(value) {
        return value.toLocaleString("en-US", { minimumFractionDigits: 0 });
    }

    function updateUpgrades() {
        const selected = toggles.filter((input) => input.checked);
        const names = selected.map((input) => input.dataset.upgrade);
        const total = selected.reduce((sum, input) => sum + Number(input.dataset.cost || 0), 0);

        upgradeOutput.textContent = names.length ? names.join(", ") : "None yet";
        costOutput.textContent = formatCurrency(total);
    }

    toggles.forEach((input) => {
        input.addEventListener("change", () => {
            updateUpgrades();
            const label = input.closest(".toggle");
            if (!label) {
                return;
            }
            label.classList.toggle("toggle--active", input.checked);
        });
    });

    updateUpgrades();
})();
