The Office Character Generator!

Coder: Tessa Smigla

This React Web Application getches data from an The Office characters API and displays it. 

Taking in an API with data for 83 different characters from The Office, it asks for the user to input a number from 1-83 and will return a character name, the actor, and the first and last episode they appeared in. 

The number being inputed represents the id number that is associated with the character. For example, an input of "39" will retrieve the information matching the character, Jim Halpert, and will display the actor who plays him and the name of the first and last episode he appeared in. 

Entry is regulating the input and its function. It takes in the content typed into the input box and passes it onto Info. The function "submit" prevents the page from reloading when the user clicks enter, passes along the input, and clears the content back to empty, ready for the next inpput.

Info takes in the input given and retrieves the data called. In this case, it is searching in the data for actor, firstAppearance, and lastAppearance. It then takes those data matching and returns the information. 

Link to CodeSandbox Repo: https://codesandbox.io/p/sandbox/frosty-sky-3fsct4?workspaceId=979b2f4f-8a95-47e7-9bb5-a3ca8f5687fc


Link to The Office Character Generator: https://3fsct4.csb.app/


