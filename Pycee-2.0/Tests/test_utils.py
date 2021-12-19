import unittest

class TestParseArgs(unittest.TestCase):
    def test_parse_args(self):
        self.assertAlmostEqual(parse_args(0),0)
