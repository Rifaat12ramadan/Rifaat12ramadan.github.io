let pieces = document.querySelector(".battery-content .pieces");

let battery_status = document.createElement("div");
battery_status.className = "battery-level";
battery_status.dataset.battery = "charge";


navigator.getBattery().then((ele) => {

    // Default :
    if (ele.charging) {
        battery_status.textContent = "Charging...";
        document.body.append(battery_status);
    }

    // When charge status change :
    ele.addEventListener("chargingchange", () => {
        battery_status.remove();

        if (ele.charging) {
            battery_status.textContent = "Charging...";
            document.body.append(battery_status);
        }

    });

    // Default :
    let text_level = document.createElement("div");
    text_level.className = "battery-level";
    text_level.dataset.battery = "level";

    text_level.textContent = `${Math.round(ele.level * 100)}%`;
    document.body.append(text_level);

    for (let i = 0; i < Math.floor(ele.level * 10); i++) {
        let piece = document.createElement("div");
        pieces.append(piece);

        if (Math.round(ele.level * 100) < 30) {
            piece.className = "poor";
        }
        if (Math.round(ele.level * 100) < 50 && Math.round(ele.level * 100) >= 30) {
            piece.className = "normal";
        }
        if (Math.round(ele.level * 100) < 70 && Math.round(ele.level * 100) >= 50) {
            piece.className = "good";
        }
        if (Math.round(ele.level * 100) <= 100 && Math.round(ele.level * 100) >= 70) {
            piece.className = "excelent";
        }
    }


    // When battery level change : 
    ele.addEventListener("levelchange", () => {
        text_level.remove();

        if (
            Math.round(ele.level * 100) === 10 ||
            Math.round(ele.level * 100) === 20 ||
            Math.round(ele.level * 100) === 30 ||
            Math.round(ele.level * 100) === 40 ||
            Math.round(ele.level * 100) === 50 ||
            Math.round(ele.level * 100) === 60 ||
            Math.round(ele.level * 100) === 70 ||
            Math.round(ele.level * 100) === 80 ||
            Math.round(ele.level * 100) === 90 ||
            Math.round(ele.level * 100) === 100) {

            let piece = document.createElement("div");
            if (ele.charging) {
                pieces.append(piece);
            }
        }

        let getpiece = document.querySelectorAll(".battery-content .pieces div");
        // First Option :
        if (Math.round(ele.level * 100) < 30) {
            getpiece.forEach((ele) => {
                ele.className = "poor";
            });
        }

        // Second Option :
        if (Math.round(ele.level * 100) < 50 && Math.round(ele.level * 100) >= 30) {
            getpiece.forEach((ele) => {
                ele.className = "normal";
            });
        }

        // Third Option:
        if (Math.round(ele.level * 100) < 70 && Math.round(ele.level * 100) >= 50) {
            getpiece.forEach((ele) => {
                ele.className = "good";
            });
        }

        // Fourth Option :
        if (Math.round(ele.level * 100) <= 100 && Math.round(ele.level * 100) >= 70) {
            getpiece.forEach((ele) => {
                ele.className = "excelent";
            });
        }

        if (
            Math.round(ele.level * 100) === 9 ||
            Math.round(ele.level * 100) === 19 ||
            Math.round(ele.level * 100) === 29 ||
            Math.round(ele.level * 100) === 39 ||
            Math.round(ele.level * 100) === 49 ||
            Math.round(ele.level * 100) === 59 ||
            Math.round(ele.level * 100) === 69 ||
            Math.round(ele.level * 100) === 79 ||
            Math.round(ele.level * 100) === 89 ||
            Math.round(ele.level * 100) === 99) {
            let getpiece = document.querySelectorAll(".battery-content .pieces div");
            if (!ele.charging) {
                pieces.removeChild(getpiece[getpiece.length - 1]);
            }
        }

        text_level.textContent = `${Math.round(ele.level * 100)}%`;
        document.body.append(text_level);
    });

});