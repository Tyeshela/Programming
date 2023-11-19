import math
def nb_year(p0, percent, aug, p):
    counter = 0
    nw_pop = p0

    while nw_pop < p:
        nw_pop = math.floor(nw_pop)
        nw_pop = nw_pop + (nw_pop * (percent/100)) + aug
        counter += 1
    return int(counter)