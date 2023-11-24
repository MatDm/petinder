# Codelab05 - Adding your own pet

We have a default list of pets in our database, but what would Petinder be without the ability to show off your very own cute little fluffball? Let's create the option to
add your own pet to the database!

- Adding a Pet means we will be performing a post through our backend API. In a previous codelab, we added logic to perform another call to our API, which was a ``get`` in that specific case.
Check back where we added this ``getPets()`` function. Try to add another function called ``addPet()``.
  
## Reactive forms  
- Using our own input to create a Pet will happen through a Form. In the frontend, you will give values to specific parameters which in the end will be used to create our Pet through the backend. 
To do this, we will use FormBuilder. Take a look at the Angular docs on FormGroups (https://angular.dev/guide/forms/reactive-forms#using-the-formbuilder-service-to-generate-controls). This guide explains how it works through a small example. Try to follow their
  steps and adjust where necessary to meet the requirements of our app. 
  
  
- Some pointers:
    * FormGroups requires a specific dependency, called ``ReactiveFormsModule``. Make sure to add it as an import to your component.
    * Don't worry too much about layout. Just make the create a pet function appear with the same styling as the blocks on the right which we configured in the previous codelab.  
    * Remember that we are talking to a backend that already has its own specific namings. Keep this in mind when setting up your form.
    * When adding an image to a pet, don't worry about usability. You'll have to add it as ``images/filename.jpg`` and that's fine. Uploading an image and storing it, would take us a bit outside of the scope of this codelab
    * Image is not showing? Take a look where we are fetching our images from and solve it.
    

After going through all these steps, you'll be able to add your very own pet to our Petinder app! :tadaa:

## Conclusion
You've learned
- how to use reactive forms in Angular
