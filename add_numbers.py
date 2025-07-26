def add_two_numbers(a, b):
    """
    Add two numbers and return the result.
    
    Args:
        a (int or float): First number
        b (int or float): Second number
    
    Returns:
        int or float: Sum of a and b
    """
    return a + b


# Example usage
if __name__ == "__main__":
    # Test the function with some examples
    result1 = add_two_numbers(5, 3)
    result2 = add_two_numbers(2.5, 1.7)
    result3 = add_two_numbers(-10, 15)
    
    print(f"5 + 3 = {result1}")
    print(f"2.5 + 1.7 = {result2}")
    print(f"-10 + 15 = {result3}")