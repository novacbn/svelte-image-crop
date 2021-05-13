<script>
    let _default;
    export let variable;

    export {_default as default};

    let value = _default;

    $: document.body.style.setProperty(variable, value);

</script>

<label>
    <code>{variable}</code>
    <input type="text" bind:value />
</label>
