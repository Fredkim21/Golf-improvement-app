# Setting up the Windows Subsystem for Linux

## What is the Windows Subsystem for Linux (WSL)?

"The Windows Subsystem for Linux lets developers run a GNU/Linux environment -- including most command line tools, utilities, and applications -- directly on Windows, unmodified, without the overhead of a traditional virtual machine or dualboot setup." - [Microsoft](https://docs.microsoft.com/en-us/windows/wsl/about)

It is a feature of Windows 10 that enables you to run native Linux command-line tools directly on Windows, alongside your traditional Windows desktop and apps. Using WSL requires fewer resources (CPU, memory, and storage) than a full virtual machine or dualboot setup.

## Why would I use WSL instead of just natively developing on Windows?

Some cross-platform tools were built assuming that the environment in which they run behaves like Linux. The Node.js runtime environment is actually ported to, and runs well on, Windows. However, not all of the libraries are ported over to support Windows and many of them have Linux-specific dependencies.

Being comfortable with common Linux command-line tools is an expected skill for any software engineer. A lot of the resources and documentation found online is also written with a Linux-environment in mind, so not having to translate Linux commands to their Windows equivalents is one less thing to think about when learning the curriculum material.

---

## Instructions

Note that these instructions are adapted from the [manual installation steps](https://docs.microsoft.com/en-us/windows/wsl/install-win10#manual-installation-steps) via Microsoft's documentation.

### 1. Ensure that your machine is running Windows 10, updated to **Version 2004**, **Build 18362** or higher. These instructions also assume your machine is running with an Intel or AMD CPU (**not** ARM-based).

### 2. Enable the "Windows Subsystem for Linux" optional feature

1.  Click the Start Menu, search for PowerShell, and Run as Administrator. A terminal window should open up.

2.  Copy this command, paste it into PowerShell, and run it.

```
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

### 3. Enable Virtual Machine feature

**_Important!_** Your machine will require virtualization features in order to enable the Virtual Machine feature on Windows. If you encounter an error [similar to this one](https://docs.microsoft.com/en-us/windows/wsl/troubleshooting#error-0x80370102-the-virtual-machine-could-not-be-started-because-a-required-feature-is-not-installed) while completing this step, you will need to enable virtualization in your computer's BIOS. The process for doing this will vary from machine to machine, so you may need to do some additional research. Here is [an example](https://www.bleepingcomputer.com/tutorials/how-to-enable-cpu-virtualization-in-your-computer-bios/) of what you might have to do. Searching on Google for "Enable CPU virtualization in BIOS" and your computer's make and model may also prove to be helpful. **When making any changes to a computer's BIOS settings, please follow the directions extremely carefully! Do not change any other settings unless you know exactly what they do.**

1.  You should still have the PowerShell terminal window open. If not, refer to the instructions above and ensure that you Run as Administrator.

2.  Copy this command, paste it into PowerShell, and run it.

```
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

3.  Restart your machine.

### 4. Download the Linux kernel update package

1.  Download the latest package [here](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi). If you prefer, you can find that link directly from Microsoft's [site](https://docs.microsoft.com/en-us/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package).

2.  Run the update package in the previous step. Double click to run - you will be prompted for elevated permission, select 'yes' to approve this installation.

### 5. Set WSL 2 as your default version

1.  Open PowerShell (no need to Run as Administrator)

2.  Copy this command, paste it into PowerShell, and run it.

```
wsl --set-default-version 2
```

### 6. Install Ubuntu 20.04 LTS

1. Visit the [Microsoft Store](https://www.microsoft.com/store/apps/9n6svws3rx71) and select `Get` to begin the download and install process of Ubuntu 20.04 LTS (Long-Term Support).

2. The first time you launch a newly installed Linux distribution, a console window will open and you'll be asked to wait for a minute or two for files to de-compress and be stored on your machine. All future launches should take less than a second.

3. You will then need to create a user account and password for your new Linux distribution. Note that this has no bearing on your Windows user name. Once you create a user name and password, the account will be the default user and will automatically sign-in on launch.

## Congratulations, you've successfully installed and setup WSL on your machine!

You can now open another PowerShell terminal window and run the `wsl` command. You're now running a native Linux environment directly in Windows!

However, we've still got a few more things to take care of:

- Integrating VSCode to work with WSL
- Installing Node.js

## Setting up Visual Studio Code with WSL

Now that we have WSL set up on our machine, we will now install Visual Studio Code and set it up so it works with WSL correctly.

Note that these instructions are adapted from the [Visual Studio Code documentation](https://code.visualstudio.com/docs/remote/wsl).

### 1. Install Visual Studio Code on the **Windows** side (not in WSL)

- [Download VSCode](https://code.visualstudio.com/)
  - When prompted to **Select Additional Tasks** during installation, be sure to check the **Add to PATH** option so you can easily open a folder in WSL using the `code` command.

### 2. Install the Remote Development extension pack

- [Download Remote Development extension pack](https://aka.ms/vscode-remote/download/extension)

## Running WSL from VS Code

When you launch VS Code, it will not immediately connect to WSL. Follow the steps below to connect VS Code to WSL.

1.  Start VS Code.
2.  Press `F1`, type in **Remote-WSL: New Window** and click it. When doing this for the first time, you may see VS Code fetching components needed to run in WSL. This should only take a short while, and is only needed once.
3.  After a moment, a new VS Code window will appear, and you'll see a notification that VS Code is opening in WSL.

    ![wsl-starting-notification](https://github.com/CodesmithLLC/precourse-part-1/blob/master/docs/assets/images/wsl-starting-notification.png)

    VS Code will now continue to configure itself in WSL and keep you up to date as it makes progress.

4.  Once finished, you now see a WSL indicatior in the bottom left corner, and you'll be able to use VS Code as you normally would.

    ![wsl-statusbar-indicator](https://github.com/CodesmithLLC/precourse-part-1/blob/master/docs/assets/images/wsl-statusbar-indicator.png)

_Note_: You can also click that green indicator in the bottom left corner to launch a new WSL VS Code window.

## Install `nvm`, `node.js`, and `npm` on WSL

There are multiple ways to install Node.js. We recommnd using a version manager as it takes care of handling the install process near seamlessly. Node Version Manager, more commonly called nvm, is the most popular way to install multiple versions of Node.js (though we will only install one).

Note that these instructions are adapted from the [Microsoft documentation on installing Node.js on WSL2](https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2#install-nvm-nodejs-and-npm).

### Instructions

1. Open a terminal in VS Code. Make sure that you are running it in WSL! Check the bottom left corner for that green indicator!
2. Copy the following command and run it in the terminal:

   `cd ~`

   This changes the current directory in the terminal to your Ubuntu home directory.

3. Before we continue, we will update Ubuntu to make sure we have the latest updates installed. Run the following command in the terminal:

   `sudo apt update && sudo apt upgrade`

4. Install nvm with the following command:

   `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`

   This command uses cURL (a tool command line tool used for downloading content from the internet) to download a Bash script and then executes it to install nvm.

   _Note: At the time of writing, NVM **v0.38.0** was the most recent version available. You can check the [GitHub project page](https://github.com/nvm-sh/nvm) for the latest release of NVM, and adjust the above command to include the the newest version._

5. Verify the installation by running the following command:

   `command -v nvm`

   This should return 'nvm' in your terminal. If you receive 'command not found' or no response at all, close your current terminal, reopen it, and run the command again.

6. Install the latest stable LTS release of Node.js by running the following command:

   `nvm install --lts`

   _Note: At the time of writing, the latest stable LTS release of Node.js is **14.16.0**._

7. Verify what version of Node is installed by running the following command:

   `nvm ls`

   You should see something similar to the image below in your terminal.

   ![wsl-nvm-ls](https://github.com/CodesmithLLC/precourse-part-1/blob/master/docs/assets/images/wsl-nvm-ls-14160.png)

8. Verify that Node.js is installed and the currently default version with the following command:

   `node --version`

   Then verify that you have npm as well with:

   `npm --version`
   
## Install PostgreSQL and MongoDB on WSL
PostgreSQL and MongoDB are database systems that you'll use during Codesmith. Although you won't be using them for anything in the precourse, we recommend installing them ahead of time so that when you reach the databases unit in the program, you'll be ready to dive straight in.

### Install PostgreSQL
Install PostgreSQL for WSL: [(Instructions adapted From Microsoft docs)](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql):

   1.  Update your Ubuntu packages: `sudo apt update`
   2.  Once the packages have updated, install PostgreSQL (and the -contrib package which has some helpful utilities) with: `sudo apt install postgresql postgresql-contrib`
   3.  Confirm installation and get the version number: `psql --version`
 
 Install PostgreSQL for Windows (native):
 
    1.  Follow this [link](https://www.postgresql.org/download/) to download the PostgreSQL installer on your machine:
    2.  Use the Interactive installer by EnterpriseDB. You can skip the 'Stack Builder' add-on.

### Install MongoDB
Install the MongoDB Community edition by following the instructions on the link below.

[Installing MongoDB for WSL](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-mongodb):
   1. Open a WSL terminal
   2. Update your Ubuntu packages: `sudo apt update`
   3. Once the packages have updated, install MongoDB with: `sudo apt install mongodb`
   4. Confirm installation and get the version number: `mongod --version` and `mongo --version`
   - You can check to make sure the CLI is installed by typing `mongo --version` in a terminal.
 
 [Installing MongoDB for Windows Native](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

  
# Additional Notes

With WSL, there is one extra step if you ever want to see your files in a GUI File Explorer instead of just the command line. The following two-step process is what you would do in order to open a File Explorer window that shows your current directory of files.

1. Use the `cd` command to navigate to whichever directory you want to open with File Explorer.

2. Once you are in the directory you wish to be in, run the following command:

   `explorer.exe .`

   Take note of the extra `.` at the end of the command. The `.` represents the current directory. So when we run the `explorer.exe` command, we are simply passing in the path to the folder we want it to open. Once it is open, you can do everything else you normally would as if you opened a normal folder on your desktop.
