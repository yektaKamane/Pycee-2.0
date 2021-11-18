from bs4 import BeautifulSoup
import requests
import urllib
import pathlib
import os


# html_text = requests.get('https://colab.research.google.com/drive/1ce5CEdIfk36md2S7BM_nwVRQ0J7YIPsO').text
#
# print((html_text).encode('utf8'))

from flask import Flask, session, abort, redirect, request
from google.oauth2 import id_token
from google_auth_oauthlib.flow import Flow
from pip._vendor import cachecontrol
import google.auth.transport.requests

GOOGLE_CLIENT_ID = "12070556867-dogjaieg9sbhmpccj09kp0iqh50pelhv.apps.googleusercontent.com"
client_secrets_file = os.path.join(pathlib.Path(__file__).parent, "client_secret.json")


flow = Flow.from_client_secrets_file(
    client_secrets_file=client_secrets_file,
    scopes=["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email", "openid"],
    redirect_uri='https://colab.research.google.com/drive/1ce5CEdIfk36md2S7BM_nwVRQ0J7YIPsO'
)

authorization_url, state = flow.authorization_url()
response = redirect(authorization_url)
#print(str(flow.authorization_url())[2:-2])
#response = html_text = requests.get(str(flow.authorization_url())[2:-2]).text

#print((html_text).encode('utf8'))
#
flow.fetch_token(authorization_response=response)
#
# credentials = flow.credentials
# token_request = google.auth.transport.requests.Request('https://colab.research.google.com/drive/1ce5CEdIfk36md2S7BM_nwVRQ0J7YIPsO')
# id_info = id_token.verify_oauth2_token(id_token=credentials._id_token, request=token_request, audience=GOOGLE_CLIENT_ID)
