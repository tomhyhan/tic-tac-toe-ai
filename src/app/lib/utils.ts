export function nextBestMove(board: (string | null)[]) {
    let bestMove;
    let bestScore = -Infinity
    for (let i = 0; i < board.length; i++) {
        if (board[i] !== null) continue;
        board[i] = "O"
        const score = minimax(board, false)
        board[i] = null
        if (score > bestScore) {
            bestScore = score
            bestMove = i
        }
    }
    if (bestMove == null) return null
    return bestMove
}

function matches(b1:(string | null),b2:(string | null),b3:(string | null)){
    if (b1 != null && b1 == b2 && b2 == b3 ) {
        return true
    }
    return false
}

export function wins(board: (string | null)[]) {
    for (let row=0; row<3; row++ ) {
        if (matches(board[row*3+0],board[row*3+1],board[row*3+2])) {
            return true
        }
    }

    for (let col=0; col<3; col++ ) {
        if (matches(board[0*3+col],board[1*3+col],board[2*3+col])) {
            return true
        }
    }

    if (matches(board[0], board[4], board[8])) return true;
    if (matches(board[2], board[4], board[6])) return true;

    return false
}

export function draws(board: (string | null)[]) {
    for (let i=0; i<board.length; i++) {
        if (board[i] === null) {
            return false
        }
    }
    return true
}

function minimax(board: (string | null)[], aiTurn: boolean) {

    if (wins(board)) {
        return aiTurn? -1: 1
    }

    if (draws(board)) {
        return 0
    }

    if (aiTurn) {
        let maxScore = -Infinity
        for (let i = 0; i < board.length; i++) {
            if (board[i] !== null) continue;
            board[i] = "O"
            const score = minimax(board, false)
            board[i] = null
            maxScore = Math.max(maxScore, score)
        }
        return maxScore
    } else {
        let minScore = Infinity
        for (let i = 0; i < board.length; i++) {
            if (board[i] !== null) continue;
            board[i] = "X"
            const score = minimax(board, true)
            board[i] = null
            minScore = Math.min(minScore, score)
        }
        return minScore
    }
}