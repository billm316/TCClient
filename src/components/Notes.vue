<template>
    <div class="notes">
        <ul>
            <li v-for="n in notes" v-bind:key="n.note_ID">
                <Note v-bind:note="n"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import Note from '@/components/Note'

    export default {
        props: [
            'notes'
        ],
        components: {
            Note
        },
        created: function() {
        }
    }
</script>

<style>
    .notes {
        padding: 5px
    }
</style>

