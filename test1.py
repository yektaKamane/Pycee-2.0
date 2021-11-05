from bs4 import BeautifulSoup
import requests
import urllib


html_text = requests.get('https://colab.research.google.com/drive/1ce5CEdIfk36md2S7BM_nwVRQ0J7YIPsO').text

print((html_text).encode('utf8'))
