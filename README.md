# EcoWanderers -- DevFest
[AppHomepage](https://ecowanderers.vercel.app/) (Keep Updating)\
[Design](https://www.figma.com/file/25vlAXVS8CEidIUnIRUbHo/EcoWanderers?type=design&node-id=0%3A1&mode=dev&t=PBJvjVZSiWYjawMM-1)\
[Devpost](https://devpost.com/software/ecowanderers-do873p)

This repository includes designs and codes for a sustainable travel web.

# Techniques
React, Figma, cookie, mapbox

## Mapbox Tutorial -- how to get a personal token in Mapbox?
1. Go to folder ecowand:\
  git clone // clone the repository\
  cd EcoWanderers // go to the folder you've cloned\
  cd ecowand // go to the ***root*** repository
2. under 'ecowand', create a file called ***.env.local***
3. inside '.env.local', Type: NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN="YOUR TOKEN KEY" (you should **NOT** include "" in your .env.local file)
4. go to file 'page.tsx' (cd ecowand/src) and replace 'NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN' with the default token after mapboxgl.accessToken (**this is important since ONLY by this can the app uses the NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN variable that you define in .env.local**)
5. Replace "YOUR TOKEN KEY" with your ***actual key***

(Note that we've provided our token to make a successful deployment, but if you want to use your own token, please follow the above steps.)

How to get the token?
1. Go to [mapbox mainwebsite](https://www.mapbox.com/)
2. Create an account
3. Under ***Accessing tokens***, either use **Default public token** (1st time user) or **Create a token** (has to be public)
4. Copy your token to "YOUR TOKEN KEY" in '.env.local'

# Contributors
Yuxin Li; Meng Fan Wang; James Ignacio; Evan Taylor

Yuxin Li: Figma Design, Website 'saving' page Programming, Edit on Home page
Meng Fan Wang:
James Ignacio:
Evan Taylor:
