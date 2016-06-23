.. default-role:: code

============
Scenario 1
============

Browser: Firefox

Actor: `Matias Moilanen <https://github.com/IoTitude/IOTCity/wiki/persoonakuvaukset#asentaja-2>`_

Matias is an installer who installs metering units for IoTCity-system.

.. contents:: Table of contents
   :local:
   :depth: 2

=================
Scenario 1 Tests
=================

Matias is on a trip to install a new metering unit when he falls in to the sewer and hits his head. 

.. code:: robotframework

	*** Settings ***
	Resource 		resources.txt

Matias loses his memory and forgets what he is doing here, so he decides to check his phone. He vaguely remembers that the Instapp icon on his homescreen has some relevance to his current situation.

.. code:: robotframework

    	*** Test Cases ***
   Matias Opens Instapp
	Open browser To Login Page

After opening the app, a login screen is shown on the screen. Because the hit in the head Matias can't remember his username or password.

.. code:: robotframework

    	*** Test Cases ***
    Matias Tries To Login
        Input Username         ${InvalidUser}
        Input User Password    ${InvalidPassword}
        Submit Credentials
        Login Should Have Failed
        Click Popup Ok
        
Then Matias gets angry and closes Instapp.
        
.. code:: robotframework

    	*** Test Cases ***
    Matias Rage Quits
        Close Browser
