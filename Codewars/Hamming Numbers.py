def hamming(n):
    hamming_numbers = [1]  # Initialize with the first Hamming number
    i = j = k = 0  # Initialize indices for 2, 3, and 5

    while len(hamming_numbers) < n:
        next_hamming = min(hamming_numbers[i] * 2, hamming_numbers[j] * 3, hamming_numbers[k] * 5)
        hamming_numbers.append(next_hamming)

        # Update indices for 2, 3, and 5
        if next_hamming == hamming_numbers[i] * 2:
            i += 1
        if next_hamming == hamming_numbers[j] * 3:
            j += 1
        if next_hamming == hamming_numbers[k] * 5:
            k += 1

    return hamming_numbers[n-1]
