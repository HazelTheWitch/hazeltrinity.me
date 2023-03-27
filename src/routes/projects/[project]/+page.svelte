<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    const { title, language, Content } = data;
</script>

<article>
    <h1>{ title }</h1>
    {#if language}
        <p>Language: { language }</p>
    {/if}
    <Content />
</article>