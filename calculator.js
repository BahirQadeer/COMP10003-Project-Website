function calculateMaterialAdvantage() {
    const pieceValues = {
        pawns: 1,
        knights: 3,
        bishops: 3,
        rooks: 5,
        queens: 9
    };

    const yourPawns = parseInt(document.getElementById('yourPawns').value);
    const yourKnights = parseInt(document.getElementById('yourKnights').value);
    const yourBishops = parseInt(document.getElementById('yourBishops').value);
    const yourRooks = parseInt(document.getElementById('yourRooks').value);
    const yourQueens = parseInt(document.getElementById('yourQueens').value);

    const oppPawns = parseInt(document.getElementById('oppPawns').value);
    const oppKnights = parseInt(document.getElementById('oppKnights').value);
    const oppBishops = parseInt(document.getElementById('oppBishops').value);
    const oppRooks = parseInt(document.getElementById('oppRooks').value);
    const oppQueens = parseInt(document.getElementById('oppQueens').value);

    const yourTotal = (yourPawns * pieceValues.pawns) + (yourKnights * pieceValues.knights) + 
                      (yourBishops * pieceValues.bishops) + (yourRooks * pieceValues.rooks) + 
                      (yourQueens * pieceValues.queens);

    const oppTotal = (oppPawns * pieceValues.pawns) + (oppKnights * pieceValues.knights) + 
                     (oppBishops * pieceValues.bishops) + (oppRooks * pieceValues.rooks) + 
                     (oppQueens * pieceValues.queens);

    const materialAdvantage = yourTotal - oppTotal;

    const resultDisplay = document.getElementById('resultDisplay');
    resultDisplay.innerHTML = `Your material advantage is: ${materialAdvantage}`;
    
}
