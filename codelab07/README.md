# Codelab07 - Advanced functionalities

Your app has some basic functionalities and is working now! Still, there's a bunch of quality-of-life things we haven't added yet. You can look at our current
release as MVP (minimum viable product). For the people that are fast, we'll list a few additional functionalities that we would like to see you add! We expect you
to look the potential solution for these issues up yourself (if necessary). If you're **really** stuck, you can of course call for help.

## The finishing touches
### Deleting
- We can add a pet, but we can not delete one. Write a function that allows us to **delete** a pet. You will have to extend the backend for this as well. The Delete Pet button can
be added to the same section that opens up when we click a pet.
    - Sidenote: we want to delete based on the pet's id(we'll get in trouble if we delete by name since it's not unique)

### Deploying
- Right now, this app just runs locally on your computer. We want it out there in the wild! Get the backend to Heroku and deploy the frontend to Netlify. Change your code so they fetch data where they
need to.
  

### Using advanced backend functionality
- Add the functionality to setup a date with a pet. In the backend, you will see an endpoint that takes care of sending a message over WhatsApp when a date is being made. Add a field to
the setup-date component where you can enter a name of your choosing. When you click on "let's play!", we want to fire that sendMessage endpoint. Adjust the message it sends to a sentence that also includes the name
  you entered. We want to know who is fixing a date with one of the pets!
  
### Pet popularity  
- When we click on a pet, we get the extended info to the right of our screen. Our pet has a field called popularity. Let's start using this. Make sure this value is shown in the extended
info section. When we set up a date with a pet, we want to increase the popularity of that pet with +1. As an extra condition, we want to show the popularity through use of certain words:
    - popularity < 1: **Freezing**
    - popularity between 1 and 2: **Normal**
    - popularity between 3 and 4: **Popular**
    - popularity above 4: **Sizzling hot!**
    
    Small pointer: a pipe seems to be a good place to start this popularity quest off. Check the backend as well for clues.  

### Using different form elements (radiobuttons, select-one, ...)
- Adding a new pet is a hassle right now, since the backend only accepts certain values and our frontend is very forgiving. This is difficult for new users. Can you make this function more robust?


### Security
- Security will be important in your new PetTinder app. 
  - Try creating a login component that allows users to log in.
  - Afterwards all http calls should include this username in the `Authorization` header.
  - Use an interceptor to achieve this. (https://blog.bitsrc.io/7-ways-to-leverage-httpinterceptors-in-angular-59436611844d)

### Experiment
- Of course this app can contain a lot more functionalities than it does right now. Implemented everything up till now? The rest is up to you! Go experiment and add more functionalities worthy of this amazing app!


## Conclusion
You've learned:
- how to deploy your app to netlify and heroku
- how to use the select one form element using `<select><option></option></select>`.
- How to use interceptors
