Switchboard Programming Challenge - Frontend Engineer

Thanks for your interest in working with us at Switchboard! This is a programming challenge we’d like you to complete which is meant to give you a flavor of the type of work we do, while giving us an opportunity to assess your skills and better understand how you approach designing technical solutions. The tasks are intentionally underspecified--there’s no “right answer” that we’re looking for, so feel free to take things in directions that you think are best given the requirements as you understand them.  

Given the open-endedness of the exercise, we’d like to impose some bounds on the timing, both to be respectful of your time overall and to create more similar experiences across candidates. We ask that you spend ~4 hours on this exercise and make as much progress as you can, and then write up a couple paragraphs on what you would do next if you had more time. In a similar vein, feel free to stub out portions of the code to indicate other parts you would build out next.

When you’re done, you can email us a link to the repo, or add Github user shreyes to the repo, or save the code in a zip file and email it to us. Please include a README which describes how to run the code locally, and any other setup that might be required.

After that, we’ll schedule a call for you to go through the code with the team where we can discuss it, ask questions, and we can talk through the things you would have done next if you had more time. Also, please don’t share the details of the exercise or data with others.

Questions: If you have any questions, don’t hesitate to ask! Email shreyes@oneswitchboard.com 

ActBlue Fundraising Dashboard

Goal: Build a webpage that displays information about donations that a campaign has raised from donors. At minimum, the website should be able to:
Show recent individual contributions
Show aggregated amounts raised in the last 1 day, 7 days, and all-time
Filter these results by a particular refcode(s)

Feel free to add anything else on top of this, though ideally these minimum requirements work well and are easy to extend or adapt. The most common users of this dashboard would be finance directors or digital directors on small political campaigns using Switchboard.

Normally, the donation data on the page would be updated in real-time as new donations are made to the campaign. But for the purpose of this exercise, we’re giving you a static dataset of (fake) donations to display. 

You may use any programming language and libraries you’d like, though our preference is you use JavaScript/React since that’s what most of Switchboard’s frontend code is written in.

The site should be runnable locally on reviewer’s computers. 

More details on the dataset:

Data for you to use for the exercise is available here:
https://drive.google.com/drive/folders/1P_YlH4yqYkhejWN088IjLl4cwLah6_5j?usp=sharing

There is a .csv file you can load into any datastore you’d like. Or if you’re using a sql database, there is a .sql file you can run to create a table and load in the data. Let us know if you have any trouble doing this, or if anything looks off with the data and format.

The (fake) data is simulating data coming from ActBlue, a fundraising platform which Democratic campaigns use to host donation pages and process payments. ActBlue provides orgs with access to their own donation data through a webhook that sends the data to orgs in real-time. For this exercise, you can assume that we already have a system that receives this raw data from ActBlue and loads it into a database table like the table in the folder above. 

The columns of the database table match the entries in the payload that ActBlue sends us, so you can see descriptions of them here. https://secure.actblue.com/docs/custom_integrations 

A couple notes in case it’s helpful: unique_identifier is unique for every row. The order_number is the same for every donation in a recurring series, so is sometimes repeated, but the pair of <order_number, paid_at> should be unique.

Let us know if you have any questions about the details of the data.
