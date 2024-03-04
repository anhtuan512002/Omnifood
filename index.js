// Tạo bảng với 8 dòng và 8 cột
function createChessBoard(rows, cols) {
    var chessBoard = document.getElementById("chessBoard");

    // Tạo hàng và cột
    for (var i = 0; i < rows; i++) {
        var row = document.createElement("div");
        row.className = "boardRow";
        for (var j = 0; j < cols; j++) {
            var square = document.createElement("div");
            square.className = (i + j) % 2 === 0 ? "square even" : "square odd";
            square.textContent = (i * cols) + (j + 1);
            row.appendChild(square);
        }
        chessBoard.appendChild(row);
    }
}
window.onload = function () {
    createChessBoard(8, 8);
};
