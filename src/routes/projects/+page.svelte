<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    const { posts } = data;
</script>

{#each posts as post}
    <h1>{ post.metadata.title }</h1>
{/each}