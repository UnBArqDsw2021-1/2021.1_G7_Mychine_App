#!/bin/bash
mysql -u root -p12345 << EOF
GRANT ALL PRIVILEGES ON *.* TO 'mychine';
FlUSH PRIVILEGES;
EOF
