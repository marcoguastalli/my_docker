import os


basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    WWW_FOLDER = f"{os.getenv('APP_FOLDER')}/project/www"
