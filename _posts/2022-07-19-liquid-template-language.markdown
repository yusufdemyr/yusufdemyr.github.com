---
layout: post
title: "Liquid Template Language"
categories: language
description: "This page a guideline to Liquid Template Language for personal reasons"
variable: 2
---
<style>
    .red {color: red}
</style>

[you can find source here](https://shopify.dev/api/liquid)

### What is a template language?
<li> A template language allows you to create a single template to host static content, and dynamically insert information depending on where the template is rendered.</li>
<li> For example, you can create a product template that hosts all of your standart product attributes, such as the product image, title, and price.</li>
<li> That template can then dynamically render those attributes with the appropriate content, depending on the current product being viewed.</li>

### Liquid Basics
<li> Liquid is used to dynamically output objects and their properties. You can further modify that output by creating logic with tags, or directly altering it with a filter. Objects and objects properties are output using one of six basic data types. Liquid also includes basic logical and comparison operators for use with tags.</li>

{% raw %}
```html
<title>
  {{ page.title }}
</title>
{% if page.description %}
  <meta name="description" content="{{ page.description | escape }}">
{% endif %}
```
{% endraw %}
<b>page.title</b> -> Using the codes you defined at the beginning of the page, the title assigned to the page shows the variable owned by the title.<br>
<b>page.description</b> -> Using the codes you defined at the beginning of the page, the description assigned to the page shows its variable.<br>
<b>{% raw %} {% if .. %} {% endraw %}</b> -> That means like if true run that code block.<br>
<code>
OUTPUT<br>
{{page.title}}<br>
{% if page.description %}
    <meta name="description" content="{{page.description | escape}}">
{% endif %}

### Defining logic with tags
<li>Liquid tags are used to define logic that tells templates what to do. Text within tag delimiters doesn't produce visible output when the webpage is rendered.</li>
{% raw %} {% %} {% endraw %} -> Curly brace percentage delimiters denote logic and control flow.
    {% raw %}
    {% if product.title == 'Health potion' %}
    This is a rare potion. Use it sparingly!
    {% endif %}
    {% else %}
    This is not a rare potion. Trash!
    {% endraw %}
So the output is:
    {% assign my_variable = "Health Potion" %}
    {% if product.title == 'Health Potion' %}
    This is a rare potion. Use it sparingly!
    {% else %}
    This is not a rare potion. Trash!
    {% endif %}




