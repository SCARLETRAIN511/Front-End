## jQuery selectors from html file

1. select all elements in the document

    `$( "*" );`

2. select the current HTML element

    `$( this );`

3. selection based on element

    e.g `<p>, <button>, <q>, <blockquote>, <a>, <span>`...

    `$( "p" );`

    - select the first `<p>` element

        `$( "p:first");`

    - select the first `<li>` element of the first `<ul>`

        `$( "ul li:first" );`

4. selection based on id

    e.g. `<p id="test">`

    `$( "#test" );`

5. selection based on class

    e.g. `<button class="new_version">`

    `$( ".new_version" );`

    - select all with the specific element and class

        `$( "p.intro" );`

6. selection based on attribute

    e.g. `<a href="www.baidu.com">Baidu</a>`

    - select all elements with an href attribute

        `$( "[href]" );`
    
    - select all `<a>` elements with a specific attribute equal to a specific value

        `$( "a[target='_blank']" );`
    