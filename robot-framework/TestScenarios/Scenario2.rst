.. default-role:: code

============
Scenario 2
============



.. contents:: Table of contents
   :local:
   :depth: 2

=================
Scenario 2 Tests
=================


.. code:: robotframework

   *** Settings ***
   Resource 		resources.txt



.. code:: robotframework

   *** Test Cases ***
   Open Browser
      open browser    ${SiteUrl}    ${Chrome}
      title should be     ${LoginTitle}
