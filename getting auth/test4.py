import os
import pathlib
import requests
from bs4 import BeautifulSoup

html_text = requests.get('https://colab.research.google.com/drive/15DYQ86yWDGrEG000x_-OpwVvBoRGJb0g#scrollTo=Yh6IZF5P6qJ1').text
soup = BeautifulSoup(html_text, 'lxml')
search_input = soup.find_all('div', class_ = "left-pane-container")

print((html_text).encode('utf8'))
print(search_input)
