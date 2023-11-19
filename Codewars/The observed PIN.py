def get_pins(observed):
    adjacent_digits = {
        '1': ['1', '2', '4'],
        '2': ['1', '2', '3', '5'],
        '3': ['2', '3', '6'],
        '4': ['1', '4', '5', '7'],
        '5': ['2', '4', '5', '6', '8'],
        '6': ['3', '5', '6', '9'],
        '7': ['4', '7', '8'],
        '8': ['5', '7', '8', '9', '0'],
        '9': ['6', '8', '9'],
        '0': ['0', '8']
    }

    if len(observed) == 1:
        return adjacent_digits[observed[0]]

    combinations = []
    rest = get_pins(observed[1:])
    for digit in adjacent_digits[observed[0]]:
        for suffix in rest:
            combinations.append(digit + suffix)

    return combinations
