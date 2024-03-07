
import { ships } from "../Ships.js"
import { haulers } from "../Haulers.js"
import { docks } from "../Docks.js"

const mainContainer = document.querySelector("#container")



const applicationHTML = `
<h1>DeShawns Dog Walking</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Ships</h2>
        ${ships()}
    </section>
    <section class="detail--column list details__walkers">
        <h2>Haulers</h2>
        ${haulers()}
    </section>
    <section class="detail--column list details__pets">
        <h2>Docks</h2>
        ${docks()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML

