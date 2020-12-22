---
title: Try to deploy
date: "2020-12-21T13:40:00+07:00"
description: "I'm trying to deploy."
---

I'm trying to separate deployment of the content and the website itself. Current
solution is I push all of the content changes to `content` branch, while all of
the website changes is pushed to `master` branch. So, whenever I write a post,
it should auto deploy without changes in master. I will deploy code in `master`
using tag every several days/week and also merge the `content` branch. I know
this is not the best solution, but it works for now.
