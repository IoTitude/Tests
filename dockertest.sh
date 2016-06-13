
#!/bin/bash

/usr/bin/expect <<EOF
expect "$ "
cd test
spawn robot tests.txt
expect eof
exit 0
EOF
