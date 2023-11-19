def xo(s):
    # Count the occurrences of 'x' and 'o' (case-insensitive)
    x_count = s.lower().count('x')
    o_count = s.lower().count('o')
    
    # Check if the counts are equal
    return x_count == o_count
