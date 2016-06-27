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
        Invalid Login     ${InvalidUser}     ${InvalidPassword}
        Click Popup Ok
        


Matias finds a piece of paper in his pocket. It has two words written on it and Matias tries to use them to login.


.. code:: robotframework

   *** Test Cases ***
   Successful Login
        Valid Login    ${ValidUser}      ${ValidPassword}

Success. Instapp shows a task list which tells Matias exactly what to do.



.. code:: robotframework

   *** Test Cases ***
   Logout
        Click Logout Tab
        Click Logout Button
        Close Browser


