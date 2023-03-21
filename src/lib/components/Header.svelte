<!--- write a header with navigation options to each route-->
<header>
    <a href="/">Home</a>
    <nav>
        <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
        </ul>
    </nav>
</header>

<style>
    header {
        background-color: #333;
        color: #fff;
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    ul {
        margin: 0;
        list-style-type: none;
        display: flex;
        gap: 1rem;
    }
    a {
        color: #fff;
        text-decoration: none;
        color: inherit;
    }
</style>