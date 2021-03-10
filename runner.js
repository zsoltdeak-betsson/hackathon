let gridSelect;
// race 2
// const moves = [{ "x": 53, "y": 44 }, { "x": 52, "y": 44 }, { "x": 50, "y": 44 }, { "x": 47, "y": 44 }, { "x": 43, "y": 44 }, { "x": 38, "y": 44 }, { "x": 32, "y": 44 }, { "x": 27, "y": 44 }, { "x": 22, "y": 44 }, { "x": 18, "y": 44 }, { "x": 15, "y": 43 }, { "x": 13, "y": 41 }, { "x": 11, "y": 38 }, { "x": 9, "y": 34 }, { "x": 7, "y": 30 }, { "x": 6, "y": 27 }, { "x": 6, "y": 25 }, { "x": 7, "y": 23 }, { "x": 9, "y": 21 }, { "x": 12, "y": 20 }, { "x": 16, "y": 18 }, { "x": 21, "y": 16 }, { "x": 26, "y": 14 }, { "x": 30, "y": 12 }, { "x": 35, "y": 10 }, { "x": 41, "y": 7 }, { "x": 46, "y": 5 }, { "x": 50, "y": 4 }, { "x": 53, "y": 4 }, { "x": 55, "y": 5 }, { "x": 56, "y": 7 }, { "x": 57, "y": 10 }, { "x": 58, "y": 12 }, { "x": 59, "y": 14 }, { "x": 61, "y": 15 }, { "x": 64, "y": 15 }, { "x": 68, "y": 15 }, { "x": 73, "y": 15 }, { "x": 77, "y": 15 }, { "x": 81, "y": 16 }, { "x": 84, "y": 17 }, { "x": 86, "y": 18 }, { "x": 87, "y": 19 }, { "x": 87, "y": 20 }, { "x": 86, "y": 20 }, { "x": 85, "y": 21 }, { "x": 85, "y": 22 }, { "x": 85, "y": 24 }, { "x": 86, "y": 25 }, { "x": 87, "y": 26 }, { "x": 88, "y": 27 }, { "x": 88, "y": 29 }, { "x": 87, "y": 30 }, { "x": 85, "y": 32 }, { "x": 84, "y": 34 }, { "x": 84, "y": 35 }, { "x": 85, "y": 36 }, { "x": 87, "y": 38 }, { "x": 88, "y": 39 }, { "x": 88, "y": 40 }, { "x": 87, "y": 41 }, { "x": 85, "y": 41 }, { "x": 82, "y": 41 }, { "x": 78, "y": 41 }, { "x": 73, "y": 41 }, { "x": 68, "y": 41 }, { "x": 64, "y": 41 }, { "x": 60, "y": 41 }, { "x": 56, "y": 41 }];

// race 3
// const moves = [{ "x": 17, "y": 29 }, { "x": 17, "y": 28 }, { "x": 17, "y": 26 }, { "x": 17, "y": 23 }, { "x": 17, "y": 19 }, { "x": 17, "y": 16 }, { "x": 18, "y": 14 }, { "x": 20, "y": 13 }, { "x": 23, "y": 13 }, { "x": 27, "y": 13 }, { "x": 31, "y": 13 }, { "x": 36, "y": 14 }, { "x": 41, "y": 16 }, { "x": 46, "y": 19 }, { "x": 51, "y": 22 }, { "x": 56, "y": 25 }, { "x": 62, "y": 28 }, { "x": 67, "y": 30 }, { "x": 71, "y": 31 }, { "x": 76, "y": 31 }, { "x": 80, "y": 31 }, { "x": 84, "y": 31 }, { "x": 87, "y": 32 }, { "x": 89, "y": 34 }, { "x": 90, "y": 36 }, { "x": 90, "y": 37 }, { "x": 89, "y": 39 }, { "x": 87, "y": 40 }, { "x": 84, "y": 40 }, { "x": 81, "y": 40 }, { "x": 79, "y": 40 }, { "x": 77, "y": 39 }, { "x": 74, "y": 38 }, { "x": 70, "y": 36 }, { "x": 65, "y": 33 }, { "x": 60, "y": 31 }, { "x": 56, "y": 29 }, { "x": 53, "y": 28 }, { "x": 50, "y": 27 }, { "x": 48, "y": 27 }, { "x": 46, "y": 27 }, { "x": 45, "y": 28 }, { "x": 45, "y": 29 }, { "x": 45, "y": 31 }, { "x": 45, "y": 34 }, { "x": 45, "y": 37 }, { "x": 45, "y": 39 }, { "x": 45, "y": 40 }, { "x": 44, "y": 40 }, { "x": 42, "y": 40 }, { "x": 39, "y": 40 }, { "x": 36, "y": 40 }, { "x": 32, "y": 39 }, { "x": 27, "y": 38 }, { "x": 23, "y": 38 }, { "x": 19, "y": 37 }, { "x": 16, "y": 35 }, { "x": 14, "y": 34 }, { "x": 13, "y": 33 }, { "x": 13, "y": 31 }];
// const moves = [{ "x": 17, "y": 29 }, { "x": 17, "y": 28 }, { "x": 17, "y": 26 }, { "x": 17, "y": 23 }, { "x": 18, "y": 19 }, { "x": 18, "y": 16 }, { "x": 19, "y": 14 }, { "x": 21, "y": 13 }, { "x": 24, "y": 13 }, { "x": 28, "y": 12 }, { "x": 33, "y": 11 }, { "x": 39, "y": 11 }, { "x": 46, "y": 10 }, { "x": 53, "y": 9 }, { "x": 59, "y": 9 }, { "x": 64, "y": 10 }, { "x": 68, "y": 11 }, { "x": 71, "y": 13 }, { "x": 73, "y": 16 }, { "x": 74, "y": 20 }, { "x": 75, "y": 24 }, { "x": 77, "y": 27 }, { "x": 80, "y": 29 }, { "x": 84, "y": 31 }, { "x": 87, "y": 32 }, { "x": 89, "y": 34 }, { "x": 90, "y": 37 }, { "x": 90, "y": 39 }, { "x": 89, "y": 40 }, { "x": 87, "y": 40 }, { "x": 84, "y": 40 }, { "x": 81, "y": 40 }, { "x": 77, "y": 39 }, { "x": 74, "y": 38 }, { "x": 70, "y": 36 }, { "x": 65, "y": 33 }, { "x": 60, "y": 30 }, { "x": 55, "y": 28 }, { "x": 51, "y": 27 }, { "x": 48, "y": 27 }, { "x": 46, "y": 27 }, { "x": 45, "y": 28 }, { "x": 45, "y": 30 }, { "x": 45, "y": 33 }, { "x": 45, "y": 36 }, { "x": 45, "y": 38 }, { "x": 45, "y": 40 }, { "x": 44, "y": 41 }, { "x": 42, "y": 41 }, { "x": 39, "y": 40 }, { "x": 36, "y": 40 }, { "x": 32, "y": 39 }, { "x": 27, "y": 38 }, { "x": 22, "y": 37 }, { "x": 18, "y": 36 }, { "x": 15, "y": 34 }, { "x": 13, "y": 31 }];

// race 4
// const moves = [{ "x": 17, "y": 29 }, { "x": 17, "y": 28 }, { "x": 17, "y": 26 }, { "x": 17, "y": 23 }, { "x": 17, "y": 20 }, { "x": 17, "y": 17 }, { "x": 18, "y": 15 }, { "x": 20, "y": 14 }, { "x": 23, "y": 13 }, { "x": 27, "y": 13 }, { "x": 32, "y": 12 }, { "x": 36, "y": 12 }, { "x": 40, "y": 13 }, { "x": 43, "y": 15 }, { "x": 47, "y": 18 }, { "x": 52, "y": 22 }, { "x": 58, "y": 25 }, { "x": 63, "y": 28 }, { "x": 69, "y": 30 }, { "x": 74, "y": 31 }, { "x": 78, "y": 31 }, { "x": 82, "y": 31 }, { "x": 85, "y": 31 }, { "x": 87, "y": 32 }, { "x": 88, "y": 34 }, { "x": 89, "y": 35 }, { "x": 89, "y": 37 }, { "x": 88, "y": 39 }, { "x": 86, "y": 40 }, { "x": 83, "y": 40 }, { "x": 79, "y": 40 }, { "x": 75, "y": 39 }, { "x": 71, "y": 37 }, { "x": 67, "y": 34 }, { "x": 63, "y": 32 }, { "x": 58, "y": 30 }, { "x": 54, "y": 28 }, { "x": 51, "y": 27 }, { "x": 48, "y": 27 }, { "x": 46, "y": 27 }, { "x": 45, "y": 28 }, { "x": 45, "y": 30 }, { "x": 45, "y": 33 }, { "x": 45, "y": 36 }, { "x": 45, "y": 38 }, { "x": 45, "y": 39 }, { "x": 44, "y": 40 }, { "x": 42, "y": 40 }, { "x": 39, "y": 40 }, { "x": 35, "y": 40 }, { "x": 31, "y": 39 }, { "x": 27, "y": 38 }, { "x": 23, "y": 38 }, { "x": 19, "y": 38 }, { "x": 16, "y": 38 }, { "x": 14, "y": 38 }, { "x": 13, "y": 37 }, { "x": 13, "y": 35 }, { "x": 13, "y": 33 }, { "x": 13, "y": 31 }];
const moves = [{ "x": 17, "y": 29 }, { "x": 17, "y": 28 }];


const currentPosClass = "currentPosition";
const interNextClass = "interpolatedNext";
let velocity = { x: 0, y: 0 };
let lastBonusId = undefined;
let lastInterNext = 0;
let bonusCounter = 0;

// onready
$(
    function () {
        gridSelect = $("#grid");


        makeMap();

        const startPos = moves[0];
        const startId = startPos.y * grid.width + startPos.x;
        $(`#${startId}`).addClass(currentPosClass);

        for (let step = 1; step < moves.length; step++) {
            const current = moves[step];
            const last = moves[step - 1]
            validateStep(current, last);
            const currentId = current.y * grid.width + current.x;
            $(`#${currentId}`).addClass(currentPosClass);

            const nextVelX = current.x - last.x;
            const nextVelY = current.y - last.y;
            const prevId = last.y * grid.width + last.x;
            if ($(`#${prevId}`).hasClass("bonus") && (nextVelX !== velocity.x || nextVelY !== velocity.y)) {
                bonusCounter++;
                lastBonusId = prevId;
            }
            velocity = { x: nextVelX, y: nextVelY };
        }
        printInterNext();
        console.log(`current bonus count ${bonusCounter}`);
    }
);

function printInterNext() {
    $(`#${lastInterNext}`).removeClass(interNextClass);

    const lastPos = moves[moves.length - 1];
    const interpolatedNextPosX = lastPos.x + velocity.x;
    const interpolatedNextPosY = lastPos.y + velocity.y;
    lastInterNext = interpolatedNextPosY * grid.width + interpolatedNextPosX;
    console.log(`interpolated x: ${interpolatedNextPosX} y: ${interpolatedNextPosY}`);
    $(`#${lastInterNext}`).addClass(interNextClass);
}

function validateStep(next, previous) {
    if (Math.abs(velocity.x + previous.x - next.x) > 1) {
        alert(`step x: ${next.x} y: ${next.y} is invalid for x`);
    }
    if (Math.abs(velocity.y + previous.y - next.y) > 1) {
        alert(`step x: ${next.x} y: ${next.y} is invalid for y`);
    }
}

function makeMap() {
    for (let y = 0; y < grid.height; y++) {
        for (let x = 0; x < grid.width; x++) {
            const id = y * grid.width + x;
            let category = "track";
            switch (grid.grid[id]) {
                case 0:
                    category = "off";
                    break;
                case 1:
                    category = "track";
                    break;
                case 2:
                    category = "startln";
                    console.log("startln " + id + " y=" + y + " x=" + x);
                    break;
                case 3:
                    category = "finishln";
                    break;
                case 4:
                    category = "bonus";
                    break;
                // case 5:
                //     color = "aquamarine";
                //     break;
                default:
                    category = "track";
                    break;

            }
            gridSelect.append(`<span id="${id}" class="${category}"></span>`);
            $(`#${id}`).on("click", () => {
                if ($(`#${id}`).hasClass(currentPosClass)) {
                    $(`#${id}`).removeClass(currentPosClass);
                    moves.pop();
                    if (lastBonusId === id) {
                        bonusCounter--;
                    }
                } else {
                    $(`#${id}`).addClass(currentPosClass);
                    const nextStep = { x, y };
                    validateStep(nextStep, moves[moves.length - 1]);
                    moves.push(nextStep);
                }
                const nextVelX = moves[moves.length - 1].x - moves[moves.length - 2].x;
                const nextVelY = moves[moves.length - 1].y - moves[moves.length - 2].y;
                const prevId = moves[moves.length - 2].y * grid.width + moves[moves.length - 2].x;
                if ($(`#${prevId}`).hasClass("bonus") && (nextVelX !== velocity.x || nextVelY !== velocity.y)) {
                    bonusCounter++;
                    lastBonusId = prevId;
                }
                velocity = { x: nextVelX, y: nextVelY };

                printInterNext();
                console.log("current moves");
                console.log(JSON.stringify(moves));
                console.log(`current bonus count ${bonusCounter}`);
            });
        }
        gridSelect.append("<br/>")
    }
}
