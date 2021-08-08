import unittest
import auto_email

class Test(unittest.TestCase):
    def test_invalid_address(self):
        """
        checks for invalid email address input
        """
        response = auto_email.send_email('invalid_address', 'subject', 'body', 'ip')
        self.assertFalse(response)

    # def test_multiple_addresses(self):
    #     """
    #     checks if email can be sent to multiple addresses
    #     """
    #     response = auto_email.send_email(['tkkim@ucsd.edu', 'taekunkim214@gmail.com'], 'subject2', 'body', 'ip')
    #     self.assertTrue(response)

    # def test_bombardment(self):
    #     """
    #     checks if email bombarding is prohibited
    #     """

    #     self.assertRaises(auto_email.FunctionAbusedError, auto_email.send_email, 'tkkim@ucsd.edu', 'subject', 'content', 'ip_address', False)

    # def test_invalid_type(self):
    #     self.assertRaises(ValueError, auto_email.send_email, 'tkkim@ucsd.edu', 'test', 'hello', 1)

    # def test_priority(self):
    #     response = auto_email.send_email('tkkim@ucsd.edu', 'priority_test', 'body', 'ip', priority=True)
    #     self.assertTrue(response)
    
    # def test_cc(self):
    #     response_1 = auto_email.send_email('tkkim@ucsd.edu', 'cc_test', 'body', 'ip', cc='taekunkim214@gmail.com')
    #     response_2 = auto_email.send_email('tkkim@ucsd.edu', 'cc_test', 'body', 'ip', cc=['taekunkim214@gmail.com', 'lewis0214kim@gmail.com'])
    #     self.assertTrue(response_1 and response_2)

    # def test_bcc(self):
    #     # response_1 = auto_email.send_email('tkkim@ucsd.edu', 'bcc_test', 'body', 'ip', bcc='taekunkim214@gmail.com')
    #     # response_2 = auto_email.send_email('tkkim@ucsd.edu', 'bcc_test', 'body', 'ip', bcc=['taekunkim214@gmail.com', 'lewis0214kim@gmail.com'])
    #     # self.assertTrue(response_1 and response_2)

    # def test_attachments(self):
    #     response = auto_email.send_email('tkkim@ucsd.edu', 'attachment_test', 'body', 'ip', attachments='./sample_img.png')
    #     self.assertTrue(response)

if __name__ == '__main__':
    unittest.main()
