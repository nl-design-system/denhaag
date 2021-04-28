#!/bin/bash

# Add this as a shell script to your WebStorm configurations
# and as executable command to VS Code
# Make sure the working directory for this command is equal to "<PROJECT_DIR>/src/stories"

# The path to the prettier config file.
CONFIG_FILE="../../.prettierrc"

# The path to the prettier ignore file.
IGNORE_FILE="../../.prettierignore"

# The regex for the exact files to be handled by prettifier.
# ** = all (sub-)directories in the current working directory.
# *.stories.tsx = all files which are appended with ".stories.tsx" in the specified directory.
STORIES_DIR_REGEX="./**/*.stories.tsx"

prettier --config $CONFIG_FILE --ignore-path $IGNORE_FILE all --write "$STORIES_DIR_REGEX"

# After this command is run, ensure to open all the stories at least once for the changes to actually be applied and registered by the VC diff manager.
