# App 🚀

1. Header
  -Logo
  -Home, About, Contact (anchor tags for redirecting the user between pages| Routing)
  -Sign-In & Sign-Out Buttons

2. Body
   All 3 are separate pages and have a different body
  {-Home
  -About
  -Contact
  -Login page} 

3. Footer
  -copyright
  -links to socials.

  # Functionality

  - So the concept here is to use the sign-in and sign-out buttons for state management. 
  - We have to fetch the data from API which provides usernames and passwords.
  - Now if the data that is entered doesn't match the data from the API throw the user  an Invalid Credentials div
  - If the data matches, log the user in and redirect to the home page.
  - If the user logs out of the website, make sure that he/she has no longer access to your home about and contact page.
