def generate_hashtag(s):
    # Check if the input string is empty or only contains spaces
    if not s or s.isspace():
        return False
    
    # Capitalize the first letter of each word and remove extra spaces
    words = s.split()
    capitalized_words = [word.capitalize() for word in words]
    
    # Join the words and add a '#' at the beginning
    result = '#' + ''.join(capitalized_words)
    
    # Check if the resulting hashtag is longer than 140 characters
    if len(result) > 140:
        return False
    
    return result
