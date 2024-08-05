<script lang="ts">
import Outline from './Outline.svelte';

export let modules:any = [];

function handleP(data: string) {
    return `<p>${data.replace(/\n/g, '<br>')}</p>`;
}
function handleImg(data: string) {
    return `<div class="img"><img src="${data}" alt="" /></div>`;
}
function handleLeft(data: string){
    return `<div class="left"><img src="${data}" alt="" /></div>`;
}
function handleH2(data: string) {
    return `<h2>${data}</h2>`;
}
function handleList(data: string | string[], type: string) {
    let html = '';
    if (Array.isArray(data)) {
        const ptype = type.slice(0, 2);
        const ctype = type.slice(2);
        for (let i = 0; i < data.length; i++) {
            if (i % 2 === 0) {
                html += `${data[i].split('\n').map((item: string) => `<li>${item}</li>`).join('')}`;
            } else {
                if (data[i].startsWith('/')) {
                    html += '<li class="no-count">' + handleImg(data[i]) + '</li>';
                } else {
                    html += handleList(data[i], ctype);
                }
            }
        }
        return `<${ptype}>${html}</${ptype}>`;
    } else {
        return `<${type}>${data.split('\n').map((item: string) => `<li>${item}</li>`).join('')}</${type}>`;
    }
}

const regex = (content: any) => {
    let html = '';
    for (let i = 0; i < content.type.length; i++) {
        if (content.type[i] === 'p') {
            html += handleP(content.data[i]);
        } else if (content.type[i] === 'i-full') {
            html += handleImg(content.data[i]);
        } else if (content.type[i] === 'h2') {
            html += handleH2(content.data[i]);
        } else if (content.type[i].startsWith('ul') || content.type[i].startsWith('ol')) {
            html += handleList(content.data[i], content.type[i]);
        } else if (content.type[i] === 'left') {
            html += handleLeft(content.data[i]);
        }
    }
    return html;
}
</script>

<div class="reader">
    <Outline/>
    <div class="pane">
        {#if modules.length === 0}
            <h1>No Modules Found</h1>
        {:else}
        {#each modules as module}
            <h1>{module.title}</h1>
            <div class="module">
                <div class="idholder" id={module.id}></div>
                {@html regex(module.content)}
            </div>
        {/each}
        {/if}
    </div>
</div>

<style>
    .reader {
        position: relative;
        display: flex;
        overflow: hidden;
        margin-bottom: 5rem;
        background:#cbced1;
        border: 3px solid var(--Primary);
        border-radius: 1.15rem;
    }
    .pane {
        flex: 1;
        padding: 0 4rem 4rem 4rem;
        min-height: 50rem;
    }
    h1 {
        font-family: 'Open Sans', sans-serif;
        font-size: 2rem;
        font-weight: 600;
        padding: 1.5rem 4.5rem;
        color: var(--Primary);
    }
    .pane h1 {
        margin-top: 4rem;
        background: var(--Primary);
        color: white;
    }
    .idholder {
        position: absolute;
        height: 10rem;
        top: -10rem;
        left: 0;
        right: 0;
    }
</style>