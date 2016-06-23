.. default-role:: code

============
Scenario 1
============

Browser: Firefox


.. contents:: Table of contents
   :local:
   :depth: 2

=================
Scenario 1 Tests
=================

kuvaus

.. code:: robotframework

	*** Settings ***
	Resource 		resources.txt


.. code:: robotframework

    	*** Test Cases ***
	Open browser
		open browser    ${SiteUrl}    ${Browser}
		title should be     Login


