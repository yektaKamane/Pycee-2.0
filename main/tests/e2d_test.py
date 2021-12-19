from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup

options = webdriver.ChromeOptions()
#options.add_argument('headless')
options.add_argument('window-size=1920x1080')
options.add_argument("disable-gpu")

driver = webdriver.Chrome(executable_path = 'C:\\Users\\lenovo\\Desktop\\Pycee\\main\\tests\\chromedriver.exe', options=options)
#driver = webdriver.Chrome(executable_path = 'C:\\Users\\lenovo\\Desktop\\Spotify-project\\chromedriver.exe', options=options)
driver.get('https://www.online-python.com/')

input_box = driver.find_element_by_class_name("ace_text-layer")
input_box.clear()

elem = driver.find_element_by_id("run-btn")
print(elem)
# elem.clear()
# elem.send_keys("Beggin Maneskin")
elem.send_keys(Keys.RETURN)
#
# #print((driver.page_source).encode('utf8'))
#
# soup = BeautifulSoup(driver.page_source, 'lxml')
# search_res = soup.find('div', class_ = 'play-item')
# track_res = search_res.find('div', class_ = 'play-ctrl')
# url = track_res.get('data-src')
# print((track_res).encode('utf8'))
# print(url)
