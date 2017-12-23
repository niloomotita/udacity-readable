- nov 26 2017
Upvote button was showing the same number for all the posts. 

Why? because it was reading a single number from the state. 
How it was fixed? After the post request to update votes, the we get all the posts and put them into state again, this refreshes the UI so that new vote numbers are shown. 
