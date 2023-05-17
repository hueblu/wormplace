<script>
    export let data;
</script>

<h1>blog moment</h1>

<h1>thats crazy</h1>


<ul>
    {#each data.posts as post}
    <li>
            <h2>
                <a href={post.path}>
                    {post.meta.title}
                </a>
            </h2>
            Publusihed on {post.meta.date}
        </li>
    {/each}
</ul> 