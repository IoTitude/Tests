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


.. code:: robotframework

	*** Settings ***
	Resource 		resources.txt


.. code:: robotframework

    	*** Test Cases ***
	Open browser
		open browser    ${SiteUrl}    ${Browser}
		title should be     Login


