def snail(snail_map):
    result = []
    while snail_map:
        result += snail_map[0]
        snail_map = list(zip(*snail_map[1:]))[::-1]
    return result
