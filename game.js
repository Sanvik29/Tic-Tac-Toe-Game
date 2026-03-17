const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const msg = document.querySelector("#msg");

let turnX = true; // X usually starts
const winPatterns = [
    [0,1,2], [0,3,6], [0,4,8], [1,4,7], 
    [2,5,8], [2,4,6], [3,4,5], [6,7,8]
];

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        let val1 = boxes[a].innerText;
        let val2 = boxes[b].innerText;
        let val3 = boxes[c].innerText;

        if (val1 && val1 === val2 && val1 === val3) {
            showWinner(val1);
            return true;
        }
    }
    return false;
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, ${winner} Wins!`;
    msg.classList.remove("hide");
    boxes.forEach(box => box.disabled = true);
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.innerText = turnX ? "X" : "O";
        box.style.color = turnX ? "#38bdf8" : "#fb7185"; // X is blue, O is pink
        box.disabled = true;
        
        if (!checkWinner()) {
            turnX = !turnX;
        }
    });
});

resetBtn.addEventListener("click", () => {
    turnX = true;
    msg.classList.add("hide");
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
});