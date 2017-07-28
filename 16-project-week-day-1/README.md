![CF](https://i.imgur.com/7v5ASc8.png)  Class 16: Project Week, Day 1
=======

# Project Week, Milestone 1:
## Planning phase
Welcome to project week! This first day is all about scoping your project and getting it planned out. You have a lot to do today...let's get started.

### User scenarios
Revisit the user scenarios you wrote on Friday. Complete any remaining user scenarios, and give them a thorough read-through to make sure these are actually what you want. The more complete and thoughtful these are, the easier the rest of your planning process will be.

### User stories
Once you've settled on your user scenarios, write user stories for those scenarios. Remember, user stories tell...
- Who needs a feature (and a brief descriptor of their role/relationship to the app)
- What they want that feature to do
- Why they want it
Also, remember that user stories about what *shouldn't* happen can be just as useful as stories about what *should* happen.

If you want a feature in the app, you MUST have at least one user story (preferably more, if multiple users want it) that requires it. No exceptions.

Write your user stories in a `user-stories.md` file in your repo.

### Establish MVP
Now for the hard part. Take your user stories and prioritize.

What absolutely has to be part of your app for it to ship? (Another way to think of this is: if the app is missing a certain feature, can you still use it?) These are your MVPs. In your `user-scenarios.md` file, move these user stories into an MVP section.

The remaining user stories are your stretch goals. In the `user-scenarios.md` file, move them into a "Stretch Goals" section. Then, list them in order from easiest to implement (at the top) to hardest to implement (at the bottom). If you get your MVPs done and still have time, you'll tackle the stretch goals in that order.

### Project Domain/Data models
Now, take the MVPs and grab a whiteboard. Create some drawings that show how you will model your real-world problem in code.
- What are your views?
- What data (be as specific as you can) does each view need?
- Where will each view get its data?
- What data is persisted where?
- What data does your API (the one you're building, to your database) send and/or receive? What routes do you need?
- What are your database objects? How are they related?
- If you're using an external API, what data will you receive from it? Will you call it from the client or the server?
Take a picture of your model(s) and add them to your repo, in a folder called "domain models".

### Wireframes
Create wireframes for each of your pages. Start with pencil-and-paper. After that, save them to your repo in a folder called "wireframes". You can either take pictures of your pencil-and-paper wireframes, or use a wireframe creation tool (there are many online).

### Project proposals
Finally, find your instructor and present your proposal. (First come, first served.) You must have your:
- Project pitch
- Group agreement
- User scenarios
- User stories
- Domain/data models
- Wireframes

### Technical requirements
Once you have instructor approval, break your MVP user stories down into technical requirements. Save these in a technical-requirements.md file in your repo.

### Tasks and your GitHub project
Almost there! Now that you have your technical requirements done, it's time to set up your project in GitHub and create tasks.

In your repo, create a project. Give it three columns: `To Do`, `In Progress`, and `Done`.

Now, look at your technical requirements. For each one, determine what, exactly, needs to be done in code. Then, break this work down into 30 minute to 2-hour chunks. Each one of these "chunks" will be a task - a.k.a. an "issue" on GitHub.

For each task, create a card in the GitHub project. Turn each one into a GitHub issue. In the issue, give a brief explanation of what needs to be done; reference wireframes/data models/etc. if need be.

Finally, arrange the To Dos in order of what needs to be completed first. As you arrange, give some thought as to what issues "block" other ones. Also, remember: NO CSS IS TO BE WRITTEN UNTIL YOUR HTML AND JS IS AT MVP. Functionally, this means you probably won't be writing CSS until Wednesday afternoon. Get the functionality done first, before you succumb to the lure of CSS.

### Review
At this point, go take a 15-minute break. (Really. We mean it. You need your brain to take a break before your final review of your tasks.) Finally, as a group, review your user scenarios, user stories, and tasks one more time to see if there are any needed changes.

### Start coding
Now you can start writing some code! Pick up tasks in the order that they need to be completed. You can pair-program or not, based on what you think will be more efficient for your team.

Good luck, and may the code be with you.
