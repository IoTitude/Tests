
#!/bin/bash

#set pass "123456"
set prog vncserver :89 -geometry 1920x1200 -depth 24
export DISPLAY=:89

/usr/bin/expect <<EOF
spawn vncserver :89 -geometry 1920x1200 -depth 24
expect "Password:"
send "123456\r"
expect "Verify:"
send "123456\r"
expect "$ "
cd test
spawn robot tests.txt
expect eof
exit 0
EOF
