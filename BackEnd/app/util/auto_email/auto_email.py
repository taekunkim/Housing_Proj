"""
Auto Email Sender

This script allows the user to easily send an email.
"""
try:
    import yagmail
    from yagmail.validate import validate_email_with_regex
    from yagmail.error import YagAddressError, YagInvalidEmailAddress

    yag = yagmail.SMTP('yijianzong@gmail.com', oauth2_file='../../../.env/oauth2_creds.json')

except ImportError:
    raise ImportError('''
                            Please install yagmail\n
                            pip install --user yagmail
                      ''')

class FunctionAbusedError(Exception):
    pass

def __check_abused(ip_address):
    """
    :param ip_address: ip address of the user using this function
    :return: True if the email function has been used more than 5 times in the last minute by "ip_address"
    """

    # last_request = grab_time(5) # grabs five most recent requests made by the ip_address
    # time_difference = last_request[1:] - last_request[:-1]
    # difference_sum = [each.total_seconds for each in time_difference].sum()
    # return difference_sum < 60

    return False

def __check_overloaded():
    """
    :return: True if the email function has been used more than 20 times in the last minute
    """

    # last_request = grab_time(20) # grabs twenty most recent requests made by the ip_address
    # time_difference = last_request[1:] - last_request[:-1]
    # difference_sum = [each.total_seconds for each in time_difference].sum()
    # return difference_sum < 60

    return False

def send_email(to, subject, content, ip_address, priority=False):
    """
    :param to: recipient's email address in string or a list of string addresses
    :param subject: subject of email
    :param content: email body text
    :param ip_address: ip address of the user using this function
    :param priority: boolean value; if True, suppresses exception
    :return: True if email was successfully sent, False if not

    Exception raised when invalid data types or email addresses are passed.
    False returned when email can't be sent.
    """

    # check parameter type
    argument_type_check = all([
        isinstance(to, (list, str)),
        isinstance(subject, str),
        isinstance(content, str),
        isinstance(ip_address, str),
    ])

    if not argument_type_check:
        raise ValueError('Invalid parameter type')

    # check if email function is being abused
    if not priority: # suppress exception if email is important
        if __check_abused(ip_address):
            raise FunctionAbusedError('Function has been used too much in the last minute by the ip address')
            
        if __check_overloaded():
            raise FunctionAbusedError('Function has been used too much in the last minute')

    # send email
    response = yag.send(to, subject, content)  # automatically validates format of addresses contained in "to"
    return response != False
    