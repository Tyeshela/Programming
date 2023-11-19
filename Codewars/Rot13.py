def rot13(message):
    result = ''
    for char in message:
        if char.isalpha():
            ascii_offset = ord('a') if char.islower() else ord('A')
            rotated_char = chr((ord(char) - ascii_offset + 13) % 26 + ascii_offset)
            result += rotated_char
        else:
            result += char
    return result