# Codelab01 - Get started

## Let's fire up an Angular app

### Installing the Angular CLI
Just like setting up a new Java application, we'll have a few steps to follow to get started with a new Angular application.
Let's see how we can do this! First things first: we'll need to install the Angular CLI. You can do this with the following command: ``npm install -g @angular/cli``.
npm install speaks for itself, the -g means it will be installed globally which makes the CLI available in your entire system.

### Creating a new angular app
We will start by creating our new application folder. No need to start right-clicking and making new directories straight away.
Angular has a nice way of doing multiple steps by issuing one single command: `ng new`! Create a new app by typing `ng new <appName>`
in the terminal. You can choose any name, just remember we're making a dating service for pets :heart_eyes:. Be creative.

- You'll notice some questions being asked while generating your app. We want to enable routing and work with CSS.
  This means selecting:
  - `Which stylesheet format would you like to use ?` -> Regular `CSS` as styling
  - `Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)?` -> No
- After doing this, a new app will be created, and it will even work if you fire it up.
  - Note that your new app is automatically also a .git repository, complete with a first `initial commit`

### Starting your app
- Angular applications can be started by typing
  `ng serve` in the terminal. Doing so will compile your code and start a server. By default, you'll be able to access it through
  http://localhost:4200. Start up your freshly made application and check what it looks like in your browser.

### Application file structure
Take a moment to inspect the directory structure and files inside your application's folder :
- `.` : root dir holds project config files, e.g. `angular.json` and `package.json`
- `.vscode` : some config files for the Visual Studio Code editor
- `/node_modules` : where `npm` places all package dependencies (never committed to Git !)
- `/src` : root directory for Angular application code

## Your first test runs
### Running the unit tests
When creating a component, Angular will automatically generate a test file for it. Let's run our tests to see if everything is working as expected : run `ng test` in your terminal.

You'll notice a new Chrome browser window opening up, showing the results of the tests :

```
1 spec, 0 failures, randomized with seed 13737
    AppComponent
        should create the app
```

- Inspect the test file for the `AppComponent` in `src/app/app.component.spec.ts` and familiarize yourself a bit with the test code.
- When done, close the browser window and stop the test runner by pressing `Ctrl+C` in your terminal.

### Upgrading the test runner experience
By default, Angular uses Karma as a *unit* test runner. 
While Karma has been the default for a long time, it's main drawback is the fact that it requires Chrome to run the tests ... 
and thus nowadays it's considered slow and cumbersome, especially when taking into account that your tests also need to run on a CI/CD pipeline.

Luckily, there are a few alternatives available now, and we will use https://jestjs.io/ (the upcoming default unit test runner for Angular).

#### Installing Jest
To install Jest, execute following command in your terminal:
`npm install -D jest jest-preset-angular @types/jest`

This will update the `package.json` file with the new dependencies and install them in the `node_modules` folder.

Additionally, copy over the files from the `codelab01/jest` folder to the root of your project.

#### Running Jest
With Jest installed, we can now run our tests using the command `jest` in the terminal.

You should see the following output, and quite a bit faster than with Karma :
```
Determining test suites to run...@angular/compiler-cli@17.0.2 detected. Skipping 'ngcc'
Tip: To avoid this message you can remove 'jest-preset-angular/global-setup' from your jest config
 PASS  src/app/app.component.spec.ts
  AppComponent
    ✓ should create the app (47 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.48 s
Ran all test suites.

```

## Your first changes
### Setting your own title
- For now, we have a default Angular application running. Time to start making some changes! Let's start with a baby-steps though. We're going
  to do two things.
  - Remove the default template Angular is showing us right now. You can do this by deleting the html code from `app.component.html`. Replace it with `<h1>Petinder</h1>` for now.
  - Observe the automatic refresh in your browser after you save the file: this is Angular's `live reloading`, a very useful dev tool.

- We just hardcoded the title in our html code, but that feels a bit basic right? When you open up `app.component.ts`, you can see where the title is being set.
  Change its value to the title you chose (or just stick with our million-dollar idea: Petinder :moneybag: :moneybag: :moneybag:)

- You changed the title in `app.component.ts` but nothing is showing yet in your browser? Well, you just emptied your `app.component.html` file, which kinda
  explains a lot. This html is your template file. It contains what you will be showing. So we'll need a small adjustment there as well. `<h1>{{title}}</h1>` should
  do the trick!
  * Some extra info: The double curly braces are also known as interpolation. In our app component (`app.component.ts`), we declared a variable title and gave it a value.
    We can use interpolation to display the value of this variable in the corresponding component template (`app.component.html`).

### Set the styling
- Not necessarily Angular related, but nevertheless very important in an HTML environment. Copy the contents of the `styles.css` file to the `styles.css` file you can find in
  the root dir of your app. Doing so should already give your app a different look.

### Add a test for the new title
- In `app.component.spec.ts`, add a test to check if the title is set correctly :
  ```
  it('should have as title "Petinder"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('to do');
  });
  ```
- Run the tests again using `jest` in the terminal. Notice how the title test will fail ... because purposely we set the title to something else than the app title that you choose earlier.
  ```
  Error: expect(received).toEqual(expected) // deep equality

  Expected: "to do"
  Received: "Petinder"
  ```
  It's a good test habit to always start with a failing test. This way you know for sure your test is actually testing something.
- Now fix your test and run the test suite again. All tests should pass now.
- IntelliJ has a very good integration for running tests, so you don't have to use the terminal all the time. 
  Use the `Run test` command in the gutter next to the test method to run the test directly from your IDE.
  - Note that you can also debug tests from your IDE ... might come in handy later on.


### Commit your work
It's a good habit to commit your local changes regularly. If not done already, do this now.

## Conclusion
We now have a working Angular application.

We got rid of the default contents and replaced it with the title of the app we're going to build.
For now, we only have one component in this app, which consists of
- `app.component.ts` containing the component's logic
- `app.component.html` containing the template we will be showing in our browser
- `app.component.spec.ts` containing the unit tests for this component

Afterwards we also added some prefab styling that we will use throughout the building of our app.

You've learned:
- how to create a new angular app with `ng new`
- how to start your angular app with `ng serve`
- how to run your tests with `jest`
- that the view of a component can be found in it's `.html`-file
- that the controller of a component can be found in it's `.ts`-file.
- that the style of a component can be found in it's `.css`-file.

Next codelab we'll show you how to make your first basic layout by creating your own modules and components.
