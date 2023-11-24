# Codelab04 - Sorting the list, showing info and filtering by name

We've been guiding you in a very detailed manner through the previous codelabs, it's time to shift gears a little bit. You should now grasp the basics of how
an Angular app is structured and how the components all work together. From now on, we'll purposely not give you the entire solution anymore, which will pose more of
a challenge (which is a good thing :innocent:). **Do let us know if you're stuck for longer than an hour, we'll happily help you out!**

## Sorting
We now have an application going that fetches all pets from our database and shows them on the screen. Time to start adding some features! Let's start by 
applying some basic sorting to our list. We'll start with sorting our pets by name.

- Remember how we stated that the pets on our screen are in fact an Array of Pets? Just like in Java, we have functions available in Typescript to help us
work with the contents of our Array. Let's write an easy sorting mechanism.
  
### Pipes ```|```
- We want to add a permanent sorting based on the starting letter of our pet's name. In other words, we want to sort our pets alphabetically.
Since we are going to make this permanent, we can simply alter our ``getPets()`` method in ``pet.service.ts``. Right now, it reads ``return this.http.get(this.yourVariableName);``.
  We will be changing this so that our response will be sorted. In order to do so, we will use the ``pipe`` function which can be invoked on our ``http.get`` command. A little background on that:
  
    > You can use pipes to link operators together. Pipes let you combine multiple functions into a single function. The pipe() function takes as its arguments the functions you want to combine, 
     and returns a new function that, when executed, runs the composed functions in sequence.
     
- So we are using pipes to link operators together and to combine multiple functions into one. This is a statement that says alot and at the same time not that much. What kind of operators are we talking
about and how do we call such a pipe? Luckily, we have the Angular docs to provide us with more information:
    >Operators are functions that build on the observables' foundation to enable sophisticated manipulation of collections. For example, RxJS defines operators such as map(), filter(), concat(), and flatMap().
    Operators take configuration options, and they return a function that takes a source observable. When executing this returned function, the operator observes the source observable’s emitted values, transforms them, 
    and returns a new observable of those transformed values.   
  > For some more extensive info and a list on allowed RxJS operators: https://angular.io/guide/rx-library, https://rxjs.dev/api
   
### Sort function
- Now that we know what the pipe function does and which operators it allows us to combine, it's time to try and invoke this on our ``getPets()`` function.
``return this.http.get<Pet[]>(this._petsUrl)`` is currently returning an Observable based on the response we receive from our http call to our backend api.
  Try to extend this with a pipe that will map each value in our response to the correct position after sorting. Remember, we are receiving an ``Array of Pets`` 
  so the ``sort`` function is available for this. If you did this correctly, refreshing your app should give you all the pets in a nicely sorted manner. If you're
  stuck, take a look at the examples provided in the Angular doc linked a bit up. It can help you writing the correct syntax.
  
## Selecting
Time to show our pet's info! Nobody swipes right without some extra personal info on Tinder, right?! :grimacing: The flow for showing this extra info is:  **Click on pet -> pet info shows up to the right of the screen.**  

### Setting up the controller
- This means we will have to tell our application that the pet we *click* is a Pet object. For that Pet object, we want to display the name and the information. 
Declare a variable in ``profile-gallery.component.ts`` for a selectedPet, make sure to use the correct type and check if any other part of this class needs updating. 
Now create a method called ``selectPet()`` where you pass in a Pet as an argument. Make sure our current selectedPet is equal to the pet we passed in.

### Listening to click events
- In order to show this info in our app, our template needs some additional code as well. Take a look at the div that takes care of showing all our pets. We will have to add code below our ``*ngFor`` statement. We want to do two things here.
First of all, we want to invoke our selectPet() function when someone clicks one of the pets. Second, the CSS artist that lives deep inside all of us wants to highlight the pet we clicked on, making sure we never mistake which pet
  is active at the moment. Let's start with the first requirement!
  

- Binding actions to an event is pretty straightforward. We first need to determine what kind of event we'll be having, in our case it will be a ``click``. After this, we'll bind that click event to the function we want to execute, in our case this is
``selectPet()``. This can be added as a statement to the div where we also loop over our pets. The syntax for this is ``(event) = "functionToPerform()"``.

### NgIf
- Last step to make this first requirement work is adding a new section which shows us what we actually want to see. Binding a click event is not enough in this case, we need to specify what we want to put where on our screen as well. 
Start by adding the following code to your ``profile.gallery.component.html`` file.
  ```
  <div class="col-md-3">
    <div class="gallery-detail">
      <section id="petProfile" class="tiny-dialog fader">
        <h3>Name of Pet</h3>
        <p>Profile text of Pet</p>
      </section>
    </div>
  </div>       
  ```
- This should already show you a nice block to the right of your screen. We want to fix two things here. We need to show the name and profileText for our selectedPet and we want this section to only appear whenever we click a Pet.


- You should be able to adjust the code so it displays the correct fields for our selectedPet. The conditional showing of this block isn't too hard either. Take a look at https://angular.io/api/common/NgIf and implement this. We only want
  to show the block with name and profileText when we click the corresponding Pet. (in other words, when there is a ``selectedPet``).

### Conditional styling
To highlight a pet we need to add the CSS class `active` to the selected pet `<div>`. Angular allows you to add styling that depends on a certain condition. 
With`[class.<class-name>]="<condition>"` the class called `<class-name>` will be added when `<condition>` holds.
Add `[class.active]` to your pet `<div>`. Which condition do you need to add?
If you're finished, enjoy your new stylish pet overview. Like a CSS pro!
  
## Filtering
Time for our final sorting step! We've sorted our pets alphabetically. We made them clickable and are showing their name and information when we do. Right now, this seems enough but what will happen if our app goes viral and there are millions
of pets in there? It's a million dollar idea, going viral isn't a chance. It's programmed! :moneybag::moneybag::moneybag:  
When our list becomes really long, we would like to be able to, at least, filter by name. Let's implement this!
  
### Custom pipes  
When applying a filter to our entire incoming response, we can do it the way we did at first in our ``getPets()`` function. For this requirement however, we only want to filter when we type a name in our search box. We'll turn to Angular's Pipe interface.
You can find more information about this here: https://angular.io/api/core/Pipe. We can use Pipes to transform incoming data. The logic for this is written in a specific ts file for this, the pipe itself will be called in our html.

  
- Generate a file called ``name-filter``. Make sure this is a pipe file and make sure it is placed in a folder called pipes. Check back on previous codelabs if necessary. ``ng g pipe`` is possible.


- Inside that ``NameFilterPipe``, you will see that the class implements the ``PipeTransform`` interface. Inside the body, you'll notice a ``transform`` function. Above all that, you'll see the ``@Pipe`` decorator, where you can also change the name for your pipe.
  This name is important since you'll be calling this from your html file.


- Our logic will be added to the transform function. This function accepts two arguments. The first one is the data you will be transforming, the second one is the argument used as a filter. We will be transforming our Array of Pets and we will filter it by name, which
  means we'll be taking in a string. Now write the logic to perform this filter. 
  

- Some pointers:
  - We don't want to be case-sensitive here, so put your string to lowercase first.
  - You can call the ``filter`` function on your array. This will allow you to check if any of the Pets in our Array ``include`` our search string.


Now that we made a pipe that will filter names, all that's left to do is call this pipe when necessary.

### ngModel
- Add the following code to ``profile-gallery.component.html``:
  ```
  <section class="tiny-dialog">
    <h3>Find your pet</h3>
    <div class="form-group">
      <label for="name">Name</label>
      <input id="name"
          name="name"
          class="form-control"
          placeholder="Name"
          [(ngModel)]="searchText">
    </div>
  </section>
  ```
  Nothing out of the ordinary here, except the ``[(ngModel)]`` part. You can find more information on this ``directive`` at https://angular.io/api/forms/NgModel. 

### Putting it all together
- Like we said before, we still need to call our pipe somewhere. We will be filtering our Array of Pets, so we want to call it where the Array is being processed. Look for the place in our html where this is happening and add the pipe to the statement. 
The syntax for this is ``| nameFilter: searchText``. You just add it to the statement that processes our Array and change the values if you chose different ones in your application.
  

- After doing this, you'll notice your application still won't run. Inspect the error message and try to fix it.

  
- When you fixed that last bug and check your app in the browser, you'll see a new section to the right where you can type a pet's name. The application will filter the list in real-time. Nice work! :thumbsup:

## Conclusion
You've learned: 
- about the pipe operator ``|``
- about build in pipe functions like ``sort``. 
- how to listen to events in your view and more specifically click events.
- how to use ``ngIf``.
- how to make your own custom pipe function with ``ng pipe <pipe_name>``.
- about binding the input of a user to a variable using  ```[(ngModel)]```
    
Next will show you how to create your own pet by using forms.
