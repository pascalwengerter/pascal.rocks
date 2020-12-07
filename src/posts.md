---
layout: page
title: Posts
permalink: /posts/
---

<p class="my-32">Coming soon...</p>
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
