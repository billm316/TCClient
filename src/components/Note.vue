<template >
    <div class="note">
        {{note.note_ID}} {{note.author}} {{note.noteDate}} <br>
        Subject: {{note.subject}} <br>
        {{note.note}}
    </div>
</template>

<script>
    export default {
        props: [
            'note'
        ],
        created: function() {
        }
    }
</script>

<style>
    .note 
    {
        margin: 5px;
        padding: 5px;
        background-color: white
    }
</style>

