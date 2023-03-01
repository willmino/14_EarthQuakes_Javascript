14.2.2

Creating a feature branch

git pull origin main lets you know that your version of the main branch on the computer is up to date with the github main branch.

Its a best practice to either pull from the main branch to get latest updates to main branch.

OR

Pull "upstream" of the branch you are creating. Important because version of the main branch on your computer needs to be up to date with the main branch on GitHub.


CREATING A BRANCH STEPS

1. Navigate to repo folder in terminal. type git pull or git pull origin main.

[Below line allows you to navigate tothe Simple_Leaftlet_Map branch.]
2. git checkout -b Simple_Leaflet_Map   .  Then press enter   (git checkout lets us navigate between branches).   -b indicates we are creating a new branch.
                                                name of the new branch follows the -b

Successfull branch creation will return :    Switched to a new branch 'Simple_Leaflet_Map'

I tried and it was successfull 2/23/2023


14.2.3 Create HTML FILE and CSS FILE

Using CDNs has a security risk. To cournterract it, its best practice to include an integrity value with the CDN.
Each file we added has its own integrity value, which is a Base64-encoded cryptographic hash of a resource that prevents the CDN from being hacked.



14.2.4

Create code for a Simpe Map.

We're assigning the variable map to the object L.map(), and we'll instantiate the object with the given string 'mapid'.

The mapid will reference the id tag in our <div> element on the index.html file.

The setView() method sets the view of the map with a geographical center, where the first coordinate is latitude (40.7) and the second is longitude (-94.5). We set the zoom level of "4" on a scale 0–18.



/*
Also, this is the js code that we used: it is a different version from the one that contained the attributes above

let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
  });



*/


Add a tile layer for our map:

Add the map tile layer method to the logic.js file.

Let's break down what's happening in this code block:

We assign the tileLayer() method, as shown in the Quick Start Guide's "Setting up the map" section to the variable streets. Leaflet doesn't provide a tile layer. Instead, it offers various tile layer APIs.
The following URLs appear in the parentheses of our tileLayer() method:
The API URL with a reference to the accessToken
The OpenStreetMap URL inside the curly braces of our tileLayer() method
We add the maxZoom attribute and assign it a value of 18.
We add the id attribute and assign it mapbox/streets-v11, which will show the streets on the map.
We add the accessToken attribute and assign it the value of our API_KEY.
Finally, we call the addTo() function with our map object, map on our graymap object tile layer. The addTo() function will add the graymap object tile layer to our let map.


Use the Mapbox Styles API

14.3.1 Add, Commit, and Push to a Branch

Check the branch you are currently in:
git branch

Check the status of the branch you are in:
git status


To see all folders and files in the Simple_Map folder type:
git status -u


After typing git push and pressing Enter, the output message will look like the following:

fata: error

To push the folders and files to the Simple_Leaflet_Map branch for the first time, type git push --set-upstream origin Simple_Leaflet_Map in the command line and press Enter.

This will do a git push to the Simple_Leaflet_Map branch!



14.3.2

Compare Branch to Main Branch

To merge your Simple_Leaflet_Map branch with the main branch, we will:

1. compare changes between the two branches so we can merge them.

2. Create a pull request on github

3. Acter we review the pull request, we can merge the branch into the main branch.

Navigate to the Github repo and select "Compare and Pull Request"

14.3.3

Creating a pull request on github

Learning this is ESSENTIAL because you will be doing this when working with teams in a real world setting.

If the code looks good and there are no changes to be made, THEN you can merge your branch with the main branch.


PULL REQUEST PROCESS:

On Open a Pull Request Page

Resolve the conflicts to the pull request (conflicts are preventing merge)

Then, click to submit another pull request, and use the options available to select commit merge. Voila!


Now the branches are merge!


14.4.1

Map A Single Point

How to add a single maker to a map and change the radius of the marker.

However, she wants you to create a branch for adding points to a map for the GitHub respository so that new interns and employees can use this as a tutorial.


Remember to use git checkout [name of branch] to switch between branches

Remember to use git checkout -b [name of your branch] to switch to a new branch.


