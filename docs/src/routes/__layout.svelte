<script>
    import "chota/dist/chota.min.css";
    import "prismjs/themes/prism-tomorrow.css";

    import {base} from "$app/paths";
    import {page} from "$app/stores";

</script>

<nav class="nav">
    <div class="nav-left">
        <a href="{base}/" class:active={$page.path === "/"}>README</a>
        <a href="{base}/demo" class:active={$page.path === "/demo"}>Demo</a>
    </div>

    <div class="nav-center">
        <a class="brand" href="{base}/">
            <code>@novacbn/svelte-image-crop</code>
        </a>
    </div>

    <div class="nav-right">
        <a
            href="https://github.com/novacbn/svelte-image-crop"
            target="_blank"
            rel="noopener noreferrer"
        >
            GitHub
        </a>
    </div>
</nav>

<hr />

<div class="container">
    <slot />
</div>

<style>
    /**
     * NOTE: We need to reset Chota's `.tag` styles so
     * as not to override PrismJS's syntax highlighting
     */

    :global(.tag) {
        display: unset;
        border: unset;
        text-transform: unset;
        padding: unset;
        line-height: unset;
        letter-spacing: unset;
    }

</style>
