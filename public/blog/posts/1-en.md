# Project Deployment Example

Let's look at deploying a project using **wocker** using the [timer](https://github.com/kearisp/timer) project as an
example.

First, clone the repository and navigate to the project directory:

```shell
git clone https://github.com/kearisp/timer.git
cd timer
```

Now you can initialize the project:

```shell
ws init
```


```shell
ws volume:mount ./:/var/www/htnl
```

```shell
ws start
```


<video style="max-width: 100%" controls>
<source type="video/mp4" src="/blog/posts/1-1.mp4" />
</video>
