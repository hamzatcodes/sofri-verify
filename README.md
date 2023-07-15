# Sofri Verify project built with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Create a file named `.env`, copy everything from the `example.env` file and paste it in.
3. Fill the details

# For Development (For production, skip to step 5)
4. Run `npm dev` command (this will start server)
# For Production
5. Run `npm build`
6. Run `npm prod` command

That's all! your app would be running on the port you set it to `(80 or 443 is ideal for node apps)`
you should see this lines on your console `app running on port 80` and `Connected to the database.` when your app connects to your database successfully.
