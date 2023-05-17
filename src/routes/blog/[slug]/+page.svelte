<script lang='ts'>
    import type { PageData } from './$types';

    export let data: PageData;
    const { title, date, content: Content } = data.post;
  </script>
  
  <article>
    <h1>{title}</h1>
    <p>Published: {date}</p>
    <Content />
  </article>