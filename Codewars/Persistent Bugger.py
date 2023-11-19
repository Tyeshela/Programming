def persistence(n):
    if n < 10:
        return 0
    else:
        product = 1
        while n > 0:
            digit = n % 10
            product *= digit
            n //= 10
        return 1 + persistence(product)
