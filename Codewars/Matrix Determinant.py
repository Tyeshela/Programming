def determinant(matrix):
    n = len(matrix)
    
    if n == 1:
        return matrix[0][0]
    
    if n == 2:
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
    
    det = 0
    for i in range(n):
        minor = [row[:i] + row[i+1:] for row in matrix[1:]]
        det += ((-1) ** i) * matrix[0][i] * determinant(minor)
    
    return det
