from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from time import sleep

"""
default platform is linux, other allowed arguments are mac and windows. Will assign
correct driver, login to website, and return the driver.
"""
  
def setup_login(platform="linux"):

    if platform=="mac":
        DRIVER_PATH = "./chromedrivers/chromedriver_112_mac"
    elif platform == "linux":
        DRIVER_PATH = "./chromedrivers/chromedriver_112_linux"
    elif platform == "windows":
        DRIVER_PATH == "./chromedrivers/chromedriver_112_windows.exe"
    else:
        return None
    
    # passing these ptions will keep the window open when the script completes
    options = webdriver.ChromeOptions()
    options.add_experimental_option("detach", True)

    # Our driver object is LITERALLY a browser we control programatically
    driver = webdriver.Chrome(executable_path=DRIVER_PATH, options=options)

    # where
    URL = "https://studybuddy.life"

    driver.implicitly_wait(10)
    # fixes a bug in landing page
    driver.set_window_size(900, 1080)
    # Navigate to the URL
    driver.get(URL)

    # Click the button
    login_button = driver.find_element(By.ID, "login")
    login_button.click()
    # Let's go bigger, go bolder

    driver.maximize_window()

    email = driver.find_element(By.ID, "email")
    email.send_keys("mock@user.one")

    password = driver.find_element(By.ID, "password")
    password.send_keys("Asecurepassword123!")

    login_button = driver.find_element(
        By.XPATH, "//*[@id='root']/div/section/form/button")
    login_button.click()
    
    return driver