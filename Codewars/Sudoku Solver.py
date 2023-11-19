def is_valid(puzzle, row, col, num):
    for i in range(9):
        if puzzle[row][i] == num or puzzle[i][col] == num:
            return False
        
    start_row, start_col = 3 * (row // 3), 3 * (col // 3)
    for i in range(start_row, start_row + 3):
        for j in range(start_col, start_col + 3):
            if puzzle[i][j] == num:
                return False
    
    return True

def solve_sudoku(puzzle):
    for i in range(9):
        for j in range(9):
            if puzzle[i][j] == 0:
                for num in range(1, 10):
                    if is_valid(puzzle, i, j, num):
                        puzzle[i][j] = num
                        if solve_sudoku(puzzle):
                            return puzzle
                        puzzle[i][j] = 0
                return None
    return puzzle

def sudoku(puzzle):
    return solve_sudoku([row[:] for row in puzzle])
