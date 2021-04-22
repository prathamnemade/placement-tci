To create a Dumb Component:
nx g lib <LIB_NAME> --directory=<NAME_OF_FOLDER>


To install story book inside the library
nx generate @nrwl/storybook:configuration --name=<NAME> --no-interactive

To run the storybook
nx run <PROJECT_NAME>>:storybook

The purpose of the storybook library under the shared folder is to execute all the libraries as a bundle


To add the common assets:
a. nx g @nrwl/workspace:lib assets --directory=shared - 
    This will crearte a common assets folder under the libs folder. libs>>shared>>assets

Note: Point a is one time process

b. import the assets into specific folder in workspace.json build under assets attribute. 
    As of now only "pngs" are allowed. If there are any other format do add it under the build section.

c. To integrate this shared assets with specifc folder, "implicitDependencies": ["shared-assets"]  use this in nx.json
 
