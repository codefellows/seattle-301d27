Git & GitHub Team Workflow
=================

## When you start a new task/issue...
* Let everyone know you're working on it
  * Move the task from "To Do" to "In Progress" in the Projects tab
  * Assign the issue to yourself. If you are pairing (or mob-programming) an issue, assign it to all the people who are working on it.
* Start from an up-to-date _master_ branch
 * `git checkout master`
 * `git pull origin master`
 *  Create a new feature branch with `git checkout -b <branchname>`
* Do work on your feature branch and **add**, **commit**, and **push**
 * `git add <file>`
 * `git commit -m <useful message>`
 * `git push origin <feature_branch_name>`
* On GitHub...
 * Create a Pull Request (PR) for that branch on GitHub. The PR should be attached to an issue. Typing #theIssueNumber (like #3) in the body of the PR will attach it to the issue.
 * Have at least one other person review the code in the PR and merge it.
 * When the code is merged, close the issue. (Do not unassign yourself - it serves as a record of who did what.) Then, move the task from "In Progress" to "Done".


## Time for a Merge Party!

**WHEN A PULL REQUEST FROM SOMEONE ELSE'S FEATURE BRANCH IS MERGED TO MASTER, EVERYONE MUST DO THESE STEPS**

 * commit changes to your _feature branch_
  * `git add <file>`
  * `git commit -m <useful message>`
 * update your local _master_ branch
  * `git checkout master`
  * `git pull origin master`
 * update your _feature branch_ with changes in _master_
 	* `git checkout <feature_branch_name>`
  * `git merge master`
 * handle merge conflicts _if there are any_
  	* Check all of your project files for the markers that indicate merge conflicts (in other words, the `>>>>>>>>>` and `HEAD` stuff that has mysteriously appeared in your code)
  	* Edit the code to remove the redundancies causing the merge conflict, and eliminate the markers
  	* `git add <affected-files>`
  	* `git commit -m "merged master"`
