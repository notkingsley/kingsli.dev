#!/bin/bash

# set up colors
red='\e[31m'
blue='\e[34m'
cyan='\e[96m'
green='\e[92m'
purple='\e[95m'

# color reset
reset='\e[0m'
_r=$reset


# Get the current working directory as the script directory
cwd="$(dirname "$(readlink -f "$0")")"

# Change the current working directory
cd "$cwd"


# Set up variables
# expect the FTP URL as the first argument
if [ -z "$1" ]; then
    echo -e "${red}FTP URL not provided${_r}"
    exit 1
fi

# the URL of the FTP server with username and password
FTP_URL="$1"

# directory to mount the FTP server
FTP_DIR="$cwd/ftp"

# directory the build will be compiled to
LOCAL_BUILD_DIR="$cwd/dist"

# root directory of the site on the FTP server
REMOTE_DIR="$FTP_DIR/htdocs"

# backup directory for the old build
BACKUP_REMOTE_DIR="$REMOTE_DIR.old"


# build the project
echo -e "${cyan}Building project${_r}"
npm run astro build
if [ $? -ne 0 ]; then
    echo -e "${red}Build failed${_r}"
    exit 1
else
    echo -e "${green}Build successful${_r}"
fi

# mount the ftp server
echo -e "${cyan}Mounting FTP server${_r}"
mkdir -p $FTP_DIR
curlftpfs $FTP_URL $FTP_DIR
if [ $? -ne 0 ]; then
    echo -e "${red}FTP mount failed. Exiting${_r}"
    exit 1
else
    echo -e "${green}FTP server mounted${_r}"
fi

#remove the old backup folder if it exists
if [ -d "$BACKUP_REMOTE_DIR" ]; then
    echo -e "${cyan}Removing old backup folder: $BACKUP_REMOTE_DIR${_r}"
    rm -rf $BACKUP_REMOTE_DIR
    if [ $? -ne 0 ]; then
        echo -e "${red}Could not remove old backup folder: $BACKUP_REMOTE_DIR. Unmounting FTP server${_r}"
        fusermount -u $FTP_DIR
        exit 1
    else
        echo -e "${green}Old backup folder removed${_r}"
    fi
else
    echo -e "${purple}Old backup folder does not exist. Continuing${_r}"
fi

# rename the old build folder
mv $REMOTE_DIR $BACKUP_REMOTE_DIR
if [ $? -ne 0 ]; then
    echo -e "${red}Could not rename old build folder: $REMOTE_DIR. Unmounting FTP server${_r}"
    fusermount -u $FTP_DIR
    exit 1
else
    echo -e "${green}Old build folder renamed to $BACKUP_REMOTE_DIR${_r}"
fi

# Copy the local build folder to the remote folder
echo -e "${cyan}Copying build folder to remote folder${_r}"
cp -r --verbose $LOCAL_BUILD_DIR $REMOTE_DIR
if [ $? -ne 0 ]; then
    echo -e "${red}Could not copy build folder to remote folder. Attempting to restore old build folder${_r}"
    mv $REMOTE_DIR $REMOTE_DIR.failed
    mv $BACKUP_REMOTE_DIR $REMOTE_DIR
    fusermount -u $FTP_DIR
    exit 1
fi

# unmount the ftp server
echo -e "${green}Build deployed successfully. Unmounting FTP server${_r}"
fusermount -u $FTP_DIR

echo -e "${green}Deployment complete${_r}"
