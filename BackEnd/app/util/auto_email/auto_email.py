"""
Auto Email Sender

This script allows the user to easily send an email.
"""
try:
    import yagmail 
    yag = yagmail.SMTP('yijianzong@gmail.com', oauth2_file='../../../.env/oauth2_creds.json')
except ImportError:
    raise ImportError('''
                            Please install yagmail\n
                            pip install --user yagmail
                      ''')

def send_email(recipient, subject, body):
    yag.send(recipient, subject, body)
    return True