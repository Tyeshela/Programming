def narcissistic(value):
    num_str = str(value)
    num_digits = len(num_str)
    total = sum(int(digit)**num_digits for digit in num_str)
    return total == value
