import{S as n,i as s,s as t,l as a,f as e,J as o,d as p,K as c}from"../chunks/vendor-503fed67.js";function l(n){let s,t;return{c(){t=a(),this.h()},l(n){t=a(),this.h()},h(){s=new c(t)},m(n,a){s.m('<h1><code>svelte-image-crop</code></h1>\n<h2>Description</h2>\n<p>Simple click\'n\'drag Image Cropping using Web APIs</p>\n<h2>Demo</h2>\n<p>See a demo at <a href="https://novacbn.github.io/svelte-image-crop/demo">novacbn.github.io/svelte-image-crop/demo</a></p>\n<h2>Usage</h2>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n    <span class="token comment">// Here we\'re setting a default image path that we can let the end-user start with</span>\n    <span class="token keyword">const</span> <span class="token constant">DEFAULT_IMAGE_SRC</span> <span class="token operator">=</span> <span class="token string">"/assets/images/jung-ho-park-sYiKL1JEOEk-unsplash.jpg"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n    <span class="token keyword">import</span> <span class="token punctuation">{</span><span class="token constant">CROP_STATE</span><span class="token punctuation">,</span> ImageCrop<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@novacbn/svelte-image-crop"</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// `blob` — will carry the current instance of our starting image, with every committed crop</span>\n    <span class="token comment">// `image_crop` — will be our binding to the current `ImageCrop` Component instance</span>\n    <span class="token keyword">let</span> blob<span class="token punctuation">;</span>\n    <span class="token keyword">let</span> image_crop<span class="token punctuation">;</span>\n\n    <span class="token comment">// `src` — needs to start with our default image path, later we use it as comparison to</span>\n    <span class="token comment">// control allowing the end-user to reset all their committed crops</span>\n    <span class="token comment">//</span>\n    <span class="token comment">// `state` — we can\'t directly modify the internal `ImageCrop` state, but we can recieve</span>\n    <span class="token comment">// its current state via eventing to control allowing the end-user to reset their</span>\n    <span class="token comment">// current crop selection / commit the current selection</span>\n    <span class="token keyword">let</span> src <span class="token operator">=</span> <span class="token constant">DEFAULT_IMAGE_SRC</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> state <span class="token operator">=</span> <span class="token constant">CROP_STATE</span><span class="token punctuation">.</span>default<span class="token punctuation">;</span>\n\n    <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">on_commit_click</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// Using our `ImageCrop` Component binding, we can access its `get_cropped_blob`. And use</span>\n        <span class="token comment">// that to cache the current crop selection as a new `Blob` with image data. Then tell the</span>\n        <span class="token comment">// Browser to create a disposable URL pointing to the blob to display</span>\n        blob <span class="token operator">=</span> <span class="token keyword">await</span> image_crop<span class="token punctuation">.</span><span class="token function">get_cropped_blob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        src <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        image_crop<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> <span class="token function">on_clear_click</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// Next, we can use the `reset` method to remove the current crop selection</span>\n\n        image_crop<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> <span class="token function">on_reset_click</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// Finally we can reset everything to defaults to start over with the original image. And</span>\n        <span class="token comment">// if the currently loaded image doesn\'t match our default, we need to destroy the disposable</span>\n        <span class="token comment">// URL to prevent memory leaks</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>src <span class="token operator">!==</span> <span class="token constant">DEFAULT_IMAGE_SRC</span><span class="token punctuation">)</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>src<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        blob <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n        src <span class="token operator">=</span> <span class="token constant">DEFAULT_IMAGE_SRC</span><span class="token punctuation">;</span>\n\n        image_crop<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> <span class="token function">on_state</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// For disabling our controls, we need to locally cache any changes to the `ImageCrop`\'s state</span>\n        state <span class="token operator">=</span> event<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!--\n    NOTE: We need to bind to the `ImageCrop` instance to access its methods\n--\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImageCrop</span> <span class="token attr-name"><span class="token namespace">bind:</span>this</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{image_crop}</span> <span class="token attr-name">{src}</span> <span class="token attr-name"><span class="token namespace">on:</span>state</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{on_state}</span> <span class="token punctuation">/></span></span>\n\n&lt;button\n    disabled={src === DEFAULT_IMAGE_SRC}\n    on:click={on_reset_click}\n>\n    reset\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n\n&lt;button\n    disabled={state === CROP_STATE.default}\n    on:click={on_clear_click}\n>\n    clear\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n\n&lt;button\n    disabled={state === CROP_STATE.default}\n    on:click={on_commit_click}\n>\n    commit\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n</code></pre>\n<h2>Controls</h2>\n<ul>\n<li><code>mouse drag</code> / <code>touch drag</code> — Creates a crop selection</li>\n<li><code>mouse click</code> / <code>touch tap</code> — Resets crop selection</li>\n</ul>\n<h2>Developer</h2>\n<h3>Installation</h3>\n<p>Open your terminal and install via <code>npm</code>:</p>\n<pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> github:novacbn/svelte-image-crop<span class="token comment">#0.0.1</span>\n</code></pre>\n<p>Install current in-development code:</p>\n<pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> github:novacbn/svelte-image-crop\n</code></pre>\n<h3>Properties</h3>\n<table>\n<thead>\n<tr>\n<th>Signature</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>src: string</code></td>\n<td><code>&quot;&quot;</code></td>\n<td>Sets the image to be loaded into the crop editor</td>\n</tr>\n</tbody>\n</table>\n<h3>Methods</h3>\n<table>\n<thead>\n<tr>\n<th>Signature</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>get_cropped_image(): Blob</code></td>\n<td>Returns a copy of the currently loaded image as a <code>Blob</code>, but cropped to current selection</td>\n</tr>\n<tr>\n<td><code>is_cropping(): boolean</code></td>\n<td>Returns if there is an active crop selection</td>\n</tr>\n<tr>\n<td><code>reset(): void</code></td>\n<td>Removes the the currently active crop selection</td>\n</tr>\n</tbody>\n</table>\n<h3>Events</h3>\n<table>\n<thead>\n<tr>\n<th>Signature</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>state: CustomEvent&lt;{state: CROP_STATE}&gt;</code></td>\n<td>Dispatches whenever the current crop editor state changes</td>\n</tr>\n</tbody>\n</table>\n<h3>CSS Variables</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>--image-crop-cursor-dragging</code></td>\n<td><code>crosshair</code></td>\n<td>Represents the cursor used when the end-user is currently performing selection drag</td>\n</tr>\n<tr>\n<td><code>--image-crop-cursor-hover</code></td>\n<td><code>se-resize</code></td>\n<td>Represents the cursor used when the end-user is hovering with no drag</td>\n</tr>\n<tr>\n<td><code>--image-crop-background-filter-cropping</code></td>\n<td><code>blur(1px) brightness(65%)</code></td>\n<td>Represents the filter used on the background image when there is a crop selection</td>\n</tr>\n<tr>\n<td><code>--image-crop-selection-border</code></td>\n<td><code>1px dashed whitesmoke</code></td>\n<td>Represents the border used on the visualization of the current crop selection</td>\n</tr>\n<tr>\n<td><code>--image-crop-selection-color</code></td>\n<td><code>whitesmoke</code></td>\n<td>Represents the color used on the visualization of the current crop selection</td>\n</tr>\n<tr>\n<td><code>--image-crop-selection-filter</code></td>\n<td><code>drop-shadow(0px 0px 6px black)</code></td>\n<td>Represents the filter used on the visualization of the current crop selection</td>\n</tr>\n<tr>\n<td><code>--image-crop-selection-font-family</code></td>\n<td><code>inherit</code></td>\n<td>Represents the font family used on the visualization of the current crop selection</td>\n</tr>\n<tr>\n<td><code>--image-crop-selection-font-size</code></td>\n<td><code>0.8rem</code></td>\n<td>Represents the font size used on the visualization of the current crop selection</td>\n</tr>\n<tr>\n<td><code>--image-crop-selection-font-weight</code></td>\n<td><code>900</code></td>\n<td>Represents the font weight used on the visualization of the current crop selection</td>\n</tr>\n</tbody>\n</table>\n<h3>API</h3>\n<ul>\n<li>\n<p>Constants</p>\n<ul>\n<li><code>CROP_STATES</code></li>\n</ul>\n</li>\n<li>\n<p>Components</p>\n<ul>\n<li><code>ImageCrop</code></li>\n</ul>\n</li>\n</ul>\n',n,a),e(n,t,a)},p:o,i:o,o:o,d(n){n&&p(t),n&&s.d()}}}export default class extends n{constructor(n){super(),s(this,n,null,l,t,{})}}
