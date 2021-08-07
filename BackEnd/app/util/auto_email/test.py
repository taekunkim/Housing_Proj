import unittest
import auto_email

class Test(unittest.TestCase):
    def test_invalid_address(self):
        """
        checks for invalid email address input
        """
        response = auto_email.send_email('invalid_address', 'subject', 'body')
        self.assertFalse(response)

    def test_multiple_addresses(self):
        """
        checks if email can be sent to multiple addresses
        """
        response = auto_email.send_email(['tkkim@ucsd.edu', 'taekunkim214@gmail.com'], 'subject2', 'body')
        self.assertTrue(response)

    def test_bombardment(self):
        """
        checks if email bombarding is prohibited
        """

        self.assertRaises(auto_email.FunctionAbusedError, auto_email.send_email, 'tkkim@ucsd.edu', 'subject', 'content', 'ip_address', False)

    def test_invalid_type(self):
        self.assertRaises(ValueError, auto_email.send_email, 'tkkim@ucsd.edu', 'test', 'hello', 1)


if __name__ == '__main__':
    unittest.main()
