# Specifications

## Expected features

### Basics
- Users can group together easily (sharing a secret group name works fine)
- App should determine who the current driver is for the group
	- In case of conflict, any user can override the value and select the current driver manually. This value will remain until there is no more conflict.
- The current driver app will gather data from ACC's shared memory and send it to the server, which will dispatch it to all users in their group.
	- The server should keep the current state of data for the group to use as backup / reference of authority.
- The app will update displayed values with the data whenever it receives it.
	- When a new user joins a group, the app automatically requires the whole current data from the server.
- The app should be fully responsive, to allow almost any window size
- The app should allow a dataset to be displayed as a compact, transparent, always on-top window

### Specifics
- The app keeps track of the current and coming weather (current, +10 mins, +30 mins)
	- An audio alert can optionally trigger when a change of weather is coming
	- The whole weather history is kept and displayed as a bar graph for rain amount
- The app keeps track of all the telemetry (electronics and physics)
	- All the data available from the shared memory of ACC should be considered
 	- The app should display the most useful set of data
  - The app should display any adequate data as a bar or line graph
	- The user should be able to choose which data he wants displayed
- The app keeps track of pit stop strategy values
	- A client user should be able to modify the in-game menu through the app for the driver user (node.js seems to be able to do that)
- The app keeps track of gaps for drivers ahead and behind

 ** Refer to mock-up for data selection and layout**

 ### Configuration
 - User name
 - Group name

 ## Performance
- The app should work on Windows and Mac operating systems.
- The app should be as lightweight as possible, especially on GPU and CPU power.
	- Any graphics should be SVG or heavily compressed image files.
 	- Any audio should be using MP3 format @ 320 kbps maximum.
- The data being sent should be kept at a minimum, to use a little bandwidth as possible for clients and the server.
