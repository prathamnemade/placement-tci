To create a Dumb Component:
nx g lib <LIB_NAME> --directory=<NAME_OF_FOLDER>


To install story book inside the library
nx generate @nrwl/storybook:configuration --name=<NAME> --no-interactive

To run the storybook
nx run <PROJECT_NAME>>:storybook

The purpose of the storybook library under the shared folder is to execute all the libraries as a bundle