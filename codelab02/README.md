# Codelab02 - Basic layout

## Let's get a basic layout going
When setting up our frontend, there's A LOT of things we want to get working. The best approach is to do this in small steps.

Our first step was setting up a basic working application. We did this in `codelab01`.

Let's extend on this by creating a basic layout. No specific logic just yet,
only a structured layout. Both in our codebase and in our browser.

### Creating a layout module
Right now, we have a general app component in our application. Adding all our logic into this single component is possible, but it defeats the purpose of the Angular framework.

Working with multiple components defines the building blocks that complete our entire app and makes everything more manageable and structured.

Let's start by separating our layout, by making a dedicated component for this using the Angular CLI (`g` is short for `generate`) :

``ng g component layout``

Notes :
- Observe the addition of the `.src/app/layout` folder containing module file `layout.component.ts`
- Tip: you can add `--dry-run` to `ng generate` commands to list changes before actual execution

### Creating layout components
Right now we have a `layout` component in our Angular app. We want to divide our layout in three parts :
- a header
- a footer
- the main body in between

For both **header** and **footer**, we will create separate (sub) components inside our `.src/app/layout` folder.
Those components will be used by the **layout** (main) component.

Before we do this, let's take a detailed look at what a component is.

>A **component** instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues
with change detection, as Angular checks to see when data-bound properties change, and updates both the view and the component instance as needed. The lifecycle ends when Angular
destroys the component instance and removes its rendered template from the DOM. A component can be imported by other components for reuse within the same application.
> So in short: components are the building blocks of your Angular app. In this codelab, we will create the 'layout' component which will consist of a 'header' and a 'footer' component.

#### Generating the actual components

Let's get back to our code.
Now that we how components can be structured, let's create the **header** and **footer** (sub) components

Once finished, our file structure will look somewhat like this :
```
./src/app/layout/layout.component.ts
                 ...
./src/app/layout/footer/...
./src/app/layout/header/...
```

#### Generating the actual components - 'header' and 'footer'
Navigate to the `./src/app/layout` folder in your terminal. Once inside that folder, execute
`ng g component header` to create a 'header' component. Do the same for 'footer' component.

Observe the addition of a `footer` and `header` folder with component files inside `.src/app/layout`.

#### App status
At this point our application will still start, however it will not yet use the new layout components.

We will fix this in the next section ...

## Adapting components
Time to add some html to our html template files.

Copy the html component templates you find in this codelab to the corresponding files in your application :
- `layout.component.html`
- `header.component.html`
- `footer.component.html`

Don't forget to put `heart.png` the right folder. Don't know where to put it ? It becomes clear at the end of this codelab ...

Still serving your application? You'll notice that nothing actually changed ... that's because the `app.component.html` file still renders the `title`.

Update the `app.component.html` file to use the `layout` component instead of the `title` :

```<app-layout/>```

At this point, your application will show an error ... that's because the components referred to in the template are not yet known to the `LayoutComponent`.

Let's fix this by importing the `HeaderComponent`, `FooterComponent` and `RouterOutlet` in `LayoutComponent` :

```typescript
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterOutlet],
  ...
```

We still have some errors ... read on to find out how to fix them.

### Routing
Inside your `layout.component.html`, you'll find the tag `<router-outlet></router-outlet>`. This has to do with us including Routing capabilities to our application.

### Binding the controller (.ts) with the view (.html)
Can you spot the errors? It includes some things we did in the previous codelab.

- The culprits are two variables we haven't declared yet. `{{year}}` and `{{title}}` (again) aren't known yet.
  Just like we did in the first codelab, we will have to declare them in our corresponding component file. 
  `{{title}}` needs to be declared and set in our `header.component.ts`. `{{year}}` needs to be in `footer.component.ts`. 
  While the header is just a title, we want the year to update automatically when we have entered a new one. We'll first guide you through adding the title.
  * In the previous codelab, we just added the title variable and gave it a value. 
    We can do this in a more encapsulated manner. Start by declaring the title as a string. Just like in Java, you can do this at the top of your class. The syntax is slightly different:
    ```typescript
    private _title: string;
    ```
  * Because we are using encapsulation here, we will find more similarities with Java. In order to **get** our title, we need a constructor. The syntax for this is:
    ```typescript
    constructor() {
      this._title = 'Petinder'
    }
    ```
  * This leaves us with just a getter to be made. For this, the syntax is:
    ```typescript
    get title(): string {
      return this._title;
    }
    ```

- This should solve the problems with `{{title}}`. That leaves `{{year}}`. You can do the same actions you did for `{{title}}`, except we want our year to automatically update so some more logic is needed.
  We're not going to spoil the fun for this one, you'll have to find it for yourself. Just a few hints to get you going:
  > - a date is a number in js<br>
  > - just like in Java, you can call methods on certain classes to do things (perhaps there is even a Date class?)

### Finishing up
- Still not working? Double-check the adaptions required to the `LayoutComponent`, `HeaderComponent` and `FooterComponent`.
- Now is a good time to investigate the missing heart image ... inspect the html source and figure out the correct location.

Some more info on this: `app-layout` is the name of our LayoutComponent. You can find it in `layout.component.ts` :
```typescript
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
```
Notes :
> - Every component has a selector, making it easy to use them as building blocks for your apps.
> - Take a moment to go through each component you made. Check the selectors, check where they are already used and how
> - Everything is tied together. It will help you understand Angular apps and how they work.

### Testing
- Now that we have some new components, we can also add a few tests for them.
- In `header.component.spec.ts` add a test for the `title` variable. It should check if the title is set to the correct value.
- In `footer.component.spec.ts` add a test for the `year` variable. It should check if the year is set to the current year.
- Don't forget to run the full test suite using `jest` in the terminal.

## Conclusion
You've learned:
- how to create a component with `ng g component <component_name>`.
- how to structure components
- how to add a component to your app by using the selector defined in the controller of the component.
- how to define variables in a controller.
- how to encapsulate variables by adding `private` and using getters/setter.
- how to access a variable in the view using the `{{}}`-operator (interpolation).

Next codelab we'll start talking to our backend by introducing services.
