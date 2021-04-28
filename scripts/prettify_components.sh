#!/bin/bash

# Add this as a shell script to your WebStorm configurations
# and as executable command to VS Code
# Make sure the working directory for this command is equal to "<PROJECT_DIR>/src/components"

# The path to the prettier config file.
CONFIG_FILE="../../.prettierrc"

# The path to the prettier ignore file.
IGNORE_FILE="../../.prettierignore"

# The regex for the exact files to be handled by prettifier.
# ** = all (sub-)directories in the current working directory.
# *.tsx = all files which are appended with ".tsx" in the specified directory.
COMPONENTS_DIR_REGEX="./**/*.tsx"

prettier --config $CONFIG_FILE --ignore-path $IGNORE_FILE all --write "$COMPONENTS_DIR_REGEX"

# After this command is run, ensure to open all the components at least once for the changes to actually be applied and registered by the VC diff manager.
