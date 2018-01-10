{% capture imagePath %}{{ page.date | date: "%Y-%m-%d" }}-{{ page.title | slugify }}/{{ include.name }}{% endcapture %}
{% if include.caption %}
    ![{{ include.caption }}](/assets/post-images/{{ imagePath }})
{% else %}
    ![{{ imagePath }}](/assets/post-images/{{ imagePath }})
{% endif %}
