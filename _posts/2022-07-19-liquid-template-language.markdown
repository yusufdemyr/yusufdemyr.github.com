---
layout: post
title: "Liquid Template Language"
categories: language
description: "This page a guideline to Liquid Template Language for personal reasons"
variable: 2
---
<style>
    .red {color: red}
    .btn{ width: 170px;
       height: 40px;
      
       color:blue;
       border: 2px solid #000;
       font-family: 'Lato', sans-serif;
       font-weight: 500;
       background: transparent;
       cursor: pointer;
       transition: all 0.3s ease;
       position: relative;
       display: inline-block;
       
       line-height: 39px; 
       padding: 0;
    }
    .btn:hover{background: transparent;color: #000;text-decoration: none !important;}
    .btn span{position: relative;
       display: block;
       width: 100%;
       height: 100%;}
    .btn:before,
    .btn:after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      background: #000;
      transition: all 0.3s ease;
    }
    .btn:before {
      height: 0%;
      width: 2px;
    }
    .btn:after {
      width: 0%;
      height: 2px;
    }
    .btn:hover:before {
      height: 100%;
    }
    .btn:hover:after {
      width: 100%;
    }
    .btn span:before,
    .btn span:after {
      position: absolute;
      content: "";
      right: 0;
      bottom: 0;
      background: #000;
      transition: all 0.3s ease;
    }
    .btn span:before {
      width: 2px;
      height: 0%;
    }
    .btn span:after {
      width: 0%;
      height: 2px;
    }
    .btn span:hover:before {
      height: 100%;
    }
    .btn span:hover:after {
      width: 100%;
    }

</style>
<a class="btn" href="https://shopify.dev/api/liquid">you can find source here</a>


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
<a class="btn" href="#basics">Navigate to Basics</a>

### Defining logic with tags
<li>Liquid tags are used to define logic that tells templates what to do. Text within tag delimiters doesn't produce visible output when the webpage is rendered.</li>
<code>{% raw %} {% %} {% endraw %} -> Curly brace percentage delimiters denote logic and control flow.</code>
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
<a class="btn" href="#tags">Navigate to Tags</a>

### Modifying output with filters
<li> Liquid filters are used to modify the output of variables and objects. To apply filters to an output, add the filter and any filter parameters within the output's curly brace delimiters, preceded by a pipe character.</li>
<li> Multiple filters can be used on one output. They're parsed from left to right.</li><br>
<code><b>{% raw %}{{ | }}{% endraw %} -></b> Filters are placed within an output tag and denoted by a pipe character.</code>
    {% raw %}
    {% assign my_variable = "Health Potion" %}
    {{ my_variable | upcase | remove: 'HEALTH' }}
    {% endraw %}
Output:
    {% assign my_variable = "Health Potion" %}
    {{ my_variable | upcase | remove: 'HEALTH' }}

<a class="btn" href="#filters">Navigate to Filters</a>

### Referencing objects

<ul>
<li>Lquid objects represent variables that you can use to build your theme. Object types include, but aren't limited to:</li>
<ul>
<li>Store resources, such as a collection or product and its properties</li>
<li>Standart content that is used to power Shopify themes, such as <code>content_for_header</code></li>
<li>Functional elements that can be used to build interactivity, such as <code>paginate</code> and <code>search</code></li>
<li>Objects might represent a single data point, or contain multiple properties. Some products might represent a related object, such as a product in collection</li>
<code><b>{% raw %}{{  }}{% endraw %} -></b> Double curly brace delimiters denote an output.</code>
</ul></ul>

{% raw %}
```html
  <div class=”product-page”>
      <div class=”product-image”>
        {{ product.featured_image | image_url: width: 400 | image_tag }}
      </div>
    <div class=”product-title”>
      {{ product.title }}
    </div>
    <div class=”product-price”>
      {{ product.price | money }}
    </div>
  </div>
```
{% endraw %}

Output:
```html
<div class=”product-page”>
  <div class=”product-image”>
    <img src="//cdn.shopify.com/s/files/1/0561/7470/6753/products/science-beakers-blue-light.jpg?v=1654828801&amp;width=400" alt="Health potion" srcset="//cdn.shopify.com/s/files/1/0561/7470/6753/products/science-beakers-blue-light.jpg?v=1654828801&amp;width=352 352w" width="400" height="267">
  </div>
  <div class=”product-title”>
    Health potion
  </div>
  <div class=”product-price”>
    $10.00
  </div>
</div>
```
#### Scope
<li>Some objects can be accessed globally, and some are available only in certain contexts. Refer to the specific object reference to find its access scope.</li>

#### Creating variables
<li>You can also create your own variables using variable tags. Variables are treated like objects syntactically.</li>
<br>
<a class="btn" href="#objects">Navigate to Objects</a>

<span id="basics">

## Basics
### Object handles
<li></li>

