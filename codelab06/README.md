# Codelab06 - Adding Routing to your app

Petinder starts looking like a real app by now. We have our list of pets. We can filter them by name. We can see our chosen pet's name and profile text. We can even
add our own pets to the app! However, there is one elementary thing missing from our app. We can't arrange a date yet!

## Setting up the date component
- We've been showing all the content in just one single place until now. For this date component, we will show a new component in our application. Let's start by generating 
a new component. We want to have a ``setup-date`` component in a folder called ``date``.
  
  
- Let's assume we want to give the following behaviour to our application:  
    ``click pet -> info pops open to the right with a button date below it -> click date -> new date screen opens up.``
  
  
- We'll start off with some simple code, allowing us to focus on the routing principle at first. Open up the html template for the new ``setup-date`` component. Add the following code to it:
  ```
  <div class="col-md-3">
    <h1>Name</h1>
    <p>Info</p>
  </div>       
  ```

### Creating a route

Our first focus will be to show this component on our screen when we click the ``date`` button in our pet's information window. To do this, we need to use the Routing Angular offers us.

- Angular enables routing by default to enable moving between components in our application :
  ```javascript
      export const appConfig: ApplicationConfig = {
        providers: [
        provideRouter(routes),
      ...
  ```
  
- Check out our app. You'll see a file called ``app-routes.ts`` in our app folder. It's in this particular file where we will add our routing configuration. 
  
- The only thing we have to do here, is add routes we want to use in our app. To do so,
  take a look at ``export const routes: Routes = [];``. This Array of routes will contain the configuration of every route we want to have. The syntax looks like this:  
  ``export const routes: Routes = [{path: 'your-desired-path', component: NameOfTheComponentYouWantToLoad}]``
  
- You can add multiple routes, just separate them using commas. Try adding a route for our ``setup-date`` component. It should point to ``setup-date/name`` and of course load the ``SetupDateComponent``.
  You'll notice the name needs to change depending on the pet we're trying to set up a date with. This is called a ``route parameter``. Try to find out how to use name as a route parameter and make the change
  in our routing.

### Creating links  
- With our routes configured, we of course need a way to follow this route. Add a button to the part of our html where we show the selected pet's name and profile text. It can look like this:
  ```
    <div class="dialog-centered">
        <a type="button"
            class="btn btn-primary btn-lg dialog-centered">
            Setup date
        </a>
    </div>
    ```
  This adds the button to our app, but of course this doesn't work yet. To fix this, we'll use ``routerLink``. 
  Take a look at https://angular.dev/guide/routing/router-reference#router-links and see if you can get it working. Make sure the route corresponds to ``/setup-date/name-of-your-pet``.
  

### Using route params
- Once done, clicking the button will take you to the ``setup-date`` component. Let's extend this with some more functionality. You can start with copying the content of ``setup-date.component.html`` to the same file in your
app.

- Now let's add the logic. We've navigated to the date component to set up a date with a specific pet. To show this specific pet we'll first need to get the name from the url.
  You can use the `ActivatedRoute` component for this (https://angular.dev/guide/routing/router-reference#activated-route).
- Next we'll need to fetch the actual pet from the backend. You should know how to do this by now.
- Finally, change the view so that the actual pet information is shown. 

- Do not worry about the ``Let's Play`` button yet. This is an advanced functionality and will be tackled in the next codelab.

## Conclusion
You've learned:
- How to create a route to a component using `app-routes.ts`.
- How to create links to a specific route using `routerLink`.
- How to get route information with `ActivatedRoute`.




