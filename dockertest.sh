
#!/bin/bash

/usr/bin/expect <<EOF
rm -R test
expect "$ "
spawn git clone https://github.com/IoTitude/Tests.git   test
expect "$ "
cd test
spawn robot tests.txt
expect eof
exit 0
EOF
