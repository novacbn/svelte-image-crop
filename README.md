# `svelte-image-crop`

## Description

Simple click'n'drag Image Cropping using Web APIs

## Demo

See a demo at [novacbn.github.io/svelte-image-crop/demo](https://novacbn.github.io/svelte-image-crop/demo)

## Usage

```html
<script context="module">
    // Here we're setting a default image path that we can let the end-user start with
    const DEFAULT_IMAGE_SRC = "/assets/images/jung-ho-park-sYiKL1JEOEk-unsplash.jpg";
</script>

<script>
    import {CROP_STATE, ImageCrop} from "@novacbn/svelte-image-crop";

    // `blob` — will carry the current instance of our starting image, with every committed crop
    // `image_crop` — will be our binding to the current `ImageCrop` Component instance
    let blob;
    let image_crop;

    // `src` — needs to start with our default image path, later we use it as comparison to
    // control allowing the end-user to reset all their committed crops
    //
    // `state` — we can't directly modify the internal `ImageCrop` state, but we can recieve
    // its current state via eventing to control allowing the end-user to reset their
    // current crop selection / commit the current selection
    let src = DEFAULT_IMAGE_SRC;
    let state = CROP_STATE.default;

    async function on_commit_click(event) {
        // Using our `ImageCrop` Component binding, we can access its `get_cropped_blob`. And use
        // that to cache the current crop selection as a new `Blob` with image data. Then tell the
        // Browser to create a disposable URL pointing to the blob to display
        blob = await image_crop.get_cropped_blob();
        src = URL.createObjectURL(blob);

        image_crop.reset();
    }

    function on_clear_click(event) {
        // Next, we can use the `reset` method to remove the current crop selection

        image_crop.reset();
    }

    function on_reset_click(event) {
        // Finally we can reset everything to defaults to start over with the original image. And
        // if the currently loaded image doesn't match our default, we need to destroy the disposable
        // URL to prevent memory leaks
        if (src !== DEFAULT_IMAGE_SRC) URL.revokeObjectURL(src);

        blob = null;
        src = DEFAULT_IMAGE_SRC;

        image_crop.reset();
    }

    function on_state(event) {
        // For disabling our controls, we need to locally cache any changes to the `ImageCrop`'s state
        state = event.detail.state;
    }
</script>

<!--
    NOTE: We need to bind to the `ImageCrop` instance to access its methods
-->
<ImageCrop bind:this={image_crop} {src} on:state={on_state} />

<button
    disabled={src === DEFAULT_IMAGE_SRC}
    on:click={on_reset_click}
>
    reset
</button>

<button
    disabled={state === CROP_STATE.default}
    on:click={on_clear_click}
>
    clear
</button>

<button
    disabled={state === CROP_STATE.default}
    on:click={on_commit_click}
>
    commit
</button>
```

## Controls

-   `mouse drag` / `touch drag` — Creates a crop selection
-   `mouse click` / `touch tap` — Resets crop selection

## Developer

### Installation

Open your terminal and install via `npm`:

```bash
npm install github:novacbn/svelte-image-crop#0.0.1
```

Install current in-development code:

```bash
npm install github:novacbn/svelte-image-crop
```

### Properties

| Signature     | Default | Description                                      |
| ------------- | ------- | ------------------------------------------------ |
| `src: string` | `""`    | Sets the image to be loaded into the crop editor |

### Methods

| Signature                   | Description                                                                                |
| --------------------------- | ------------------------------------------------------------------------------------------ |
| `get_cropped_image(): Blob` | Returns a copy of the currently loaded image as a `Blob`, but cropped to current selection |
| `is_cropping(): boolean`    | Returns if there is an active crop selection                                               |
| `reset(): void`             | Removes the the currently active crop selection                                            |

### Events

| Signature                                 | Description                                               |
| ----------------------------------------- | --------------------------------------------------------- |
| `state: CustomEvent<{state: CROP_STATE}>` | Dispatches whenever the current crop editor state changes |

### CSS Variables

| Name                                      | Default                          | Description                                                                         |
| ----------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------- |
| `--image-crop-cursor-dragging`            | `crosshair`                      | Represents the cursor used when the end-user is currently performing selection drag |
| `--image-crop-cursor-hover`               | `se-resize`                      | Represents the cursor used when the end-user is hovering with no drag               |
| `--image-crop-background-filter-cropping` | `blur(1px) brightness(65%)`      | Represents the filter used on the background image when there is a crop selection   |
| `--image-crop-selection-border`           | `6px dashed whitesmoke`          | Represents the border used on the visualization of the current crop selection       |
| `--image-crop-selection-color`            | `whitesmoke`                     | Represents the color used on the visualization of the current crop selection        |
| `--image-crop-selection-filter`           | `drop-shadow(0px 0px 6px black)` | Represents the filter used on the visualization of the current crop selection       |
| `--image-crop-selection-font-family`      | `inherit`                        | Represents the font family used on the visualization of the current crop selection  |
| `--image-crop-selection-font-size`        | `1rem`                           | Represents the font size used on the visualization of the current crop selection    |
| `--image-crop-selection-font-weight`      | `900`                            | Represents the font weight used on the visualization of the current crop selection  |

### API

-   Constants

    -   `CROP_STATES`

-   Components

    -   `ImageCrop`
