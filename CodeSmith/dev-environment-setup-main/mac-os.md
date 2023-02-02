### Install Homebrew
Homebrew is a package manager for macOS and Linux - you'll use it to install most of the other software you'll need. To install Homebrew, navigate [here](https://brew.sh/) and paste the provided script into your terminal.<br>
Once Homebrew is set up, you’ll be able to use the command `brew install` to install any of the other packages.

### Install git
You’ll be using Git and Github for version control - you can read more on that [here](https://github.com/CodesmithLLC/dev-environment-setup/blob/main/Github.md), and it’s important that you take the time to become familiar with it.
To install git, run the command `brew install git`.

### Node & Node version manager
The next thing you’ll need to install is Node.js, a server-side runtime environment for JavaScript which allows us to use it for backend code. All of the units you work on at Codesmith will use Node, so it’s important that you set this up as early as possible! 

You’ll want to install the latest stable version of Node. Something to note, however, is that you might sometimes find yourself using other packages that don’t support Node’s latest stable version - so you may occasionally need to upgrade or downgrade your version of Node to prevent compatibility issues. This probably won’t happen too frequently, but since it’s sometimes inevitable, we recommend that you install Node using a version manager such as `nvm`. This will allow you to quickly and easily switch between different Node versions when necessary. 

For instructions on using `nvm` to switch between Node versions, refer to the [official documentation](https://github.com/nvm-sh/nvm#usage).

To install:

1. Note that we won't be using Homebrew to install `nvm`. Instead, run the following command in your terminal:

   `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`

   This command uses cURL (a tool command line tool used for downloading content from the internet) to download a Bash script and then executes it to install nvm.

   _Note: At the time of writing, NVM **v0.38.0** was the most recent version available. You can check the [GitHub project page](https://github.com/nvm-sh/nvm) for the latest release of NVM, and adjust the above command to include the the newest version._

2. Verify the installation by running the following command:

   `command -v nvm`

   This should return 'nvm' in your terminal. If you receive 'command not found' or no response at all, close your current terminal, reopen it, and run the command again.

3. Install the latest stable LTS release of Node.js by running the following command:

   `nvm install --lts`

   _Note: At the time of writing, the latest stable LTS release of Node.js is **14.16.0**._

4. Verify what version of Node is installed by running the following command:

   `nvm ls`

   You should see something similar to the image below in your terminal.

   ![wsl-nvm-ls](https://github.com/CodesmithLLC/precourse-part-1/blob/master/docs/assets/images/wsl-nvm-ls-14160.png)

5. Verify that Node.js is installed and the currently default version with the following command:

   `node --version`

   Then verify that you have npm as well with:

   `npm --version`
 
## Install PostgreSQL and MongoDB
PostgreSQL and MongoDB are database systems that you'll use during Codesmith. Although you won't be using them for anything in the precourse, we recommend installing them ahead of time so that when you reach the databases unit in the program, you'll be ready to dive straight in.

### Install PostgreSQL
- Select your OS.

  - Mac (with Homebrew): run the command `brew install postgresql`. (recommended)
  - Mac (w/o Homebrew):
    1.  Follow this [link](https://www.postgresql.org/download/) to download the PostgreSQL installer on your machine:
    2.  Use the Interactive installer by EnterpriseDB. You can skip the 'Stack Builder' add-on.
  - Linux: Use the same link from above and follow the instructions for your specific linux distro (Ubuntu/Redhat/etc).

- Go to your terminal and verify that you can run the psql command: `psql --version`

- If the psql command isn't recognized, you'll need to add it to your PATH.
  - Linux and Mac: add the line `export PATH=$PATH:/Library/PostgreSQL/latest/bin` to your `~/.bashrc` or `~/.bash_profile`, respectively, and restart your terminal. The exact path may vary so be sure to confirm the location of the postgresql binaries.

### Install MongoDB
Install the MongoDB Community edition by following the instructions on the links below.

   - [Linux](https://docs.mongodb.com/manual/administration/install-on-linux/) - select your distro
   - [MacOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) - must have homebrew

   - You can check to make sure the CLI is installed by typing `mongo --version` in a terminal.
  
