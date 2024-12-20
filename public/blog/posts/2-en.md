# Connecting to a Database in PhpStorm


## Activating SSH

First, you need to enable SSH in the proxy container:

```shell
ws proxy:init
? Http port: 80
? Https port: 443
? Enable ssh proxy? Yes
? SSH Password: ***
? SSH port: 22
```



```shell
ws proxy:start -r
```


## Creating a Connection

### Select the Database Type

![Step 1](/blog/posts/2-img-1.png "Step 1")


### Fill in the Database Credentials

![Step 2](/blog/posts/2-img-2.png "Step 2")

![Step 3](/blog/posts/2-img-3.png "Step 3")


### Create an SSH Connection

![Step 4](/blog/posts/2-img-4.png "Step 4")

![Step 5](/blog/posts/2-img-5.png "Step 5")
