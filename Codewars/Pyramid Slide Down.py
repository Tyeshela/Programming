def longest_slide_down(pyramid):
    # Start from the second last row and work upwards
    for i in range(len(pyramid) - 2, -1, -1):
        for j in range(len(pyramid[i])):
            # For each position, find the maximum sum from the two possible next positions
            pyramid[i][j] += max(pyramid[i+1][j], pyramid[i+1][j+1])
    
    # The maximum slide down is now at the top of the pyramid
    return pyramid[0][0]
