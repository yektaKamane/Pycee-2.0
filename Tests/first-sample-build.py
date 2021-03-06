from threading import Thread
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
# This array 'caps' defines the capabilities browser, device and OS combinations where the test will run
caps=[{
      'os_version': '10',
      'os': 'Windows',
      'browser': 'chrome',
      'browser_version': 'latest',
      'name': 'Parallel Test1', # test name
      'build': 'browserstack-build-1' # Your tests will be organized within this build
      },
      {
      'os_version': '10',
      'os': 'Windows',
      'browser': 'firefox',
      'browser_version': 'latest',
      'name': 'Parallel Test2',
      'build': 'browserstack-build-1'
      },
      {
      'os_version': 'Big Sur',
      'os': 'OS X',
      'browser': 'safari',
      'browser_version': 'latest',
      'name': 'Parallel Test3',
      'build': 'browserstack-build-1'
}]	 
#run_session function searches for 'BrowserStack' on google.com
def run_session(desired_cap):
  driver = webdriver.Remote(
      command_executor='https://yektakamaneh_nKfOm5:ZsN3LkHsz7AXKD6q2ypv@hub-cloud.browserstack.com/wd/hub',
      desired_capabilities=desired_cap)
  driver.get("https://www.programiz.com/python-programming/online-compiler/")
  if not "Programiz" in driver.title:
      raise Exception("Unable to load the page!")
  elem = driver.find_element_by_name("q")
  elem.send_keys("BrowserStack")
  elem.submit()
  try:
      WebDriverWait(driver, 5).until(EC.title_contains("BrowserStack"))
      driver.execute_script('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed", "reason": "Title matched!"}}')
  except TimeoutException:
      driver.execute_script('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed", "reason": "Title not matched"}}')
  print(driver.title)
  driver.quit()
#The Thread function takes run_session function and each set of capability from the caps array as an argument to run each session parallelly

def get_data(desired_cap):
    driver = webdriver.Remote(
    command_executor='https://yektakamaneh_nKfOm5:ZsN3LkHsz7AXKD6q2ypv@hub-cloud.browserstack.com/wd/hub',
    desired_capabilities=desired_cap)
    driver.get("https://www.programiz.com/python-programming/online-compiler/")
    # if not "Online Pyhton Compiler" in driver.title:
    #     raise Exception("Unable to load the page!")
    driver.find_element_by_id("editor").send_keys("print('Hello World')")
    code = driver.find_element_by_id("editor").get_attribute('innerText')
    # button= driver.find_element_by_css_selector("div.desktop-run-button").click()
    error = driver.find_element_by_id("terminal").get_attribute('innerText')
    print(code)
    print(error)
    if (len(error) > 0):
        return [code, error]

if __name__ == "__main__":
    for cap in caps:
        # Thread(target=run_session, args=(cap,)).start()
        Thread(target=get_data, args=(cap,)).start()