import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

function createFilters(imageLab, filters) {
    const buttons = {
        template: `
        <div class="mbr-section-btn mt-3 mb-0" style="text-align: center;">
            <a v-for="(filter, index) in filters" :id="'btn' + filter.label.replace(/\\s+/g, '')" @click="btnClick(filter)" class="btn btn-primary display-7" :class="{'filtro': filter.label === 'Brilho'}">
                {{ filter.label }}
            </a>
        </div>
        `,
        data: () => {
            return {
                filters: []
            }
        },
        mounted() {
            console.log('filters', filters);
            this.filters = filters
        },
        methods: {
            btnClick(filter) {
                console.log('filter', filter);
                filter.method(imageLab)
            }
        }
    }

    createApp(buttons).mount('#buttons')
}

export default createFilters