def next_bigger(n):
    digits = list(str(n))
    pivot = -1

    # Step 1: Find the pivot
    for i in range(len(digits)-2, -1, -1):
        if digits[i] < digits[i+1]:
            pivot = i
            break

    if pivot == -1:
        return -1  # Step 2: If no pivot found, return -1

    # Step 3: Find the smallest digit to the right of the pivot that is greater than the pivot
    for j in range(len(digits)-1, pivot, -1):
        if digits[j] > digits[pivot]:
            digits[pivot], digits[j] = digits[j], digits[pivot]
            break

    # Step 4: Sort the digits to the right of the pivot in ascending order
    digits[pivot+1:] = reversed(digits[pivot+1:])

    return int(''.join(digits))
