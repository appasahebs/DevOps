This is demo project for "DevOps" CI/CD  
======================

It is consist of following componants ...
- WebApp
- Ansible roles 
  - build
  - deploy
  - ngnix
- hosts (host file for listing remote hosts)

Requirements
----------------------
Python 2.7.10
Ansible 2.7
node v8.12.0
npm 6.4.1

Above requirements need to installed on platform host machine from where we are going to build and releae app.
## Available Scripts

In the project directory, you can run:

### `ansible-playbook build.yml`

Build and release webapp package. First time it will take some time to install dependancies.

### `ansible-playbook deploy.yml -i hosts -v`

Deploy released webapp package to remote host specified in hosts file. This host must be accessible without password over SSH. I have used vagrant hosts and specified ansible_ssh_user and ansible_ssh_private_key_file. If you have remove host password less access over ssh then just specify host ip in [web] role section.

License
-------

Appasaheb Sawant
appasaheb.sawant@gmail.com
------------------